import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaExclamationTriangle, FaSpinner } from 'react-icons/fa'

const Choghadiya = ({ 
  panchangData, 
  selectedLocation = { latitude: 19.076, longitude: 72.877 }, 
  currentDate = new Date() 
}) => {
  const [choghadiyaData, setChoghadiyaData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchChoghadiyaData = async () => {
      const userId = '636470'
      const apiKey = 'f18878ae6d3e7627238b03d4d53999548576e4c1'
      const api = 'chaughadiya_muhurta'
      const language = 'en'

      const data = {
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
        hour: currentDate.getHours(),
        min: currentDate.getMinutes(),
        lat: selectedLocation.latitude,
        lon: selectedLocation.longitude,
        tzone: 5.5,
      }

      const auth = `Basic ${btoa(`${userId}:${apiKey}`)}`

      try {
        const response = await axios.post(
          `https://json.astrologyapi.com/v1/${api}`,
          data,
          {
            headers: {
              'Authorization': auth,
              'Content-Type': 'application/json',
              'Accept-Language': language
            },
            timeout: 15000
          }
        )

        if (response.data?.chaughadiya) {
          setChoghadiyaData(response.data.chaughadiya)
          setLoading(false)
        } else {
          throw new Error('No Choghadiya data received')
        }
      } catch (err) {
        console.error('Choghadiya API Error:', err)
        setError({
          message: err.message,
          details: err.response?.data || 'Unknown error'
        })
        setLoading(false)
      }
    }

    // Only fetch if panchangData is not available
    if (!panchangData) {
      fetchChoghadiyaData()
    } else {
      setLoading(false)
    }
  }, [panchangData, selectedLocation, currentDate])

  const renderMuhurtaColor = (muhurta) => {
    const colorMap = {
      'Labh': '#5DC709',     // Green (Positive)
      'Amrit': '#2972E0',    // Blue (Neutral)
      'Shubh': '#5DC709',    // Green (Positive)
      'Kaal': '#DF5102',     // Red (Negative)
      'Rog': '#DF5102',      // Red (Negative)
      'Udveg': '#2972E0',    // Blue (Neutral)
      'Char': '#2972E0'      // Blue (Neutral)
    }
    return colorMap[muhurta] || '#787878'
  }

  const renderMuhurtaDescription = (muhurta) => {
    const descriptionMap = {
      'Labh': 'Profitable Time',
      'Amrit': 'Auspicious Time',
      'Shubh': 'Favorable Time',
      'Kaal': 'Challenging Time',
      'Rog': 'Potentially Harmful Time',
      'Udveg': 'Unsettled Time',
      'Char': 'Changing Time'
    }
    return descriptionMap[muhurta] || 'Unknown Time'
  }

  if (loading) {
    return (
      <div className='w-full flex justify-center items-center py-12'>
        <FaSpinner className='animate-spin text-4xl text-blue-500' />
        <span className='ml-4 text-gray-600'>Loading Choghadiya data...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className='w-full bg-red-50 border border-red-200 p-6 rounded-lg flex items-center'>
        <FaExclamationTriangle className='text-4xl text-red-500 mr-4' />
        <div>
          <h3 className='text-xl font-bold text-red-700 mb-2'>Error Loading Choghadiya</h3>
          <p className='text-red-600'>{error.message}</p>
          {error.details && (
            <pre className='mt-2 p-2 bg-red-100 rounded text-xs text-red-800'>
              {JSON.stringify(error.details, null, 2)}
            </pre>
          )}
        </div>
      </div>
    )
  }

  // Use panchangData if available, otherwise use fetched data
  const dataToRender = panchangData?.chaughadiya || choghadiyaData

  if (!dataToRender) {
    return (
      <div className='w-full bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center'>
        <FaExclamationTriangle className='text-4xl text-yellow-500 mx-auto mb-4' />
        <h3 className='text-xl font-bold text-yellow-700'>No Choghadiya Data Available</h3>
        <p className='text-yellow-600'>Unable to retrieve Choghadiya information at this time.</p>
      </div>
    )
  }

  return (
    <div className='w-full'>
      <div className="grid grid-cols-3 grid-rows-1 gap-4 w-full lg:w-3/4 mx-auto mb-6">
        <div className='flex items-center gap-2 justify-start'>
          <div className='h-5 lg:h-10 w-5 lg:w-10 rounded-full bg-[#5DC709]'></div>
          <h3 className='text-[#787878]'>Positive</h3>
        </div>
        <div className='flex items-center gap-2 justify-center'>
          <div className='h-5 lg:h-10 w-5 lg:w-10 rounded-full bg-[#2972E0]'></div>
          <h3 className='text-[#787878]'>Neutral</h3>
        </div>
        <div className='flex items-center gap-2 justify-end'>
          <div className='h-5 lg:h-10 w-5 lg:w-10 rounded-full bg-[#DF5102]'></div>
          <h3 className='text-[#787878]'>Negative</h3>
        </div>
      </div>

      <div className='my-6'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Day Choghadiya</h2>
        <table className="table-auto w-full lg:w-3/4 mx-auto border-none bg-white rounded-[10px] shadow-md">
          <tbody className="text-[#747474]">
            {dataToRender.day.map((item, index) => (
              <tr 
                key={index} 
                className="border-b last:border-b-0 hover:bg-gray-50 transition"
                style={{ color: renderMuhurtaColor(item.muhurta) }}
              >
                <td className="py-3 px-10 text-left font-semibold">{item.time}</td>
                <td className="py-3 px-10 text-right">
                  {item.muhurta} - {renderMuhurtaDescription(item.muhurta)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className='text-2xl font-bold my-4 text-center mt-8'>Night Choghadiya</h2>
        <table className="table-auto w-full lg:w-3/4 mx-auto border-none bg-white rounded-[10px] shadow-md">
          <tbody className="text-[#747474]">
            {dataToRender.night.map((item, index) => (
              <tr 
                key={index} 
                className="border-b last:border-b-0 hover:bg-gray-50 transition"
                style={{ color: renderMuhurtaColor(item.muhurta) }}
              >
                <td className="py-3 px-10 text-left font-semibold">{item.time}</td>
                <td className="py-3 px-10 text-right">
                  {item.muhurta} - {renderMuhurtaDescription(item.muhurta)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Choghadiya