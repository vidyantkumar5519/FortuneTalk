import React from 'react'
import bookIcon from '../../../assets/image/bookIcon.png'
import locationIcon from '../../../assets/image/locationIcon.png'
import sunriseIcon from '../../../assets/image/sunriseIcon.png'
import moonIcon from '../../../assets/image/moonIcon.png'

const PanchangReportHome = () => {
  return (
    <>
      <div className="w-4/5 justify-center mx-auto">
        <div className="flex">
          <button className=" my-4 h-12 justify-center w-auto text-center flex text-[#747474] rounded-[40px] border-2 border-[#B4B4B4] bg-white py-1 px-6 text-md  focus:outline-none hover:shadow-xl">
            <div className="flex justify-center items-center">
              <img src={bookIcon} alt="" className='w-10 h-10' />
              <p className="ml-2">Panchang Report</p>
            </div>
          </button>
          <button className="mx-auto h-12 my-4 justify-center w-auto text-center flex text-[#747474] border-2 border-[#B4B4B4] rounded-[40px] bg-white py-1 px-8 text-md  focus:outline-none hover:shadow-xl">
            <div className="flex mt-1 justify-center space-x-4 items-center">
              <img src={locationIcon} alt="" className='w-6 h-6' />
              <p>Location</p>
            </div>
          </button>
        </div>
        <div className="flex">
          <button className=" my-4 justify-center w-auto text-center flex text-[#747474] rounded-[40px] border-2 border-[#B4B4B4] bg-white py-2 px-6 text-md  focus:outline-none hover:shadow-xl">
            <div className="flex flex-wrap mt-1 justify-center space-x-4 items-center">
              <img src={sunriseIcon} alt="" className='w-6 h-6' />
              <p>05:52 AM-06:54 PM</p>
            </div>
          </button>
          <button className="mx-auto my-4 justify-center w-auto text-center flex text-[#747474] border-2 border-[#B4B4B4] rounded-[40px] bg-white py-2 px-6 text-md  focus:outline-none hover:shadow-xl">
            <div className="flex flex-wrap mt-1 justify-center space-x-4 items-center">
              <img src={moonIcon} alt="" className='w-6 h-6' />
              <p>09:56 AM-09:36 PM</p>
            </div>
          </button>
        </div>

        <table class="table-auto w-full lg:w-[70%] border-none bg-white rounded-lg">

          <tbody className="text-[#747474]">
            <tr className="border-b">
              <td className="py-3 px-10 text-left">Malcolm Lockyer</td>
              <td className="py-3 px-10 text-right">1961</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-10 text-left">The Eagles</td>
              <td className="py-3 px-10 text-right">Chitra Till 06:32 AM, 22 Aug</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-10 text-left">The Eagles</td>
              <td className="py-3 px-10 text-right">Baalav Till 01:57 AM, 22 Aug</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-10 text-left">The Eagles</td>
              <td className="py-3 px-10 text-right">Shukla-Paksha</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-10 text-left">The Eagles</td>
              <td className="py-3 px-10 text-right">Shubh Till 10:20 PM</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-10 text-left">The Eagles</td>
              <td className="py-3 px-10 text-right">1972</td>
            </tr>

          </tbody>
        </table>

        <div className="m-6 lg:m-0">
          <button className=" my-4 justify-center w-full lg:w-[70%] text-start flex text-[#747474] border-2 border-[#B4B4B4] rounded-[40px] bg-white py-3 shadow-sm px-6 text-lg  focus:outline-none hover:shadow-xl">
            Hindu Month & Year
          </button>
        </div>

        <table class="table-auto w-full lg:w-[70%] mb-4 border-none bg-white rounded-lg">

          <tbody className="text-[#747474]">
            <tr className="border-b">
              <td className="py-3 px-10 text-left">Shaka Samvat</td>
              <td className="py-3 px-10 text-right">1945</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-10 text-left">The Eagles</td>
              <td className="py-3 px-10 text-right">Chitra Till 06:32 AM, 22 Aug</td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default PanchangReportHome