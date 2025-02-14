import React from 'react'
import gemstoneBanner from "../assets/image/gemstoneBanner.png";
import searchIcon from '../assets/image/searchIcon.png'
import filter from '../assets/image/filter.png'

import GemstonePageComponent from '../pagesComponent/GemstonePageComponent';

const Gemstone = () => {
  return (
    <>
    <div className='mx-auto'>
    <img src={gemstoneBanner} alt="" className="my-6 rounded-3xl mx-auto w-full lg:w-[90%] h-auto lg:h-[288px] object-cover" />
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border">
            <h3 className="text-[#848484] text-center text-lg py-4 font-semibold shadow-xl">Gemstone</h3>
        </div>
    </div>

    <div className="flex items-center justify-center w-[90%] mx-auto">
    <div className="relative my-8 w-full  ">
            <input type="text" id="text" className="w-full bg-[#E7E7E7] pl-3 pr-10 py-4 border-none rounded-lg hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors placeholder:font-medium" placeholder="Search for Product"/>
            <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-[#A09E9E] focus:outline-none hover:text-gray-900 transition-colors">
                <img src={searchIcon} alt="" className='py-2' />
            </button>
        </div>
        <div className='mx-4'>
            <img src={filter} alt="filter" className="w-12 h-12 opacity-50" />
        </div>

    </div>
    
     <div class="relative h-[700px]">

<div class="absolute inset-0 h-1/2 bg-white"></div>

<div class="absolute inset-1/2 left-0 right-0 h-1/2 bg-[#FFF0E0]"></div>

<div class="absolute inset-0">
<GemstonePageComponent/>
</div>
</div>

    </>
  )
}

export default Gemstone