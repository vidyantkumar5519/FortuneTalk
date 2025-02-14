import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import FreeInsights from "../components/freeServices/FreeInsights";
import LearnAndEarn from "../components/learnAndEarn/LearnAndEarn";
import FortuneStore from "../components/fortuneStore/FortuneStore";
import Blog from "../components/blogs/Blogs";
import TestimonialPage from "../components/testimonials/TestimonialPage";
import AstrologerGrid from "../components/astrologers/AstrologerGrid";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import contactBGImage from "../assets/image/contactBGImage.png";
import Loader from "../components/loading/Loader";
import * as AstrologerActions from "../redux/Actions/astrologerActions";
import ScannerSection from "./ScannerSection";
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import TalkToAstro from "../components/astrologers/TalkToAstro";
import FreeDemoCompo from "../components/courses/FreeDemoCompo";
import NewBlogs from "../components/blogs/NewBlogs";
import SecureFooter from "../components/footer/SecureFooter";
import Zodiac from "../components/zodiac/Zodiac";
import Workshop from "../components/workShop/Workshop";
import DemoCarousel from "../components/workShop/Workshop";
import NewCourses from "../components/newCourses/NewCourses";
import WhyChooseUs from "../components/whychooseus/WhyChooseUs";
import MostTrusted from "../components/mostTrusted/MostTrusted";
import ConnectWithAstro from "../components/connectWithAstro/ConnectWithAstro";
import Testimonial from "../components/testimonials/testimonial";
import TestimonialNew from "../components/testimonialNew/TestimonialNew";
import OurPromiss from "../components/ourPromiss/OurPromiss";
import FaqComponent from "../components/faqsSec/FaqComponent";
import Faq from "../components/Faq/Faq";

const Home = ({ dispatch, astrologerListData }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(AstrologerActions.getAllAstrologer());
    // Set isLoading to true here if necessary
  }, [dispatch]);

  // Handle loading state if needed
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
      <TalkToAstro/>
      <FreeDemoCompo/>
      <NewCourses/>
      <Workshop/>

      {/* <DemoCarousel/> */}
      {/* <LearnAndEarn /> */}
      {/* <NewBlogs/> */}
      
      <Zodiac/>
      <TestimonialNew/>
      <OurPromiss/>
      <About />
      <WhyChooseUs />
      <MostTrusted /> 
      <ConnectWithAstro />
      {/* <FaqComponent /> */}
      <Faq/>

  
      {/* <FreeInsights /> */}
      {/* <ScannerSection /> */}
      {/* <FortuneStore /> */}
      {/* <AstrologerGrid astrologerData={astrologerListData} /> */}
      {/* <div className="bg-[#FFF0E0]">
        <Blog />
      </div> */}
      {/* <TestimonialPage /> */}
     
   
      {/* <div className="flex flex-col md:flex-row py-12 bg-[#FFF0E0]">
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
      </div> */}
      <Footer />

      {/* <SecureFooter /> */}

    </>
  );
};

// Connect redux state to component props
const mapStateToProps = (state) => {
  return {
    astrologerListData: state.astrologerListData, // Assuming this is how you store astrologer data in redux store
  };
};

export default connect(mapStateToProps)(Home);
