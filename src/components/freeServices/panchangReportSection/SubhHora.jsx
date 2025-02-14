import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaClock, FaMoon, FaSpinner, FaSun } from 'react-icons/fa';

const SubhHora = () => {
  const [horaData, setHoraData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const planetColors = {
    Sun: 'bg-orange-500',
    Moon: 'bg-gray-300',
    Mars: 'bg-red-500',
    Mercury: 'bg-emerald-500',
    Jupiter: 'bg-purple-500',
    Venus: 'bg-pink-500',
    Saturn: 'bg-blue-500'
  };

  const planetDescriptions = {
    Sun: 'Good for government work, authority figures, and physical vitality',
    Moon: 'Favorable for emotional matters, family, and public dealings',
    Mars: 'Suitable for courage, competition, and physical activities',
    Mercury: 'Best for communication, business, and intellectual pursuits',
    Jupiter: 'Auspicious for education, spirituality, and expansion',
    Venus: 'Perfect for art, relationships, and luxury pursuits',
    Saturn: 'Good for discipline, responsibility, and long-term planning'
  };

  useEffect(() => {
    const fetchHoraMuhurtaData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Using fixed values as per the API example
        const data = {
          day: 6,
          month: 1,
          year: 2000,
          hour: 7,
          min: 45,
          lat: 19.132,
          lon: 72.342,
          tzone: 5.5
        };

        const USER_ID = "636470";
        const API_KEY = "f18878ae6d3e7627238b03d4d53999548576e4c1";
        const authString = `${USER_ID}:${API_KEY}`;

        const response = await axios.post(
          'https://json.astrologyapi.com/v1/hora_muhurta',
          data,
          {
            headers: {
              'Authorization': `Basic ${btoa(authString)}`,
              'Content-Type': 'application/json'
            }
          }
        );
        console.log("this is hora "+ response.data.hora)
        setHoraData(response.data.hora);
      } catch (err) {
        setError('Failed to fetch hora muhurta data. Please try again later.');
        console.error('Hora Muhurta API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHoraMuhurtaData();
  }, []); // Empty dependency array since we're using fixed values

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <FaSpinner className="animate-spin text-4xl text-orange-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const renderHoraSection = (title, data, icon) => (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((hora, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">{hora.time}</span>
              <span className={`px-3 py-1 rounded-full text-white text-sm ${planetColors[hora.hora]}`}>
                {hora.hora}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {planetDescriptions[hora.hora]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white mb-6">
        <h2 className="text-2xl font-bold mb-2">Subh Hora (Auspicious Hours)</h2>
        <p className="opacity-90">
          Each hora (hour) is ruled by a different planet, influencing the activities undertaken during that time.
          Choose the most auspicious hora for your important tasks.
        </p>
      </div>

      {renderHoraSection(
        'Day Hours',
        horaData?.day,
        <FaSun className="text-2xl text-yellow-500" />
      )}

      {renderHoraSection(
        'Night Hours',
        horaData?.night,
        <FaMoon className="text-2xl text-gray-400" />
      )}

      <div className="bg-blue-50 rounded-xl p-4 mt-6">
        <div className="flex items-center text-blue-700 mb-2">
          <FaClock className="mr-2" />
          <h4 className="font-semibold">How to Use Hora Timings</h4>
        </div>
        <p className="text-sm text-blue-600">
          Select activities according to the planetary ruler of each hora. For example, 
          choose Mercury hours for business dealings, Venus hours for artistic pursuits, 
          and Jupiter hours for educational activities.
        </p>
      </div>
    </div>
  );
};

export default SubhHora;