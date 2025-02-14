const API_BASE_URL = "https://json.astrologyapi.com/v1";
const USER_ID = "636470";
const API_KEY = "f18878ae6d3e7627238b03d4d53999548576e4c1";

const getAuthHeader = () => {
    const authString = `${USER_ID}:${API_KEY}`;
    console.log('Auth String:', authString);
    const encodedAuth = btoa(authString);
    console.log('Encoded Auth:', encodedAuth);
    return `Basic ${encodedAuth}`;
};

// Validate birth data before making API call
const validateBirthData = (birthData) => {
    const { day, month, year, hour, min, lat, lon, tzone } = birthData;

    // Check if all required fields are present and have valid values
    if (!day || !month || !year || hour === undefined || min === undefined || !lat || !lon || !tzone) {
        throw new Error('Missing required birth data fields');
    }

    // Validate date values
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
        throw new Error('Invalid date values');
    }

    // Validate time values
    if (hour < 0 || hour > 23 || min < 0 || min > 59) {
        throw new Error('Invalid time values');
    }

    // Validate coordinates
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
        throw new Error('Invalid coordinates');
    }

    // Validate timezone
    if (tzone < -12 || tzone > 14) {
        throw new Error('Invalid timezone');
    }

    return true;
};

const handleApiError = (response, errorData) => {
    // Log detailed error information for developers
    console.error('API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        errorData
    });

    // User-friendly error messages
    const userMessages = {
        401: 'Unable to process your request at the moment. Please try again later.',
        403: 'This service is currently unavailable. Please try again later.',
        429: 'Our services are experiencing high traffic. Please try again in a few minutes.',
        400: 'We couldn\'t process your request. Please check your information and try again.'
    };

    // Throw a custom error object that includes both user and developer messages
    const errorMessage = userMessages[response.status] || 'An unexpected error occurred. Please try again later.';
    const error = new Error(errorMessage);
    error.technical = {
        status: response.status,
        message: errorData?.message || response.statusText
    };
    throw error;
};

export const fetchBirthDetails = async (birthData) => {
    try {
        // Validate birth data
        validateBirthData(birthData);

        console.log('Sending request with data:', birthData);

        const response = await fetch(`${API_BASE_URL}/birth_details`, {
            method: "POST",
            headers: {
                "Authorization": getAuthHeader(),
                "Content-Type": "application/json",
                "Accept-Language": "en"
            },
            body: JSON.stringify(birthData)
        });

        console.log('Response headers:', {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries([...response.headers])
        });

        let responseData;
        const responseText = await response.text();
        console.log('Raw response:', responseText);

        try {
            responseData = JSON.parse(responseText);
        } catch (e) {
            console.error('Failed to parse response as JSON:', e);
            responseData = null;
        }

        if (!response.ok) {
            handleApiError(response, responseData);
        }

        return responseData;
    } catch (error) {
        console.error('Error fetching birth details:', error);
        // Provide more user-friendly error messages
        if (error.message.includes('Authentication failed')) {
            throw new Error('Unable to connect to astrology service. Please try again later.');
        }
        throw new Error(error.message || 'Failed to fetch birth details. Please try again.');
    }
};

export const prepareBirthData = (formData) => {
    try {
        // Parse date
        const [year, month, day] = formData.birthDate.split('-').map(Number);
        if (!year || !month || !day) {
            throw new Error('Invalid birth date format');
        }

        // Parse time
        const [hour, minute] = formData.birthTime.split(':').map(Number);
        if (hour === undefined || minute === undefined) {
            throw new Error('Invalid birth time format');
        }

        // TODO: In future, integrate with a geocoding service to get exact coordinates
        // For now, using default values for India
        const birthData = {
            day,
            month,
            year,
            hour,
            min: minute,
            lat: 19.132,
            lon: 72.342,
            tzone: 5.5,
        };

        // Validate the prepared data
        validateBirthData(birthData);

        return birthData;
    } catch (error) {
        throw new Error(`Failed to prepare birth data: ${error.message}`);
    }
};

// Utility function to format birth details for display
export const formatBirthDetails = (birthDetails) => {
    if (!birthDetails) return null;

    return {
        sunrise: birthDetails.sunrise || '',
        sunset: birthDetails.sunset || '',
        ayanamsha: typeof birthDetails.ayanamsha === 'number' ? birthDetails.ayanamsha.toFixed(2) : '',
        latitude: typeof birthDetails.latitude === 'number' ? birthDetails.latitude.toFixed(4) : '',
        longitude: typeof birthDetails.longitude === 'number' ? birthDetails.longitude.toFixed(4) : '',
        timezone: typeof birthDetails.timezone === 'number' ? birthDetails.timezone : ''
    };
};

export const fetchMatchingDetails = async (maleData, femaleData) => {
    try {
        // Prepare the request data
        const requestData = {
            m_day: maleData.day,
            m_month: maleData.month,
            m_year: maleData.year,
            m_hour: maleData.hour,
            m_min: maleData.min,
            m_lat: maleData.lat,
            m_lon: maleData.lon,
            m_tzone: maleData.tzone,
            f_day: femaleData.day,
            f_month: femaleData.month,
            f_year: femaleData.year,
            f_hour: femaleData.hour,
            f_min: femaleData.min,
            f_lat: femaleData.lat,
            f_lon: femaleData.lon,
            f_tzone: femaleData.tzone,
        };

        console.log('Sending matching request with data:', requestData);

        const response = await fetch(`${API_BASE_URL}/match_birth_details`, {
            method: "POST",
            headers: {
                "Authorization": getAuthHeader(),
                "Content-Type": "application/json",
                "Accept-Language": "en"
            },
            body: JSON.stringify(requestData)
        });

        const responseText = await response.text();
        console.log('Raw response:', responseText);

        let responseData;
        try {
            responseData = JSON.parse(responseText);
        } catch (e) {
            console.error('Failed to parse response as JSON:', e);
            throw new Error('Invalid response from server');
        }

        if (!response.ok) {
            handleApiError(response, responseData);
        }

        return responseData;
    } catch (error) {
        console.error('Error fetching matching details:', error);
        throw new Error(error.message || 'Failed to fetch matching details. Please try again.');
    }
};

// Helper function to prepare birth data for matching
export const prepareMatchingData = (formData, gender) => {
    try {
        // Parse date
        const [year, month, day] = formData.birthDate.split('-').map(Number);
        if (!year || !month || !day) {
            throw new Error(`Invalid birth date format for ${gender}`);
        }

        // Parse time
        const [hour, minute] = formData.birthTime.split(':').map(Number);
        if (hour === undefined || minute === undefined) {
            throw new Error(`Invalid birth time format for ${gender}`);
        }

        const birthData = {
            day,
            month,
            year,
            hour,
            min: minute,
            lat: 19.132, // Default coordinates (can be updated with actual values)
            lon: 72.342,
            tzone: 5.5,
            gender
        };

        validateBirthData(birthData);
        return birthData;
    } catch (error) {
        throw new Error(`Failed to prepare ${gender}'s birth data: ${error.message}`);
    }
};
