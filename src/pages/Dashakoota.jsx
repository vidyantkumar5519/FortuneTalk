import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashakoota = () => {
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

  const dashakootaPoints = matchingResult.dashakoota_points || [];

  return (
    <div className="m-6 lg:m-10">
      <h2 className="text-2xl text-[#F27806] mb-6">Dashakoota Analysis</h2>
      
      <div className="border-2 rounded-3xl border-[#D4D4D4] bg-[#F8F8F8] p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left px-4 py-3 text-[#F27806]">Category</th>
                <th className="text-center px-4 py-3 text-[#F27806]">Male</th>
                <th className="text-center px-4 py-3 text-[#F27806]">Female</th>
                <th className="text-center px-4 py-3 text-[#F27806]">Points</th>
              </tr>
            </thead>
            <tbody>
              {dashakootaPoints.map((point, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-800 font-medium">{point.category}</td>
                  <td className="px-4 py-3 text-gray-600 text-center">{point.male_value}</td>
                  <td className="px-4 py-3 text-gray-600 text-center">{point.female_value}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-3 py-1 rounded-full ${
                      point.points >= 3
                        ? 'bg-green-100 text-green-800'
                        : point.points === 0
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {point.points}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50">
                <td colSpan="3" className="px-4 py-3 text-gray-800 font-medium">Total Points</td>
                <td className="px-4 py-3 text-center font-medium text-[#F27806]">
                  {dashakootaPoints.reduce((sum, point) => sum + point.points, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-lg text-[#F27806] mb-2">Dashakoota Interpretation</h4>
          <p className="text-gray-700">
            {matchingResult.dashakoota_analysis || 
              "The Dashakoota analysis examines various planetary positions and their effects on the compatibility between the two birth charts. A higher score indicates better compatibility in different aspects of married life."}
          </p>
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

export default Dashakoota;
