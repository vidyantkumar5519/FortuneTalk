import React from "react";
import DailyHoroscope from "../freeServices/DailyHoroscope";
import HoroHero from "./HoroHero";
import Footer from "../footer/Footer";
import Zodiac from "../zodiac/Zodiac";
import Banner from "../Banner/Banner";
import HoroDescriptions from "./HoroDescriptions";
import TodayZodiacPrediction from "./TodayZodiacPrediction";
import Faq from "../Faq/Faq";

const HoroscopeHero = () => {
  return (
    <>
      <HoroHero />
      <TodayZodiacPrediction/>
      {/* <DailyHoroscope /> */}
      <Banner/>
      <HoroDescriptions/>
      <Faq/>
      <Zodiac/>
      <Footer/>
    </>
  );
};

export default HoroscopeHero;
