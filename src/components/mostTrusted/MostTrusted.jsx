import React from "react";
import orangerac from "../../assets/image/orangerac.png";

const MostTrusted = () => {
  return (
    <div className=" pt-8 pb-20  bg-white "   style={{   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2), 0px -4px 8px rgba(0, 0, 0, 0.2)"}} > 

<div className="mt-12 flex flex-col items-center justify-center mx-auto max-w-7xl">
        <h2
          className="text-[#000] mx-auto text-center text-[42px] leading-10 p-3"
          style={{
            fontFamily: "Inter",
            fontSize: "38px",
            fontWeight: "700",
          }}
        >
          Most Trusted Astrology Platform
        </h2>
        <p className="mt-7 text-lg "> FortuneTalk, as an online astrology platform, has set a benchmark in the industry. Your search for the best astrologer near me ends here. Love, marriage, job and professional uncertainty can hit you anytime. Reach out to FortuneTalk's astrology experts, who care about you and provide you assistance with full privacy. They are available 24x7 to provide accurate astrological solutions to all your concerns and problems. And that, too, in the comfort of your home or any place of your convenience. Get astrology predictions and other services for -</p>
      </div>

    <div
      className="mx-auto max-w-7xl px-[60px]  sm:px-[60px] lg:px-[60px]  bg-white"
    >
      

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

    <div className=" flex flex-col items-center justify-center mx-auto max-w-7xl">
        <p className=" text-lg"> To ensure that you have immediate solutions to your problems at the touch of your screen, FortuneTalk works hard to provide you with expertise, privacy, local astrologers and their numbers, customer satisfaction, all-day availability, along with multiple sessions. Take the leap of faith and enjoy the best astrology services with top-class features.</p>
      </div>
    </div>
  );
};

export default MostTrusted;
