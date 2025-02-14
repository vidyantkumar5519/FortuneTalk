import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as CoursesAction from "../redux/Actions/courseActions";
import { connect } from "react-redux";

const LearnAndEarnPageComponent = ({ dispatch, type }) => {
  console.log(type, 'type')
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0); // Default to "Courses"


  // useEffect(()=>{
  //   if(type === 'courses'){
  //     setActiveIndex(0)
  //   }
  // }, [type])

  const handleClick = (index) => {
    setActiveIndex(index);
    if (index === 1) {
      dispatch(CoursesAction.getInitiatedPaymentOfLiveClass());
    }
  };

  return (
    <div className="flex justify-around w-full bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border-none">
      {["Courses", "Current Courses", "Completed Courses"].map((label, index) => (
        <div
          key={index}
          className={`relative w-1/3 lg:border-r-2 border-[#B4B4B4] ${activeIndex === index
            ? "bg-gradient-to-b from-[#F27806] to-[#E15602] text-white"
            : ""
          }`}
        >
          <Link to={`/${label.replace(" ", "-").toLowerCase()}`} onClick={() => handleClick(index)}>
            <h3
              className={`text-center font-bold text-md lg:text-2xl py-4 ${activeIndex === index ? "text-white" : "text-[#B8B8B8]"}`}
            >
              {label}
            </h3>
          </Link>
          {/* {activeIndex === index && (
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 
              border-l-[230px] border-r-[230px] border-t-[22px] 
              border-l-transparent border-r-transparent border-t-[#E15602]"></div>
          )} */}
         
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(LearnAndEarnPageComponent);
