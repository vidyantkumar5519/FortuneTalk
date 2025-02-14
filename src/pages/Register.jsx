import React from 'react'
import cameraIcon from '../assets/image/cameraIcon.png'
import addressIcon from '../assets/image/addressIcon.png'

const Register = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-[#F77C02] to-[#E36D17] py-10'>
       <div className="w-[90%] lg:w-3/5 mx-auto rounded-xl shadow-lg p-8 bg-white ">
        <h2 className='text-2xl text-[#F27806] font-medium'>Register your Profile</h2>
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
                <div className="flex flex-col items-center lg:flex-1">
                    <div className="w-14 h-14 rounded-full bg-[#F27806] flex justify-center items-center">
                        <img src={cameraIcon} alt="" className='object-cover w-7 h-7' />
                    </div>
                        <p className='text-md text-[#FF0404] py-1'>Add Profile Picture</p>
                </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
        <div className='w-full lg:w-1/2'>
            <label htmlFor="" className='text-md font-medium text-[#686767] px-4'>Gender</label>
            <select id="countries" className="bg-[#EDEDED] border-2 my-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-[#F27806] focus:border-blue-[#F27806] w-full p-3  block">
        <option className='text-[#9B9696]' selected>Select an Option</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select></div>
        <div className='w-full lg:w-1/2'>
        <label htmlFor="" className='text-md font-medium text-[#686767] px-4'>Gender</label>
            
            <select id="countries" className="bg-[#EDEDED] border-2 my-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option className='text-[#9B9696]' selected>Select an Option</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
        <div className='w-full lg:w-1/2'>
            <label htmlFor="" className='text-md font-medium text-[#686767] px-4'>Birth Time</label>
            <select id="countries" className="bg-[#EDEDED] border-2 my-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-[#F27806] focus:border-blue-[#F27806] w-full p-3  block">
        <option className='text-[#9B9696]' selected>Select an Option</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select></div>
        <div className='w-full lg:w-1/2'>
        <label htmlFor="" className='text-md font-medium text-[#686767] px-4'>Birth Place</label>
            
            <select id="countries" className="bg-[#EDEDED] border-2 my-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option className='text-[#9B9696]' selected>Select an Option</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select></div>
        </div>

        <div className="flex items-center justify-between my-6">
            <input
              className="flex h-10 w-full border-b-2 text-start border-[#9B9696] bg-transparent px-3 py-2 text-sm placeholder:text-[#9B9696] placeholder:text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Current Address"
            ></input>
            <img src={addressIcon} alt="" className="h-7 -mx-3 w-7" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
        <div className='w-full lg:w-1/2'>
            <label htmlFor="" className='text-md font-medium text-[#686767] px-4'>Occupation</label>
            <select id="countries" className="bg-[#EDEDED] border-2 my-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-[#F27806] focus:border-blue-[#F27806] w-full p-3  block">
        <option className='text-[#9B9696]' selected>Select an Option</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select></div>
        <div className='w-full lg:w-1/2'>
        <label htmlFor="" className='text-md font-medium text-[#686767] px-4'>Problem</label>
            
            <select id="countries" className="bg-[#EDEDED] border-2 my-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option className='text-[#9B9696]' selected>Select an Option</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select></div>
        </div>

        <div className="flex my-4 items-center">
        <button className="mx-auto flex rounded-[62px] border-0 bg-gradient-to-r from-[#F27806] to-[#E25D04] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl font-medium">Proceed</button>
        <span className='text-[#9B9696] cursor-pointer' >Skip &raquo;&raquo;</span>
        </div>
       </div>
    </div>
    </>
  )
}

export default Register