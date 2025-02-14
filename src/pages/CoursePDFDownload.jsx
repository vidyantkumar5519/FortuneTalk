import React from 'react'
import download from '../assets/image/download.png'
import SecureFooter from '../components/footer/SecureFooter'
import GetInTouch from '../components/getInTouch/GetInTouch'

const CoursePDFDownload = () => {
  return (
    <>


        <div className="mx-auto lg:h-screen mt-20 lg:w-[90%] flex flex-col lg:flex-row">
            {/* left side */}
            <div className=' w-full lg:w-1/2 mr-1 bg-[#FFF0E0] relative'>
            <div className="mx-auto text-center justify-center absolute top-0 left-1/2 w-1/2 lg:w-72 transform -translate-x-1/2 -translate-y-1/2 z-10 flex rounded-[50px]  bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 lg:px-16 px-4 text-lg text-white  focus:outline-none hover:shadow-xl"><p className='lg:p-3'>Free PDF</p></div>
                <div className="lg:my-14 my-10 flex flex-col items-center">
                    <FreePDFCard image={download}/>
                    <FreePDFCard image={download}/>
                    <FreePDFCard image={download}/>
               
                </div>
            </div>
            {/* right side */}
            <div className='w-full mt-10 lg:mt-0 lg:w-1/2 ml-1 bg-[#FFF0E0] relative'>
            <div className="mx-auto text-center justify-center absolute top-0 left-1/2 w-1/2 lg:w-72 transform -translate-x-1/2 -translate-y-1/2 z-10 flex rounded-[50px]  bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 lg:px-16 px-4 text-lg text-white  focus:outline-none hover:shadow-xl"><p className='lg:p-3'>Paid PDF</p></div>
                <div className="lg:my-14 my-10 flex flex-col items-center mx-4 lg:mx-0">
                <FreePDFCard price='₹ 199/-'/>
                <FreePDFCard price='₹ 199/-'/>
                <FreePDFCard price='₹ 199/-'/>
                </div>

                <button className="mx-auto my-4 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 bottom-10 flex rounded-[60px] border-0 bg-gradient-to-r from-[#EE7105] to-[#E25803] py-2.5 px-24 text-xl font-medium text-white  focus:outline-none hover:shadow-xl">Pay Now</button>
            </div>
        </div>

        <GetInTouch/>
        <SecureFooter/>

    </>
  )
}

export default CoursePDFDownload

const FreePDFCard=({image,price})=>{
    return (
        <>
        <div className='flex justify-between items-center shadow-md bg-[#F8F8F8] rounded-[17px] p-5 my-2'>
            <p className='w-2/3'>Master your Psychic Ability and Learn to Give Accurate </p>

        {image ? <img src={image} alt="" className="w-6 h-8" /> : <p className="text-end text-[#747474] font-bold">{price}</p>}
        </div>
        </>
    )
}