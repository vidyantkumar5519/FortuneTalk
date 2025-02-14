import { useState, useEffect } from "react";
import ariesIcon from "../../assets/image/ariesIcon.png";
import taurusIcon from "../../assets/image/taurusIcon.png";
import leoIcon from "../../assets/image/leoIcon.png";
import aquariusIcon from "../../assets/image/aquariusIcon.png";
import geminiIcon from "../../assets/image/geminiIcon.png";
import cancerIcon from "../../assets/image/cancerIcon.png";
import piscesIcon from "../../assets/image/piscesIcon.png";
import libraIcon from "../../assets/image/libraIcon.png";
import virgoIcon from "../../assets/image/virgoIcon.png";
import SecureFooter from "../footer/SecureFooter";
import * as freeInsightActions from "../../redux/Actions/freeInsightActions.js";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, postData } from "../../utils/FetchNodeServices.js";
import {
  base_url,
  third_party_api_url,
  horo_chart,
} from "../../utils/Constants.js";

import { useDispatch } from "react-redux";

const DailyHoroscope = ({ appHoroChartData }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const data = {
    day: 27,
    month: 6,
    year: 2024,
    hour: 15,
    min: 30,
    lat: 25.7464,
    lon: 82.6837,
    tzone: 5.5,
  };
  console.log("data", data);
  useEffect(() => {
    dispatch(freeInsightActions.uploadAppHoroChart(data));
  }, [dispatch]);

  return (
    <>
      <div className="w-[90%] lg:w-4/5 mx-auto my-8 ">
        <div className="flex flex-wrap xl:justify-between space-x-3 my-6">
          <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-[#F27806] to-[#DF5102] cursor-pointer">
            <img
              src={ariesIcon}
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Add similar divs for other zodiac icons */}
        </div>
      </div>
      <hr />
      <div className="grid my-2 grid-cols-3 grid-rows-1 gap-4 justify-items-stretch text-[#B4B4B4] text-2xl">
        <div className="flex justify-center ">Yesterday</div>
        <div className="flex justify-center items-center space-x-2 text-[#F27806]">
          <span>Today</span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
        <div className="flex justify-center ">Tomorrow</div>
      </div>
      <hr />

   <div className="px-16">
   <div className="mt-2">
        <h3 className="text-black text-xl lg:text-2xl">Careers</h3>
        <p className="text-[#B4B4B4] text-lg lg:text-xl">
          Try and keep your finances out of harm's way, this may prove to be a
          tricky day, a day in which
        </p>
        <br />
        <h3 className="text-black text-xl lg:text-2xl">Love</h3>
        <p className="text-[#B4B4B4] text-lg lg:text-xl">
          Brush aside all negative aspects that have been lurking in your love
          life in the past and embrace new found relationships. Take the
          initiative especially if the person you admire is in difficulty, offer
          reassurance and everything will be OK.
        </p>
        <br />
        <h3 className="text-black text-xl lg:text-2xl">Finance</h3>
        <p className="text-[#B4B4B4] text-lg lg:text-xl">
          Try and keep your finances out of harm's way, this may prove to be a
          tricky day, a day in which
        </p>
        <br />
        <h3 className="text-black text-xl lg:text-2xl">Health</h3>
        <p className="text-[#B4B4B4] text-lg lg:text-xl">
          Brush aside all negative aspects that have been lurking in your love
          life in the past and embrace new found relationships. Take the
          initiative especially if the person you admire is in difficulty, offer
          reassurance and everything will be OK.
        </p>
      </div>
   </div>
      {/* <SecureFooter /> */}
    </>
  );
};

export default DailyHoroscope;
