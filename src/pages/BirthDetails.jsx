import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BirthDetails = () => {
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
      <h2 className="text-2xl text-[#F27806] mb-6">Birth Details</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Male Birth Details */}
        <div className="border-2 rounded-3xl border-[#D4D4D4] bg-[#F8F8F8] p-6">
          <h3 className="text-xl text-[#F27806] mb-4">Male Birth Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">Day</span>
              <span className="text-gray-800">{matchingResult.male_astro_details.day}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">Sunrise</span>
              <span className="text-gray-800">{matchingResult.male_astro_details.sunrise}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">Sunset</span>
              <span className="text-gray-800">{matchingResult.male_astro_details.sunset}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">Nakshatra</span>
              <span className="text-gray-800">{matchingResult.male_astro_details.nakshatra}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">Tithi</span>
              <span className="text-gray-800">{matchingResult.male_astro_details.tithi}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Yoga</span>
              <span className="text-gray-800">{matchingResult.male_astro_details.yoga}</span>
            </div>
          </div>
        </div>

        {/* Female Birth Details */}
        <div className="border-2 rounded-3xl border-[#D4D4D4] bg-[#F8F8F8] p-6">
          <h3 className="text-xl text-[#F27806] mb-4">Female Birth Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">Day</span>
              <span className="text-gray-800">{matchingResult.female_astro_details.day}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">Sunrise</span>
              <span className="text-gray-800">{matchingResult.female_astro_details.sunrise}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">Sunset</span>
              <span className="text-gray-800">{matchingResult.female_astro_details.sunset}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">Nakshatra</span>
              <span className="text-gray-800">{matchingResult.female_astro_details.nakshatra}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">Tithi</span>
              <span className="text-gray-800">{matchingResult.female_astro_details.tithi}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Yoga</span>
              <span className="text-gray-800">{matchingResult.female_astro_details.yoga}</span>
            </div>
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

export default BirthDetails;
