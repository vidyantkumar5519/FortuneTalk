import React from 'react'
import maleGenderIcon from '../assets/image/maleGenderIcon.png'
import femaleGenderIcon from '../assets/image/femaleGenderIcon.png'
import SecureFooter from '../components/footer/SecureFooter'

const KundliMatchingManglikMatch = () => {
  return (
    <>
    <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold my-4'>Manglik Match</h2>

        <div className="flex flex-col justify-center lg:space-x-10 lg:flex-row my-12">
            <div className="bg-[#F4F4F4] rounded-3xl flex flex-col justify-center items-center space-y-3 py-8 px-16 shadow-lg">
                <div className='rounded-full border-2 border-[#F27806] bg-white'>
                    <img src={maleGenderIcon} alt="" className='w-20 h-20 p-3' />
                </div>
                <h3 className='text-xl font-semibold'>Sunil Dhase</h3>
                <p className='text-lg text-[#686767]'>Non Manglik</p>
            </div>
            <div className="bg-[#F4F4F4] rounded-3xl flex flex-col justify-center items-center space-y-3 py-8 px-16 shadow-lg">
                <div className='rounded-full border-2 border-[#F27806] bg-white'>
                    <img src={femaleGenderIcon} alt="" className='w-20 h-20 p-3' />
                </div>
                <h3 className='text-xl font-semibold'>Sunil Dhase</h3>
                <p className='text-lg text-[#686767]'>Non Manglik</p>
            </div>
        </div>

        <h3 className='text-2xl text-[#F27806] font-medium my-5'>Manglik Analysis</h3>
        <p className='text-xl font-medium text-[#B4B4B4] mb-5'>The overall points of this couple represent a great combination, both the bride and the groom have no mangal dosh. Marriage is preferred. Consult an astrologer to get rid of the few remedies and the doshas present for a harmonious married life ahead.Both boy and girl are not Manglik, which does not lead to any problems.</p>
        </div>
        <SecureFooter/>
    </>
  )
}

export default KundliMatchingManglikMatch