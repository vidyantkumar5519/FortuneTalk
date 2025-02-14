import React from "react";
import "./Footer.css";
import SecureFooter from "./SecureFooter";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import twitter from "../../assets/icons/twitter.png";
import linkedin from "../../assets/icons/linkedin.png";
import facebook from "../../assets/icons/fb.png";
import googleplay from "../../assets/icons/googleplay (1).png";
import applestore from "../../assets/icons/applestore.png";
import insta from "../../assets/icons/insta.png";
import threefoot from "../../assets/image/threefoot.png";
import twofoot from "../../assets/image/twofoot.png";
import onefoot from "../../assets/image/onefoot.png";

const Footer = () => {
  return (
    <div>
      <div class=" bg-[#454545] py-20">
        <div class="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
          <div class="flex flex-col justify-between sm:px-[5px] md:flex-row md:px-2">
            <div className="md:w-[316px]">
              <h2
                className="text-white"
                style={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                ONLINE ADVICE
              </h2>
              <div className="mt-[20px]">
                <div className="mt-[20px]">
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Chat with Astrologer
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Course
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Workshops
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Kundli
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Panchang
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Matchmaking
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Career Astrologer
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Love Astrologer
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Financial Astrologer
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Marriage Astrologer
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Money Astrologer
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Horoscope 2024
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:w-[316px]">
              <h2
                className="text-white"
                style={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "500",
                }}
              >
                USEFUL LINKS
              </h2>
              <div className="mt-[20px]">
                <div className="mt-[20px]">
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Home
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Kundli
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Matchmaking
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Live
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Panchang
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Fortune Store
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Book a Pooja
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Calendar
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8] underline decoration-white hover:scale-105"
                  >
                    Tarot
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:w-[316px] flex flex-col justify-center">
              <div className="mt-[20px]">
                <div className="mt-[20px]">
                  <button
                    className="text-white py-1 rounded-lg"
                    style={{ fontFamily: "Inter" }}
                  >
                    <img
                      src={googleplay}
                      alt="Google Play Logo"
                      className="h-[52px] w-[220px]"
                    />
                  </button>
                  <button
                    className="text-white py-1 rounded-lg"
                    style={{ fontFamily: "Inter" }}
                  >
                    <img
                      src={applestore}
                      alt="App Store Logo"
                      className="h-[52px] w-[220px]"
                    />
                  </button>
                  <Link
                    to="/"
                    className="text-white text-xl font-medium transform transition-transform duration-200 block py-2 leading-[1.8]"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    CONTACT US
                  </Link>
                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8]"
                  >
                    +919911676792
                  </Link>
                  <p className="flex items-center space-x-2">
                    <span className=" text-white text-xl font-bold">
                      Email:
                    </span>
                    <span>
                      <Link
                        to="/"
                        className="text-white text-lg font-medium transform transition-transform duration-200 block py-2 leading-[1.8]"
                      >
                      contact@fortunetalk.co.in
                      </Link>
                    </span>
                  </p>

                  <Link
                    to="/"
                    className="text-white text-lg font-bold transform transition-transform duration-200 block py-2 leading-[1.8]"
                  >
                    We are now available 24x7
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:w-[316px] flex flex-col justify-center">
              <h2
                className="text-white"
                style={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "500",
                }}
              >
                SECURE
              </h2>
              <div className="mt-[20px]">
                <div className="mt-[20px]">
                  <div className="flex items-center space-x-4">
                    <img src={onefoot} alt="Image" />
                    <div>
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: "Inter",
                          fontSize: "24px",
                          fontWeight: "500",
                        }}
                      >
                        Refund
                      </h3>
                      <p className="text-white">Policy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <img src={twofoot} alt="Image" />
                    <div>
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: "Inter",
                          fontSize: "24px",
                          fontWeight: "500",
                        }}
                      >
                        Verified Expert
                      </h3>
                      <p className="text-white">Astrologer</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <img src={threefoot} alt="Image" />
                    <div>
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: "Inter",
                          fontSize: "24px",
                          fontWeight: "500",
                        }}
                      >
                        100% Secure
                      </h3>
                      <p className="text-white">Payments</p>
                    </div>
                  </div>

                </div>
              </div>

              <div>
                <p className="text-white text-xl font-medium transform transition-transform duration-200 block py-2 leading-[1.8]">
                  KEEP IN TOUCH
                </p>

                <div className="flex space-x-4">
                  <div className="flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
                    <a
                      href="tel:+919911676792"
                      className="flex items-center justify-center w-full h-full"
                    >
                      <img src={insta} alt="Logo" className="h-[30px] w-[30]" />
                    </a>
                  </div>
                  <div className="flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
                    <a
                      href="tel:+919911676792"
                      className="flex items-center justify-center w-full h-full"
                    >
                      <img
                        src={linkedin}
                        alt="Logo"
                        className="h-[30px] w-[30]"
                      />
                    </a>
                  </div>

                  <div className="flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
                    <a
                      href="tel:+919911676792"
                      className="flex items-center justify-center w-full h-full"
                    >
                      <img
                        src={twitter}
                        alt="Logo"
                        className="h-[30px] w-[30]"
                      />
                    </a>
                  </div>

                  <div className="flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
                    <a
                      href="tel:+919911676792"
                      className="flex items-center justify-center w-full h-full"
                    >
                      <img
                        src={facebook}
                        alt="Logo"
                        className="h-[30px] w-[30]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center pb-2 pt-[2px] md:py-4 bg-[#CACFC9]">
        <p
          class="text-black"
          style={{
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          © Copyright ©Fortunetalk 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
