import React from "react";
import orangerac from "../../assets/image/orangerac.png";
import framebg from "../../assets/image/framebg.png";

const WhyChooseUs = () => {
  return (
    <div className=" pt-8 pb-20 mb-6 "  style={{
      backgroundImage: `url(${framebg})`, // Use the imported image here
      backgroundSize: "cover", // Make the image cover the entire div
      backgroundPosition: "center", // Center the image
    }}> 

   
    <div
      className="mx-auto max-w-7xl px-[60px] py-3 sm:px-[60px] lg:px-[60px] pb-8   bg-white"
      style={{  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="mt-12 flex flex-col items-center justify-center">
        <h2
          className="text-[#000] mx-auto text-center text-[42px] leading-10 p-3"
          style={{
            fontFamily: "Inter",
            fontSize: "38px",
            fontWeight: "700",
          }}
        >
          Why Talk To Our Astrologers?
        </h2>
      </div>

      {/* Flex container with equal space between the items */}
      <div className="flex flex-wrap mt-8 mb-10">
        <div className="w-1/2 p-2 mt-4">
          <div
            style={{
              boxShadow:
                "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex">
              {/* First div (takes 3 parts) */}
              <div className="flex-3">
                <img src={orangerac} alt="image" className="w-20" />
              </div>

              {/* Second div (takes 9 parts) */}
              <div className="flex-9 flex items-center justify-center text-xl bg-white py-4 px-20 ml-10">
                1500+ expert astrologers
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-2 mt-4">
          <div
            style={{
              boxShadow:
                "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex">
              {/* First div (takes 3 parts) */}
              <div className="flex-3">
                <img src={orangerac} alt="image" className="w-20" />
              </div>

              {/* Second div (takes 9 parts) */}
              <div className="flex-9 flex items-center justify-center text-xl bg-white ml-10">
                Get a better understanding & guidance
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-2 mt-4">
          <div
            style={{
              boxShadow:
                "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex">
              {/* First div (takes 3 parts) */}
              <div className="flex-3">
                <img src={orangerac} alt="image" className="w-20" />
              </div>

              {/* Second div (takes 9 parts) */}
              <div className="flex-9 flex items-center justify-center text-xl bg-white py-4 px-20 ml-10">
                Instant solutions on the phone
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-2 mt-4">
          <div
            style={{
              boxShadow:
                "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex">
              {/* First div (takes 3 parts) */}
              <div className="flex-3">
                <img src={orangerac} alt="image" className="w-20" />
              </div>

              {/* Second div (takes 9 parts) */}
              <div className="flex-9 flex items-center justify-center text-xl bg-white py-4 px-20 ml-10">
                Private and confidential
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-2 mt-4">
          <div
            style={{
              boxShadow:
                "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex">
              {/* First div (takes 3 parts) */}
              <div className="flex-3">
                <img src={orangerac} alt="image" className="w-20" />
              </div>

              {/* Second div (takes 9 parts) */}
              <div className="flex-9 flex items-center justify-center text-xl bg-white ml-10">
                Live astrology consultation anytime, anywhere
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-2 mt-4">
          <div
            style={{
              boxShadow:
                "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex">
              {/* First div (takes 3 parts) */}
              <div className="flex-3">
                <img src={orangerac} alt="image" className="w-20" />
              </div>

              {/* Second div (takes 9 parts) */}
              <div className="flex-9 flex items-center justify-center text-xl bg-white ml-10">
                Instant solutions in difficult time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyChooseUs;
