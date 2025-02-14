import React from "react";
import { Link } from "react-router-dom";

import blog1 from "../../assets/icons/blog1.png";

const BlogCards = ({ displayName, language, profile_image, astro_id }) => {
  return (
    <>
      <div
        className="flex flex-col m-4 px-4 py-3 w-full mx-auto overflow-hidden rounded-lg border-[2px] border-[#F27806]"
        style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}
      >
        {/* Left Column: Image and Rating */}
        <div className=" flex flex-col  ">
          <img
            src={profile_image ?? blog1}
            alt={displayName}
            className="w-full h-full"
            style={{ borderRadius: "0px" }}
          />
          <div className="mt-4 flex items-center ">
            Donald Trump Kundli Analysis: His Political Career and Future ...
          </div>
          <div className="mt-4 flex justify-end items-end">Nov 10, 2024</div>
        </div>
      </div>
    </>
  );
};

export default BlogCards;
