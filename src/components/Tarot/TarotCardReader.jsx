import React from "react";
import { Link } from "react-router-dom";
import TalkToAstroCard from "../astrologers/TalktoAstroCard";
const TarotCardReader = () => {
  return (
    <>
      <div className="relative -mt-40 w-full bg-[#F27806] py-20">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mt-32">
            CONSULT TAROT READERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white rounded-2xl py-6 mt-6">
            {/* Add reader cards here */}
            <TalkToAstroCard />
            <TalkToAstroCard />
            <TalkToAstroCard />
            <TalkToAstroCard />
            <TalkToAstroCard />
            <TalkToAstroCard />
            <TalkToAstroCard />
            <TalkToAstroCard />
            <TalkToAstroCard />
          </div>
          <Link to="/chatCallCard">
            <div className="flex justify-center mt-6">
              <div className="bg-gradient-to-r from-[#EC740C] to-[#D46003] text-white text-lg rounded-full px-6 py-3 cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:from-[#D46003] hover:to-[#EC740C] hover:scale-105 border-2 border-white">
                View More Astrologers
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TarotCardReader;
