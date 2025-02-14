import React from "react";
import TarotHero from "./TarotHero";
import MainLayout from "../layout/MainLayout";
import TarotCard from "./TarotCard";
import TarotCardReader from "./TarotCardReader";
import Footer from "../footer/Footer";
import Banner from "../Banner/Banner";
import TarotDescriptions from "./TarotDescriptions";
import Zodiac from "../zodiac/Zodiac";
import FaqComponent from "../faqsSec/FaqComponent";
import Faq from "../Faq/Faq";

const Tarot = () => {
  return (
    <>
      <MainLayout />
      <TarotHero />
      <TarotCard/>
      <TarotCardReader/>
      <Banner/>
      <TarotDescriptions/>
      {/* <FaqComponent/> */}
      <Faq />
      <Zodiac/>
      <Footer />
    </>
  );
};

export default Tarot;
