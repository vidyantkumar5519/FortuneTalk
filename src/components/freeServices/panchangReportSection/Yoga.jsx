import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  FaAsterisk,
  FaExclamationTriangle,
  FaSpinner,
  FaStar,
  FaCalendarAlt
} from 'react-icons/fa'

// API Configuration
const API_CONFIG = {
  USER_ID: '636470',
  API_KEY: 'f18878ae6d3e7627238b03d4d53999548576e4c1',
  BASE_URL: 'https://json.astrologyapi.com/v1/varshaphal_yoga',
  LANGUAGE: 'en'
}

// Mock Yoga Data Generator with More Comprehensive Data
const generateMockYogaData = (currentDate) => {
  const yogaTypes = [
    {
      yog_name: 'Gajakesari Yoga',
      is_yog_happening: Math.random() > 0.5,
      description: 'A powerful yoga formed by the relationship between Moon and Jupiter',
      planets: [['Moon', 'Jupiter']],
      impact: 'Brings intelligence, wealth, and success in endeavors'
    },
    {
      yog_name: 'Chandra Mangala Yoga',
      is_yog_happening: Math.random() > 0.5,
      description: 'Yoga formed by the combination of Moon and Mars',
      planets: [['Moon', 'Mars']],
      impact: 'Enhances emotional strength and determination'
    },
    {
      yog_name: 'Ravi Yoga',
      is_yog_happening: Math.random() > 0.5,
      description: 'Yoga associated with the Sun\'s influence',
      planets: [['Sun']],
      impact: 'Promotes leadership, confidence, and personal power'
    },
    {
      yog_name: 'Budhaditya Yoga',
      is_yog_happening: Math.random() > 0.5,
      description: 'Combination of Mercury and Sun',
      planets: [['Mercury', 'Sun']],
      impact: 'Enhances communication skills and intellectual abilities'
    }
  ]

  return yogaTypes.map(yoga => ({
    ...yoga,
    status: yoga.is_yog_happening ? 'Happening' : 'NotHappening'
  }))
}

// Yoga Type Color and Icon Mapping
const YOGA_TYPE_STYLING = {
  'Happening': { 
    color: 'bg-green-100 border-green-300', 
    textColor: 'text-green-800',
    description: 'Active Yoga',
    impact: 'Positive energy and favorable circumstances.'
  },
  'NotHappening': { 
    color: 'bg-gray-100 border-gray-300', 
    textColor: 'text-gray-800',
    description: 'Inactive Yoga',
    impact: 'Neutral or less active energy period.'
  }
}

const Yoga = ({ 
  panchangData, 
  selectedLocation = { latitude: 19.076, longitude: 72.877 }, 
  currentDate = new Date() 
}) => {
  const [yogaData, setYogaData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [debugInfo, setDebugInfo] = useState(null)

  useEffect(() => {
    const fetchYogaData = async () => {
      // Calculate Varshaphal Year (Vedic Solar Year)
      const vedaYear = currentDate.getMonth() >= 3 ? 
        currentDate.getFullYear() : 
        currentDate.getFullYear() - 1

      const data = {
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
        hour: currentDate.getHours(),
        min: currentDate.getMinutes(),
        lat: selectedLocation.latitude,
        lon: selectedLocation.longitude,
        tzone: 5.5,
        varshaphal_year: vedaYear  // Add Varshaphal Year
      }

      const auth = `Basic ${btoa(`${API_CONFIG.USER_ID}:${API_CONFIG.API_KEY}`)}`

      try {
        // Log detailed debug information
        setDebugInfo({
          requestData: data,
          apiUrl: API_CONFIG.BASE_URL,
          timestamp: new Date().toISOString()
        })

        console.log('Varshaphal Yoga API Request Details:', {
          url: API_CONFIG.BASE_URL,
          data,
          headers: {
            'Authorization': 'Basic [REDACTED]',
            'Content-Type': 'application/json',
            'Accept-Language': API_CONFIG.LANGUAGE
          }
        })

        try {
          const response = await axios.post(
            API_CONFIG.BASE_URL,
            data,
            {
              headers: {
                'Authorization': auth,
                'Content-Type': 'application/json',
                'Accept-Language': API_CONFIG.LANGUAGE
              },
              timeout: 15000
            }
          )

          console.log('Full Varshaphal Yoga API Response:', response)

          if (response.data && Array.isArray(response.data)) {
            // Process and filter yoga data
            const processedYogaData = response.data.map(yoga => ({
              ...yoga,
              status: yoga.is_yog_happening ? 'Happening' : 'NotHappening'
            }))

            setYogaData(processedYogaData)
            setDebugInfo(prev => ({
              ...prev,
              responseData: processedYogaData,
              dataReceived: true
            }))
            setLoading(false)
          } else {
            throw new Error('Invalid Yoga data structure')
          }
        } catch (apiError) {
          // If API call fails, generate mock data
          console.warn('API request failed, falling back to mock data:', apiError)
          
          const mockData = generateMockYogaData(currentDate)
          setYogaData(mockData)
          
          setDebugInfo(prev => ({
            ...prev,
            apiError: {
              message: apiError.message,
              status: apiError.response?.status,
              errorResponse: apiError.response?.data,
              fallbackUsed: true
            }
          }))
          
          setError({
            message: 'Unable to retrieve Yoga data. Using mock data.',
            details: apiError.response?.data || apiError.message
          })
          
          setLoading(false)
        }
      } catch (err) {
        console.error('Varshaphal Yoga API Error:', err)
        
        setDebugInfo(prev => ({
          ...prev,
          errorDetails: {
            message: err.message,
            code: err.response?.status,
            responseData: err.response?.data
          }
        }))

        // Generate mock data on any error
        const mockData = generateMockYogaData(currentDate)
        setYogaData(mockData)

        setError({
          message: 'Unable to retrieve Yoga data. Using mock data.',
          details: err.response?.data || err.message
        })
        setLoading(false)
      }
    }

    // Only fetch if panchangData is not available
    if (!panchangData) {
      fetchYogaData()
    } else {
      setLoading(false)
    }
  }, [panchangData, selectedLocation, currentDate])

  if (loading) {
    return (
      <div className='w-full flex justify-center items-center py-12'>
        <FaSpinner className='animate-spin text-4xl text-blue-500' />
        <span className='ml-4 text-gray-600'>Loading Yoga data...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className='w-full bg-red-50 border border-red-200 p-6 rounded-lg'>
        <div className='flex items-center mb-4'>
          <FaExclamationTriangle className='text-4xl text-red-500 mr-4' />
          <div>
            <h3 className='text-xl font-bold text-red-700'>Error Loading Yoga Data</h3>
            <p className='text-red-600'>{error.message}</p>
          </div>
        </div>

        <details className='bg-red-100 p-4 rounded-lg mt-4'>
          <summary className='cursor-pointer text-red-700 font-semibold'>
            View Detailed Error Information
          </summary>
          <pre className='text-xs text-red-800 mt-2 overflow-x-auto'>
            {JSON.stringify(error.details, null, 2)}
          </pre>
        </details>

        {debugInfo && (
          <details className='bg-yellow-50 p-4 rounded-lg mt-4'>
            <summary className='cursor-pointer text-yellow-700 font-semibold'>
              Debug Information
            </summary>
            <pre className='text-xs text-yellow-800 mt-2 overflow-x-auto'>
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </details>
        )}
      </div>
    )
  }

  // Use panchangData if available, otherwise use fetched data
  const dataToRender = panchangData?.yoga || yogaData

  if (!dataToRender || dataToRender.length === 0) {
    return (
      <div className='w-full bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center'>
        <FaExclamationTriangle className='text-4xl text-yellow-500 mx-auto mb-4' />
        <h3 className='text-xl font-bold text-yellow-700'>No Yoga Data Available</h3>
        <p className='text-yellow-600'>Unable to retrieve Yoga information at this time.</p>
        
        {debugInfo && (
          <details className='bg-gray-50 p-4 rounded-lg mt-4 text-left'>
            <summary className='cursor-pointer text-gray-700 font-semibold'>
              Debugging Details
            </summary>
            <pre className='text-xs text-gray-800 mt-2 overflow-x-auto'>
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </details>
        )}
      </div>
    )
  }

  return (
    <div className='w-full space-y-6'>
      <div className='bg-white shadow-lg rounded-2xl overflow-hidden'>
        <div className='bg-gradient-to-r from-purple-500 to-indigo-600 p-4 text-white flex items-center'>
          <FaStar className='mr-3 text-2xl' />
          <h2 className='text-xl font-bold'>Varshaphal Yoga</h2>
        </div>
        <div className='p-4 space-y-3'>
          {dataToRender.map((yoga, index) => {
            const yogaStyle = YOGA_TYPE_STYLING[yoga.status] || YOGA_TYPE_STYLING.NotHappening
            const YogaIcon = yogaStyle.icon || FaAsterisk

            return (
              <div 
                key={index} 
                className={`
                  flex flex-col justify-between items-start 
                  p-4 rounded-lg border 
                  ${yogaStyle.color} ${yogaStyle.textColor}
                  transition-all duration-300 
                  hover:shadow-lg
                `}
              >
                <div className='flex items-center mb-2 w-full'>
                  <YogaIcon className='mr-3 opacity-70' />
                  <h4 className='font-bold text-lg flex-grow'>{yoga.yog_name || yoga.name}</h4>
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-semibold
                    ${yoga.is_yog_happening 
                      ? 'bg-green-200 text-green-800' 
                      : 'bg-gray-200 text-gray-800'
                    }
                  `}>
                    {yoga.is_yog_happening ? 'Active' : 'Inactive'}
                  </span>
                </div>

                <div className='w-full mt-2'>
                  <p className='text-sm opacity-80'>
                    {yogaStyle.description}
                  </p>
                  <p className='text-xs opacity-70 mt-1'>
                    {yogaStyle.impact}
                  </p>
                </div>

                {yoga.planets && yoga.planets.length > 0 && (
                  <div className='mt-2 w-full'>
                    <h5 className='text-sm font-semibold mb-1'>Involved Planets:</h5>
                    <div className='flex flex-wrap gap-2'>
                      {yoga.planets.map((planetPair, pairIndex) => (
                        <span 
                          key={pairIndex} 
                          className='
                            bg-white/20 px-2 py-1 rounded-md 
                            text-xs font-medium
                          '
                        >
                          {Array.isArray(planetPair) 
                            ? planetPair.filter(p => p).join(' - ') 
                            : planetPair}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Yoga