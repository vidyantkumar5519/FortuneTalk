import React from 'react'
import {Link} from 'react-router-dom'
import gemstoneImage1 from "../assets/image/gemstoneImage1.png";
import CustomerReviewCard from '../components/customer-review/CustomerReviewCard';
import GetInTouch from '../components/getInTouch/GetInTouch';
import SecureFooter from '../components/footer/SecureFooter';

const RattiAmethyst = () => {
  return (
    <div className='bg-[#FFF0E0]'>
     <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border">
            <h3 className="text-[#848484] text-center text-lg py-4 shadow-xl font-semibold">15 Ratti Amethyst</h3>
        </div>

        <div class="grid grid-cols-12 gap-4 lg:p-8 lg:pr-0 my-4 mx-12 lg:mr-0">
        <div class="col-span-12 md:col-span-2 space-y-6 mx-auto py-6">
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

        <div class="col-span-12 md:col-span-5 space-y-6 mx-auto py-6">
          <div className="row-span-12 shadow-2xl shadow-black">
            <img
              src={gemstoneImage1}
              alt=""
              className="w-full lg:w-[533px] lg:h-[489px] h-full border"
            />
          </div>
        </div>
        <div class="col-span-12 md:col-span-5 flex items-center justify-center">
          <div className="row-span-12 w-full">
            <div className="w-full rounded-l-full shadow-2xl bg-[#F8F8F8] my-4">
                <div className="flex flex-col p-10 ml-10 items-start space-y-2">
                    <p className="text-[#8B8787] text-md font-semibold">Category - Book a Pooja</p>
                    <h3 className="text-2xl font-bold text-[#F27806]">15 Ratti Amethyst</h3>
                    <p > <span className="text-xl font-bold"> ₹6750</span> <s className="text-[#8B8787]">7500</s> <span className="text-red-700 font-bold">10% Off</span></p>
                    <button className="w-auto lg:2/5 flex rounded-[100px] border-0 bg-gradient-to-r from-[#F77C02] to-[#E15602] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl"><Link to='/address-details'>Book Now</Link></button>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 mx-6 lg:mx-12">
        <h3 className="text-2xl text-[#747474] font-semibold mb-2">About the Product</h3>
        <p className="text-[#B4B4B4] leading-8">Navagraha Pooja is a revered Hindu ritual dedicated to the nine celestial planets. This sacred practice involves the worship of planetary deities to seek their blessings and harmonize their influences on one's life. It is performed with devotion and precision, often guided by astrological considerations, and is known for its profound spiritual significance.
Benefits - Performing Navagraha Pooja yields numerous advantages. It helps balance the effects of planetary positions, reducing negative impacts and enhancing positive ones for overall well-being. Additionally, it promotes mental clarity and emotional stability, aiding in decision-making and reducing mental distress. This ritual is believed to positively influence various aspects of life, including career, finances, and relationships, leading to greater prosperity. Moreover, Navagraha Pooja provides spiritual protection, offering a shield against malefic forces and instilling a deep sense of security.</p>
      </div>

      <div className="bg-white">
      <div className='p-8 mx-6 lg:mx-12 '>
        <h3 className='text-2xl text-[#9B9696]'>Customer Review</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div ><CustomerReviewCard/> </div>
    <div ><CustomerReviewCard/> </div>
    <div ><CustomerReviewCard/> </div>
    <div ><CustomerReviewCard/> </div>
    
</div>

      </div>
      </div>
      <GetInTouch/>
      <SecureFooter/>
    </div>
  )
}

export default RattiAmethyst