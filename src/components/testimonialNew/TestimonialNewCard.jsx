import React from "react";
import { Link } from "react-router-dom";
import workshop from "../../assets/icons/workshop.png";
import profile from "../../assets/icons/profo.png";
import whitestar from "../../assets/image/whitestar.png";

const TestimonialNewCard = ({
  displayName,
  language,
  workshop_image,
  profile_image,
  astro_id,
  rating
}) => {

    const renderStars = (rating) => {
        const maxRating = 5;
        return Array.from({ length: maxRating }, (_, index) => (
            <span
                key={index}
                className={`inline-block ${index < rating ? 'text-[#F27806]' : 'text-yellow-300'}`} // Updated color
                style={{ fontSize: '2.5rem' }} // Increased font size
            >
                &#9733; {/* Star character */}
            </span>
        ));
    };

  return (
    <>
      <div
        className="flex flex-col px-4 py-3 w-full mx-auto overflow-hidden rounded-lg border-[2px] border-[#F27806] bg-red"
        style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}
      >
        {/* Left Column: Image and Rating */}
        <div className=" flex flex-col  ">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={workshop_image ?? workshop}
              alt={displayName}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "2px solid white", // White border
                padding: "15px",
                marginTop: "-80px", // Space between image and border
              }}
            />
          </div>
          <div className="flex items-center justify-center mb-0 p-4">
                {renderStars(rating)}
            </div>
            <div>
            <p
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "18px", // Reduced font size
                    fontWeight: "600",
                  }}
                >
                  Astro Disha
                </p>
                <p> New Delhi, India</p>
                </div>
                <p> I recently had a session. I booked the session through the FortuneTalk app, and I can not even put into words how relieved I felt afterwards. Thank you for providing these amazing and genuine services.</p>
     
        </div>
      </div>
    </>
  );
};

export default TestimonialNewCard;
