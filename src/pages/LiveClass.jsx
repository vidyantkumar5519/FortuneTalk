import React, { useEffect } from 'react'
import {Link,useLocation} from 'react-router-dom'
import courseClassesImage from '../assets/image/courseClassesImage.png'
import SecureFooter from '../components/footer/SecureFooter'
import * as CoursesAction from '../redux/Actions/courseActions';
import { connect } from 'react-redux';

const LiveClass = ({ dispatch, liveClassDetails }) => {

  console.log("liveClassDetails",liveClassDetails)

  const location = useLocation();
    const { itemData } = location.state || {}; // Retrieve the passed data

    useEffect(() => {
      dispatch(CoursesAction.getLiveClassDetails({ classId: itemData._id }));
    }, [dispatch]);

  return (
    <>
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border-none">
            <h3 className="text-[#F27806] text-center font-bold text-2xl  py-4 shadow-xl">Live Class</h3>
        </div>
    <div className='w-[90%] mx-auto my-8'>
    <div className="flex flex-col lg:flex-row lg:items-center">
          <div className='w-full lg:w-2/3'>
            <img
              // src={courseClassesImage}
              src={liveClassDetails?.image}
              alt=""
              className="w-full  h-auto lg:h-[382px] rounded-3xl object-cover"
            />
          
          </div>
          <div className="mx-0  lg:mx-10 py-10 w-full lg:w-1/3 flex-wrap">
            <h2 className="text-3xl text-[#E36D17] font-medium my-2">{liveClassDetails?.className}</h2>
            <p className="text-lg text-[#B4B4B4] font-medium mb-4 flex-wrap">{liveClassDetails?.description}</p>
          </div>
        </div>

        <h3 className='text-2xl font-normal my-5'>What will you learn from this Course ?</h3>
        <ul className='list-disc list-inside text-lg font-medium text-[#9B9696] leading-10 px-4'>
            {/* <li>Identify the meaning of every single tarot card</li>
            <li>Confidently give accurate psychic readings using these ancient divination cards</li>
            <li>Use the tarot to improve your love life</li>
            <li>Use the tarot to improve your business, career and finance</li>
            <li>Identify the meaning of every single tarot card</li>
            <li>Confidently give accurate psychic readings using these ancient divination cards</li>
            <li>Use the tarot to improve your love life</li>
            <li>Use the tarot to improve your business, career and finance</li> */}
            {liveClassDetails?.courseContent}
        </ul>

        <Link to='/live-course-details'state={{ itemData: liveClassDetails }} ><button className="mx-auto my-6 w-auto flex rounded-[58px] border-0 bg-gradient-to-r from-[#EE7105] to-[#E25803] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl">Live Class Details</button></Link>
    </div>
    
        <SecureFooter/>
    </>
  )
}

const mapStateToProps = (state) => ({ liveClassDetails: state.courses.liveClassDetails, });

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(LiveClass);