import React from 'react'
import gemstoneImage1 from '../assets/image/gemstoneImage1.png'
import SecureFooter from '../components/footer/SecureFooter'

const RattiAmethystCompleted = () => {
  return (
    <>
        <h2 className='lg:mx-28 my-10 text-xl text-[#F27806] font-semibold text-center lg:text-left'>15- Ratti Amethyst</h2>
     <div class="grid grid-cols-12 gap-4 lg:m-8 lg:pr-0 px-12 lg:mr-0">
        <div class="col-span-12 md:col-span-2 space-y-6 mx-auto">
          <div className="row-span-4 shadow-2xl shadow-black">
            <img
              src={gemstoneImage1}
              alt=""
              className="w-full h-full lg:w-[142px] lg:h-[142px]"
            />
          </div>
          <div className="row-span-4 shadow-2xl shadow-black">
            <img
              src={gemstoneImage1}
              alt=""
              className="w-full h-full lg:w-[142px] lg:h-[142px]"
            />
          </div>
          <div className="row-span-4 shadow-2xl shadow-black">
            <img
              src={gemstoneImage1}
              alt=""
              className="w-full h-full lg:w-[142px] lg:h-[142px] "
            />
          </div>
        </div>

        <div class="col-span-12 md:col-span-5 mx-auto lg:border-r lg:pr-4 lg:border-[#C0C0C0]">
          <div className="row-span-12 shadow-2xl shadow-black">
            <img
              src={gemstoneImage1}
              alt=""
              className="w-full lg:w-[533px] lg:h-[489px] h-full border"
            />
          </div>
        </div>
        <div class="col-span-12 md:col-span-5 relative">
          <div className="row-span-12 w-full">
            <div className=" pr-10">
                <p className='text-sm text-[#B4B4B4]'>Category - Gemstone</p>
                <p className='text-lg text-[#F27806] font-semibold leading-10'>Gemstone</p>
                <p className='text-md text-[#747474] font-medium'>About the Product</p>
                <p className='text-[#B4B4B4] text-base font-medium leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elitipsum dolor sit ametLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elitipsum dolor sit </p>
            </div>
          </div>

            <div className="lg:absolute lg:-top-14 lg:right-0 text-center bg-[#F27806] p-4 rounded-l-full rounded-r-full lg:rounded-r-none m-5 lg:m-0 ">
                <p className='px-4 text-white text-xl font-semibold '>completed</p>
            </div>
        </div>
      </div>
      <SecureFooter/>
    </>
  )
}

export default RattiAmethystCompleted