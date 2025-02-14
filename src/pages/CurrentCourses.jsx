import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LearnAndEarnPageComponent from '../pagesComponent/LearnAndEarnPageComponent'
import GetInTouch from '../components/getInTouch/GetInTouch'
import SecureFooter from '../components/footer/SecureFooter'
import { connect } from 'react-redux'
import * as CoursesAction from '../redux/Actions/courseActions';

const CurrentCourses = ({ dispatch, currentCouresesData }) => {

  console.log("subClassData", currentCouresesData)
  const location = useLocation();
  const navigate = useNavigate();
  const { itemData } = location.state || {}; // Retrieve the passed data
  console.log("itemData", itemData)

  const handelJoin = (item) => {
    navigate('/live-class-details', { state: { itemData: { _id: item?.liveClassId?._id, type: 'booked' } } })
  }

  return (
    <>
      <LearnAndEarnPageComponent type={'current_courses'} />
      <div className="w-4/5 mx-auto mt-14 mb-28">

        {currentCouresesData && currentCouresesData?.map((cls, index) => (
          <div className="flex w-full my-10 items-center">
            <div className="w-3/5 h-24 flex items-center justify-center bg-[#F8F8F8] rounded-3xl shadow-md shadow-[#00000040] cursor-pointer hover:shadow-xl">
              <p className='text-center p-5 text-base lg:text-xl my-auto'>{cls?.liveClassId?.className}</p>
            </div>
            <div className="w-2/5 h-16 flex items-center justify-around bg-gradient-to-r from-[#F27806] to-[#E36D17] rounded-r-3xl shadow-md shadow-[#00000040] cursor-pointer hover:shadow-xl">
              <p className='text-center text-white p-5 text-base lg:text-xl'>Class 2</p>
              <p className='text-center text-white p-5 text-base lg:text-xl' onClick={() => handelJoin(cls)}>(Join Now)</p>
            </div>
          </div>
        ))}



        {/* <div className="flex w-full my-10 items-center">
        <div className="w-3/5 h-24 flex items-center justify-center bg-[#F8F8F8] rounded-3xl shadow-md shadow-[#00000040] cursor-pointer hover:shadow-xl">
        <p className='text-center p-5 text-base lg:text-xl my-auto'>Astrology for beginners made easy with Astro Guruji </p>
        </div>
        <div className="w-2/5 h-16 flex items-center justify-around bg-gradient-to-r from-[#F27806] to-[#E36D17] rounded-r-3xl shadow-md shadow-[#00000040] cursor-pointer hover:shadow-xl">
        <p className='text-center text-white p-5 text-base lg:text-xl'>Class 2</p>
        <p className='text-center text-white p-5 text-base lg:text-xl'>(16 Oct - 10 am)</p>
        </div>
      </div> */}
        {/* <div className="flex items-center justify-center w-full h-24 bg-[#F8F8F8] rounded-3xl shadow-md shadow-[#00000040] cursor-pointer hover:shadow-xl">
  <p className='text-center text-base lg:text-xl flex-wrap'>Fully Accredited Professional Numerology Diploma Course</p>
</div> */}


      </div>
      <GetInTouch />
      <SecureFooter />
    </>
  )
}

const mapStateToProps = (state) => ({ currentCouresesData: state.courses.currentCouresesData, });

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCourses);