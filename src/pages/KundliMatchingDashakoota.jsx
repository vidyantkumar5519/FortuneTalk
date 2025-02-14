import React from 'react'
import SecureFooter from '../components/footer/SecureFooter'

const KundliMatchingAshtakoota = () => {
  return (
    <>
    <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold my-4'>Dashakoota</h2>

        <h3 className='text-xl text-[#F17806] font-medium my-4'>What is Dashakoota?</h3>
        <p className='text-[#757575] text-lg font-medium mb-5'>Dashakoota is a compatibility analysis based on Moon Nakshatras which predicts about 10 different attributes. Total 36 points are calculated in this out of which 18 or more points of agreement is considered very good. It is very popular in South India.</p>

        <table class="table-auto w-full border-none bg-[#F8F8F8] rounded-lg mt-4 mb-16">
        <thead className='text-[#F27806] font-semibold'>
            <tr className="border-b">
                   <td className="py-5 px-10 text-left rounded-tl-[10px]">Attributes</td>
                   <td className="py-5 px-10 text-right">Points</td>
                   <td className="py-5 px-10 text-right rounded-tr-[10px]">Match</td>
                 </tr>
            </thead>
                <tbody className="text-[#747474]">

                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Varna</td>
                    <td className="py-3 px-10 text-right">1.0</td>
                    <td className="py-3 px-10 text-right">0.0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Vasya</td>
                    <td className="py-3 px-10 text-right">2.0</td>
                    <td className="py-3 px-10 text-right">2.0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Varna</td>
                    <td className="py-3 px-10 text-right">1.0</td>
                    <td className="py-3 px-10 text-right">0.0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Vasya</td>
                    <td className="py-3 px-10 text-right">2.0</td>
                    <td className="py-3 px-10 text-right">2.0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Varna</td>
                    <td className="py-3 px-10 text-right">1.0</td>
                    <td className="py-3 px-10 text-right">0.0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Vasya</td>
                    <td className="py-3 px-10 text-right">2.0</td>
                    <td className="py-3 px-10 text-right">2.0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Varna</td>
                    <td className="py-3 px-10 text-right">1.0</td>
                    <td className="py-3 px-10 text-right">0.0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-10 text-left">Vasya</td>
                    <td className="py-3 px-10 text-right">2.0</td>
                    <td className="py-3 px-10 text-right">2.0</td>
                  </tr>
                  <tr className="border-b text-[#F27806] font-semibold">
                    <td className="py-3 px-10 text-left">Total</td>
                    <td className="py-3 px-10 text-right">26.0</td>
                    <td className="py-3 px-10 text-right">36.6</td>
                  </tr>
                </tbody>
              </table>
        </div>
        <SecureFooter/>
    </>
  )
}

export default KundliMatchingAshtakoota