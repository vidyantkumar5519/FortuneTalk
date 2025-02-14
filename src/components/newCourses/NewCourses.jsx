import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Default styles for carousel
import { Carousel } from "react-responsive-carousel";
import "./NewCourse.css"; // Import the styles (if using external CSS file)
import NewCoursesCards from "./NewCoursesCards";

const NewCourses = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // Track selected index for the custom dots

  const handleChange = (index) => {
    setSelectedIndex(index); // Update index when carousel changes
  };

  const handleDotClick = (index) => {
    setSelectedIndex(index); // Update selected index when a dot is clicked
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-[60px] py-3 sm:px-[60px] lg:px-[60px]">
        <div className="container">
          <div className="mt-0 mb-10 flex items-center">
            <span
              className="text-[#000] ml-0 justify-start leading-10"
              style={{
                fontFamily: "Inter",
                fontSize: "38px",
                fontWeight: "700",
              }}
            >
              Explore Courses
            </span>
          </div>
          <div className="text-blue flex justify-end cursor-pointer">
            <Link to=" ">View all</Link>
          </div>
        </div>

        <div className="carousel-container">
          <Carousel
            selectedItem={selectedIndex} // Bind the selected index to the Carousel
            onChange={handleChange} // Update selected index when carousel changes
            showArrows={true}
            showIndicators={false} // Hide the default dots (pagination)
            infiniteLoop={true}
            showThumbs={false} // Hide the thumbnail dots (over the cards)
            dynamicHeight={false}
            swipeable={true}
            emulateTouch={true}
            interval={5000}
            showStatus={false} // Hide default status
            transitionTime={500}
          >
            {/* First slide with 3 workshop cards */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <NewCoursesCards />
              <NewCoursesCards />
              <NewCoursesCards />
            </div>

            {/* Second slide with more workshop cards */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <NewCoursesCards />
              <NewCoursesCards />
              <NewCoursesCards />
            </div>

            {/* Third slide with more workshop cards */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <NewCoursesCards />
              <NewCoursesCards />
              <NewCoursesCards />
            </div>
          </Carousel>
        </div>

        <div
          className="flex w-full items-center justify-center gap-2 mt-4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px", // Adjust gap between dots
            marginTop: "16px", // Adjust top margin
          }}
        >
          <button
            onClick={() => handleDotClick(0)}
            aria-label="goto slide 1"
            style={{
              padding: "0", // Ensure no extra padding around the dot
              backgroundColor: "transparent", // Keep button background transparent
              border: "none", // Remove button border
              cursor: "pointer",
              outline: "none", // Remove default button outline
            }}
          >
            <span
              style={{
                display: "block",
                width: "12px", // Fixed size for the dot
                height: "12px", // Fixed size for the dot
                borderRadius: "50%", // Make it circular
                backgroundColor:
                  selectedIndex === 0 ? "#F27806" : "transparent", // Orange for active dot
                border: "2px solid #F27806", // Orange border for both active and inactive dots
                transition: "background-color 0.3s, border-color 0.3s", // Smooth transition for background and border
              }}
            ></span>
          </button>

          <button
            onClick={() => handleDotClick(1)}
            aria-label="goto slide 2"
            style={{
              padding: "0", // Ensure no extra padding around the dot
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <span
              style={{
                display: "block",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor:
                  selectedIndex === 1 ? "#F27806" : "transparent",
                border: "2px solid #F27806",
                transition: "background-color 0.3s, border-color 0.3s",
              }}
            ></span>
          </button>

          <button
            onClick={() => handleDotClick(2)}
            aria-label="goto slide 3"
            style={{
              padding: "0", // Ensure no extra padding around the dot
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <span
              style={{
                display: "block",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor:
                  selectedIndex === 2 ? "#F27806" : "transparent",
                border: "2px solid #F27806",
                transition: "background-color 0.3s, border-color 0.3s",
              }}
            ></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewCourses;
