import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ManglikMatch = () => {
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

  const manglikDetails = matchingResult.manglik_analysis || {
    male: { is_manglik: false, details: [] },
    female: { is_manglik: false, details: [] }
  };

  return (
    <div className="m-6 lg:m-10">
      <h2 className="text-2xl text-[#F27806] mb-6">Manglik Analysis</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Male Manglik Analysis */}
        <div className="border-2 rounded-3xl border-[#D4D4D4] bg-[#F8F8F8] p-6">
          <h3 className="text-xl text-[#F27806] mb-4">Male Manglik Status</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className={`h-3 w-3 rounded-full ${
                manglikDetails.male.is_manglik ? 'bg-red-500' : 'bg-green-500'
              }`}></span>
              <span className={`font-medium ${
                manglikDetails.male.is_manglik ? 'text-red-700' : 'text-green-700'
              }`}>
                {manglikDetails.male.is_manglik ? 'Manglik' : 'Non-Manglik'}
              </span>
            </div>
            
            <div className="mt-4">
              <h4 className="text-lg text-gray-700 mb-2">Planetary Positions</h4>
              <ul className="space-y-2">
                {manglikDetails.male.details.map((detail, index) => (
                  <li key={index} className="text-gray-600">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Female Manglik Analysis */}
        <div className="border-2 rounded-3xl border-[#D4D4D4] bg-[#F8F8F8] p-6">
          <h3 className="text-xl text-[#F27806] mb-4">Female Manglik Status</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className={`h-3 w-3 rounded-full ${
                manglikDetails.female.is_manglik ? 'bg-red-500' : 'bg-green-500'
              }`}></span>
              <span className={`font-medium ${
                manglikDetails.female.is_manglik ? 'text-red-700' : 'text-green-700'
              }`}>
                {manglikDetails.female.is_manglik ? 'Manglik' : 'Non-Manglik'}
              </span>
            </div>
            
            <div className="mt-4">
              <h4 className="text-lg text-gray-700 mb-2">Planetary Positions</h4>
              <ul className="space-y-2">
                {manglikDetails.female.details.map((detail, index) => (
                  <li key={index} className="text-gray-600">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Compatibility Analysis */}
      <div className="mt-6 border-2 rounded-3xl border-[#D4D4D4] bg-[#F8F8F8] p-6">
        <h3 className="text-xl text-[#F27806] mb-4">Manglik Compatibility Analysis</h3>
        <p className="text-gray-700">
          {matchingResult.manglik_analysis?.conclusion || 
            `Based on the Manglik analysis of both horoscopes, ${
              !manglikDetails.male.is_manglik && !manglikDetails.female.is_manglik
                ? 'both individuals are Non-Manglik, indicating good compatibility.'
                : manglikDetails.male.is_manglik && manglikDetails.female.is_manglik
                ? 'both individuals are Manglik, which can be considered compatible.'
                : 'there is a Manglik mismatch. It is advisable to consult with an experienced astrologer for detailed guidance.'
            }`}
        </p>
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

export default ManglikMatch;
