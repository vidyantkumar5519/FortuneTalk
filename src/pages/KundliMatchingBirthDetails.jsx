import React from 'react'
import SecureFooter from '../components/footer/SecureFooter'

const KundliMatchingBirthDetails = () => {
  return (
    <>
    <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold'>Birth Details</h2>


    <div className="flex justify-center lg:space-x-6 space-y-3 lg:space-y-0 mx-4 flex-col lg:flex-row">
        <div className='bg-[#F8F8F8] rounded-3xl shadow-md w-full lg:w-1/3'>
            <h3 className='text-lg text-[#454444] font-medium p-2 text-center'>Female - Archana Kumari</h3>
        </div>
        <div className='bg-[#F8F8F8] rounded-3xl shadow-md w-full lg:w-1/3'>
            <h3 className='text-lg text-[#454444] font-medium p-2 text-center'>Male - Suamn Singh</h3>
        </div>
    </div>

    <div className="flex flex-col lg:flex-row my-4 gap-4">
        <div className='w-full lg:w-1/2'>
        <button className="mx-auto flex rounded-3xl border-0 bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl tracking-wide">Birth Details</button>

        <table class="table-auto w-full border-collapse border-none bg-[#F8F8F8] rounded-[10px] my-6">
            <thead className='bg-[#F27806] text-white'>
            <tr className="border-b">
                   <td className="py-5 px-10 text-left rounded-tl-[10px]">Details</td>
                   <td className="py-5 px-10 text-right">Female</td>
                   <td className="py-5 px-10 text-right rounded-tr-[10px]">Male</td>
                 </tr>
            </thead>
               
               <tbody className="text-[#787878]">
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Name</td>
                   <td className="py-3 px-10 text-right">Archana</td>
                   <td className="py-3 px-10 text-right">Sunil</td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Birth Date</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Name</td>
                   <td className="py-3 px-10 text-right">Archana</td>
                   <td className="py-3 px-10 text-right">Sunil</td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Birth Date</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Name</td>
                   <td className="py-3 px-10 text-right">Archana</td>
                   <td className="py-3 px-10 text-right">Sunil</td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Birth Date</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                 </tr>
                 
                
               </tbody>
             </table>

        </div>
        <div className='w-full lg:w-1/2'>
        <button className="mx-auto flex rounded-3xl border-0 bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl tracking-wide">Astro Details</button>

        <table class="table-auto w-full border-collapse border-none bg-[#F8F8F8] rounded-[10px] my-6">
            <thead className='bg-[#F27806] text-white'>
            <tr className="border-b">
                   <td className="py-5 px-10 text-left rounded-tl-[10px]">Details</td>
                   <td className="py-5 px-10 text-right">Female</td>
                   <td className="py-5 px-10 text-right rounded-tr-[10px]">Male</td>
                 </tr>
            </thead>
               
               <tbody className="text-[#787878]">
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Name</td>
                   <td className="py-3 px-10 text-right">Archana</td>
                   <td className="py-3 px-10 text-right">Sunil</td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Birth Date</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Name</td>
                   <td className="py-3 px-10 text-right">Archana</td>
                   <td className="py-3 px-10 text-right">Sunil</td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Birth Date</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Name</td>
                   <td className="py-3 px-10 text-right">Archana</td>
                   <td className="py-3 px-10 text-right">Sunil</td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-10 text-left">Birth Date</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                   <td className="py-3 px-10 text-right">18-11-1999</td>
                 </tr>
                 
                
               </tbody>
             </table>

        </div>
    </div>
    </div>
    <SecureFooter/>
    </>
  )
}

export default KundliMatchingBirthDetails