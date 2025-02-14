import React from 'react'
import omIcon from '../assets/image/omIcon.png'
import SecureFooter from '../components/footer/SecureFooter'


const FreeKundliFavourableForYou=()=>{
    return (
        <>
        <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold mb-20'>Favourable For You</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4 my-8">

    {/* left side div */}
    <div className='lg:border-r lg:border-[#747474]'>
        
<div className="grid grid-cols-2 grid-rows-2 gap-8">
<button className=" w-40 lg:w-60 rounded-[89px] bg-white py-1.5 lg:py-3 px-8 text-lg text-center text-[#F27806] border-[3px] border-[#F27806]  focus:outline-none hover:shadow-xl">Name Number - 2</button>
<button className=" w-40 lg:w-60 rounded-[89px] bg-white py-1.5 lg:py-3 px-8 text-lg text-center text-[#F27806] border-[3px] border-[#F27806]  focus:outline-none hover:shadow-xl">Time - 2.15 pm</button>
<button className=" w-40 lg:w-60 rounded-[89px] bg-white py-1.5 lg:py-3 px-8 text-lg text-center text-[#F27806] border-[3px] border-[#F27806]  focus:outline-none hover:shadow-xl">Friendly No - 1,8,9</button>
<button className=" w-40 lg:w-60 rounded-[89px] bg-white py-1.5 lg:py-3 px-8 text-lg text-center text-[#F27806] border-[3px] border-[#F27806]  focus:outline-none hover:shadow-xl">Destiny No - 3</button>
</div>
        </div>
        

        {/* right side div */}
        <div className='w-[90%] mx-auto'>
            <div className='flex justify-between bg-[#FFF2E5] rounded-[46px] text-[#747474] text-lg font-medium py-5 px-10 my-2 mt-0'>
                <p>Favourable Day</p>
                <p>-</p>
                <p>Sunday, Monday</p>
            </div>
            <div className='flex justify-between bg-[#FFF2E5] rounded-[46px] text-[#747474] text-lg font-medium py-5 px-10 my-2'>
                <p>Favourable Day</p>
                <p>-</p>
                <p>Sunday, Monday</p>
            </div>
            <div className='flex justify-between bg-[#FFF2E5] rounded-[46px] text-[#747474] text-lg font-medium py-5 px-10 my-2'>
                <p>Favourable Day</p>
                <p>-</p>
                <p>Sunday, Monday</p>
            </div>
            <div className='flex justify-between bg-[#FFF2E5] rounded-[46px] text-[#747474] text-lg font-medium py-5 px-10 my-2'>
                <p>Favourable Day</p>
                <p>-</p>
                <p>Sunday, Monday</p>
            </div>
        </div>

        </div>
        <button className="mx-auto flex items-center space-x-4 rounded-[20px] border-0 bg-[#F27806] py-1 px-16 text-xl text-white font-semibold focus:outline-none hover:shadow-xl">
            <img src={omIcon} alt="" className='h-16 w-auto'/>
            <p>Favorable Mantra</p>
        </button>

        <p className='text-center my-6 text-lg text-[#747474] font-medium'> || Adityay Vidmahe Prabhakaray Dhimhi Tannah Suryah Prachodyat || <br/>
|| Om Hring Suryay Namah ||</p>
        </div>

        <SecureFooter/>
        </>
    )
}
export default FreeKundliFavourableForYou