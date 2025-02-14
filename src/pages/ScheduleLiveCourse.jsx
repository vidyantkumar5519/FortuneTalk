import React from "react";
import liveClassImage from "../assets/image/liveClassImage.png";
import cloudDownloadIcon from "../assets/image/cloudDownloadIcon.png";
import laptopMobileIcon from "../assets/image/laptopMobileIcon.png";
import keyIcon from "../assets/image/keyIcon.png";
import certificateIcon from "../assets/image/certificateIcon.png";
import GetInTouch from "../components/getInTouch/GetInTouch";
import SecureFooter from "../components/footer/SecureFooter";
const ScheduleLiveCourse = () => {
  return (
    <>
      <div className="w-[90%] mx-auto my-8">
        <div className="flex flex-col lg:flex-row">
          <div>
            <img
              src={liveClassImage}
              alt=""
              className="w-full lg:w-[842px] h-auto rounded-3xl object-cover"
            />
            <div className="flex justify-center items-center py-4 space-x-4">
              <p className="text-3xl font-semibold">₹14,199</p>
              <s className="text-lg text-[#DF5202]">₹18,199</s>
              <button className=" flex justify-center lg:w-[440px] rounded-[52px] border-0 bg-[#F27806] py-3 px-16 text-lg text-white text-center  focus:outline-none hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
          <div className="mx-10">
            <p className="text-md my-2">(1 month course)</p>
            <p className="text-xl font-medium mb-4">This course includes</p>
            <div className="flex items-center space-x-6 px-4 py-2">
              <img
                src={cloudDownloadIcon}
                alt=""
                className="w-9 h-9 object-cover"
              />
              <p className="text-[#9B9696] font-semibold">
                9.5 hours on-demand video
              </p>
            </div>
            <div className="flex  items-center space-x-6 px-4 py-2">
              <img
                src={cloudDownloadIcon}
                alt=""
                className="w-9 h-9 object-cover"
              />
              <p className="text-[#9B9696] font-semibold">Assignments</p>
            </div>
            <div className="flex items-center space-x-6 px-4 py-2">
              <img
                src={cloudDownloadIcon}
                alt=""
                className="w-9 h-9 object-cover"
              />
              <p className="text-[#9B9696] font-semibold">
                5 downloadable resources
              </p>
            </div>
            <div className="flex  items-center space-x-6 px-4 py-2">
              <img
                src={laptopMobileIcon}
                alt=""
                className="w-9 h-9 object-cover"
              />
              <p className="text-[#9B9696] font-semibold">
                Access on mobile and TV
              </p>
            </div>
            <div className="flex items-center space-x-6 px-4 py-2">
              <img src={keyIcon} alt="" className="w-9 h-9 object-cover" />
              <p className="text-[#9B9696] font-semibold">
                Full lifetime acccss
              </p>
            </div>
            <div className="flex  items-center space-x-6 px-4 py-2">
              <img
                src={certificateIcon}
                alt=""
                className="w-9 h-9 object-cover"
              />
              <p className="text-[#9B9696] font-semibold">
                Certificate of completion
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-3xl text-[#FF0000] text-center py-4">
          Batch will Start by 15th September 2023
        </h2>
      </div>
      <hr />
      <div className="w-[90%] mx-auto my-8">
        <h2 className="text-2xl text-black font-bold py-4">Course Content</h2>

        <ol class="list-decimal list-inside">
  <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course <span className="float-right font-normal text-base">hello</span></li>
  <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course <span className="float-right font-normal text-base">hello</span></li>
  <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course <span className="float-right font-normal text-base">hello</span></li>
  <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course <span className="float-right font-normal text-base">hello</span></li>
  <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course <span className="float-right font-normal text-base">hello</span></li>
  <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course <span className="float-right font-normal text-base">hello</span></li>
  <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course <span className="float-right font-normal text-base">hello</span></li>
  <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course <span className="float-right font-normal text-base">hello</span></li>
  <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course <span className="float-right font-normal text-base">hello</span></li>
  <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course <span className="float-right font-normal text-base">hello</span></li>
</ol>
</div>

<hr />

<div className="mx-auto w-[90%] my-4">
<h2 className="text-2xl text-black font-bold py-4">By the end of this course you will know how to</h2>

<ul className="list-disc list-inside">
    <li className="font-medium text-[#9B9696] text-xl my-2">Discover the answer to quick questions and do more detailed readings for up to 1 hour</li>
    <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course</li>
    <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course</li>
    <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course</li>
    <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course</li>
    <li className="font-medium text-[#9B9696] text-xl my-2">Introduction to Your Course</li>
</ul>
</div>
<GetInTouch/>
<SecureFooter/>
    </>
  );
};

export default ScheduleLiveCourse;
