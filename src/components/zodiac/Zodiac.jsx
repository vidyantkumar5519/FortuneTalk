import React from "react";
import celander from "../../assets/icons/celander.png";
import z1 from "../../assets/image/z1.png"; // Aries
import z2 from "../../assets/image/z2.png"; // Taurus
import z3 from "../../assets/image/z3.png"; // Gemini
import z4 from "../../assets/image/z4.png"; // Cancer
import z5 from "../../assets/image/z5.png"; // Leo
import z6 from "../../assets/image/z6.png"; // Virgo
import z7 from "../../assets/image/z7.png"; // Libra
import z8 from "../../assets/image/z8.png"; // Scorpio
import z9 from "../../assets/image/z9.png"; // Sagittarius
import z10 from "../../assets/image/z10.png"; // Capricorn
import z11 from "../../assets/image/z11.png"; // Aquarius
import z12 from "../../assets/image/z12.png"; // Pisces

const Zodiac = () => {
  // Zodiac signs and their corresponding image sources with full month names
  const zodiacSigns = [
    { name: "Aries", img: z1, dates: "March 21 - April 19" },
    { name: "Taurus", img: z2, dates: "April 20 - May 20" },
    { name: "Gemini", img: z3, dates: "May 21 - June 20" },
    { name: "Cancer", img: z4, dates: "June 21 - July 22" },
    { name: "Leo", img: z5, dates: "July 23 - August 22" },
    { name: "Virgo", img: z6, dates: "August 23 - September 22" },
    { name: "Libra", img: z7, dates: "September 23 - October 22" },
    { name: "Scorpio", img: z8, dates: "October 23 - November 21" },
    { name: "Sagittarius", img: z9, dates: "November 22 - December 21" },
    { name: "Capricorn", img: z10, dates: "December 22 - January 19" },
    { name: "Aquarius", img: z11, dates: "January 20 - February 18" },
    { name: "Pisces", img: z12, dates: "February 19 - March 20" },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-[60px] py-3 sm:px-[60px] lg:px-[60px] mt-8">
        <div className="container">
          <div className="mt-0 mb-10 flex items-center">
            <span
              className="text-[#000] mx-auto justify-center leading-10"
              style={{
                fontFamily: "Inter",
                fontSize: "38px",
                fontWeight: "700",
              }}
            >
              Choose your Zodiac Sign
            </span>
          </div>
        </div>

        {/* Grid Layout for Zodiac Signs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Loop through the zodiac signs and display each item */}
          {zodiacSigns.map((zodiac, index) => (
            <div key={index} className="text-center">
              <img
                src={zodiac.img ?? z1}
                alt={zodiac.name}
                className="rounded-full w-28 h-28 mx-auto mb-3"
                style={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow
                }}
              />
              <h3 className="font-semibold text-xl">{zodiac.name}</h3>
              <p className="text-xs mt-3">
                <span>
                  <img src={celander} alt="Calendar" className="inline mr-1" />
                </span>
                {zodiac.dates}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Zodiac;
