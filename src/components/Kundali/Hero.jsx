import React from "react";
import bannerwallet from "../../assets/image/bannerwallet.jpeg";
import bannerpatla from "../../assets/image/bannerpatla.jpg";
import Carousel from "./Carousel";
import googleplay from "../../assets/icons/googleplay.png";
import golGol from "../../assets/icons/golgol7.png";
import Rectangle from "../../assets/icons/Background2.png";
import "./heroStyle.css";

const slides = [bannerpatla];

function Hero() {
  return (
    // <div className="flex justify-center items-center h-full bg-gradient-to-r from-[#615F5DFA] to-[#000000]">

    //  <!--old-->
    //  <div className="flex justify-center items-center h-full bg-[rgba(0,0,0,0.9)]">
    //     <div className="relative w-full max-w-6xl my-4 md:my-6 lg:my-10 mx-4 md:mx-6 lg:mx-10 rounded-3xl overflow-hidden"
    //     style={{ boxShadow: "0 2px 5px rgba(150, 150, 150, 0.8), 0 -2px 5px rgba(150, 150, 150, 0.8)" }}
    //      >
    //       <Carousel autoSlide={true}>
    //         {slides.map((s, index) => (
    //           <img
    //             key={index}
    //             src={s}
    //             className="h-auto max-h-96 w-full object-cover object-center rounded-3xl"

    //             alt={`slide-${index}`}
    //           />
    //         ))}
    //       </Carousel>
    //     </div>
    //   </div>

    //  <!--NEW-->

    <div className="flex justify-center items-center h-full ">
      <div
        className="h-auto sm:h-[520px] md:h-[520px] lg:h-[520px] w-full relative overflow-hidden bg-[#F27806]"
        style={{
          paddingLeft: "85px",
          paddingRight: "85px",
          paddingTop: "20px",
          paddingBottom: "3px",
          backgroundImage: `url(${Rectangle})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Ensures the image is centered
        }}
      >
        <div className="flex justify-between items-center h-full w-full flex-col sm:flex-row">
          {/* Text Area - Takes 70% */}
          <div className="w-full sm:w-[70%] pb-8">
            <p
              className="text-[#FFFFFF] mb-5"
              style={{
                fontFamily: "Inter",
                fontSize: "55.82px",
                fontWeight: "600",
                lineHeight: "55.82px",
              }}
            >
              Free Online Kundli
            </p>
            <hr className="border boder-2 border-[#FFFFFF] w-[70%] mb-5" />
            <h3
              className="text-[#FFFFFF]"
              style={{
                fontFamily: "Inter",
                fontSize: "42.13px",
                fontWeight: "400",
                lineHeight: "1.51.39px", // Custom line height
              }}
            >
             Get your kundli within seconds
            </h3>

            {/* Button Area - Takes 30% */}
            <div className="w-full flex space-x-4 mt-3">
              {/* First Button */}
              <button
                className="w-[220px] bg-[#fff] text-black py-1 px-3 rounded-xl border-2 border-black"
                style={{ fontFamily: "Inter", fontWeight: "600" }}
              >
                Download Our App
              </button>

              {/* Second Button */}
              <button
                className="text-white py-1 px-3 rounded-lg"
                style={{ fontFamily: "Inter" }}
              >
                <img
                  src={googleplay}
                  alt="Logo"
                  className="h-[52px] w-[220px]"
                />
              </button>
            </div>
          </div>

          {/* Image Area - Takes 30% */}
          <div className="w-full sm:w-[30%] relative h-full">
            {/* Rectangle Background (unchanged dimensions) */}
            <div
              className="absolute top-0 left-1/2 h-[470px] w-[260px] sm:w-[260px] mt-[30px] bg-[#FFFFFF]"
              style={{
                borderTopLeftRadius: "100px",
                borderTopRightRadius: "100px",
                zIndex: 1, // Rectangle background below the rotating circle
                transform: "translateX(-50%)", // Ensure the rectangle is centered horizontally
              }}
            ></div>

            {/* Image Positioned Above the Background */}
            <img
              src={golGol}
              alt="Logo"
              className="absolute top-[70px]  w-[400px] transform -translate-x-1/2 -translate-y-1/2"
              style={{
                zIndex: 20, // Ensure the image is above the background and rectangle
                animation: "rotate 10s linear infinite", // Apply the rotate animation
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

{
  /* <>
  <div>
    <div className="flex justify-center items-center h-full">
      <div className="h-auto sm:h-[420px] md:h-[420px] lg:h-[420px] w-full relative overflow-hidden bg-[#EEEBE6] px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full px-4">
          <div>
            hii
          </div>
          <div className="absolute bottom-0 left-1/2 items-center transform -translate-x-1/2 bg-[#BFC9CD] h-[400px] w-[222px]" 
               style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}></div>
        </div>
      </div>
    </div>
  </div>
</> */
}

{
  /* <Carousel autoSlide={true}>
{slides.map((s, index) => (
  <img
    key={index}
    src={s}
    className="h-full w-full object-cover object-center"
    alt={`slide-${index}`}
  />
))}
</Carousel> */
}
