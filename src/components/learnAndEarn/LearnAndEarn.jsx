import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'

const LearnAndEarn = () => {
  return (
    <div>
      
      <div className='mt-12 mb-10 flex w-[90%] mx-auto items-center '>
        <span className='text-[#F17806] mx-auto text-[42px] leading-4'>Learn & Earn</span>
        {/* <span className='text-[#F17806] cursor-pointer ml-auto'><Link to='/courses'>View all</Link> </span> */}
      </div>

      <div class="relative h-[450px]">
     
        <div class="absolute inset-0 ">
          <Carousel />
        </div>
      </div>

    </div>
  )
}

export default LearnAndEarn