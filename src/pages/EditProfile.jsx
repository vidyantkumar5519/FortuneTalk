import React from "react";
import addressIcon from "../assets/image/addressIcon.png";
import uploadIcon from "../assets/image/uploadIcon.png";
import uploadImageIcon from "../assets/image/uploadImageIcon.jpg";

const EditProfile = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#D7D5D5] border-none">
        <h3 className="text-[#F27806] text-center font-bold text-2xl  py-4 shadow-xl">
          Edit Profile
        </h3>
      </div>
      <div className="relative flex flex-col lg:flex-row w-full lg:w-4/5 mx-auto bg-[#E4E4E4] px-4  pt-10 pb-4 mt-20 mb-4 rounded-[10px]">
        <div className="w-full lg:w-1/2 lg:px-10 lg:border-r-2 lg:border-[#9B9696]">
          <div className="flex mt-8">
            <div className="w-full lg:w-1/2 mr-4">
              <input
                className="flex h-10 w-full border-b-2 text-center border-[#9B9696] bg-transparent px-3 py-2 text-sm placeholder:text-[#9B9696] placeholder:text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="First Name"
              ></input>
            </div>
            <div className="w-1/2 ml-4">
              <input
                className="flex h-10 w-full border-b-2 text-center border-[#9B9696] bg-transparent px-3 py-2 text-sm placeholder:text-[#9B9696] placeholder:text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="First Name"
              ></input>
            </div>
          </div>
          <input
            className="flex mt-8 h-10 w-full border-b-2 text-start border-[#9B9696] bg-transparent px-3 py-2 text-sm placeholder:text-[#9B9696] placeholder:text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Email ID"
          ></input>

          <div class="flex my-8">
            <input
              type="tel"
              className="text-sm border-2 w-16 text-[#9B9696] border-[#B4A9A3] bg-inherit rounded-l-xl px-2 py-3 whitespace-no-wrap items-center placeholder:text-[#9B9696]"
              placeholder="+91"
            />

            <input
              name="field_name"
              className=" border-2 border-[#B4A9A3] bg-inherit rounded-r-xl px-4 py-3 w-full"
              type="tel"
              placeholder="Enter mobile number"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <input
              className="flex h-10 w-full border-b-2 text-start border-[#9B9696] bg-transparent px-3 py-2 text-sm placeholder:text-[#9B9696] placeholder:text-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Current Address"
            ></input>
            <img src={addressIcon} alt="" className="h-7 -mx-3 w-7" />
          </div>
          <img
            src={uploadImageIcon}
            alt=""
            className="absolute w-32 h-32 border-[3px] border-[#F27806] top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
          />
          <img
            src={uploadIcon}
            alt=""
            className=" absolute top-14 left-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:px-10">
          <div className="flex gap-8 my-8">
            <div className="w-full lg:w-3/4 mx-auto">
              <select
                id="gender"
                className="bg-inherit border-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="text-[#9B9696]" selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="w-full lg:w-3/4 mx-auto">
              <select
                id="countries"
                className="bg-inherit border-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="text-[#9B9696]" selected>
                  Birth Date
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="flex gap-8 my-6">
            <div className="w-full lg:w-3/4 mx-auto">
              <select
                id="gender"
                className="bg-inherit border-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="text-[#9B9696]" selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="w-full lg:w-3/4 mx-auto">
              <select
                id="countries"
                className="bg-inherit border-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="text-[#9B9696]" selected>
                  Birth Date
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="flex gap-8 my-6 items-center">
            <div className="w-full lg:w-3/4 mx-auto">
              <p className="text-lg text-[#9B9696] ml-10">Occupation</p>
            </div>
            <div className="w-full lg:w-3/4 mx-auto">
              <select
                id="countries"
                className="bg-inherit border-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="text-[#9B9696]" selected>
                  Select an Option
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="flex gap-8 my-6 items-center">
            <div className="w-full lg:w-3/4 mx-auto">
              <p className="text-lg text-[#9B9696] ml-10">Problem</p>
            </div>
            <div className="w-full lg:w-3/4 mx-auto">
              <select
                id="countries"
                className="bg-inherit border-2 text-[#9B9696] border-[#9B9696] text-md font-medium rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-full p-3  block dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="text-[#9B9696]" selected>
                  Select an Option
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-10 mb-4">
        <button className=" flex rounded-[54px] border-[#F27806] border-2 bg-transparent py-2 px-16 text-lg text-[#F27806]  focus:outline-none hover:shadow-xl">
          Cancel
        </button>
        <button className=" flex rounded-[54px] border-0 bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl">
          Save
        </button>
      </div>
    </>
  );
};

export default EditProfile;
