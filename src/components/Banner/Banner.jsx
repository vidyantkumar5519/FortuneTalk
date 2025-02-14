import React from 'react'
import chat from "../../assets/icons/chat3.png";
import call from "../../assets/icons/phonecall.png";
const Banner = () => {
  return (
    <>
         <div className="pt-8 pb-20 px-[100px] py-3 sm:px-[100px] lg:px-[100px]">
      <div
        className="mx-auto max-w-6xl py-2 pb-8 bg-[#F27806]"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          borderRadius: "32px",
        }}
      >
        <div>
          <div className="mx-auto max-w-7xl px-[60px] py-3 sm:px-[60px] lg:px-[60px] mt-8">
            <h2
              className="text-[#fff] text-[32px] leading-10 p-3 flex align-center justify-center"
              style={{
                fontFamily: "Inter",
                fontSize: "33px",
                fontWeight: "400",
              }}
            >
              Connect with an Astrologer for accurate predictions
            </h2>
            <h2
              className="text-[#fff] text-[32px] leading-10 p-3 flex align-center justify-center"
              style={{
                fontFamily: "Inter",
                fontSize: "33px",
                fontWeight: "400",
              }}
            >
              Via
              <span className="text-[#fff] font-bold mx-2">Chat</span> and
              <span className="text-[#fff] font-bold mx-2">Call</span>
            </h2>
          </div>
        </div>

        {/* Centering the buttons */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          {/* Chat Button */}
          <div className="bg-[#fff7ef] text-black rounded-full border border-[#F27806] px-4 py-2 cursor-pointer hover:scale-105 transition-all flex items-center space-x-2">
            <img src={chat} alt="Logo" className="h-[20px] w-[20px]" />
            <span style={{ fontFamily: "Inter", fontSize: "18px", fontWeight: "600" }}>
              Chat With Astrologer
            </span>
          </div>

          {/* Call Button */}
          <div className="bg-[#fff7ef] text-black rounded-full border border-[#F27806] px-4 py-2 cursor-pointer hover:scale-105 transition-all flex items-center space-x-2">
            <img src={call} alt="Logo" className="h-[20px] w-[20px]" />
            <span style={{ fontFamily: "Inter", fontSize: "18px", fontWeight: "600" }}>
              Talk To Astrologer
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner