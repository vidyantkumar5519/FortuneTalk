import React from 'react'
import AstrologersListPageComponent from '../pagesComponent/AstrologersListPageComponent'
import poojaKit from "../assets/image/poojaKit.png";

const FortuneStore = () => {
  return (
    <>
    <div className='mx-auto'>
    <img src={poojaKit} alt="" className="my-6 rounded-3xl mx-auto w-full lg:w-[90%] h-auto lg:h-[288px] object-cover" />
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border">
            <h3 className="text-[#848484] text-center text-lg py-4 shadow-xl font-semibold">Astrologers List</h3>
        </div>
    </div>


     <div class="relative h-[700px]">

<div class="absolute inset-0 h-1/2 bg-[#FEE5CD]"></div>

<div class="absolute inset-1/2 left-0 right-0 h-1/2 bg-[#FFF0E0]"></div>

<div class="absolute inset-0">
<AstrologersListPageComponent/>
</div>
</div>

    </>
  )
}

export default FortuneStore