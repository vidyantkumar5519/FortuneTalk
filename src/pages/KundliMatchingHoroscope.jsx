import React from 'react'
import horoscopeChart from '../assets/image/horoscopeChart.png'
import SecureFooter from '../components/footer/SecureFooter'

const KundliMatchingHoroscope = () => {
  return (
    <>
     <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold my-4'>Horoscope Chart</h2>


        <div className="flex justify-center lg:space-x-6 space-y-3 lg:space-y-0 mx-4 flex-col lg:flex-row">
        <div className='w-full lg:w-1/3 bg-[#F8F8F8] rounded-3xl shadow-md'><select id="countries" className="bg-[#F8F8F8] border-none  text-[#454444]]  text-lg font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option className='text-[#9B9696]' selected>Female</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select></div>
    <div className='w-full lg:w-1/3 bg-[#F8F8F8] rounded-3xl shadow-md'><select id="countries" className="bg-[#F8F8F8] border-none  text-[#454444]]  text-lg font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option className='text-[#9B9696]' selected>Select Chart</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select></div>
    </div>

    <div className='my-10'>
        <h3 className='text-2xl font-medium text[#454444] text-center'>Birth Chart</h3>
        <p className='text-xl font-medium text-[#757575] text-center'>Body, Physical, Matters and all GeneralMatters</p>
    </div>

    <div>
        <img src={horoscopeChart} alt="" className='mx-auto w-auto h-auto lg:h-[500px] object-cover' />
    </div>

    
<div className="grid grid-cols-3 grid-rows-3 gap-4 lg:w-4/5 mx-auto my-6">
    <div className='bg-[#F3F3F3] text-[#787878] text-lg font-medium flex justify-center items-center'><p className='py-12'>Sun 1.3874</p></div>
    <div className='bg-[#F3F3F3] text-[#787878] text-lg font-medium flex justify-center items-center'><p className='py-12'>Sun 1.3874</p></div>
    <div className='bg-[#F3F3F3] text-[#787878] text-lg font-medium flex justify-center items-center'><p className='py-12'>Sun 1.3874</p></div>
    <div className='bg-[#F3F3F3] text-[#787878] text-lg font-medium flex justify-center items-center'><p className='py-12'>Mercury 1.3874</p></div>
    <div className='bg-[#F3F3F3] text-[#787878] text-lg font-medium flex justify-center items-center'><p className='py-12'>Sun 1.3874</p></div>
    <div className='bg-[#F3F3F3] text-[#787878] text-lg font-medium flex justify-center items-center'><p className='py-12'>Sun 1.3874</p></div>
    <div className='bg-[#F3F3F3] text-[#787878] text-lg font-medium flex justify-center items-center'><p className='py-12'>Sun 1.3874</p></div>
    <div className='bg-[#F3F3F3] text-[#787878] text-lg font-medium flex justify-center items-center'><p className='py-12'>Sun 1.3874</p></div>
    <div className='bg-[#F3F3F3] text-[#787878] text-lg font-medium flex justify-center items-center'><p className='py-12'>Sun 1.3874</p></div>
</div>
    
        </div>
        <SecureFooter/>
    </>
  )
}

export default KundliMatchingHoroscope