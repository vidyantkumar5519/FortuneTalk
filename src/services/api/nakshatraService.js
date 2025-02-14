import axios from 'axios'
import EnvironmentService from '../environmentService'

class NakshatraService {
  // API Configuration
  static API_CONFIG = {
    BASE_URL: 'https://json.astrologyapi.com/v1/daily_nakshatra_prediction',
    REQUIRED_VARS: [
      'REACT_APP_ASTROLOGY_USER_ID', 
      'REACT_APP_ASTROLOGY_API_KEY'
    ],
    TIMEOUT: 15000, // 15 seconds
    FALLBACK_LOCATION: {
      lat: 19.132,
      lon: 72.342,
      tzone: 5.5
    }
  }

  /**
   * Fetch Nakshatra prediction
   * @param {Object} params - Prediction parameters
   * @returns {Promise<Object>} Transformed Nakshatra prediction data
   */
  static async fetchPrediction(params = {}) {
    try {
      // Load configuration with fallback
      const config = EnvironmentService.loadConfig(this.API_CONFIG.REQUIRED_VARS)

      // Prepare default parameters
      const defaultParams = {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        hour: new Date().getHours(),
        min: new Date().getMinutes(),
        ...this.API_CONFIG.FALLBACK_LOCATION
      }

      // Merge default and provided parameters
      const requestParams = { ...defaultParams, ...params }

      // Prepare authentication
      const auth = `Basic ${btoa(`${config.astrologyUserId}:${config.astrologyApiKey}`)}`

      // Make API request
      const response = await axios.post(
        this.API_CONFIG.BASE_URL,
        requestParams,
        {
          headers: {
            'Authorization': auth,
            'Content-Type': 'application/json',
            'Accept-Language': 'en'
          },
          timeout: this.API_CONFIG.TIMEOUT
        }
      )

      // Validate response
      if (!response.data) {
        throw new Error('No data received from Astrology API')
      }

      // Transform API response
      return this.transformPrediction(response.data)
    } catch (error) {
      // Standardized error handling
      this.handleError(error)
    }
  }

  /**
   * Transform raw API response to standardized format
   * @param {Object} rawData - Raw API response
   * @returns {Object} Transformed prediction data
   */
  static transformPrediction(rawData) {
    return {
      id: Date.now(),
      date: rawData.prediction_date || new Date().toLocaleDateString(),
      icon: 'FaMoon',
      color: 'bg-purple-100 text-purple-800',
      description: `Nakshatra Insights for ${rawData.birth_moon_nakshatra || 'Unknown'}`,
      details: [
        { 
          label: 'Birth Moon Sign', 
          value: rawData.birth_moon_sign || 'Not Available', 
          icon: 'FaChartPie' 
        },
        { 
          label: 'Nakshatra', 
          value: rawData.birth_moon_nakshatra || 'Not Available', 
          icon: 'FaMoon' 
        }
      ],
      prediction: rawData.prediction || {},
      advice: this.generateAdvice(rawData)
    }
  }

  /**
   * Generate personalized advice based on prediction
   * @param {Object} rawData - Raw prediction data
   * @returns {string} Advice message
   */
  static generateAdvice(rawData) {
    const predictions = rawData.prediction || {}
    const adviceComponents = [
      predictions.health && 'Focus on your well-being.',
      predictions.profession && 'Stay motivated in your professional journey.',
      predictions.personal_life && 'Nurture your personal relationships.',
      'Embrace the day with positivity and mindfulness.'
    ]

    return adviceComponents.filter(Boolean).join(' ')
  }

  /**
   * Standardized error handling
   * @param {Error} error - Caught error
   * @throws {Error} Processed error
   */
  static handleError(error) {
    const errorDetails = {
      message: error.response?.data?.message || error.message,
      status: error.response?.status,
      type: error.response ? 'API_ERROR' : 'NETWORK_ERROR',
      isConfigurationError: !EnvironmentService.isDevelopment()
    }

    console.error('Nakshatra Prediction Error:', errorDetails)
    
    // In production, throw error. In development, log and continue
    if (errorDetails.isConfigurationError) {
      throw errorDetails
    } else {
      console.warn('Continuing in development mode with fallback credentials')
    }
  }
}

export default NakshatraService
