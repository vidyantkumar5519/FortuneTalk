import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import courseClassesImage from '../assets/image/courseClassesImage.png';
import SecureFooter from '../components/footer/SecureFooter';

const DemoClass = () => {
  const location = useLocation();
  const { itemData } = location.state || {}; // Retrieve the passed data
  console.log("itemData", itemData);

  // Parse the learn string into an array
  let learnItems = [];
  try {
    learnItems = itemData?.learn ? JSON.parse(itemData.learn) : [];
  } catch (error) {
    console.error("Error parsing learn data:", error);
  }

  return (
    <>
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border-none">
        <h3 className="text-[#F27806] text-center font-bold text-2xl py-4 shadow-xl">Demo Class</h3>
      </div>
      <div className='w-[90%] mx-auto my-8'>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className='w-full lg:w-2/3'>
            <img
              src={itemData?.courseId?.image}
              alt=""
              className="w-full h-auto lg:h-[382px] rounded-3xl object-cover"
            />
          </div>
          <div className="mx-0 lg:mx-10 py-10 w-full lg:w-1/3 flex-wrap">
            <h2 className="text-3xl text-[#E36D17] font-medium my-2">{itemData?.courseId?.title}</h2>
            <p className="text-lg text-[#B4B4B4] font-medium mb-4 flex-wrap">{itemData?.courseId?.description}</p>
          </div>
        </div>

        <h3 className='text-2xl font-normal my-5'>What will you learn from this Course?</h3>
        <ul className='list-disc list-inside text-lg font-medium text-[#9B9696] leading-10 px-4'>
          {Array.isArray(learnItems) && learnItems.map((item, index) => (
            <li key={item.id}>
              {index + 1}. {item.value}
            </li>
          ))}
        </ul>

        <Link to='/course-details' state={{ itemData: itemData }}>
          <button className="mx-auto my-6 w-auto flex rounded-[58px] border-0 bg-gradient-to-r from-[#EE7105] to-[#E25803] py-2 px-16 text-lg text-white focus:outline-none hover:shadow-xl">
            Demo Class Details
          </button>
        </Link>
      </div>
      
      <SecureFooter />
    </>
  );
}

export default DemoClass;
