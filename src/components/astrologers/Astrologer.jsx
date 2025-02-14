import React from 'react';
import { Link } from 'react-router-dom';
import astrologer from '../../assets/image/astrologer.png';
import Rating from './Rating';

const Astrologer = ({ displayName, language, profile_image, astro_id }) => {
  return (
    <>
      <Link to={`/astrologer-profile?astrologerId=${astro_id}`}>
        <div
          className="flex m-4 p-3 w-[90%] mx-auto xl:w-[550px] overflow-hidden bg-[#F9F9F9] rounded-3xl relative"
          style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)' }}
        >
          <div>
            <img
              src={profile_image ?? astrologer}
              alt={displayName}
              className='md:w-[152px] w-full h-[152px] object-cover xl:block rounded-full border-[5px] border-[#F77C02]'
            />
          </div>
          <div>
            <div className='flex'>
              <h2 className='text-xl font-medium mx-3'>{displayName}</h2>
              <Rating />
            </div>
            <div className='mx-3 mt-2 text-[#9B9696]'>
              <p className='text-lg'>(Tarot reador, Relationships)</p>
              <p className='text-[15px]'>{language}</p>
            </div>


            <div className="flex relative">
              <button
                type="button"
                className="rounded-full bg-[#5DC709] w-24 md:w-36 px-2 py-2 mt-3 text-md font-semibold text-white shadow-sm hover:bg-[#F77C02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-4 ml-2"
              >
                Call
              </button>
              <Link to='live-chat'>
                <button
                  type="button"
                  className="rounded-full bg-[#5DC709] w-24 md:w-36 px-3 py-2 mt-3 text-md font-semibold text-white shadow-sm hover:bg-[#F77C02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Chat
                </button>
              </Link>
            </div>
          </div>

          <div className='rounded-tr-xl'>
            <div className='absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-[#F27806] p-1'>
              <p className='text-white ml-1'>₹28/min</p>
              <p className='text-white text-xs ml-2 '><s>₹48/min</s></p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Astrologer;
