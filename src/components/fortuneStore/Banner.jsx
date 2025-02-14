import React from 'react';
import banner from '../../assets/image/banner.png';

const Banner = () => {
  return (
    <div className='w-full max-w-screen-lg mx-auto'>
      <img 
        src={banner} 
        alt="Banner" 
        className='w-full h-auto object-contain rounded-xl md:rounded-3xl mx-auto m-4'
      />
    </div>
  );
}

export default Banner;
