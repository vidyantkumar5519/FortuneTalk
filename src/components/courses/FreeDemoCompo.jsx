import React from "react";
import googleplay from "../../assets/icons/googleplay.png";
import golGol from "../../assets/icons/golGol.png";
import Background from "../../assets/icons/Background.png";
import babaji from "../../assets/icons/babaji.png";
import yellow from "../../assets/icons/yellow.png";

function FreeDemoCompo() {
  return (
    <div className="flex justify-center items-center h-full pt-[30px]">
      <div
        className="h-auto sm:h-[520px] md:h-[520px] lg:h-[520px] w-full relative overflow-hidden bg-[#fff]"
        style={{
          paddingLeft: "85px",
          paddingRight: "85px",
          paddingTop: "20px",
          paddingBottom: "3px",
        }}
      >
        <div className="flex justify-between items-center h-full w-full flex-col sm:flex-row">
          {/* Text Area - Takes 70% */}
          <div className="w-full sm:w-[70%] pb-8">
            <h3
              className="text-[#000]"
              style={{
                fontFamily: "Inter",
                fontSize: "53px",
                fontWeight: "600",
                lineHeight: "1.7", // Custom line height
              }}
            >
              Book Your{" "}
              <span className="text-[#F27806] relative inline-block">
                Free Demo
                <img
                  src={yellow}
                  alt="Logo"
                  className="absolute bottom-[-22px] left-3"
                  style={{
                    height: "60px",
                    width: "220px",
                  }}
                />
              </span>{" "}
              Class
            </h3>
            <p
              className="text-[#000] mb-5"
              style={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              100% Placement
            </p>

            {/* Button Area - Takes 30% */}
            <div className="w-full flex space-x-4 mt-3">
              {/* First Button */}
              <button
                className="w-[220px] bg-[#F27806] text-white py-4 px-4 rounded-xl "
                style={{ fontFamily: "Inter", fontWeight: "600" }}
              >
                Book a free demo
              </button>
            </div>
          </div>

          {/* Image Area - Takes 30% */}
          <div className="w-full sm:w-[30%] relative h-full">
            <div>
              <img src={babaji} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeDemoCompo;
