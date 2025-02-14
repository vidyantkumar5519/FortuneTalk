import React from "react";
import { Link } from "react-router-dom";
import kundli from "../../assets/image/kundli.png";
import panchang from "../../assets/image/panchang.png";
import horoscope from "../../assets/image/horoscope.png";
import weddingRing from "../../assets/image/weddingRings.png";

function FreeInsights() {
  return (
    <>
      <div className="mt-12 flex pb-4 border">
        <h2 className="text-[#F17806] mx-auto justify-center text-[32px] sm:text-[36px] md:text-[42px] leading-10">
          Free Insights
        </h2>
      </div>

      <div className="mx-auto max-w-full md:max-w-7xl lg:max-w-6xl border-[11px] border-white lg:h-[250px] flex px-2 lg:px-8 rounded-[50px] bg-gradient-to-r from-[#F27806] to-[#E15602]">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 items-center justify-center w-full p-5 pt-8 pb-8">
          <Link to="/daily-horoscope">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <div className="mx-auto flex h-[54px] w-[54px] lg:h-[108px] lg:w-[108px] items-center">
                <img src={horoscope} alt="" className="hover:scale-125 transition-transform duration-500" />
              </div>
              <h3 className="mt-2 text-lg sm:text-l md:text-l font-medium text-white text-center mb-2">
                Daily <br /> Horoscope
              </h3>
            </div>
          </Link>
          <Link to="/kundli-matching">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <div className="mx-auto flex h-[54px] w-[54px] lg:h-[108px] lg:w-[108px] items-center">
                <img src={weddingRing} alt="" className="hover:scale-125 transition-transform duration-500" />
              </div>
              <h3 className="mt-2 text-lg sm:text-l md:text-l font-medium text-white text-center mb-2">
                Kundli <br /> Matching
              </h3>
            </div>
          </Link>

          <Link to="/free-kundli">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <div className="mx-auto flex h-[54px] w-[54px] lg:h-[108px] lg:w-[108px] items-center">
                <img src={kundli} alt="" className="hover:scale-125 transition-transform duration-500" />
              </div>
              <h3 className="mt-2 text-lg sm:text-l md:text-l font-medium text-white text-center mb-2">
                Free <br /> Kundli
              </h3>
            </div>
          </Link>
          <Link to="/panchang-report">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <div className="mx-auto flex h-[54px] w-[54px] lg:h-[108px] lg:w-[108px] items-center">
                <img src={panchang} alt="" className="hover:scale-125 transition-transform duration-500" />
              </div>
              <h3 className="mt-2 text-lg sm:text-l md:text-l font-medium text-white text-center mb-2">
                Panchang <br /> Report
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FreeInsights;
