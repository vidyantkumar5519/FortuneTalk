import React from 'react'
import cameraIcon from '../assets/image/cameraIcon.png'
import addressIcon from '../assets/image/addressIcon.png'
import { Link } from 'react-router-dom'

const RegisterLiveCourses = () => {
  return (
    <>
    <div className='min-h-screen bg-gradient-to-r from-[#F77C02] to-[#E36D17] py-10 pt-20 '>
       <div className="w-[90%] lg:w-3/5 mx-auto rounded-xl shadow-lg p-8 bg-white ">
        <h2 className='text-2xl text-[#F27806] font-medium'>Register For Live Class</h2>
        <div className="flex my-4 space-x-4 items-center ">
        <input
                    className="flex w-1/3 lg:w-auto h-10 border-b-2 text-start border-[#9B9696] bg-transparent px-3 py-2 text-lg text-[#686767] placeholder:text-[#686767] placeholder:text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="First Name"
                />
        <input
                    className="flex w-1/3 lg:w-auto h-10 border-b-2 text-start border-[#9B9696] bg-transparent px-3 py-2 text-lg text-[#686767] placeholder:text-[#686767] placeholder:text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Last Name"
                />
        <input
                    className="flex w-1/3 lg:w-auto h-10 border-b-2 text-start border-[#9B9696] bg-transparent px-3 py-2 text-lg text-[#686767] placeholder:text-[#686767] placeholder:text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Phone Number"
                />
                
        </div>
        <div className="flex my-4 items-center">
        <Link to='/live-payment-information'>
        <button className="mx-auto flex rounded-[62px] border-0 bg-gradient-to-r from-[#F27806] to-[#E25D04] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl font-medium">Proceed</button>
        
        </Link ></div>
       </div>
    </div>
    </>
  )
}

export default RegisterLiveCourses