import React from 'react'
import SecureFooter from '../components/footer/SecureFooter'

const FreeKundliPlanetaryDetails = () => {
  return (
    <>
    <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold'>Birth Details</h2>
        <p className='text-lg text-[#757575] text-center font-medium mt-2 mb-6'>The planetary details during your birth are all listed here i.e. planet degrees, speed, sign, nakshatra, houses etc</p>

        
<div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 gap-6 mb-6">
    <Card planet="Sun" zodiac="Scorpio"/>
    <Card planet="Moon" zodiac="Libra"/>
    <Card planet="Mars" zodiac="Leo"/>
    <Card planet="Mercury" zodiac="Aries"/>
    <Card planet="Sun" zodiac="Scorpio"/>
    <Card planet="Moon" zodiac="Libra"/>
    <Card planet="Mars" zodiac="Leo"/>
    <Card planet="Mercury" zodiac="Aries"/>
    
</div>
    
        </div>
        <SecureFooter/>
    </>
  )
}

export default FreeKundliPlanetaryDetails

const Card=({zodiac,planet})=>{
    return (
        <>
           <table class="table-auto w-full border-2 border-[#F27806] bg-[#F8F8F8]">
            <thead className='bg-[#F27806] text-white'>
            <tr className="border-b">
                   <td className="py-2 px-4 text-left">{planet}</td>
                   <td className="py-2 px-4 text-right">211.39-1.39</td>
                   <td className="py-2 px-4 text-right">{zodiac}</td>
                 </tr>
            </thead>
               
               <tbody className="text-[#A1A1A1]">
                 <tr className="">
                   <td className="py-2 px-4 text-left">Is Retro</td>
                   <td className="py-2 px-4 text-right">Speed</td>
                   <td className="py-2 px-4 text-right">Sign Lord</td>
                 </tr>
                 <tr className="border-b-2 border-[#F27806] text-black">
                   <td className="py-2 px-4 text-left">No</td>
                   <td className="py-2 px-4 text-right">1.01</td>
                   <td className="py-2 px-4 text-right">Mars</td>
                 </tr>
                 <tr className="text-[#A1A1A1]">
                   <td className="py-2 px-4 text-left">Nahshatra</td>
                   <td className="py-2 px-4 text-right">Nakshatra Lord</td>
                   <td className="py-2 px-4 text-right">House</td>
                 </tr>
                 <tr className="border-b-2 border-[#F27806] text-black">
                   <td className="py-2 px-4 text-left">Vishakha</td>
                   <td className="py-2 px-4 text-right">Jupiter</td>
                   <td className="py-2 px-4 text-right">4</td>
                 </tr>
                 
                
               </tbody>
             </table>
        </>
    )
}