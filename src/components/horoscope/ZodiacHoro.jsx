import React from "react";
import orangerac from "../../assets/image/orangerac.png";
import framebg from "../../assets/image/framebg.png";
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

const ZodiacHoro = () => {
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
    <div
      className=" pt-8 pb-20   px-[60px] py-3 sm:px-[60px] lg:px-[60px]"
      style={{
        backgroundImage: `url(${framebg})`, // Use the imported image here
        backgroundSize: "cover", // Make the image cover the entire div
        backgroundPosition: "center", // Center the image
      }}
    >
      <div className="mt-4 flex flex-col px-[60px] py-3 sm:px-[60px] lg:px-[60px]">
        <h2
          className="text-[#000] text-[32px] leading-10 p-3"
          style={{
            fontFamily: "Inter",
            fontSize: "38px",
            fontWeight: "600",
          }}
        >
          What is Horoscope or Rashifal?
        </h2>
        <p
          className="text-[#000] text-[32px] leading-10 p-3"
          style={{
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: "500",
          }}> A horoscope or rashifal is an astrological chart or diagram that shows the positions of the Sun, Moon, and planets, astrological aspects, and sensitive angles at the time of an event. </p>
      </div>

      <div
        className="mx-auto max-w-7xl  py-2  pb-8 bg-white"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          borderRadius: "32px", // Apply your desired border radius
        }}
      >
        <div>
          <div className="mx-auto max-w-7xl px-[60px] py-3 sm:px-[60px] lg:px-[60px] mt-8">
            {/* Grid Layout for Zodiac Signs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {/* Loop through the zodiac signs and display each item */}
              {zodiacSigns.map((zodiac, index) => (
                <div key={index} className="text-center">
                  <div
                    className="zodiac-img-container"
                    style={{ position: "relative", display: "inline-block" }}
                 
                  >
                    <img
                      src={zodiac.img ?? z1}
                      alt={zodiac.name}
                      className="rounded-full w-28 h-28 mx-auto mb-3"
                      style={{
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow
                        transition: "transform 0.3s ease", // Ensure the image has a smooth transition
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.border = "1px solid red"; // Add red border on hover
                        e.target.style.transform = "translateY(-5px)"; // Slightly translate the image
                        e.target.style.transition =
                          "transform 0.3s ease, border 0.3s ease"; // Smooth transition
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.border = "none"; // Remove border when mouse leaves
                        e.target.style.transform = "translateY(0)"; // Reset translation
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-xl">{zodiac.name}</h3>
                  <p className="text-xs mt-3">
                    <span>
                      <img
                        src={celander}
                        alt="Calendar"
                        className="inline mr-1"
                      />
                    </span>
                    {zodiac.dates}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacHoro;
