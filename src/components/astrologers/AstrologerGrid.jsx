import React from 'react';
import Astrologer from './Astrologer';

const AstrologerGrid = ({ astrologerData }) => {
  console.log(astrologerData);
  if (!Array.isArray(astrologerData)) {
    console.error('astrologerData is not an array');
    return null; // or render an error message
  }

  return (
    <div className='md:w-auto w-full md:border-2 border-[#E9E9E9] xl:m-20 md:rounded-xl md:shadow-lg flex-wrap'>
      <div className='mt-12 mb-10 flex'>
        <h2 className='text-[#F17806] mx-auto justify-center text-[42px]  leading-10'>Our Astrologers</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 gap-1  mr-4 ">
        {astrologerData.map((astrologer, index) => (
          <Astrologer key={index} displayName={astrologer.displayName} astro_id={astrologer.id} language={astrologer.language} profile_image={astrologer.profile_image} />
        ))}
        <Astrologer />
        <Astrologer />
        {/* <Astrologer />
        <Astrologer />
        <Astrologer />
        <Astrologer />
        <Astrologer />
        <Astrologer /> */}
      </div>
    </div>
  );
};

export default AstrologerGrid;
