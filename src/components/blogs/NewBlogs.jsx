import React from "react";
import wallet from "../../assets/icons/wallet.png";
import filter from "../../assets/icons/filter.png";
import sort from "../../assets/icons/sort.png";
import search from "../../assets/icons/search.png";
import BlogCards from "./BlogCards";
import { Link } from "react-router-dom";

const NewBlogs = ({ displayName, language, profile_image, astro_id }) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-[60px] py-3 sm:px-[60px] lg:px-[60px]">
      <div className="container">
              <div className="mt-0 mb-10 flex items-center">
                  <span className="text-[#000] mx-auto justify-center leading-10"   style={{
                fontFamily: "Inter",
                fontSize: "38px",
                fontWeight: "700",
              }}>Latest Blog</span>
              </div>
              <div className="text-blue flex justify-end cursor-pointer">
                  <Link to=" ">View all</Link>
              </div>
          </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <BlogCards />
          </div>
          <div>
            <BlogCards />
          </div>
          <div>
            <BlogCards />
          </div>
         
        </div>
        </div>

    </>
  );
};

export default NewBlogs;
