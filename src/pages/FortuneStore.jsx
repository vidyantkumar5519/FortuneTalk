import React from 'react'
import FortuneStorePageComponent from '../pagesComponent/FortuneStorePageComponent'

const FortuneStore = () => {
  return (
    <>
     <div class="relative h-[500px]">

<div class="absolute inset-0 h-1/2 bg-white"></div>

<div class="absolute inset-1/2 left-0 right-0 h-1/2 bg-[#FFF0E0]"></div>

<div class="absolute inset-0 ">
<FortuneStorePageComponent/>
</div>
</div>

    </>
  )
}

export default FortuneStore