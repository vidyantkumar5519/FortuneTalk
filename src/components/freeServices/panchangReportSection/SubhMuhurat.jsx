import React from 'react'
import bookIcon from '../../../assets/image/bookIcon.png'
import locationIcon from '../../../assets/image/locationIcon.png'

const SubhMuhurat = () => {
  return (
    <>
      <div className='w-4/5 justify-center mx-auto'>

        <div className='w-full my-5 lg:w-3/4 mx-auto'><select id="countries" class="bg-white border-2 text-[#9B9696] border-[#9B9696] text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option className='text-[#9B9696]' selected>26 Oct 2023 (Thu)</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select></div>

        <div className="flex justify-between w-full my-5 lg:w-3/4 mx-auto">
          <button className=" my-4 h-12 justify-center w-auto text-center flex text-[#747474] rounded-[40px] border-2 border-[#B4B4B4] bg-white py-1 px-6 text-md  focus:outline-none hover:shadow-xl">
            <div className="flex justify-center items-center">
              <img src={bookIcon} alt="" className='w-10 h-10' />
              <p className="ml-2 font-medium">Today's Subh Muhurat</p>
            </div>
          </button>
          <button className=" h-12 my-4 justify-center w-auto text-center flex text-[#747474] border-2 border-[#B4B4B4] rounded-[40px] bg-white py-1 px-8 text-md  focus:outline-none hover:shadow-xl">
            <div className="flex mt-1 justify-center space-x-4 items-center">
              <img src={locationIcon} alt="" className='w-6 h-6' />
              <p className='font-medium'>Location</p>
            </div>
          </button>
        </div>

        <table class="table-auto w-full my-5 lg:w-3/4 mx-auto border-none bg-white rounded-lg">

          <tbody className="text-[#747474]">
            <tr className="border-b">
              <td className="py-3 px-10 text-left font-semibold">Abhijit Muhurta</td>
              <td className="py-3 px-10 text-right"></td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-10 text-left">Start Time</td>
              <td className="py-3 px-10 text-right">11:42</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-10 text-left">End Time</td>
              <td className="py-3 px-10 text-right">12:26</td>
            </tr>

          </tbody>
        </table>

      </div>
    </>
  )
}

export default SubhMuhurat