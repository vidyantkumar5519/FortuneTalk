import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SecureFooter from '../components/footer/SecureFooter'

const FreeKundliBirthDetails = () => {
  const [birthDetails, setBirthDetails] = useState(null)
  const [astroDetails, setAstroDetails] = useState(null)
  const [astrologyDetails, setAstrologyDetails] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  // Example user data - replace with actual data from your form/storage
  const userData = {
  day: 6,
  month: 1,
  year: 2000,
  hour: 7,
  min: 45,
  lat: 19.132,
  lon: 72.342,
  tzone: 5.5,
};

  const fetchKundaliData = async () => {
    setLoading(true)
    setError(null)

    const userId = process.env.REACT_APP_ASTROLOGY_USER_ID
    const apiKey = process.env.REACT_APP_ASTROLOGY_API_KEY
    const auth = btoa(`${userId}:${apiKey}`)

    
  try {
    // Fetch birth details
    const birthResponse = await axios.post(
      'https://json.astrologyapi.com/v1/birth_details',
      userData,
      {
        headers: {
          authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    );
    setBirthDetails(birthResponse.data);

    // Fetch astro details
    const astroResponse = await axios.post(
      'https://json.astrologyapi.com/v1/astro_details',
      userData,
      {
        headers: {
          authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    );
    setAstroDetails(astroResponse.data);

    // Fetch astrology details
    const astroDetailResponse = await axios.post(
      'https://json.astrologyapi.com/v1/astro_details',
      userData,
      {
        headers: {
          authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    );
    setAstrologyDetails(astroDetailResponse.data);
    console.log("hello " + astroDetailResponse.data);
  } catch (err) {
    // Handle errors
    setError('Failed to fetch kundali details. Please try again.');
    console.error('API Error:', err);
  } finally {
    setLoading(false); // Always stop the loader
  }
};

  useEffect(() => {
    fetchKundaliData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-[#F17806] text-xl">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    )
  }

  return (
    <>
      <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold'>Birth Details</h2>

        <div className='bg-[#F8F8F8] rounded-3xl shadow-md w-full lg:w-1/3 mx-auto my-8'>
          <h3 className='text-lg text-[#454444] font-medium p-2 text-center'>Name - {userData.name}</h3>
        </div>

        <div className="flex flex-col lg:flex-row my-4 gap-4">
          <div className='w-full lg:w-1/2'>
            <button className="mx-auto flex rounded-3xl border-0 bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 px-16 text-lg text-white focus:outline-none hover:shadow-xl tracking-wide">
              Birth Details
            </button>

            {birthDetails && (
              <table className="table-auto w-full border-collapse border-none bg-[#F8F8F8] rounded-[10px] my-6">
                <tbody className="text-[#787878]">
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Birth Date</td>
                    <td className="py-3 px-10 text-right">{`${birthDetails.day}-${birthDetails.month}-${birthDetails.year}`}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Birth Time</td>
                    <td className="py-3 px-10 text-right">{`${birthDetails.hour}:${birthDetails.minute}`}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Sunrise</td>
                    <td className="py-3 px-10 text-right">{birthDetails.sunrise}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Sunset</td>
                    <td className="py-3 px-10 text-right">{birthDetails.sunset}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Ayanamsha</td>
                    <td className="py-3 px-10 text-right">{birthDetails.ayanamsha.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className='w-full lg:w-1/2'>
            <button className="mx-auto flex rounded-3xl border-0 bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 px-16 text-lg text-white focus:outline-none hover:shadow-xl tracking-wide">
              Astro Details
            </button>

            {astroDetails && (
              <table className="table-auto w-full border-collapse border-none bg-[#F8F8F8] rounded-[10px] my-6">
                <tbody className="text-[#787878]">
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Ascendant</td>
                    <td className="py-3 px-10 text-right">{astroDetails.ascendant}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Varna</td>
                    <td className="py-3 px-10 text-right">{astroDetails.Varna}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Vashya</td>
                    <td className="py-3 px-10 text-right">{astroDetails.Vashya}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Yoni</td>
                    <td className="py-3 px-10 text-right">{astroDetails.Yoni}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Gan</td>
                    <td className="py-3 px-10 text-right">{astroDetails.Gan}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Nadi</td>
                    <td className="py-3 px-10 text-right">{astroDetails.Nadi}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Sign</td>
                    <td className="py-3 px-10 text-right">{astroDetails.sign}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Sign Lord</td>
                    <td className="py-3 px-10 text-right">{astroDetails.SignLord}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Nakshatra</td>
                    <td className="py-3 px-10 text-right">{astroDetails.Naksahtra}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Nakshatra Lord</td>
                    <td className="py-3 px-10 text-right">{astroDetails.NaksahtraLord}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Charan</td>
                    <td className="py-3 px-10 text-right">{astroDetails.Charan}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Yog</td>
                    <td className="py-3 px-10 text-right">{astroDetails.Yog}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Karan</td>
                    <td className="py-3 px-10 text-right">{astroDetails.Karan}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Tithi</td>
                    <td className="py-3 px-10 text-right">{astroDetails.Tithi}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <SecureFooter />
    </>
  )
}

export default FreeKundliBirthDetails