import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MatchConclusion = () => {
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

  const totalScore = matchingResult.total_score || {
    obtained: 0,
    total: 36,
    percentage: 0
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 75) return 'text-green-600';
    if (percentage >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMatchDescription = (percentage) => {
    if (percentage >= 75) {
      return "This is considered a highly compatible match. The alignment of planetary positions and other astrological factors suggests a harmonious relationship.";
    } else if (percentage >= 50) {
      return "This match shows moderate compatibility. While there are positive aspects, some areas may need attention and understanding between partners.";
    }
    return "This match indicates some challenges in compatibility. It's advisable to consult with an experienced astrologer for detailed guidance.";
  };

  return (
    <div className="m-6 lg:m-10">
      <h2 className="text-2xl text-[#F27806] mb-6">Match Conclusion</h2>
      
      <div className="border-2 rounded-3xl border-[#D4D4D4] bg-[#F8F8F8] p-6">
        {/* Score Display */}
        <div className="text-center mb-8">
          <div className="inline-block p-8 rounded-full border-4 border-[#F27806]">
            <span className={`text-4xl font-bold ${getScoreColor(totalScore.percentage)}`}>
              {totalScore.percentage}%
            </span>
          </div>
          <div className="mt-4 text-gray-600">
            {totalScore.obtained} out of {totalScore.total} points
          </div>
        </div>

        {/* Compatibility Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {matchingResult.compatibility_areas?.map((area, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="text-[#F27806] font-medium mb-2">{area.name}</h4>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{area.score}%</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#F27806] rounded-full h-2"
                    style={{ width: `${area.score}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Analysis */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl text-[#F27806] mb-4">Overall Compatibility</h3>
            <p className="text-gray-700">
              {matchingResult.conclusion || getMatchDescription(totalScore.percentage)}
            </p>
          </div>

          {matchingResult.recommendations && (
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl text-[#F27806] mb-4">Recommendations</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {matchingResult.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
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

export default MatchConclusion;
