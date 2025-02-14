import React from 'react'
import { Link } from 'react-router-dom'
import saurav from '../assets/image/saurav.png'
import guruji from '../assets/image/guruji.png'
import soniy from '../assets/image/soniya.png'
import live from '../assets/image/live.gif'
import liveVideo from '../assets/image/liveVideo.png'
import livestreamingBanner from '../assets/image/livestreamingBanner.png'
import SecureFooter from '../components/footer/SecureFooter'

const LiveStreaming = () => {
  return (
    <>
    <img src={livestreamingBanner} alt="" className='w-full h-auto lg:h-[500px] object-cover' />
    <div className='mt-12 flex'>
        <h2 className='text-[#F17806] mx-auto mb-8 justify-center text-[42px] leading-10'>Live Streaming</h2>
      </div>
    
<div className="grid grid-cols-2 md:grid-cols-3  gap-8 mx-auto w-[90%] lg:w-4/5">
<SingleCard image={guruji} name="Guruji"/>
<SingleCard image={soniy} name="Soniya"/>
<SingleCard image={saurav} name="Saurav"/>
<SingleCard image={guruji} name="Guruji"/>
<SingleCard image={soniy} name="Soniya"/>
<SingleCard image={saurav} name="Saurav"/>
<SingleCard image={guruji} name="Guruji"/>
<SingleCard image={soniy} name="Soniya"/>
<SingleCard image={saurav} name="Saurav"/>

</div>

<SecureFooter/>
    
    </>
  )
}

export default LiveStreaming

const SingleCard = ({
    image,
    name
  }) => {
    return (
        <div  className="relative rounded-3xl overflow-hidden border-8  border-[#F9F9F9] shadow-xl">
      <img src={image} alt="" className=' object-cover w-full h-full rounded-3xl' />
      <div className='absolute inset-x-0 bottom-0 flex p-4 mx-6 mb-2 justify-between'>
        <p className='text-lg text-white font-medium'>{name}</p>
        <img src={liveVideo} alt="" className='w-15 h-15 ' />
      </div>
    </div>
    );
  };