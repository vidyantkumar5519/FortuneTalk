import React from "react";
import orangerac from "../../assets/image/orangerac.png";
import ourPromis from "../../assets/image/ourPromis.png";
import group1 from "../../assets/image/group1.png";
import group2 from "../../assets/image/Group2 copy.png";
import group3 from "../../assets/image/group3.png";
import imojimo1 from "../../assets/image/imojimo1.png";
import imojimo2 from "../../assets/image/imojimo2.png";
import imojimo3 from "../../assets/image/imojimo3.png";

const OurPromiss = () => {
  return (
    <div>

    
    <div
      className="pt-8 pb-20 mb-6"
      style={{
        backgroundImage: `url(${ourPromis})`, // Use the imported image here
        backgroundSize: "cover", // Make the image cover the entire div
        backgroundPosition: "center", // Center the image
      }}
    >
      <div
        className="mx-auto max-w-7xl px-[60px] py-3 sm:px-[60px] lg:px-[60px] pb-8 bg-white"
        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
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
            Our Promise
          </h2>
        </div>
        <p
          className="text-[#000] mx-auto text-center item-center justify-center"
          style={{
            fontFamily: "Inter",
            fontSize: "22px",
            fontWeight: "500",
          }}
        >
          Top Astrologers. 24x7 customer support. Happy to help.
        </p>

        {/* Flex container with images aligned in one row */}
        <div className="flex justify-center space-x-8 mt-8 mb-10">
          <img
            src={group1}
            alt="Group 1"
            className="mx-auto mb-3"
           
          />
          <img
            src={group2}
            alt="Group 2"
            className="mx-auto mb-3"
           
          />
          <img
            src={group3}
            alt="Group 3"
            className="mx-auto mb-3"
           
          />
        </div>
      </div>
    </div>


    <div className="bg-[#F27806] px-20 py-10" style={{ marginTop: '30px' }}>
  <div className="flex justify-center space-x-20 mt-8 mb-10">
    
    {/* First Item */}
    <div className="text-center pr-8">
      <img
        src={imojimo1}
        alt="Group 1"
        className="mx-auto mb-4"
      />
      <p
        className="text-white"
        style={{
          fontFamily: "Inter",
          fontSize: "42px",
          fontWeight: "500",
        }}
      >
        2000
      </p>
      <p
        className="text-white"
        style={{
          fontFamily: "Inter",
          fontSize: "22px",
          fontWeight: "500",
        }}
      >
        Professional Astrologer
      </p>
    </div>

    {/* Vertical line */}
    <div className="border-r-2 border-white"></div>

    {/* Second Item */}
    <div className="text-center pr-8">
      <img
        src={imojimo2}
        alt="Group 2"
        className="mx-auto mb-4"
      />
      <p
        className="text-white"
        style={{
          fontFamily: "Inter",
          fontSize: "42px",
          fontWeight: "500",
        }}
      >
        2000
      </p>
      <p
        className="text-white"
        style={{
          fontFamily: "Inter",
          fontSize: "22px",
          fontWeight: "500",
        }}
      >
        Professional Astrologer
      </p>
    </div>

    {/* Vertical line */}
    <div className="border-r-2 border-white"></div>

    {/* Third Item */}
    <div className="text-center pr-8">
      <img
        src={imojimo3}
        alt="Group 3"
        className="mx-auto mb-4"
      />
      <p
        className="text-white"
        style={{
          fontFamily: "Inter",
          fontSize: "42px",
          fontWeight: "500",
        }}
      >
        2000
      </p>
      <p
        className="text-white"
        style={{
          fontFamily: "Inter",
          fontSize: "22px",
          fontWeight: "500",
        }}
      >
        Professional Astrologer
      </p>
    </div>

  </div>
</div>


    </div>
  );
};

export default OurPromiss;
