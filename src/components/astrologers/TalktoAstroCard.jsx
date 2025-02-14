import React from "react";
import { Link } from "react-router-dom";
import astrologer from "../../assets/image/astrologer.png";
import Rating from "./Rating";

const TalktoAstroCard = ({ displayName, language, profile_image, astro_id }) => {
  return (
    <>
      <div
        className="flex m-4 px-4 py-3 w-[360px] mx-auto xl:w-[370px] overflow-hidden rounded-lg relative border-[2px] border-[#F27806]"
        style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}
      >
        {/* Left Column: Image and Rating */}
        <div className="flex-shrink-0 w-[130px] flex flex-col justify-center items-center">
          <img
            src={profile_image ?? astrologer}
            alt={displayName}
            className="w-auto h-[130px] object-cover rounded-full border-[2px] border-[#F27806]"
          />
          <div className="mt-1 flex items-center space-x-1">
            <Rating />
            <span>(3)</span>
          </div>
        </div>

        {/* Right Column: Name, Expertise, Price and Button */}
        <div className="flex-grow ml-6">
          <div className="flex mt-2">
            <h2
              className="text-xl font-medium text-[#F27806]"
              style={{
                fontFamily: "Inter",
                fontSize: "22px", // Reduced font size
                fontWeight: "500",
                lineHeight: "1.4",
              }}
            >
              {displayName ?? "Astro Pankaj"}
            </h2>
          </div>

          <div className="mt-2 text-[#9B9696]">
            <p
              className="text-sm" // Reduced font size
              style={{
                fontFamily: "Inter",
                fontSize: "14px", // Reduced font size
                lineHeight: "1.4",
              }}
            >
              Expertise
            </p>
            <p
              className="text-sm" // Reduced font size
              style={{
                fontFamily: "Inter",
                fontSize: "14px", // Reduced font size
                lineHeight: "1.4",
              }}
            >
              Expertise
            </p>
            <p
              className="text-sm text-[#000]"
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "15px", // Reduced font size
                lineHeight: "1.4",
              }}
            >
              {language ?? "Hindi, English"}
            </p>
            <p
              className="text-sm text-[#F27806]"
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "15px", // Reduced font size
                lineHeight: "1.2",
              }}
            >
              Vedic, Numerology
            </p>
          </div>

          {/* Price and Chat Button */}
          <div className="flex items-center  mt-3 space-x-10">
            <div
              className="text-black"
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "16px", // Reduced font size
              }}
            >
              ₹ 42/min
            </div>
            <Link to="">
              <button
                type="button"
                className="rounded-full bg-[#2EB72E] w-auto md:w-auto px-4 py-1 text-md font-semibold text-white shadow-sm"
                style={{
                  alignSelf: "flex-end", // Ensure the button is aligned to the right
                }}
              >
                Chat
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalktoAstroCard;
