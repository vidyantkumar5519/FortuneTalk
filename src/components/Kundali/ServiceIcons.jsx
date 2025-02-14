import React from 'react';
import { Link } from 'react-router-dom';
import Horoscope from '../../assets/image/horoscope1.png';
import calculator from '../../assets/image/love-calculator.png';
import making from '../../assets/image/match-making.png';
import numerology from '../../assets/image/numerology.png';
import Panchang from '../../assets/image/panchang2.png';
import Zodiac from '../../assets/image/zodiac.png';

const services = [
  {
    id: 1,
    name: 'Daily Horoscope',
    image: Horoscope,
    bgColor: 'bg-[#E6D5F7]'
  },
  {
    id: 2,
    name: 'Love Calculator',
    image: calculator,
    path: '/love-calculator',
    bgColor: 'bg-[#FFD6E4]'
  },
  {
    id: 3,
    name: 'Match Making',
    image: making,
    path: '/match-making',
    bgColor: 'bg-[#FFBDD3]'
  },
  {
    id: 4,
    name: 'Numerology',
    image: numerology,
    path: '/numerology',
    bgColor: 'bg-[#D5E8FF]'
  },
  {
    id: 5,
    name: 'Panchang',
    image: Panchang,
    path: '/panchang',
    bgColor: 'bg-[#CCE6FF]'
  },
  {
    id: 6,
    name: 'Zodiac',
    image: Zodiac,
    path: '/zodiac-compatibility',
    bgColor: 'bg-[#FFD6D6]'
  }
];

const ServiceIcons = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 md:px-8 py-6 text-white text-lg">
      {services.map((service) => (
        <Link
          key={service.id}
          to={service.path}
          className="flex flex-col items-center"
        >
          {/* <div className={`${service.bgColor} rounded-full p-4 w-20 h-20 flex items-center justify-center mb-2 transition-transform hover:scale-110`}> */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-contain text-white text-lg"
            />
          {/* </div> */}
          
          <div className={`${service.bgColor} rounded-2xl p-2 w-40 flex items-center justify-center mb-2 transition-transform hover:scale-110`}>
            {service.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServiceIcons;
