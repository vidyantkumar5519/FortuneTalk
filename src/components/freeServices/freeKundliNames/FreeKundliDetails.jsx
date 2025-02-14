import React from 'react'
import { Link } from 'react-router-dom'
import { formatBirthDetails } from '../../../utils/astrologyApi'
import birthDetails from '../../../assets/image/birthDetails.png'
import constellationIcon from '../../../assets/image/constellationIcon.png'
import planetIcon from '../../../assets/image/planetIcon.png'
import favourableIcon from '../../../assets/image/favourableIcon.png'
import sunIcon from '../../../assets/image/sunIcon.png'
import parchmentIcon from '../../../assets/image/parchmentIcon.png'
import moonStarsIcon from '../../../assets/image/moonStarsIcon.png'
import medicineIcon from '../../../assets/image/medicineIcon.png'
import lifeQualityIcon from '../../../assets/image/lifeQualityIcon.png'

const FreeKundliDetails = ({ kundli }) => {
    if (!kundli) return null;
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        } catch (error) {
            console.error('Error formatting date:', error);
            return dateString || '';
        }
    };

    const formatTime = (timeString) => {
        try {
            return timeString ? new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
                hour: 'numeric', 
                minute: 'numeric',
                hour12: true
            }) : '';
        } catch (error) {
            console.error('Error formatting time:', error);
            return timeString || '';
        }
    };

    const birthDetailsData = formatBirthDetails(kundli.birthDetails);

    return (
        <>
            <hr className='border border-[#747474] mb-6' />
            <div className="flex flex-col space-y-4 mx-4">
                <div className='bg-[#F8F8F8] rounded-3xl shadow-md p-4'>
                    <h3 className='text-xl text-[#454444] font-medium text-center mb-2'>
                        {kundli.gender.charAt(0).toUpperCase() + kundli.gender.slice(1)} - {kundli.firstName}
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {/* Birth Information */}
                        <div className='bg-white rounded-xl p-4 shadow'>
                            <h4 className='text-lg text-[#E25803] font-medium mb-2'>Birth Information</h4>
                            <div className='space-y-2 text-[#747474]'>
                                <p>Date: {formatDate(kundli.birthDate)}</p>
                                <p>Time: {kundli.birthTime}</p>
                                <p>Place: {kundli.birthPlace}</p>
                            </div>
                        </div>

                        {/* Astronomical Details */}
                        {birthDetailsData && (
                            <>
                                <div className='bg-white rounded-xl p-4 shadow'>
                                    <h4 className='text-lg text-[#E25803] font-medium mb-2'>Sun Timings</h4>
                                    <div className='space-y-2 text-[#747474]'>
                                        <p>Sunrise: {(birthDetailsData.sunrise)}</p>
                                        <p>Sunset: {(birthDetailsData.sunset)}</p>
                                        {birthDetailsData.ayanamsha && (
                                            <p>Ayanamsha: {birthDetailsData.ayanamsha}°</p>
                                        )}
                                    </div>
                                </div>

                                <div className='bg-white rounded-xl p-4 shadow'>
                                    <h4 className='text-lg text-[#E25803] font-medium mb-2'>Location Details</h4>
                                    <div className='space-y-2 text-[#747474]'>
                                        {birthDetailsData.latitude && (
                                            <p>Latitude: {birthDetailsData.latitude}°</p>
                                        )}
                                        {birthDetailsData.longitude && (
                                            <p>Longitude: {birthDetailsData.longitude}°</p>
                                        )} 
                                        {birthDetailsData.timezone && (
                                            <p>Timezone: GMT+{birthDetailsData.timezone}</p>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-2 lg:gap-8 my-6 mx-10">
                <Link to='/free-kundli/birth-details'>
                    <div className='bg-gradient-to-r from-[#F27806] to-[#E15602] cursor-pointer rounded-[30px] flex flex-col justify-center space-y-2 items-center p-2 lg:py-8'>
                        <img src={birthDetails} alt="" className='w-20 h-20 bg-white rounded-full p-2' />
                        <h3 className='text-white text-xl font-medium text-center'>Birth Details</h3>
                    </div>
                </Link>
                <Link to='/free-kundli/horoscope'>
                    <div className='bg-gradient-to-r from-[#F27806] to-[#E15602] cursor-pointer rounded-[30px] flex flex-col justify-center space-y-2 items-center p-2 lg:py-8'>
                        <img src={constellationIcon} alt="" className='w-20 h-20 bg-white rounded-full p-2' />
                        <h3 className='text-white text-xl font-medium text-center'>Horoscope</h3>
                    </div>
                </Link>
                <Link to='/free-kundli/planetary'>
                    <div className='bg-gradient-to-r from-[#F27806] to-[#E15602] cursor-pointer rounded-[30px] flex flex-col justify-center space-y-2 items-center p-2 lg:py-8'>
                        <img src={planetIcon} alt="" className='w-20 h-20 bg-white rounded-full p-2' />
                        <h3 className='text-white text-xl font-medium text-center'>Planetary</h3>
                    </div>
                </Link>
                <Link to='/free-kundli/vimshottari'>
                    <div className='bg-gradient-to-r from-[#F27806] to-[#E15602] cursor-pointer rounded-[30px] flex flex-col justify-center space-y-2 items-center p-2 lg:py-8'>
                        <img src={sunIcon} alt="" className='w-20 h-20 bg-white rounded-full p-2' />
                        <h3 className='text-white text-xl font-medium text-center'>Vimshottari</h3>
                    </div>
                </Link>
                <Link to='/free-kundli/yogini'>
                    <div className='bg-gradient-to-r from-[#F27806] to-[#E15602] cursor-pointer rounded-[30px] flex flex-col justify-center space-y-2 items-center p-2 lg:py-8'>
                        <img src={moonStarsIcon} alt="" className='w-20 h-20 bg-white rounded-full p-2' />
                        <h3 className='text-white text-xl font-medium text-center'>Yogini</h3>
                    </div>
                </Link>
                <Link to='/free-kundli/general'>
                    <div className='bg-gradient-to-r from-[#F27806] to-[#E15602] cursor-pointer rounded-[30px] flex flex-col justify-center space-y-2 items-center p-2 lg:py-8'>
                        <img src={parchmentIcon} alt="" className='w-20 h-20 bg-white rounded-full p-2' />
                        <h3 className='text-white text-xl font-medium text-center'>General</h3>
                    </div>
                </Link>
                <Link to='/free-kundli/remedies'>
                    <div className='bg-gradient-to-r from-[#F27806] to-[#E15602] cursor-pointer rounded-[30px] flex flex-col justify-center space-y-2 items-center p-2 lg:py-8'>
                        <img src={medicineIcon} alt="" className='w-20 h-20 bg-white rounded-full p-2' />
                        <h3 className='text-white text-xl font-medium text-center'>Remedies</h3>
                    </div>
                </Link>
                <Link to='/free-kundli/favourable'>
                    <div className='bg-gradient-to-r from-[#F27806] to-[#E15602] cursor-pointer rounded-[30px] flex flex-col justify-center space-y-2 items-center p-2 lg:py-8'>
                        <img src={favourableIcon} alt="" className='w-20 h-20 bg-white rounded-full p-2' />
                        <h3 className='text-white text-xl font-medium text-center'>Favourable</h3>
                    </div>
                </Link>
                <Link to='/free-kundli/ashtakoot'>
                    <div className='bg-gradient-to-r from-[#F27806] to-[#E15602] cursor-pointer rounded-[30px] flex flex-col justify-center space-y-2 items-center p-2 lg:py-8'>
                        <img src={lifeQualityIcon} alt="" className='w-20 h-20 bg-white rounded-full p-2' />
                        <h3 className='text-white text-xl font-medium text-center'>Ashtakoot</h3>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default FreeKundliDetails