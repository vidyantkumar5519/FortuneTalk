import React from 'react'
import horoscopeChart from '../assets/image/horoscopeChart.png'
import SecureFooter from '../components/footer/SecureFooter'


const FreeKundliKP = () => {
  return (
    <>
   <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold mb-4'>KP</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4">
    {/* left side div */}
    <div className='lg:border-r lg:border-[#747474] pr-4'>
    <h3 className='my-4 text-[#454444] text-lg font-semibold'>Bhav Chalit Chart</h3>
    <div>
        <img src={horoscopeChart} alt="" className='mx-auto w-auto h-auto  object-cover' />
    </div>
    <h3 className='text-[#454444] text-xl font-medium my-2'>Ruling Planets</h3>

    <table class="table-auto w-full border border-[#F9F9F9] bg-[#F8F8F8] rounded-lg mt-4 mb-8">
        <thead className='text-[#F27806] font-semibold'>
            <tr className="border-b">
                   <td className="py-3 px-4 text-center border-r"></td>
                   <td className="py-3 px-4 text-center border-r">Sign Lord</td>
                   <td className="py-3 px-4 text-center border-r">Star Lord</td>
                   <td className="py-3 px-4 text-center">Sub Lord</td>
                 </tr>
            </thead>
                <tbody className="text-[#787878] font-medium">

                  <tr className="border-b">
                    <td className="py-3 px-4 text-center border-r">Mo</td>
                    <td className="py-3 px-4 text-center border-r">Jupiter</td>
                    <td className="py-3 px-4 text-center border-r">Saturn</td>
                    <td className="py-3 px-4 text-center ">Jupiter</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-center border-r">Mo</td>
                    <td className="py-3 px-4 text-center border-r">Jupiter</td>
                    <td className="py-3 px-4 text-center border-r">Saturn</td>
                    <td className="py-3 px-4 text-center ">Jupiter</td>
                  </tr>
                  <tr className="">
    <td className="py-3 px-4 text-center border-r" colSpan="2">Mo</td>
    <td className="py-3 px-4 text-center border-r" colSpan="2">Jupiter</td>
</tr>

                </tbody>
              </table>

    <h3 className='text-[#454444] text-xl font-medium'>Cusps</h3>

    <table class="table-auto w-full border border-[#F9F9F9] bg-[#F8F8F8] rounded-lg mt-4 mb-8">
        <thead className='text-[#F27806] font-semibold'>
            <tr className="border-b">
                   <td className="py-3 px-4 text-center border-r">Cusps</td>
                   <td className="py-3 px-4 text-center border-r">Degree Lord</td>
                   <td className="py-3 px-4 text-center border-r">Sign </td>
                   <td className="py-3 px-4 text-center border-r">Sign Lord</td>
                   <td className="py-3 px-4 text-center border-r">Star Lord</td>
                   <td className="py-3 px-4 text-center">Sub Lord</td>
                 </tr>
            </thead>
                <tbody className="text-[#787878] font-medium">

                  <tr className="border-b">
                    <td className="py-3 px-4 text-center border-r">1</td>
                    <td className="py-3 px-4 text-center border-r">214.02</td>
                    <td className="py-3 px-4 text-center border-r">Scorpio</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center ">Ma</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-center border-r">1</td>
                    <td className="py-3 px-4 text-center border-r">214.02</td>
                    <td className="py-3 px-4 text-center border-r">Scorpio</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center ">Ma</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-center border-r">1</td>
                    <td className="py-3 px-4 text-center border-r">214.02</td>
                    <td className="py-3 px-4 text-center border-r">Scorpio</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center ">Ma</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-center border-r">1</td>
                    <td className="py-3 px-4 text-center border-r">214.02</td>
                    <td className="py-3 px-4 text-center border-r">Scorpio</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center ">Ma</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-center border-r">1</td>
                    <td className="py-3 px-4 text-center border-r">214.02</td>
                    <td className="py-3 px-4 text-center border-r">Scorpio</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center ">Ma</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-center border-r">1</td>
                    <td className="py-3 px-4 text-center border-r">214.02</td>
                    <td className="py-3 px-4 text-center border-r">Scorpio</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center border-r">Ma</td>
                    <td className="py-3 px-4 text-center ">Ma</td>
                  </tr>
                 
                </tbody>
              </table>

    </div>



    {/* right side */}
    <div className='lg:px-8'>
        <h3 className='my-4 text-[#454444] text-lg font-semibold'>Planet House Report</h3>
        <div className='w-full bg-[#F8F8F8] rounded-3xl shadow-md'><select id="countries" className="bg-[#F8F8F8] border-none  text-[#454444]]  text-lg font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option className='text-[#9B9696]' selected>Select House Report</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select></div>

    <h3 className='text-xl text-[#F27806] font-semibold my-3'>Sun House Report</h3>
    <p className='text-[#757575] text-lg'>You desire to build strong inner and outer foundations, but, at times, you may have the wish to retreat from society when life becomes difficult. The influence of either or both parents is strong for good or otherwise. There is pride in the home and that is where you want to shine and show your creativity. That is where you can be the real you. You want to be king of your castle, but just don't be too demanding at home. No one likes a dictator.</p>
    </div>
</div>
    

</div>

<SecureFooter/>
    </>
  )
}

export default FreeKundliKP