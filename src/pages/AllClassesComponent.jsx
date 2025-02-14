import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllClassesComponent = ({ courseId }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="flex justify-around w-full bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border-none relative">
        <div
          className={`w-1/3 lg:border-r-2 border-[#B4B4B4] ${activeIndex === 0 ? "bg-gradient-to-r from-[#F27806] to-[#E15602]" : ""}`}
        >
          <Link to={`/courses-demo/${courseId}`} onClick={() => handleClick(0)}>
            <h3 className={`text-[#F27806] text-center font-bold text-md lg:text-2xl py-4 ${activeIndex === 0 ? "text-white" : "text-[#B8B8B8]"}`}>
              Demo Classes
            </h3>
          </Link>
          {/* {activeIndex === 0 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 
              border-l-[230px] border-r-[230px] border-t-[22px] 
              border-l-transparent border-r-transparent border-t-[#E15602]"></div>
          )} */}
        </div>
        <div
          className={`w-1/3 lg:border-r-2 border-[#B4B4B4] ${activeIndex === 1 ? "bg-gradient-to-r from-[#F27806] to-[#E15602]" : ""}`}
        >
          <Link to={`/courses-live/${courseId}`} onClick={() => handleClick(1)}>
            <h3 className={`text-[#F27806] text-center font-bold text-md lg:text-2xl py-4 ${activeIndex === 1 ? "text-white" : "text-[#B8B8B8]"}`}>
              Live Classes
            </h3>
          </Link>
          {/* {activeIndex === 1 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 
              border-l-[230px] border-r-[230px] border-t-[22px] 
              border-l-transparent border-r-transparent border-t-[#E15602]"></div>
          )} */}
        </div>
        <div
          className={`w-1/3 lg:border-r-2 border-[#B4B4B4] ${activeIndex === 2 ? "bg-gradient-to-r from-[#F27806] to-[#E15602]" : ""}`}
        >
          <Link to="/courses-workshops" onClick={() => handleClick(2)}>
            <h3 className={`text-[#F27806] text-center font-bold text-md lg:text-2xl py-4 ${activeIndex === 2 ? "text-white" : "text-[#B8B8B8]"}`}>
              Workshops
            </h3>
          </Link>
          {/* {activeIndex === 2 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 
              border-l-[230px] border-r-[230px] border-t-[22px] 
              border-l-transparent border-r-transparent border-t-[#E15602]"></div>
          )} */}
        </div>
        <div
          className={`w-1/3 lg:border-r-2 border-[#B4B4B4] ${activeIndex === 3 ? "bg-gradient-to-r from-[#F27806] to-[#E15602]" : ""}`}
        >
          <Link to="/courses-teachers-list" onClick={() => handleClick(3)}>
            <h3 className={`text-[#F27806] text-center font-bold text-md lg:text-2xl py-4 ${activeIndex === 3 ? "text-white" : "text-[#B8B8B8]"}`}>
              Teachers List
            </h3>
          </Link>
          {/* {activeIndex === 3 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 
              border-l-[230px] border-r-[230px] border-t-[22px] 
              border-l-transparent border-r-transparent border-t-[#E15602]"></div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default AllClassesComponent;
