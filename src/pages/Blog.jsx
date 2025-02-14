import React from 'react';
import searchIcon from '../assets/image/searchIcon.png';
import livestreamingBanner from '../assets/image/livestreamingBanner.png';
import SecureFooter from '../components/footer/SecureFooter';

const cardData = [
  { id: 1, title: "2023 Horoscope Guide Book from The Astro Twins: Live Confidently by the Stars Every Day", image: livestreamingBanner },
  { id: 2, title: "Understanding Astrology: A Comprehensive Guide", image: livestreamingBanner },
  { id: 3, title: "The Power of Zodiac Signs: Unlocking Your Potential", image: livestreamingBanner },
  { id: 4, title: "Astrology for Beginners: Your Ultimate Starter Guide", image: livestreamingBanner },
  { id: 5, title: "Daily Astrology: Navigating Your Day with the Stars", image: livestreamingBanner },
  { id: 6, title: "Astrology and You: A Guide to Self-Discovery", image: livestreamingBanner },
];

const Blog = () => {
  return (
    <>
      <div className="flex justify-center items-start">
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#D7D5D5] mx-auto w-32 rounded-b-xl text-center">
          <h3 className="text-[#F27806] font-semibold text-center text-xl py-4 shadow-md rounded-b-xl">
            Blog
          </h3>
        </div>

        <div className="relative my-5 mr-6">
          <input
            type="text"
            id="text"
            className="w-full bg-[#E7E7E7] pl-3 pr-10 py-2 border-none rounded-lg hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors placeholder:font-medium"
            placeholder="Search for Blog"
          />
          <button className="block w-5 h-5 text-center text-xl leading-0 absolute top-2 right-2 text-[#A09E9E] focus:outline-none hover:text-gray-900 transition-colors">
            <img src={searchIcon} alt="" className='py-1' />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 my-10">
        {cardData.map(card => (
          <Card key={card.id} title={card.title} image={card.image} />
        ))}
      </div>

      <SecureFooter />
    </>
  );
}

const Card = ({ title, image }) => {
  return (
    <div
      className="rounded-[10px] transition-transform transform hover:scale-105 shadow-lg "
      style={{
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        height: '260px',
        width: '90%', // Adjust this value as needed
        margin: '0 auto', // Center the card
      }}
    >
      <img 
        src={image} 
        alt="" 
        className='w-full h-40 object-cover rounded-t-[10px]'
      />
      <p className='py-2 px-4 text-lg'>{title}</p>
    </div>
  );
};

export default Blog;
