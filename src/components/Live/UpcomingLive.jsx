import React from 'react'
import TalktoAstroCard from '../astrologers/TalktoAstroCard'
const UpcomingLive = () => {
  return (
    <>
     <div className="px-16 py-2">
     <div className='flex justify-between'>
       <h1 className='font-bold'>Upcoming Live Sessions</h1>
       <p className='text-[#F27806]'>See All</p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white rounded-2xl py-6">
            {/* Add reader cards here */}
          <TalktoAstroCard/>
          <TalktoAstroCard/>
          <TalktoAstroCard/>
          <TalktoAstroCard/>
          <TalktoAstroCard/>
          <TalktoAstroCard/>
          <TalktoAstroCard/>
          <TalktoAstroCard/>
          <TalktoAstroCard/>
          </div>
     </div>
   </>
  )
}

export default UpcomingLive