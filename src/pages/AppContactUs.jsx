import React from 'react';
import SecureFooter from '../components/footer/SecureFooter';
import AppNav from '../components/navbar/AppNav';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import Contact from '../components/contact/Contact';


const AppContactUs = () => {
    return (
        <>
          <AppNav/>
            {/* <div className="flex justify-center items-start">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#D7D5D5] mx-auto w-auto rounded-b-xl text-center">
                    <h3 className="text-[#F27806] font-semibold text-center text-xl py-4 px-8 shadow-md rounded-b-xl">
                        Contact Us
                    </h3>
                </div>
            </div> */}
            <div className="flex flex-col md:flex-row py-12 bg-[#FFF0E0]">
        <div className="flex-grow-0 flex-shrink-0 w-full md:w-3/5 px-8 flex flex-col justify-center">
          <h2 className="text-4xl text-black font-semibold text-center pb-4 drop-shadow-md">
            We would love to hear from you!
          </h2>
          <p className="text-2xl text-gray-700 font-medium text-center pb-8">
            Complete the following form and we will be in touch with you within 3-5 business days.
          </p>
          <div className="flex justify-center space-x-4">

            <div  className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110">
              <a href="tel:+919911676792" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
              <FaPhoneAlt className="text-[#E45D03] w-8 h-8" />
              </a>
            </div>

            {/* <div  className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110">
              <a href="https://www.facebook.com/fortunetalkofficial" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
              <FaWhatsapp className="text-[#E45D03] w-8 h-8" />
              </a>
            </div> */}

            <div  className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110">
              <a href="https://www.instagram.com/fortune_talk/reels/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
              <FaInstagram className="text-[#E45D03] w-8 h-8" />
              </a>
            </div>

            <div  className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110">
              <a href="https://www.facebook.com/fortunetalkofficial" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
              <FaFacebook className="text-[#E45D03] w-8 h-8" />
              </a>
            </div>

            <div  className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110">
              <a href="https://www.youtube.com/@Fortunetalkofficial" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
              <FaYoutube className="text-[#E45D03] w-8 h-8" />
              </a>
            </div>

          </div>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-full md:w-2/5 px-8 flex justify-center mt-8 md:mt-0">
          <div className="w-full max-w-md">
            <Contact />
          </div>
        </div>
      </div>
            <SecureFooter />
        </>
    );
}


export default AppContactUs;
