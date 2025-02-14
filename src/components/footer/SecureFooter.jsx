import React from 'react'
import user from '../../assets/image/user.png'
import privateLock from '../../assets/image/privateLock.png'
import secureShield from '../../assets/image/secureShield.png'

const SecureFooter = () => {
    return (
        <>
            <div className="grid grid-cols-3  grid-rows-1 gap-4 bg-gradient-to-r from-[#615F5DFA] to-[#000000] py-3 lg:py-6">
                <div className='flex flex-col justify-center items-center'>
                    <img src={user} className='w-8 lg:w-14 h-8 lg:h-14' alt="" srcset="" />
                    {/* <p className='text-white font-bold text-sm'>Verified Genuine <br /> Astrologers</p> */}
                    <p className='text-white font-bold text-sm text-center'>100%  <br /> Verified Counsellors</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={privateLock} className='w-8 lg:w-14 h-8 lg:h-14' alt="" srcset="" />
                    <p className='text-white font-bold text-sm text-center'>100%  <br />Private</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={secureShield} className='w-8 lg:w-14 h-8 lg:h-14' alt="" srcset="" />
                    <p className='text-white font-bold text-sm text-center'>100% <br/> Secure Payment</p>
                </div>
            </div>
        </>
    )
}

export default SecureFooter