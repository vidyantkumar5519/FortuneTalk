import React, { useState } from "react";
import { Link } from "react-router-dom";

const ClassesNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="flex justify-around w-full bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border-none">
        <div
          className={`w-1/4 lg:border-r-2 border-[#B4B4B4] ${
            activeIndex === 0
              ? "bg-gradient-to-r from-[#F27806] to-[#E15602]"
              : ""
          }`}
        >
          <Link to="/courses" onClick={() => handleClick(0)}>
            <h3
              className={`text-[#F27806] text-center font-bold text-md lg:text-2xl  py-4 ${
                activeIndex === 0 ? "text-white" : "text-[#B8B8B8]"
              }`}
            >
              DemoClass
            </h3>
          </Link>
        </div>
        <div
          className={`w-1/4 lg:border-r-2 border-[#B4B4B4] ${
            activeIndex === 1 &&
            "bg-gradient-to-r from-[#F27806] to-[#E15602] text-white"
          }`}
        >
          <Link to="/current-courses" onClick={() => handleClick(1)}>
            <h3
              className={`text-[#F27806] text-center font-bold text-md lg:text-2xl  py-4 ${
                activeIndex === 1 ? "text-white" : "text-[#B8B8B8]"
              }`}
            >
              Live Class
            </h3>
          </Link>
        </div>
        <div
          className={`w-1/4 lg:border-r-2 border-[#B4B4B4] ${
            activeIndex === 2 &&
            "bg-gradient-to-r from-[#F27806] to-[#E15602] text-white"
          }`}
        >
          <Link to="/completed-courses" onClick={() => handleClick(2)}>
            <h3
              className={` text-center font-bold text-md lg:text-2xl  py-4 ${
                activeIndex === 2 ? "text-white" : "text-[#B8B8B8]"
              }`}
            >
              Workshop
            </h3>
          </Link>
        </div>
        <div
          className={`w-1/4 lg:border-r-2 border-[#B4B4B4] ${
            activeIndex === 2 &&
            "bg-gradient-to-r from-[#F27806] to-[#E15602] text-white"
          }`}
        >
          <Link to="/completed-courses" onClick={() => handleClick(2)}>
            <h3
              className={` text-center font-bold text-md lg:text-2xl  py-4 ${
                activeIndex === 2 ? "text-white" : "text-[#B8B8B8]"
              }`}
            >
              Teachers List
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ClassesNavbar;
