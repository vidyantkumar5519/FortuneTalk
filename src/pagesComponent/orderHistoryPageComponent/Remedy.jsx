import React from 'react'
import Card from './Card'

const Remedy = () => {
  return (
    <>
     <div className='w-[90%] lg:w-4/5 mx-auto my-6'>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-2">
    <div><Card button="Call Again" details="Details"/></div>
    <div><Card button="Call Again" details="Details"/></div>
    <div><Card button="Call Again" details="Details"/></div>
    <div><Card button="Call Again" details="Details"/></div>
</div>

    </div>
    </>
  )
}

export default Remedy