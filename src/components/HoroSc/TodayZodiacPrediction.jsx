import React from "react";
import img1 from "../../assets/ZodiacIcons/pngtree-zodiac-signs-clipart-png-image_5304339 2.png";
import img2 from "../../assets/ZodiacIcons/pngtree-zodiac-signs-clipart-png-image_5304339 4-1.png";
import img3 from "../../assets/ZodiacIcons/pngtree-zodiac-signs-clipart-png-image_5304339 4-2.png";
import img4 from "../../assets/ZodiacIcons/pngtree-zodiac-signs-clipart-png-image_5304339 4-3.png";
import img5 from "../../assets/ZodiacIcons/pngtree-zodiac-signs-clipart-png-image_5304339 4-4.png";
import img6 from "../../assets/ZodiacIcons/pngtree-zodiac-signs-clipart-png-image_5304339 4-5.png";
import img7 from "../../assets/ZodiacIcons/pngtree-zodiac-signs-clipart-png-image_5304339 4-6.png";
import img8 from "../../assets/ZodiacIcons/pngtree-zodiac-signs-clipart-png-image_5304339 4.png";
import img9 from "../../assets/ZodiacIcons/pngtree-zodiac-signs-clipart-png-image_5304339 5.png";
import img10 from "../../assets/ZodiacIcons/pngtree-zodiac-signs-clipart-png-image_5304339 8.png";
import img11 from "../../assets/ZodiacIcons/removed 33.png";
import img12 from "../../assets/ZodiacIcons/removed 22.png";

const ZodiacDetails = [
  {
    id: 1,
    name: "Aries Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img1,
  },
  {
    id: 2,
    name: "Taurus Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img2,
  },
  {
    id: 3,
    name: "Gemini Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img3,
  },
  {
    id: 4,
    name: "Cancer Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img4,
  },
  {
    id: 5,
    name: "Leo Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img5,
  },
  {
    id: 6,
    name: "Libra Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img6,
  },
  {
    id: 7,
    name: "Scorpio Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img7,
  },
  {
    id: 8,
    name: "Sagittarius Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img8,
  },
  {
    id: 9,
    name: "Capricorn Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img9,
  },
  {
    id: 10,
    name: "Aquarius Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img10,
  },
  {
    id: 11,
    name: "Pisces Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img11,
  },
  {
    id: 12,
    name: "Virgo Today Horoscope",
    description:
      "Today, your personal relationships may experience some tension due to the Moon's opposition to Neptune. Misunderstandings could arise, so practice patience and clarity in communication.",
    image: img12,
  },
];

const TodayZodiacPrediction = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Zodiac Signs Daily Horoscope</h1>
        <p className="text-md text-gray-600">
          Discover what the stars have in store for you today! Explore your daily horoscope to find insights and prepare for upcoming events.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-center my-8 text-[#F27806]">
        Choose Your Zodiac Sign
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto">
        {ZodiacDetails.map((zodiac) => (
          <div
            key={zodiac.id}
            className="bg-white rounded-lg border shadow-md p-6 transition-transform transform hover:scale-95 "
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-[#F27806] p-2 mb-4">
                <img
                  src={zodiac.image}
                  alt={zodiac.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{zodiac.name}</h3>
              <p className="text-gray-600 text-center text-sm mb-4">{zodiac.description}</p>
              <button
                className="bg-[#F27806] text-white font-medium py-2 px-4 rounded-full hover:bg-[#D46003]"
                aria-label={`Read more about ${zodiac.name}`}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayZodiacPrediction;
