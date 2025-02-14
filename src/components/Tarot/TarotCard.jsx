import React from "react";
import card1 from "../../assets/TarotCard/image-removebg-preview - 2024-12-30T133500.215 1.png";
import card2 from "../../assets/TarotCard/card2.png";
import card3 from "../../assets/TarotCard/card3.png";
import card4 from "../../assets/TarotCard/4.png";
import card5 from "../../assets/TarotCard/5.png";
import card6 from "../../assets/TarotCard/6.png";
import card7 from "../../assets/TarotCard/7.png";
import card8 from "../../assets/TarotCard/8.png";
import card9 from "../../assets/TarotCard/9.png";
import card10 from "../../assets/TarotCard/10.png";
import card11 from "../../assets/TarotCard/11.png";
import card12 from "../../assets/TarotCard/12.png";

const TarotCard = () => {
  const cardDescriptions = [
    {
      id: 1,
      Title: "One Card Tarot Reading",
      image: card1,
    },
    {
      id: 2,
      Title: "Three Card Tarot Reading",
      image: card2,
    },
    {
      id: 3,
      Title: "2025 Tarot Readings",
      image: card3,
    },
    {
      id: 4,
      Title: "Major Arcana",
      image: card4,
    },
    {
      id: 5,
      Title: "Minor Arcana",
      image: card5,
    },
    {
      id: 6,
      Title: "Wellness Tarot Reading",
      image: card6,
    },
    {
      id: 7,
      Title: "Love Tarot Reading",
      image: card7,
    },
    {
      id: 8,
      Title: "Tarot Money",
      image: card8,
    },
    {
      id: 9,
      Title: "State of Mind Tarot Reading",
      image: card9,
    },
    {
      id: 10,
      Title: "My Tarot Style",
      image: card10,
    },
    {
      id: 11,
      Title: "The Hanged Man",
      image: card11,
    },
    {
      id: 12,
      Title: "The High Priestess",
      image: card12,
    },
  ];

  return (
    <>
      <div className="px-16 mt-10 space-y-4">
        <div
          className="text-black"
          style={{
            fontFamily: "Inter",
            fontSize: "45px",
            fontWeight: "600",
            lineHeight: "45px",
          }}
        >
          <h1>What is Tarot Card Reading?</h1>
        </div>
        <p className="text-md">
          Tarot Card Reading is a study of special imagery cards to predict the
          future and the past of an individual's life. For centuries, it has
          been a guiding tool for people facing confusion in decision-making and
          is deeply connected to astrology. To understand Tarot card reading
          meaning in a better way, let us read ahead.
        </p>

        <div className="px-10 py-16 rounded-2xl shadow-2xl border bg-white relative z-10 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-8">
            {cardDescriptions.map((cardDescription) => (
              <div key={cardDescription.id} className="flex flex-col items-center"> 
                <div className="relative w-36 h-36 mb-3">
                  <img
                    src={cardDescription.image}
                    alt={cardDescription.Title}
                    className="w-full h-full rounded-full object-contain border-2 border-[#F27806] hover:border-4 "
                  />
                </div>
                <h3 className="text-center text-md font-medium text-gray-800 mt-2">
                  {cardDescription.Title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TarotCard;
