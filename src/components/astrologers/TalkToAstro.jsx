import React from "react";
import { Link } from "react-router-dom";
import astrologer from "../../assets/image/astrologer.png";
import Rating from "./Rating";
import TalktoAstroCard from "./TalktoAstroCard";
import wallet from "../../assets/icons/wallet.png";
import filter from "../../assets/icons/filter.png";
import sort from "../../assets/icons/sort.png";
import search from "../../assets/icons/search.png";

const TalkToAstro = ({ displayName, language, profile_image, astro_id }) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-[60px] py-3 sm:px-[60px] lg:px-[60px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Talk To Astrologers Section */}
          <div
            className="mt-4 mb-2"
            style={{
              fontFamily: "Inter",
              fontSize: "32px", // Reduced font size
              fontWeight: "600",
            }}
          >
            Talk To Astrologers
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Wallet Button */}
            <div
              className="text-[#F27806] rounded-lg border-2 border-[#F27806] px-2 py-1 cursor-pointer 
          hover:text-[#F27806] hover:border-[#F27806]
          transition-all flex items-center space-x-2"
            >
              <img src={wallet} alt="Logo" className="h-[16px] w-[16]" />
              <span
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Wallet{" "}
              </span>
            </div>

            {/* Filter Button */}
            <div
              className="text-[#616161] rounded-lg border-2 border-[#616161] px-2 py-1 cursor-pointer 
          transition-all flex items-center space-x-2
          hover:text-[#F27806] hover:border-[#F27806]"
            >
              <img src={filter} alt="Logo" className="h-[16px] w-[16]" />
              <span
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Filter{" "}
              </span>
            </div>

            {/* Sort Button */}
            <div
              className="text-[#616161] rounded-lg border-2 border-[#616161] px-2 py-1 cursor-pointer 
          transition-all flex items-center space-x-2
          hover:text-[#F27806] hover:border-[#F27806]"
            >
              <img src={sort} alt="Logo" className="h-[16px] w-[16]" />
              <span
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                Sort{" "}
              </span>
            </div>
            {/* Search Button */}
            <div className="text-[#616161] rounded-lg border-2 border-[#616161] px-2 py-1 cursor-pointer transition-all flex items-center space-x-6">
              <input
                type="text"
                placeholder="Search Name..."
                className="text-[#616161] bg-transparent border-none outline-none w-full focus:ring-0"
                style={{
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              />
              <img src={search} alt="Logo" className="h-[16px] w-[16]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <TalktoAstroCard />
          </div>
          <div>
            <TalktoAstroCard />
          </div>
          <div>
            <TalktoAstroCard />
          </div>
          <div>
            <TalktoAstroCard />
          </div>
          <div>
            <TalktoAstroCard />
          </div>
          <div>
            <TalktoAstroCard />
          </div>
          <div>
            <TalktoAstroCard />
          </div>
          <div>
            <TalktoAstroCard />
          </div>
          <div>
            <TalktoAstroCard />
          </div>
          <div>
            <TalktoAstroCard />
          </div>
          <div>
            <TalktoAstroCard />
          </div>
          <div>
            <TalktoAstroCard />
          </div>
        </div>
        <Link to="/chatCallCard">
          <div className="flex justify-center mt-6">
            <div className="bg-gradient-to-r from-[#EC740C] to-[#D46003] text-white text-lg rounded-full px-6 py-3 cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:from-[#D46003] hover:to-[#EC740C] hover:scale-105">
              View More Astrologers
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default TalkToAstro;
