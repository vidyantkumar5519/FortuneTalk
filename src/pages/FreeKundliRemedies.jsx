import React from 'react'
import gemstone1 from '../assets/image/gemstone1.png'
import gemstone2 from '../assets/image/gemstone2.png'
import gemstone3 from '../assets/image/gemstone3.png'
import rudraksha from '../assets/image/rudrakshaImage.png'
import SecureFooter from '../components/footer/SecureFooter'


const FreeKundliRemedies = () => {
  return (
    <>
    <div className='w-[90%] mx-auto my-8'>
        <h2 className='text-3xl text-[#F17806] text-center font-semibold'>Remedies</h2>


        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4 my-8">
    {/* left side div */}
    <div className='lg:border-r lg:border-[#747474]'>
    <button className="mx-auto flex rounded-[20px] border-0 bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl">Gemstones</button>

    <h3 className='text-lg text-[#747474] font-medium mt-8'>Gemstones Remedies</h3>

    <GemstoneCard image={gemstone1} title="Life Stone: Ruby"/>
    <GemstoneCard image={gemstone2} title="Benefic Stone:- Yellow Sapphire"/>
    <GemstoneCard image={gemstone3} title="Lucky Stone:- Red Coral"/>
    </div>

    {/* right side div */}
    <div className='lg:ml-12'>
    <button className="mx-auto flex rounded-[20px] border-0 bg-gradient-to-r from-[#F27806] to-[#E15602] py-2 px-16 text-lg text-white  focus:outline-none hover:shadow-xl">Rudraksha</button>

    <h3 className='text-lg text-[#747474] font-medium mt-8'>Rudraksha Suggestions</h3>

    <div className='relative w-full bg-[#FFF2E5] rounded-[10px] mt-32'>
        <img src={rudraksha} alt="" className='w-[225px] h-[225px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-[#F27806] rounded-[10px]'/>
        <h3 className='text-xl text-[#F27806] font-medium text-center pt-32'>Seven Faced Rudraksha (Saat Mukhi)</h3>
        <p className='text-md font-medium text-[#747474] px-6 py-3'>Saturn rules this 7 faced bead. Among all the planets, Saturn enjoys the encomium of being a master-yogi. The domain of Saturn and the aura surrounding it gets evangelised. The wearer of this Rudraksha begins to break loose of Saturn's influences. Its usefulness in overcoming impotency, cold, obstructions. By wearing Seven Faced Rudraksha man can progress in business and service and spends his life happily. It is also helpful in curing long standing diseases. It is helpful for achieving wealth.</p>
    </div>
    </div>
   
    </div>
        </div>
        <SecureFooter/>
    </>
  )
}

export default FreeKundliRemedies

const GemstoneCard=({image,title})=>{
    return (
        <>
        <div className='flex flex-col md:flex-row justify-start items-center bg-[#FFF2E5] lg:w-[90%] rounded-[10px] my-4'>
            <img src={image} alt="" className='w-auto h-auto md:h-[200px] md:w-[200px] border-2 border-[#9B9696] bg-white rounded-[10px]'/>
            <div className='px-8'>
                <h3 className='text-xl text-[#F27806] font-medium'>{title}</h3>
                <h4 className='text-lg text-black font-medium'>Substitue: Red Garnet</h4>
                <h4 className='text-lg text-[#747474] font-medium'>Weight: 3-4.25</h4>
            
                <div className='text-lg flex justify-between text-[#747474] font-medium'>
                    <p>Finger: Ring</p>
                    <p className='ml-auto'>Deity: Sun</p>
                </div>
                <div className='text-lg flex justify-between text-[#747474] font-medium'>
                    <p>Metal: Gold</p>
                    <p className='ml-auto'>Day: Sunday</p>
                </div>
            </div>
        </div>
        </>
    )
}