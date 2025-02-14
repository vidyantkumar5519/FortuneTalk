import React from 'react'
import SecureFooter from '../components/footer/SecureFooter'

const FreeKundliReport = () => {
  return (
    <>
    <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold'>Report</h2>

        <div className="m-4">
        <h3 className='text-xl text-black mt-6 font-semibold'>Personal Life</h3>
            <p className='text-lg text-[#787878] font-medium mt-2'>Your personal communications will have an emotional depth and will be fruitful. You shall be very popular in social circles. You may make plans of investing in a new home, property or a vehicle. You will discuss your future plans with loved ones.</p>
            
        <h3 className='text-xl text-black mt-6 font-semibold'>Luck</h3>
            <p className='text-lg text-[#787878] font-medium mt-2'>
You shall experience happiness and excitement all around. You will move ahead with renewed vigor and confidence and achieve even the seemingly impossible tasks.</p>

        <h3 className='text-xl text-black mt-6 font-semibold'>Health</h3>
            <p className='text-lg text-[#787878] font-medium mt-2'>Travel will help you in overcoming your boredom for a short period. You'll remain enthusiastic during traveling.</p>

        <h3 className='text-xl text-black mt-6 font-semibold'>Profession</h3>
            <p className='text-lg text-[#787878] font-medium mt-2'>A opportunity opens up to offer you better prospects in your career. Family and friends shall help you financially to set up your won venture. Businessmen</p>

        </div>
        </div>

        <SecureFooter/>
    </>
  )
}

export default FreeKundliReport