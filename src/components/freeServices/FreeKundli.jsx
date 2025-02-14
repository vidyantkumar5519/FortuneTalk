import React, { useEffect, useState } from "react";
import { fetchBirthDetails, prepareBirthData } from "../../utils/astrologyApi";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Kundali from "../Kundali/Kundali";
import Footer from "../footer/Footer";
import SecureFooter from "../footer/SecureFooter";
import Zodiac from "../zodiac/Zodiac";
import FreeKundliDetails from "./freeKundliNames/FreeKundliDetails";
import RecentKundliNames from "./freeKundliNames/RecentKundliNames";
import KundaliUi from "../Kundali/KundaliUi";
import ServiceIcons from "../Kundali/ServiceIcons";
import KundaliDescriptions from "../Kundali/KundaliDescriptions";


const FreeKundli = () => {
  return (
    <>
      <Kundali/>
      <KundaliUi/>
      <ServiceIcons/>
      <Banner/>
      <KundaliDescriptions/>
      <Faq/>
      <Zodiac/>
      <Footer/>
      {/* <SecureFooter /> */}
    </>
  );
};

export default FreeKundli;
