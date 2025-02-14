import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchMatchingDetails, prepareMatchingData } from "../../utils/astrologyApi";
import KundliMatchingForm from './kundliMatchingProfile/KundliMatchingForm.jsx';
import KundliMatchingDetails from './kundliMatchingProfile/KundliMatchingDetails.jsx';
import SecureFooter from '../footer/SecureFooter.jsx';
import birthDetails from '../../assets/image/birthDetails.png';
import constellationIcon from '../../assets/image/constellationIcon.png';
import mandalaIcon from '../../assets/image/mandalaIcon.png';
import arabesqueIcon from '../../assets/image/arabesqueIcon.png';
import genderIcon from '../../assets/image/genderIcon.png';
import matchConclusionIcon from '../../assets/image/matchConclusionIcon.png';
import MatchKundli from "../MatchKundli/MatchKundli.jsx";
import Zodiac from "../zodiac/Zodiac.jsx";
import Faq from "../Faq/Faq.jsx";
import Footer from "../footer/Footer.jsx";
import Banner from "../Banner/Banner.jsx";
import KundliMatchingUi from "../MatchKundli/KundliMatchingUi.jsx";

const KundliMatching = () => {
  const navigate = useNavigate();
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [matchingResult, setMatchingResult] = useState(null);
  const [maleData, setMaleData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    gender: "male"
  });
  const [femaleData, setFemaleData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    gender: "female"
  });

  const handleMaleDataChange = (data) => {
    setMaleData(data);
    if (error) setError(null);
  };

  const handleFemaleDataChange = (data) => {
    setFemaleData(data);
    if (error) setError(null);
  };

  const validateData = () => {
    if (!maleData.firstName.trim()) throw new Error("Please enter male's name");
    if (!maleData.birthDate) throw new Error("Please enter male's birth date");
    if (!maleData.birthTime) throw new Error("Please enter male's birth time");
    if (!maleData.birthPlace.trim()) throw new Error("Please enter male's birth place");

    if (!femaleData.firstName.trim()) throw new Error("Please enter female's name");
    if (!femaleData.birthDate) throw new Error("Please enter female's birth date");
    if (!femaleData.birthTime) throw new Error("Please enter female's birth time");
    if (!femaleData.birthPlace.trim()) throw new Error("Please enter female's birth place");
  };

  const handleCheckNow = async () => {
    try {
      setError(null);
      setLoading(true);
      setMatchingResult(null);

      // Validate form data
      validateData();

      // Prepare birth data for both male and female
      const maleBirthData = prepareMatchingData(maleData, 'male');
      const femaleBirthData = prepareMatchingData(femaleData, 'female');

      // Fetch matching details
      const result = await fetchMatchingDetails(maleBirthData, femaleBirthData);
      setMatchingResult(result);
      setShowNewComponent(true);

      // Save to localStorage for history
      try {
        const savedMatches = JSON.parse(localStorage.getItem('kundliMatches') || '[]');
        const newMatch = {
          id: Date.now(),
          male: { ...maleData },
          female: { ...femaleData },
          timestamp: new Date().toISOString(),
          result: result
        };
        localStorage.setItem('kundliMatches', JSON.stringify([newMatch, ...savedMatches].slice(0, 5)));
      } catch (e) {
        console.error('Error saving to localStorage:', e);
      }

    } catch (error) {
      setError(error.message);
      setShowNewComponent(false);
    } finally {
      setLoading(false);
    } 
  };

  const handleNavigation = (path) => {
    if (!matchingResult) {
      setError('Please complete the matching process first');
      return;
    }
    navigate(path);
  };

  return (
    <>
    <MatchKundli/>
      <KundliMatchingUi/>
      <Banner/>
      <Zodiac />
      <Faq/>
      <Footer/>
      {/* <SecureFooter /> */}
    </>
  );
};

export default KundliMatching;
