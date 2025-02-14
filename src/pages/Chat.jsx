import React from 'react'
import chatImage from '../assets/image/chatImage.png'
import searchIcon from '../assets/image/searchIcon.png'
import SecureFooter from '../components/footer/SecureFooter'
import Astrologer from '../components/astrologers/Astrologer'
import GetInTouch from '../components/getInTouch/GetInTouch'

const astrologersData = [
  { id: 1, name: 'Astrologer 1' },
  { id: 2, name: 'Astrologer 2' },
  { id: 3, name: 'Astrologer 3' },
  { id: 4, name: 'Astrologer 4' },
  // Add more astrologers as needed
];

const Chat = () => {
  return (
    <>
      <div>
        <img src={chatImage} alt="" />
      </div>

      <div className="relative my-8 w-[90%] mx-auto">
        <input 
          type="text" 
          id="search" 
          className="w-full pl-3 pr-10 py-2 border-[3px] border-[#9B9696] rounded-[57px] hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" 
          placeholder="Search for an astrologers..." 
        />
        <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-[#A09E9E] focus:outline-none hover:text-gray-900 transition-colors">
          <img src={searchIcon} alt="" />
        </button>
      </div>

      <div className="mx-auto my-0 lg:my-10 w-[90%] flex flex-col lg:flex-row">
        {/* left side */}
        <div className='w-full lg:w-1/2 mr-1 bg-[#FFF0E0] relative'>
          <button className="mx-auto text-center justify-center absolute -top-8 left-1/2 w-full lg:w-auto transform -translate-x-1/2 z-10 flex rounded-[50px] border-[10px] border-white bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 lg:px-16 px-4 text-lg text-white focus:outline-none hover:shadow-xl">
            Call with Astrologers
          </button>
          <div className="lg:my-14 my-4 flex flex-col items-center">
            {astrologersData.map(astrologer => (
              <Astrologer key={astrologer.id} name={astrologer.name} />
            ))}
            <button className='text-md text-[#9B9696] mt-8'>show more...</button>
          </div>
        </div>
        
        {/* right side */}
        <div className='w-full lg:w-1/2 ml-1 bg-[#FFF0E0] relative'>
          <button className="mx-auto text-center justify-center absolute -top-8 left-1/2 w-full lg:w-auto transform -translate-x-1/2 z-10 flex rounded-[50px] border-[10px] border-white bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 lg:px-16 px-4 text-lg text-white focus:outline-none hover:shadow-xl">
            Chat with Astrologers
          </button>
          <div className="my-14 flex flex-col items-center">
            {astrologersData.map(astrologer => (
              <Astrologer key={astrologer.id} name={astrologer.name} />
            ))}
            <button className='text-md text-[#9B9696] mt-8'>show more...</button>
          </div>
        </div>
      </div>

      <GetInTouch />
      <SecureFooter />
    </>
  )
}

export default Chat;
