import React from "react";
import bannerpatla from "../../assets/image/bannerpatla.jpg";
import horocircle from "../../assets/image/horocircle.png";
import Background from "../../assets/image/horobg.png";
import "./HeroHoroStyle.css";

const slides = [bannerpatla];

function HeroHoro() {
  return (
    <div className="flex justify-center items-center h-full ">
      <div
        className="h-auto sm:h-[520px] md:h-[520px] lg:h-[520px] w-full relative overflow-hidden bg-[#EEEBE6]"
        style={{
          paddingLeft: "85px",
          paddingRight: "85px",
          paddingTop: "20px",
          paddingBottom: "3px",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Ensures the image is centered
        }}
      >
        <div className="flex justify-between items-center h-full w-full flex-col sm:flex-row">
          {/* Text Area - Takes 70% */}
          <div className="w-full sm:w-[70%] pb-8">
          <h3
  className="text-[#fff]"
  style={{
    fontFamily: "Inter",
    fontSize: "43px",
    fontWeight: "600",
    lineHeight: "1.1", // Custom line height
  }}
>
  <span
    style={{
      borderBottom: "2px solid white", // Creates the underline
      paddingBottom: "5px", // Space between the text and the underline
    }}
  >
    What is Horoscope
  </span>
  {" or Rashifal?"}
</h3>


            <p
              className="text-[#fff] mt-5"
              style={{ fontFamily: "Inter", fontSize: "31px" }}
            >
              All you need to know about Horoscope and Zodiac Signs!
            </p>
          </div>

          {/* Image Area - Takes 30% */}
          <div className="w-full sm:w-[30%] relative h-full">
            {/* Rectangle Background (unchanged dimensions) */}
            <div
              className="absolute top-0 left-1/2 h-[470px] w-[260px] sm:w-[260px] mt-[30px] bg-[#fff]"
              style={{
                borderTopLeftRadius: "100px",
                borderTopRightRadius: "100px",
                zIndex: 1, // Rectangle background below the rotating circle
                transform: "translateX(-50%)", // Ensure the rectangle is centered horizontally
              }}
            ></div>

            {/* Image Positioned Above the Background */}
            <img
              src={horocircle}
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

export default HeroHoro;
