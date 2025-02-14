import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HoroscopeChart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const matchingResult = location.state?.matchingResult;

  if (!matchingResult) {
    return (
      <div className="m-6 lg:m-10">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700">Please complete the matching process first</p>
        </div>
        <button
          onClick={() => navigate('/kundli-matching')}
          className="mt-4 rounded-3xl border-0 bg-gradient-to-r from-[#EE7105] to-[#E25803] py-2 px-6 text-white focus:outline-none hover:shadow-xl"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="m-6 lg:m-10">
      <h2 className="text-2xl text-[#F27806] mb-6">Horoscope Charts</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Male Horoscope */}
        <div className="border-2 rounded-3xl border-[#D4D4D4] bg-[#F8F8F8] p-6">
          <h3 className="text-xl text-[#F27806] mb-4">Male Horoscope</h3>
          <div className="space-y-3">
            {matchingResult.male_astro_details.planets.map((planet, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">{planet.name}</span>
                <span className="text-gray-800">
                  {planet.house}° {planet.position}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Female Horoscope */}
        <div className="border-2 rounded-3xl border-[#D4D4D4] bg-[#F8F8F8] p-6">
          <h3 className="text-xl text-[#F27806] mb-4">Female Horoscope</h3>
          <div className="space-y-3">
            {matchingResult.female_astro_details.planets.map((planet, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">{planet.name}</span>
                <span className="text-gray-800">
                  {planet.house}° {planet.position}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('/kundli-matching')}
        className="mt-6 rounded-3xl border-0 bg-gradient-to-r from-[#EE7105] to-[#E25803] py-2 px-6 text-white focus:outline-none hover:shadow-xl"
      >
        Back to Matching
      </button>
    </div>
  );
};

export default HoroscopeChart;
