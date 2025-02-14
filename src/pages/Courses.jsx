import React from 'react'
import LearnAndEarnPageComponent from '../pagesComponent/LearnAndEarnPageComponent'
import CoursesPageComponent from '../pagesComponent/courses/CoursesPageComponent'
import GetInTouch from '../components/getInTouch/GetInTouch'

const Courses = () => {
  return (
    <>
      <LearnAndEarnPageComponent type={'courses'} />
      <div class="relative h-[700px]">

        <div class="absolute inset-0 h-1/2 bg-white"></div>

        <div class="absolute inset-1/2 left-0 right-0 h-1/2 bg-[#FFF0E0]"></div>

        <div class="absolute inset-0">
          <CoursesPageComponent />
        </div>

      </div>

    </>
  )
}

export default Courses