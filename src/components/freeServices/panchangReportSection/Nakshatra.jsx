import React, { useState, useEffect, useCallback } from 'react'
import * as Icons from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import NakshatraService from '../../../services/api/nakshatraService'

// Default Nakshatra Data
const DEFAULT_NAKSHATRA_DATA = {
  id: Date.now(),
  date: new Date().toLocaleDateString(),
  icon: 'FaMoon',
  color: 'bg-purple-100 text-purple-800',
  description: 'Nakshatra Insights',
  details: [
    { 
      label: 'Birth Moon Sign', 
      value: 'Not Available', 
      icon: 'FaChartPie' 
    },
    { 
      label: 'Nakshatra', 
      value: 'Not Available', 
      icon: 'FaMoon' 
    }
  ],
  prediction: {},
  advice: 'Stay positive and embrace the day\'s opportunities.'
}

// Prediction Categories Configuration
const PREDICTION_CATEGORIES = [
  {
    key: 'health',
    icon: 'FaHeartbeat',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    title: 'Health Prediction',
    description: 'Insights into your physical well-being'
  },
  {
    key: 'emotions',
    icon: 'FaHeart',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    title: 'Emotional Insights',
    description: 'Understanding your emotional landscape'
  },
  {
    key: 'profession',
    icon: 'FaBriefcase',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    title: 'Professional Outlook',
    description: 'Career and work-related guidance'
  },
  {
    key: 'luck',
    icon: 'FaStar',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    title: 'Luck and Opportunities',
    description: 'Potential fortunate moments'
  },
  {
    key: 'personal_life',
    icon: 'FaHome',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    title: 'Personal Life',
    description: 'Insights into personal relationships'
  },
  {
    key: 'travel',
    icon: 'FaRoad',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    title: 'Travel Insights',
    description: 'Journey and exploration recommendations'
  }
]

const Nakshatra = () => {
  // State Management with Default Data
  const [nakshatraData, setNakshatraData] = useState(DEFAULT_NAKSHATRA_DATA)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [apiParams, setApiParams] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    lat: 19.132,
    lon: 72.342,
    tzone: 5.5
  })

  // Memoized Prediction Fetcher
  const fetchNakshatraPrediction = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch prediction using service
      const predictionData = await NakshatraService.fetchPrediction(apiParams)
      
      // Merge with default data to ensure all properties exist
      setNakshatraData({
        ...DEFAULT_NAKSHATRA_DATA,
        ...predictionData
      })
    } catch (fetchError) {
      console.error('Nakshatra Prediction Fetch Error:', fetchError)
      setError(fetchError)
      
      // Ensure we always have some data to render
      setNakshatraData(DEFAULT_NAKSHATRA_DATA)
    } finally {
      setLoading(false)
    }
  }, [apiParams])

  // Fetch data on component mount and when parameters change
  useEffect(() => {
    fetchNakshatraPrediction()
  }, [fetchNakshatraPrediction])

  // Handle date change
  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value)
    setApiParams(prev => ({
      ...prev,
      day: selectedDate.getDate(),
      month: selectedDate.getMonth() + 1,
      year: selectedDate.getFullYear()
    }))
  }

  // Render Loading State
  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              repeat: Infinity, 
              duration: 1, 
              ease: "linear" 
            }}
          >
            <Icons.FaSpinner className='text-6xl text-indigo-600 mx-auto mb-4' />
          </motion.div>
          <p className='text-xl text-gray-700'>Loading Celestial Insights...</p>
        </div>
      </div>
    )
  }

  // Render Error State
  if (error) {
    return (
      <div className='min-h-screen bg-red-50 flex items-center justify-center'>
        <div className='text-center max-w-md p-8 bg-white rounded-2xl shadow-2xl'>
          <Icons.FaExclamationTriangle className='text-6xl text-red-600 mx-auto mb-6' />
          <h2 className='text-2xl font-bold text-red-800 mb-4'>
            Prediction Retrieval Error
          </h2>
          <p className='text-red-700 mb-6'>
            {error.message || 'Unable to fetch Nakshatra predictions'}
          </p>
          <div className='flex justify-center space-x-4'>
            <button 
              onClick={fetchNakshatraPrediction}
              className='bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition flex items-center'
            >
              <Icons.FaSync className='mr-2' /> Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Render Prediction Content
  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden'>
        {/* Header Section */}
        <div className={`${nakshatraData.color} p-6 flex items-center justify-between`}>
          <div className='flex items-center space-x-4'>
            {React.createElement(Icons[nakshatraData.icon], { 
              className: 'text-4xl mr-4' 
            })}
            <div>
              <h2 className='text-2xl font-bold'>Nakshatra Insights</h2>
              <p className='text-sm opacity-80'>Your celestial guidance</p>
            </div>
          </div>

          {/* Date Selector */}
          {/* <input 
            type='date'
            onChange={handleDateChange}
            className='bg-white/20 text-purple-800 rounded-full px-4 py-2 border border-purple-200 focus:outline-none'
          /> */}
        </div>

        {/* Main Content */}
        <AnimatePresence mode='wait'>
          <motion.div 
            key={nakshatraData.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='p-8 space-y-8'
          >
            {/* Birth Details */}
            <div className='bg-gray-100 rounded-2xl p-6 border-l-4 border-indigo-500'>
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='text-lg font-semibold text-gray-800 flex items-center'>
                    <Icons.FaChartPie className='mr-2 text-indigo-600' />
                    Birth Moon Sign: 
                    <span className='ml-2 text-indigo-700'>
                      {nakshatraData.details[0].value}
                    </span>
                  </h3>
                  <h4 className='text-md text-gray-600 flex items-center mt-2'>
                    <Icons.FaMoon className='mr-2 text-purple-600' />
                    Nakshatra: 
                    <span className='ml-2 text-purple-700'>
                      {nakshatraData.details[1].value}
                    </span>
                  </h4>
                </div>
                <p className='text-sm text-gray-500'>
                  Prediction Date: {nakshatraData.date}
                </p>
              </div>
            </div>

            {/* Prediction Categories */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {PREDICTION_CATEGORIES.map((category) => {
                const prediction = nakshatraData.prediction?.[category.key]
                
                return prediction ? (
                  <motion.div 
                    key={category.key}
                    whileHover={{ scale: 1.05 }}
                    className={`
                      ${category.bgColor} ${category.borderColor}
                      border rounded-2xl p-5 
                      transform transition duration-300 
                      hover:shadow-lg
                      flex flex-col
                    `}
                  >
                    <div className='flex items-center mb-4'>
                      {React.createElement(Icons[category.icon], { 
                        className: `mr-4 text-3xl ${category.color}` 
                      })}
                      <div>
                        <h4 className={`text-xl font-bold ${category.color}`}>
                          {category.title}
                        </h4>
                        <p className='text-xs text-gray-500'>
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <p className='text-sm text-gray-700 flex-grow'>
                      {prediction}
                    </p>
                  </motion.div>
                ) : null
              })}
            </div>

            {/* Advice Section */}
            <div className='bg-blue-50 border-l-4 border-blue-500 p-6 rounded-2xl'>
              <div className='flex items-center mb-4'>
                <Icons.FaLightbulb className='text-yellow-500 mr-4 text-2xl' />
                <h3 className='text-lg font-semibold text-gray-800'>
                  Daily Guidance
                </h3>
              </div>
              <p className='text-gray-700'>
                {nakshatraData.advice}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  )
}

export default Nakshatra