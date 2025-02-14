import React from 'react'
import kundliDoshaImage from '../assets/image/kundliDoshaImage.png'
import SecureFooter from '../components/footer/SecureFooter'

const FreeKundliDosh = () => {
  return (
    <>
    <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold'>Kundli Dosh</h2>
            <img src={kundliDoshaImage} alt="" className='mx-auto w-auto h-auto lg:w-[500px]  object-cover p-6' />

        <div>
            <h3 className='text-xl text-black mt-6 font-semibold'>Manglik Dosha</h3>
            <p className='text-lg text-[#787878] font-medium mt-2'>The manglik dosha is present in your horoscope, however it is less effective. With some remedies related to mangalik dosha this can be reduced further.</p>

            <h3 className='text-xl text-black mt-6 font-semibold'>KalSarpa Dosha</h3>
            <p className='text-lg text-[#787878] font-medium mt-2'>The manglik dosha is present in your horoscope, however it is less effective. With some remedies related to mangalik dosha this can be reduced further.</p>

            <h3 className='text-xl text-black mt-6 font-semibold'>SadheSati Dosha</h3>
            <p className='text-lg text-[#787878] font-medium mt-2'>The manglik dosha is present in your horoscope, however it is less effective. With some remedies related to mangalik dosha this can be reduced further.</p>

            <h3 className='text-xl text-black mt-6 font-semibold'>Pitri Dosha</h3>
            <p className='text-lg text-[#787878] font-medium mt-2'>Pitra Dosha is a Karmic Debt of the ancestors and reflected in the horoscope in the form of planetary combinations. It can also happen due to the neglect of ancestors and not providing them their proper due in the form of shraddh or charity or spiritual upliftments. 
Congratulations!! Your horoscope is free from Pitra
Dosha.</p>
        </div>
        </div>

        <SecureFooter/>
    </>
  )
}

export default FreeKundliDosh