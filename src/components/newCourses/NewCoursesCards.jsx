import React from "react";
import { Link } from "react-router-dom";
import workshop from "../../assets/icons/workshop.png";
import profile from "../../assets/icons/profo.png";
import courseUncle from "../../assets/image/pandit3.png";
import hunper from "../../assets/image/100per.png";
import courserec from "../../assets/image/courserec.png";
import arrowsswip from "../../assets/image/arrowsswip.png";
import coursecircle from "../../assets/image/coursecircle.png";
import coursebg from "../../assets/image/coursebg.png";

const NewCoursesCards = ({
  displayName,
  language,
  workshop_image,
  profile_image,
  astro_id,
}) => {
  return (
    <>
      <div
        className="m-4 mx-auto overflow-hidden rounded-lg pt-10"
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          backgroundImage: `url(${coursebg ?? workshop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          position: "relative", // added to manage absolute positioning inside the card
        }}
      >
        <div className="flex mt-20">
          {/* Left Column: text*/}
          <div
            className="flex flex-col items-start space-y-2 px-4 py-3"
            style={{
              zIndex: 2,
              position: "relative",
              whiteSpace: "nowrap", // ensures the text doesn't wrap
            }}
          >
            <div className="bg-[#F27806] text-white font-small rounded py-1 px-4">
              Courses
            </div>
            <div className="bg-[#F27806] text-white rounded p-2">
              Palmistry Reading
            </div>
            <div
              className="bg-[#fff] font-bold text-black rounded p-2 flex items-center space-x-2 shadow-md"
              style={{
                width: "max-content", // makes the div width adjust to content
                position: "relative",
                zIndex: 3,
              }}
            >
              <img
                src={hunper ?? workshop}
                alt={displayName}
                className="w-8 h-8"
              />
              <span>100% Placement</span>
            </div>
            <div
              className="bg-[#F27806] text-white rounded p-2"
              style={{
                width: "max-content", // ensures the width adjusts to the text content
                position: "relative",
                zIndex: 2,
              }}
            >
              Price ₹ 199
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex flex-col items-end space-y-1 flex-grow">
            <div className="flex-grow mt-auto">
              <img
                src={courseUncle ?? workshop}
                alt={displayName}
                className="w-full h-[11rem]"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Explore Courses and Swipe */}
        <div
          className="flex justify-center items-center space-x-2 px-4 py-3"
          style={{
            position: "relative",
            zIndex: 2, // ensures it's above the background but behind other text
          }}
        >
          <div
            className="bg-[#F27806] text-white font-small rounded py-1 px-4"
            style={{
              width: "max-content", // adjust width to content
              position: "relative",
              zIndex: 2,
            }}
          >
            Explore Courses
          </div>
          <div
            className="bg-[#F27806] text-white font-small rounded py-1 px-4 flex items-center"
            style={{
              width: "max-content", // adjust width to content
              position: "relative",
              zIndex: 2,
            }}
          >
            <p className="flex items-center">
              Swipe
              <span className="flex items-center">
                <img
                  src={arrowsswip ?? workshop}
                  alt={displayName}
                  style={{ width: "20px", height: "10px" }}
                  className="ml-2"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCoursesCards;
