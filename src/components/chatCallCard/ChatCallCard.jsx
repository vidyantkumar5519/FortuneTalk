import React from "react";
import TalkToTalkAstro from "../astrologers/TalkToTalkAstro";
import NewCourses from "../../components/newCourses/NewCourses";
import OurAstrologer from "../../components/newCourses/OurAstrologer";
import Footer from "../../components/footer/Footer";
import Descriptions from "./Descriptions";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";

const ChatCallCard = () => {
  return (
    <>
      <div>
        <TalkToTalkAstro />
      <Banner/>
        {/* <NewCourses/> */}
        <OurAstrologer />
        <Descriptions />
        <Faq/>
        <Footer />
      </div>
    </>
  );
};

export default ChatCallCard;
