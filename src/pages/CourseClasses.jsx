import React from 'react'
import courseClassesImage from '../assets/image/courseClassesImage.png'
import watchAgainIcon from '../assets/image/watchAgainIcon.png'
import checked from '../assets/image/checked.png'
import GetInTouch from '../components/getInTouch/GetInTouch'
import SecureFooter from '../components/footer/SecureFooter'

const CourseClasses = () => {
  return (
    <>
    <div className='w-[90%] mx-auto my-8'>
    <div className="flex flex-col lg:flex-row lg:items-center">
          <div className='w-full lg:w-2/3'>
            <img
              src={courseClassesImage}
              alt=""
              className="w-full  h-auto lg:h-[382px] rounded-3xl object-cover"
            />
          
          </div>
          <div className="mx-0  lg:mx-10 py-10 w-full lg:w-1/3 flex-wrap">
            <h2 className="text-3xl text-[#E36D17] font-medium my-2">Master your Psychic Ability and Learn to Give Accurate </h2>
            <p className="text-lg text-[#B4B4B4] font-medium mb-4 flex-wrap">COMES WITH A SAL JADE CERTIFICATE OF COMPLETION FROM THE ACCREDITED COLLEGE: THE PSYCHIC HEALING ACADEMY Also features free monthly bonus Tarot seminars  educational announcements   tarot readings  </p>
          </div>
        </div>
    </div>
        <hr />
        <div className='w-[90%] mx-auto my-8'>
            <div className='flex justify-between items-center my-4'>
                <h3 className='text-3xl text-[#E36D17] font-medium'>Class 1</h3>
                <div className='flex items-center space-x-4'>
                    <p className='text-sm text-[#B4B4B4]'>completed</p>
                    <img src={checked} alt="" className='w-7 h-7 object-cover' />
                </div>
            </div>
            <h3 className='text-2xl font-medium text-[#B4B4B4]'>History and The Minor Arcana</h3>
            <p className='text-xl my-4 text-[#B4B4B4]'>In this module, you will be introduced to the history of tarot, from its origins in ancient Egypt to its most recent adaptations in the 1400s en Europa. Then you will learn about</p>

            <div className='flex items-center justify-end space-x-8'>
                <p className='text-[#ABABAB] font-medium text-xl'>(35 min Video)</p>
                <p className='text-[#FF0404] text-md'>Watch Again</p>
                <img src={watchAgainIcon} alt="" className='w-7 h-7 object-cover' />
            </div>

        </div>
        <hr />
        <div className='w-[90%] mx-auto my-8'>
            <div className='flex justify-between items-center my-4'>
                <h3 className='text-3xl text-[#E36D17] font-medium'>Class 2</h3>
                <div className='flex items-center space-x-4'>
                    <p className='text-sm text-[#B4B4B4]'>completed</p>
                    <img src={checked} alt="" className='w-7 h-7 object-cover' />
                </div>
            </div>
            <h3 className='text-2xl font-medium text-[#B4B4B4]'>History and The Minor Arcana</h3>
            <p className='text-xl my-4 text-[#B4B4B4]'>In this module, you will be introduced to the history of tarot, from its origins in ancient Egypt to its most recent adaptations in the 1400s en Europa. Then you will learn about</p>

            <div className='flex items-center justify-end space-x-8'>
                <p className='text-[#ABABAB] font-medium text-xl'>(35 min Video)</p>
                <p className='text-[#FF0404] text-md'>Watch Again</p>
                <img src={watchAgainIcon} alt="" className='w-7 h-7 object-cover' />
            </div>

        </div>
        <hr />
        <div className='w-[90%] mx-auto my-8'>
            <div className='flex justify-between items-center my-4'>
                <h3 className='text-3xl text-[#E36D17] font-medium'>Class 3</h3>
                <div className='flex items-center space-x-4'>
                    <p className='text-sm text-[#B4B4B4]'>completed</p>
                    <img src={checked} alt="" className='w-7 h-7 object-cover' />
                </div>
            </div>
            <h3 className='text-2xl font-medium text-[#B4B4B4]'>History and The Minor Arcana</h3>
            <p className='text-xl my-4 text-[#B4B4B4]'>In this module, you will be introduced to the history of tarot, from its origins in ancient Egypt to its most recent adaptations in the 1400s en Europa. Then you will learn about</p>

            <div className='flex items-center justify-end space-x-8'>
                <p className='text-[#ABABAB] font-medium text-xl'>(35 min Video)</p>
                <p className='text-[#FF0404] text-md'>Watch Again</p>
                <img src={watchAgainIcon} alt="" className='w-7 h-7 object-cover' />
            </div>

        </div>
        <hr />
        <button className="mx-auto my-12 flex rounded-[10px] border font-medium shadow-lg hover:shadow-xl bg-gradient-to-r from-[#FFFFFF] to-[#F3F3F3] py-3 px-16 text-[#9B9696] text-2xl  focus:outline-none">Download Certificate</button>

        <GetInTouch/>
        <SecureFooter/>
    </>
  )
}

export default CourseClasses