import React from 'react';

const GetInTouch = () => {
  return (
    <div className='w-full bg-gradient-to-r from-[#F27806] to-[#E15602] p'>
      <h3 className='text-white text-xl pt-4 pb-2 font-semibold w-[90%] mx-auto'>Get In Touch With Us</h3>
      <div className="flex flex-col items-center justify-center md:flex-row w-[90%] mx-auto">
        <div className='flex-1 mr-2'>
          <input
            className="flex h-10 my-4 w-full rounded-md border border-black/30 bg-[#FFF5EC] px-3 py-2 text-sm placeholder:text-[#C3C3C3] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className='flex-1 mr-2'>
          <input
            className="flex h-10 my-4 w-full rounded-md border border-black/30 bg-[#FFF5EC] px-3 py-2 text-sm placeholder:text-[#C3C3C3] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Email ID"
          />
        </div>
        <div className='flex-1 m-2'>
          <input
            className="flex h-10 my-4 w-full rounded-md border border-black/30 bg-[#FFF5EC] px-3 py-2 text-sm placeholder:text-[#C3C3C3] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Message"
          />
        </div>
        <div className="mx-2 mb-2">
          <button className="mx-auto flex rounded-[54px] border-0 bg-[#FFF5EC] py-1.5 px-12 text-lg text-[#9B9696] focus:outline-none hover:shadow-xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
