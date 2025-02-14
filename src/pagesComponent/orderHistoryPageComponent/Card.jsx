import React from 'react'

const Card = ({button,details}) => {
  return (
    <>
    <div className='bg-[#F4F4F4] rounded-[10px] p-4 flex flex-col space-y-1 shadow-lg'>
        <div className="flex items-center justify-between">
        <p className='text-xl text-[#747474] my-2'>Chat with ManojjK for 7 minutes</p>
       {details &&  <button className=" flex rounded-[100px] border-0 bg-[#B4B4B4] py-1 px-6 text-md text-white  focus:outline-none hover:shadow-xl">{details}</button>}
        </div>
        <p className='text-[#A4A4A4] text-lg'>26 Jul 23, 02:51 PM</p>
        <p className='text-[#A4A4A4] text-lg'>#CHAT NEW40607702 </p>
        <div className="flex items-center justify-between">
            <p className='text-[#07B457]'>Completed</p>
            <button className=" flex rounded-[20px] border-0 bg-gradient-to-r from-[#EE7105] to-[#E25803] py-1.5 px-8 text-md text-white  focus:outline-none hover:shadow-xl">{button}</button>
        </div>
    </div>
    </>
  )
}

export default Card