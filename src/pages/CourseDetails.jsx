import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import iconImage from '../assets/image/astrologerIcon.jpg'
import coursesVideos from '../assets/image/coursesVideos.gif'
import CustomerReviewCard from '../components/customer-review/CustomerReviewCard'
import GetInTouch from '../components/getInTouch/GetInTouch'
import SecureFooter from '../components/footer/SecureFooter'

const CourseDetails = () => {

    const location = useLocation();
    const { itemData } = location.state || {}; // Retrieve the passed data
    console.log("itemData", itemData)


    return (
        <>
            <div className="w-[90%] mx-auto">
                <h2 className="text-3xl text-[#F27806] font-bold mt-8">Astrologer Details</h2>
                <p className='mt-6 text-xl text-[#9B9696] font-medium'>{itemData?.astrologerId?.about}</p>
                <div className="flex flex-col lg:flex-row my-3">
                    <div className="w-full lg:w-1/3 rounded-3xl bg-[#F9F9F9] shadow-2xl">
                        <div className="flex flex-col justify-center items-center space-y-2 py-3">
                            <img src={itemData?.astrologerId?.profileImage || "Astrologer Image"} alt="" className="max-w-[200px] max-h-[200px] rounded-full border-2 border-white" />

                            <h2 className="text-[#454444] text-2xl font-bold">  {itemData?.astrologerId?.displayName} </h2>
                            {/* <p className="text-[#9B9696] text-md">(288 students)</p> */}
                            <p className="text-[#9B9696] text-xl font-medium">Experience - {itemData?.astrologerId?.experience} years</p>


                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 px-6">
                        <h2 className="text-xl text-black font-normal my-4">Education Qualification</h2>
                        {/* <p className='text-[#9B9696] text-lg font-medium'>She has done her M.Com in Human Resources (Post Graduation in HR).</p> */}
                        <p className='text-[#9B9696] text-lg font-medium'>{itemData?.astrologerId?.educationQualification}</p>
                        <h2 className="text-xl text-black font-normal my-4">Astrological Qualification</h2>
                        <p className='text-[#9B9696] text-lg font-medium'>{itemData?.astrologerId?.astrologyQualification}</p>

                    </div>
                </div>

            </div>


            {/* Videos Section */}

            {/* <div className='bg-[#FFF0E0]'>
        <div className="w-[90%] mx-auto">
    <h2 className="text-3xl text-[#F27806] font-bold py-6">Videos</h2>
    <div className="flex flex-col lg:flex-row gap-8 pb-8">
        <img src={coursesVideos} alt="" className='h-52 w-54 rounded-[10px]' />
        <img src={coursesVideos} alt="" className='h-52 w-54 rounded-[10px]' />
        <img src={coursesVideos} alt="" className='h-52 w-54 rounded-[10px]' />
    </div>
        </div>
    </div> */}

            {/* Students Review Section  */}

            {/* <div className='w-[90%] mx-auto'>
    <h2 className="text-3xl text-[#F27806] font-bold my-8">Students Review</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div ><CustomerReviewCard/> </div>
    <div ><CustomerReviewCard/> </div>
    <div ><CustomerReviewCard/> </div>
    <div ><CustomerReviewCard/> </div>
    
</div>
    </div> */}

            <Link to={`/demo-class-details/${itemData?._id}`} state={{ itemData: itemData }}><button className="mx-auto my-6 w-auto flex rounded-[58px] border-0 bg-gradient-to-r from-[#EE7105] to-[#E25803] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl">Continue To Next</button></Link>

            <GetInTouch />
            <SecureFooter />
        </>
    )
}

export default CourseDetails