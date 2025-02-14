import React from 'react'
import {Link} from 'react-router-dom'
import iconImage from "../assets/astrologerIcon.jpg";
import lingam from "../assets/image/lingam.png";
import rudraAbhishekPooja from "../assets//image/rudraAbhishekPooja.jpg";


const PoojaCompleted = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#F47802] to-[#E45B02] w-auto mx-auto lg:w-44 rounded-b-xl">
        <h3 className="text-white font-medium text-center text-lg py-4">
          Pooja Completed
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row p-8 border-b border-[#C0C0C0]">
        <div className="w-full lg:w-1/2 p-8 mx-6 lg:mx-12 lg:mr-20 my-6 border-r-2">
          <h3 className="text-[#747474] text-2xl font-semibold">
            Problems you are facing
          </h3>
          <p className="text-[#B4B4B4] text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet
          </p>
        </div>
        <liv className="w-full my-6 lg:w-1/2 px-4">
          <div className="flex relative p-3 items-center bg-[#F8F8F8] justify-start lg:w-4/5 rounded-[10px] border-none shadow-xl">
            <div>
              <img
                src={iconImage}
                alt=""
                className="max-w-[160px] max-h-[160px] lg:absolute lg:left-0 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-full border-8 border-[#F27806]"
              />
              <h3 className="lg:absolute ml-6 lg:ml-0 -bottom-14 -left-10 text-xl font-bold">
                Tarot Disha
              </h3>
            </div>
            <div className="m-3 mx-auto">
              <h2 className="text-[#B4B4B4] text-lg text-center font-semibold">
                Perform on
              </h2>
              <p className="text-[#E36D17] text-2xl font-bold">
                10 Nov 2023{" "}
                <span className="text-lg font-normal">(12:15 pm)</span>
              </p>
            </div>
          </div>
        </liv>
      </div>

      <div class="grid grid-cols-12 gap-4 lg:m-8 lg:pr-0 my-4 px-12 lg:mr-0 border-b border-[#C0C0C0]">
        <div class="col-span-12 md:col-span-2 space-y-6 mx-auto py-6">
          <div className="row-span-4 shadow-2xl shadow-black">
            <img
              src={lingam}
              alt=""
              className="w-full h-full lg:w-[142px] lg:h-[142px]"
            />
          </div>
          <div className="row-span-4 shadow-2xl shadow-black">
            <img
              src={lingam}
              alt=""
              className="w-full h-full lg:w-[142px] lg:h-[142px]"
            />
          </div>
          <div className="row-span-4 shadow-2xl shadow-black">
            <img
              src={lingam}
              alt=""
              className="w-full h-full lg:w-[142px] lg:h-[142px] "
            />
          </div>
        </div>

        <div class="col-span-12 md:col-span-5 mx-auto py-6 border-r pr-4 border-[#C0C0C0]">
          <div className="row-span-12 shadow-2xl shadow-black">
            <img
              src={rudraAbhishekPooja}
              alt=""
              className="w-full lg:w-[533px] lg:h-[489px] h-full border"
            />
          </div>
        </div>
        <div class="col-span-12 md:col-span-5 ">
          <div className="row-span-12 w-full">
            <div className="py-6 pr-10">
                <p className='text-sm text-[#B4B4B4]'>Category - Gemstone</p>
                <p className='text-lg text-[#F27806] font-semibold leading-10'>Pooja</p>
                <p className='text-md text-[#747474] font-medium'>About the Product</p>
                <p className='text-[#B4B4B4] text-base font-medium leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elitipsum dolor sit ametLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elitipsum dolor sit </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className='text-2xl text-[#5DC709] font-semibold text-center my-2'>Astro Disha ji has been Uploaded a Photos and Videos !</h3>

      <div className="flex flex-col md:flex-row my-2 w-[90%] mx-auto">
        <div className='w-1/2'>
        <h4 className='px-4 text-[#747474] font-medium'>Photos</h4>
        <div className="flex">
          <div className="p-4">
            <img src={lingam} alt="" className="w-auto h-auto md:h-[240px] object-cover" />
          </div>
          <div className="p-4">
            <img src={lingam} alt="" className="w-auto h-auto md:h-[240px] object-cover" />
          </div>
          <div className="p-4">
            <img src={lingam} alt="" className="w-auto h-auto md:h-[240px] object-cover" />
          </div>
        </div>
        </div>
       <div className='w-1/2'>
       <h4 className='px-4 text-[#747474] font-medium'>Videos</h4>
        <div className="flex">
          <div className="p-4">
          <video width="400" height="full"
           controls>
        <source src="myvid.mp4"
                type="video/mp4"/>
    </video>
          </div>
          <div className="p-4">
          <video width="400" height="full"
           controls>
        <source src="myvid.mp4"
                type="video/mp4"/>
    </video>
          </div>
          
        </div>
       </div>
      </div>
    </>
  )
}

export default PoojaCompleted