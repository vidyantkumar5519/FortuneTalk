import React from 'react'
import TestimonialCoursesStatic from './testimonialCoursesStatic'

const TestimonialCourses = () => {
  return (
    <div>
        <div className='mt-12 flex'>
      <h2 className='text-[#F17806] mx-auto text-center item-center  justify-center text-[42px]  leading-10 p-3'>Courses Testimonials</h2>
    </div>
        <div class="relative h-[500px]">

  <div class="absolute inset-0 h-1/2 bg-white"></div>
  
  <div class="absolute inset-1/2 left-0 right-0 h-1/2 bg-[#FFF0E0]"></div>

  <div class="absolute inset-0 ">
    <TestimonialCoursesStatic/>
  </div>
</div>

    </div>
  )
}

export default TestimonialCourses