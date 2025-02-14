import React, { useState } from "react";
import { Link } from "react-router-dom";
import downarrow from "../../assets/icons/downarrow.png";

function TopMenu() {
  // State to manage the dropdown visibility for each menu
  const [isHoroscopeDropdownOpen, setIsHoroscopeDropdownOpen] = useState(false);
  const [isFortuneStoreDropdownOpen, setIsFortuneStoreDropdownOpen] =
    useState(false);
  const [isEngDropdownOpen, setIsEngDropdownOpen] = useState(false);

  // Toggle functions for each dropdown
  const toggleHoroscopeDropdown = () => {
    setIsHoroscopeDropdownOpen(!isHoroscopeDropdownOpen);
  };
  const toggleFortuneStoreDropdown = () => {
    setIsFortuneStoreDropdownOpen(!isFortuneStoreDropdownOpen);
  };
  const toggleEngDropdown = () => {
    setIsEngDropdownOpen(!isEngDropdownOpen);
  };

  return (
    <>
      <div className="relative w-full bg-gradient-to-r from-[#FF843D] to-[#F27806]">
        <div className="mx-auto flex flex-wrap items-center justify-between px-4 py-1 sm:px-6 lg:px-[60px]">
          <Link to="/">
            <div className="text-white text-center px-4 py-2 text-sm cursor-pointer">
              Home
            </div>
          </Link>
          <Link to="/FreeKundli">
            <div className="text-white flex text-center px-4 py-2 text-sm cursor-pointer">
              Kundli
              <span
                className="font-bold"
                style={{
                  color: "white ",
                  marginTop: "-6px",
                  marginLeft: "3px",
                  fontSize: "12px",
                  backgroundColor: "red",
                  borderRadius: "6px 1px 6px 1px",
                  height: "18px",
                  width: "28px",
                }}
              >
                {" "}
                <div> Free </div>{" "}
              </span>
            </div>
          </Link>
          <Link to="/KundliMatching">
            <div className="text-white flex text-center px-4 py-2 text-sm cursor-pointer">
              Matchmaking
              <span
                className="font-bold"
                style={{
                  color: "white ",
                  marginTop: "-6px",
                  marginLeft: "3px",
                  fontSize: "12px",
                  backgroundColor: "red",
                  borderRadius: "6px 1px 6px 1px",
                  height: "18px",
                  width: "28px",
                }}
              >
                {" "}
                <div> Free </div>{" "}
              </span>
            </div>
          </Link>

          <div
            className="relative text-white text-center px-4 py-2 text-sm cursor-pointer"
            onMouseEnter={toggleHoroscopeDropdown} // Show dropdown on hover
            onMouseLeave={toggleHoroscopeDropdown} // Hide dropdown on hover leave
          >
           Horoscope
            {/* Dropdown Arrow */}
            <div className="absolute top-[10px] right-0 text-white text-xl">
              <span className="block">
                <img src={downarrow} alt="Logo" className="h-[10px] w-[10px]" />
              </span>
            </div>
            {isHoroscopeDropdownOpen && (
              <div className="absolute left-0 w-full mt-2 bg-white text-black shadow-lg rounded-lg z-50">
                <ul className="py-2">
                <Link to="/HoroscopeHero">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Daily Horoscope
                  </li>
                  </Link>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Weekly Horoscope
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Monthly Horoscope
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/courses">
            <div className="text-white text-center px-4 py-2 text-sm cursor-pointer">
              Courses
            </div>
          </Link>
          <Link to="/demo-class">
            <div className="text-white flex text-center px-4 py-2 text-sm cursor-pointer">
              Demo Classes
              <span
                className="font-bold"
                style={{
                  color: "white ",
                  marginTop: "-6px",
                  marginLeft: "3px",
                  fontSize: "12px",
                  backgroundColor: "red",
                  borderRadius: "6px 1px 6px 1px",
                  height: "18px",
                  width: "28px",
                }}
              >
                {" "}
                <div> Free </div>{" "}
              </span>
            </div>
          </Link>
          <Link to="/courses-workshops">
            <div className="text-white text-center px-4 py-2 text-sm cursor-pointer">
              Workshops
            </div>
          </Link>
          <Link to="/Live">
            <div className="text-white text-center px-4 py-2 text-sm cursor-pointer">
              Live
            </div>
          </Link>
          {/* Fortune Store Dropdown */}
          <div
            className="relative text-white text-center px-4 py-2 text-sm cursor-pointer"
            onMouseEnter={toggleFortuneStoreDropdown} // Show dropdown on hover
            onMouseLeave={toggleFortuneStoreDropdown} // Hide dropdown on hover leave
          >
            Fortune Mart
            {/* Dropdown Arrow */}
            <div className="absolute top-[10px] right-0 text-white text-xl">
              <span className="block">
                <img src={downarrow} alt="Logo" className="h-[10px] w-[10px]" />
              </span>
            </div>
            {isFortuneStoreDropdownOpen && (
              <div className="absolute left-0 w-full mt-2 bg-white text-black shadow-lg rounded-lg z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Daily Horoscope
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Weekly Horoscope
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Monthly Horoscope
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/book-pooja">
            <div className="text-white text-center px-4 py-2 text-sm cursor-pointer">
              Book a Pooja
            </div>
          </Link>
          <Link to="/blog">
            <div className="text-white text-center px-4 py-2 text-sm cursor-pointer">
              Blog
            </div>
          </Link>
          <Link to="/Panchang-Report">
            <div className="text-white text-center px-4 py-2 text-sm cursor-pointer">
              Panchang
            </div>
          </Link>
          <Link to="/Tarot">
            <div className="text-white text-center px-4 py-2 text-sm cursor-pointer">
              Tarot
            </div>
          </Link>
          {/* Eng Dropdown */}
          {/* <div
          className="relative text-white text-center px-4 py-2 text-sm cursor-pointer"
          onMouseEnter={toggleEngDropdown} 
          onMouseLeave={toggleEngDropdown} 
        >
          Eng
          
          
          <div className="absolute top-[10px] right-0 text-white text-xl">
            <span className="block">
              <img src={downarrow} alt="Logo" className="h-[10px] w-[10px]" />
            </span>
          </div>
          
          {isEngDropdownOpen && (
            <div className="absolute left-0 w-full mt-2 bg-white text-black shadow-lg rounded-lg z-50">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Eng</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Hin</li>
              </ul>
            </div>
          )}
        </div> */}
        </div>
      </div>
      <div className="flex justify-center items-center h-[30px] bg-white "></div>
    </>
  );
}

export default TopMenu;
