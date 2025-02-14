import React from "react";
import ic1 from "../../assets/image/ic1.png";
import ic3 from "../../assets/image/ic3.png";
import ic2 from "../../assets/image/ic2.png";
import ic4 from "../../assets/image/ic4.png";
import rectick from "../../assets/image/rectick.png";
import AccordionUsage from "../../pages/FaqSection";

const ConnectWithAstro = () => {
  return (
    <div
      className="pt-8 pb-20 bg-white"
      style={{
        boxShadow:
          "0px 4px 8px rgba(0, 0, 0, 0.2), 0px -4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="mt-12 flex flex-col items-center justify-center mx-auto max-w-7xl">
        <h2
          className="text-[#000] mx-auto text-center text-[42px] leading-10 p-3"
          style={{
            fontFamily: "Inter",
            fontSize: "38px",
            fontWeight: "700",
          }}
        >
          Connect With Astrologers
        </h2>
        <p className="mt-7 text-lg">
          Talk and take guidance from our experienced astrologers from India or
          other parts of the world at the need of the hour with just your phone.
          Get your problems solved with accurate horoscope predictions in
          English, Hindi, or any other regional Indian languages. Just follow
          these simple steps.
        </p>
      </div>

      <div className="mx-auto px-[60px] sm:px-[60px] lg:px-[60px] bg-white">
        {/* Grid container with 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mb-10">
          {/* Card 1 */}
          <div
            className="px-5 py-5 rounded-xl"
            style={{
              boxShadow:
                "0px 4px 8px rgba(0, 0, 0, 0.1), 0px -4px 8px rgba(0, 0, 0, 0.1), 4px 0px 8px rgba(0, 0, 0, 0.1), -4px 0px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="bg-[#F27806] rounded-lg py-3 flex items-center justify-center shadow-lg">
              <img src={ic1} alt="Image" />
            </div>
            <p className="mt-4">
              Connect and chat live with famous astrologers who will solve your
              problems, answer your queries, and offer astrology tips for all
              individual problems and issues.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="px-5 py-5 rounded-xl"
            style={{
              boxShadow:
                "0px 4px 8px rgba(0, 0, 0, 0.1), 0px -4px 8px rgba(0, 0, 0, 0.1), 4px 0px 8px rgba(0, 0, 0, 0.1), -4px 0px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="bg-[#F27806] rounded-lg py-3 flex items-center justify-center shadow-lg">
              <img src={ic3} alt="Image" />
            </div>
            <p className="mt-4">
              Connect and chat live with famous astrologers who will solve your
              problems, answer your queries, and offer astrology tips for all
              individual problems and issues.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="px-5 py-5 rounded-xl"
            style={{
              boxShadow:
                "0px 4px 8px rgba(0, 0, 0, 0.1), 0px -4px 8px rgba(0, 0, 0, 0.1), 4px 0px 8px rgba(0, 0, 0, 0.1), -4px 0px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="bg-[#F27806] rounded-lg py-3 flex items-center justify-center">
              <img src={ic2} alt="Image" />
            </div>
            <p className="mt-4">
              Connect and chat live with famous astrologers who will solve your
              problems, answer your queries, and offer astrology tips for all
              individual problems and issues.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="px-5 py-5 rounded-xl"
            style={{
              boxShadow:
                "0px 4px 8px rgba(0, 0, 0, 0.1), 0px -4px 8px rgba(0, 0, 0, 0.1), 4px 0px 8px rgba(0, 0, 0, 0.1), -4px 0px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="bg-[#F27806] rounded-lg py-3 flex items-center justify-center shadow-lg">
              <img src={ic4} alt="Image" />
            </div>
            <p className="mt-4">
              Connect and chat live with famous astrologers who will solve your
              problems, answer your queries, and offer astrology tips for all
              individual problems and issues.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto max-w-7xl">
        <p className="text-lg">
          Connect and chat live with famous astrologers who will solve your
          problems, answer your queries, and offer astrology tips for all
          individual problems and issues.
        </p>
      </div>

    

    </div>

  );
};

export default ConnectWithAstro;
