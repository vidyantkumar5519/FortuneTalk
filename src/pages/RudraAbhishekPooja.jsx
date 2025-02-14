import React from "react";
import {Link} from 'react-router-dom'
import iconImage from "../assets/image/astrologerIcon.jpg";
import lingam from "../assets/image/lingam.png";
import rudraAbhishekPooja from "../assets/image/rudraAbhishekPooja.jpg";
import GetInTouch from "../components/getInTouch/GetInTouch";
import Footer from "../components/footer/Footer";
const RudraAbhishekPooja = () => {
  return (
    <div className="bg-[#FFF0E0]">
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border">
        <h3 className="text-[#848484] text-center text-lg py-4 shadow-xl">
          Rudra Abhishek Pooja Details
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row p-8 border-b border-black">
        <div className="w-full lg:w-1/2 p-8 mx-6 lg:mx-12 lg:mr-20 my-6">
          <h3 className="text-[#747474] text-2xl font-semibold">
            Problems you are facing
          </h3>
          <p className="text-[#B4B4B4] text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet
          </p>
        </div>
        <liv className="w-full my-6 lg:w-1/2">
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

      <div class="grid grid-cols-12 gap-4 lg:p-8 lg:pr-0 my-4 mx-12 lg:mr-0">
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

        <div class="col-span-12 md:col-span-5 space-y-6 mx-auto py-6">
          <div className="row-span-12 shadow-2xl shadow-black">
            <img
              src={rudraAbhishekPooja}
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
                    <h3 className="text-2xl font-bold text-[#F27806]">Navgraha Pooja</h3>
                    <p > <span className="text-xl font-bold"> ₹6750</span> <s className="text-[#8B8787]">7500</s> <span className="text-red-700 font-bold">10% Off</span></p>
                    <button className="w-auto lg:2/5 flex rounded-[100px] border-0 bg-gradient-to-r from-[#F77C02] to-[#E15602] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl"><Link to='/payment-information'>Book Now</Link></button>
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

      <GetInTouch />
      <Footer/>
    </div>
  );
};

export default RudraAbhishekPooja;
