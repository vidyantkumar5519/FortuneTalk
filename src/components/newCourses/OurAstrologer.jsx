import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaHeart } from 'react-icons/fa';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import img1 from "../../assets/image/astrologerProfileImage1.png";
import img2 from "../../assets/image/Yogesh.jpeg";
import img3 from "../../assets/image/aradhya.jpeg";

const OurAstrologer = () => {
  const astrologers = [
    {
      id: 1,
      name: 'Acharya Deepak',
      specialty: 'Vedic Astrology',
      experience: '15+ Years',
      rating: 4.8,
      likes: 2345,
      image: img1,
      testimonial: 'Expert in relationship and career counseling through astrology',
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialty: 'Numerology',
      experience: '12+ Years',
      rating: 4.9,
      likes: 1987,
      image: img3,
      testimonial: 'Specializes in numerology and tarot reading  expert in Vastu and planetary gemology',
    },
    {
      id: 3,
      name: 'Pandit Rajesh',
      specialty: 'Vastu Shastra',
      experience: '18+ Years',
      rating: 4.7,
      likes: 2789,
      image: img2,
      testimonial: 'Renowned expert in Vastu and planetary gemology',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full py-12 bg-[#F27806] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Our Expert Astrologers</h2>
          <p className="text-black font-medium">Connect with India's most trusted astrologers</p>
        </div>
        
        <Slider {...settings}>
          {astrologers.map((astrologer) => (
            <div key={astrologer.id} className="px-2">
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300  mx-2">
                <div className="relative mb-4">
                  <img
                    src={astrologer.image}
                    alt={astrologer.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#F27806]"
                  />
                  <div className="absolute -bottom-2 right-1/3 bg-[#F27806] text-white px-3 py-1 rounded-full text-sm">
                    {astrologer.experience}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{astrologer.name}</h3>
                  <p className=" font-medium">{astrologer.specialty}</p>
                  
                  <div className="flex items-center justify-center mt-3 space-x-2">
                    <div className="flex items-center text-yellow-400">
                      <FaStar />
                      <span className="ml-1 text-gray-700">{astrologer.rating}</span>
                    </div>
                    <div className="flex items-center text-red-500">
                      <FaHeart />
                      <span className="ml-1 text-gray-700">{astrologer.likes}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 relative">
                    <BiSolidQuoteAltLeft className="text-[#F27806] text-4xl absolute -top-2 -left-2" />
                    <p className="text-gray-600 text-sm italic px-6">{astrologer.testimonial}</p>
                  </div>
                  
                  <button className="mt-6 bg-[#F27806] text-white px-6 py-2 rounded-full hover:bg-[#F27806] hover:scale-105 transition duration-300">
                    Consult Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurAstrologer;
