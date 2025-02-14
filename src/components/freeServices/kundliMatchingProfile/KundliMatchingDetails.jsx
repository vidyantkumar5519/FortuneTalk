import React from 'react';

const KundliMatchingDetails = ({ matchingResult }) => {
  if (!matchingResult) return null;

  const formatTime = (time) => {
    return time ? time.replace(/:/g, ':') : 'N/A';
  };

  return (
    <div className="m-6 lg:m-10">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Male Details */}
        <div className="lg:w-1/2 w-full">
          <div className="border-2 rounded-3xl border-[#D4D4D4] bg-[#F8F8F8] p-6">
            <h3 className="text-xl text-[#F27806] mb-4">Male Birth Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Sunrise</span>
                <span className="text-gray-800">{formatTime(matchingResult.male_astro_details.sunrise)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Sunset</span>
                <span className="text-gray-800">{formatTime(matchingResult.male_astro_details.sunset)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Ayanamsha</span>
                <span className="text-gray-800">{matchingResult.male_astro_details.ayanamsha.toFixed(2)}°</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Latitude</span>
                <span className="text-gray-800">{matchingResult.male_astro_details.latitude.toFixed(4)}°</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Longitude</span>
                <span className="text-gray-800">{matchingResult.male_astro_details.longitude.toFixed(4)}°</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Timezone</span>
                <span className="text-gray-800">UTC {matchingResult.male_astro_details.timezone >= 0 ? '+' : ''}{matchingResult.male_astro_details.timezone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Female Details */}
        <div className="lg:w-1/2 w-full">
          <div className="border-2 rounded-3xl border-[#D4D4D4] bg-[#F8F8F8] p-6">
            <h3 className="text-xl text-[#F27806] mb-4">Female Birth Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Sunrise</span>
                <span className="text-gray-800">{formatTime(matchingResult.female_astro_details.sunrise)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Sunset</span>
                <span className="text-gray-800">{formatTime(matchingResult.female_astro_details.sunset)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Ayanamsha</span>
                <span className="text-gray-800">{matchingResult.female_astro_details.ayanamsha.toFixed(2)}°</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Latitude</span>
                <span className="text-gray-800">{matchingResult.female_astro_details.latitude.toFixed(4)}°</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600">Longitude</span>
                <span className="text-gray-800">{matchingResult.female_astro_details.longitude.toFixed(4)}°</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Timezone</span>
                <span className="text-gray-800">UTC {matchingResult.female_astro_details.timezone >= 0 ? '+' : ''}{matchingResult.female_astro_details.timezone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KundliMatchingDetails;