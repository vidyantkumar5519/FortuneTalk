import React from 'react'
import SecureFooter from '../components/footer/SecureFooter'

const FreeKundliVimshottariDahsa = () => {
  return (
    <>
     <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold'>Vimshottari Dasha</h2>
        <h3 className='text-xl text-[#454444] mt-6 font-semibold'>Vimshottari Dasha</h3>
            <p className='text-lg text-[#9B9696] font-medium mt-2'>Vimshottari Dasha is a cycle of 120 years of moon-based Dasha. It helps to predict based on 5 levels of Dashas i.e. Mahadasha, Antar Dasha, Pratyantar Dasha, Sookshma Dasha and Pran Dasha.</p>


            
<div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4 my-8">

    {/* left side div */}
    <div className='border-r border-[#747474]'>
    <button className="mx-auto flex rounded-[20px] border-0 bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl">Current Vimshottari Dasha</button>

    <PlanetCard heading="Vimshottari Mahadasha" planet="Saturn"/>
    <PlanetCard heading="Antar Dasha" planet="Mercury"/>
    <PlanetCard heading="Pratyantar Dasha" planet="Moon"/>
    <PlanetCard heading="Sookshma Dasha" planet="Venus"/>
    <PlanetCard heading="Pran Dasha" planet="Jupyter"/>

   
    </div>
    {/* right side div */}
    <div >
    <button className="mx-auto flex rounded-[20px] border-0 bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl">Vimshottari Dasha</button>

    <table class="table-auto w-full  border bg-[#F8F8F8] rounded-lg my-6">
        <thead className='border-b text-[#F27806] text-lg font-medium'>
        <tr className="border-b">
                   <td className="py-3 px-4 text-left">Planet</td>
                   <td className="py-3 px-4 text-right">Date & Time</td>
                   <td className="py-3 px-4 text-right"></td>
                 </tr>
        </thead>
               
               <tbody className="text-[#9B9696] font-medium  text-lg">
                 <tr className="border-b">
                   <td className="py-3 px-4 text-left">Ro</td>
                   <td className="py-3 px-4 text-right">16-12-1985 19:50</td>
                   <td className="py-3 px-4 text-right"><span className='cursor-pointer'>&rsaquo;</span></td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-4 text-left">Ro</td>
                   <td className="py-3 px-4 text-right">16-12-1985 19:50</td>
                   <td className="py-3 px-4 text-right"><span className='cursor-pointer'>&rsaquo;</span></td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-4 text-left">Ro</td>
                   <td className="py-3 px-4 text-right">16-12-1985 19:50</td>
                   <td className="py-3 px-4 text-right"><span className='cursor-pointer'>&rsaquo;</span></td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-4 text-left">Ro</td>
                   <td className="py-3 px-4 text-right">16-12-1985 19:50</td>
                   <td className="py-3 px-4 text-right"><span className='cursor-pointer'>&rsaquo;</span></td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-4 text-left">Ro</td>
                   <td className="py-3 px-4 text-right">16-12-1985 19:50</td>
                   <td className="py-3 px-4 text-right"><span className='cursor-pointer'>&rsaquo;</span></td>
                 </tr>
                 <tr className="border-b">
                   <td className="py-3 px-4 text-left">Ro</td>
                   <td className="py-3 px-4 text-right">16-12-1985 19:50</td>
                   <td className="py-3 px-4 text-right"><span className='cursor-pointer'>&rsaquo;</span></td>
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

export default FreeKundliVimshottariDahsa

const PlanetCard=({heading,planet})=>{
    return (
        <>
         <h4 className='text-lg text-[#454444] font-medium my-4'>{heading}</h4>
    <div className='bg-[#F8F8F8] border border-[#E6E4E4] rounded-[53px] mr-6 p-4'>
            <div className="flex justify-between items-center">
            <span className='text-md text-[#9B9696] font-medium'>{planet}</span>
            <div>
                <p className='text-md text-[#9B9696] font-medium'>17-12-2019 7:50 -</p>
                <p className='text-md text-[#9B9696] font-medium'>17-12-2038 1:50</p>
            </div>
            </div>
    </div>
        </>
    )
}