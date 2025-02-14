import React from "react";
import orangerac from "../../assets/image/orangerac.png";
import framebg from "../../assets/image/framebg.png";
import celander from "../../assets/icons/celander.png";
import z1 from "../../assets/image/z1.png";

const HoroCard = () => {
  const zodiacSigns = [
    { name: "Aries", img: z1, dates: "March 21 - April 19" },
  ];

  return (
    <div className="flex gap-2">
      {/* First div with 40% width */}
      <div className="w-2/5 flex flex-col justify-center items-center p-4">
        {/* Calendar and Image */}
        <div className="text-center">
          <div
            className="zodiac-img-container"
            style={{ position: "relative", display: "inline-block" }}
          >
            <img
              src={z1}
              alt="Aries"
              className="rounded-full w-54 h-54 mx-auto mb-3"
              style={{
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow
                transition: "transform 0.3s ease", // Smooth transition
              }}
              onMouseEnter={(e) => {
                e.target.style.border = "1px solid red"; // Add red border on hover
                e.target.style.transform = "translateY(-5px)"; // Slight translation
                e.target.style.transition =
                  "transform 0.3s ease, border 0.3s ease"; // Smooth transition
              }}
              onMouseLeave={(e) => {
                e.target.style.border = "none"; // Reset border when mouse leaves
                e.target.style.transform = "translateY(0)"; // Reset translation
              }}
            />
          </div>
          <h3 className="font-semibold text-xl">Aries</h3>
          <p className="text-xs mt-3 flex  items-center justify-center">
            {/* <img src={celander}  className=" w-[10px] h-[10px]" /> */}
            March 21 - April 19
          </p>
        </div>
      </div>

      {/* Second div with 60% width */}
      <div className="w-3/5">
        <div className="flex flex-wrap mt-8 mb-10">
          {/* Repeating Horoscope Cards */}
          {[
            "Yesterday's Horoscope",
            "Today's Horoscope",
            "Tomorrow's Horoscope",
            "Weekly Horoscope",
            "Monthly Horoscope",
            "Yearly Horoscope",
          ].map((horoscope, index) => (
            <div key={index} className="w-1/2 p-2 mt-4">
              <div
                style={{
                  boxShadow:
                    "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex">
                  {/* First div with 40% width (Image) */}
                  <div className="w-1/3 flex justify-center items-center">
                    <img src={orangerac} alt="image" className="w-20 h-20" />
                  </div>

                  {/* Second div with 60% width (Horoscope Text) */}
                  <div className="w-2/3 flex items-center justify-center text-lg bg-white py-1 px-2 ml-0">
                    {horoscope}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoroCard;
