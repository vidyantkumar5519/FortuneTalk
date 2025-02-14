import React, { useEffect, useState } from 'react';
import astrologerIcon from '../assets/image/astrologerIcon.jpg'
import Rating from '../components/astrologers/Rating'
import astrologerProfileImage1 from '../assets/image/astrologerProfileImage1.png'
import astrologerProfileImage2 from '../assets/image/astrologerProfileImage2.png'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const AstrologerProfile = () => {
    const [astrologerData, setAstrologerData] = useState('');
    const location = useLocation();
    const getAstroDetails = async (astrologerId) => {
        try {
            const response = await fetch(`api/v1/webUser/otp?number=${astrologerId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("data", data);
                setAstrologerData(data);
                console.log('data get successful');
            } else {
                console.error('Login failed');
            }
            // Handle response here if needed
        } catch (error) {
            console.error('Error occurred while fetching astro details:', error);
            // Handle error here
        }
    }

    useEffect(() => {
        function getQueryParam(name) {
            const params = new URLSearchParams(location.search);
            return params.get(name);
        }

        const astrologerId = getQueryParam('astrologerId');
        console.log(astrologerId); // Output: 662f7e9059966977c4021eb6

        if (astrologerId) {
            getAstroDetails(astrologerId);
        }
    }, [location]);

    return (
        <>
            <h3 className="text-[#F27806] text-center font-bold text-2xl py-4">Astrologer Profile</h3>
            <div className='w-[90%] mx-auto mb-8'>
                <div className="w-full bg-[#F4F4F4] my-8">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className='w-auto p-8'>
                            <img
                                src={astrologerIcon}
                                alt=""
                                className="w-full h-auto border-4 border-[#F27806] lg:w-[300px] lg:h-[300px] rounded-full object-cover"
                            />
                        </div>
                        <div className="mx-4 py-8 flex-wrap">
                            <div className="flex space-x-3 items-center">
                                <h3 className='text-xl font-medium'>Astro Kuldeep</h3>
                                <button className=" w-auto flex rounded-[58px] border-0 bg-gradient-to-r from-[#EE7105] to-[#E25803] py-1 px-6 text-md text-white  focus:outline-none hover:shadow-xl">Follow</button>
                            </div>
                            <p className='text-lg text-[#8F8F8F] my-2'>Vedic, Tarot, Numerology</p>
                            <p className='text-lg text-[#8F8F8F]'>English, Hindi, Marwadi</p>
                            <div className="flex text-[#8F8F8F] my-8 gap-4">
                                <div className="bg-white lg:w-[268px] lg:h-[100px] p-4 flex flex-col justify-center items-center">
                                    <p className='text-center text-lg'>(2455)</p>
                                    <Rating />
                                </div>
                                <div className="bg-white lg:w-[268px] lg:h-[100px] p-4 flex flex-col justify-center items-center">
                                    <p className='text-center text-lg'>Ex. +7 years</p>
                                </div>
                                <div className="bg-white lg:w-[268px] lg:h-[100px] p-4 flex flex-col justify-center items-center">
                                    <p className='text-center text-lg'>14.89k</p>
                                    <p className='text-center text-lg'>Followers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex my-4 justify-center space-x-4">
                    <button className=" h-12 my-4 justify-center items-center w-auto lg:w-[300px] text-center flex text-white border-none rounded-[100px] bg-gradient-to-r from-[#F07505] to-[#DF5202] py-1 px-8 text-lg focus:outline-none hover:shadow-xl">
                        <div className="flex mt-1 justify-center space-x-4 items-center">
                            {/* <img src="" alt="" className='w-6 h-6'/> */}
                            <p className='font-semibold'>Chat @ ₹ 20/min</p>
                        </div>
                    </button>
                    <button className=" h-12 my-4 justify-center items-center w-auto lg:w-[300px] text-center flex text-[#F27806] border-2 border-[#F27806] rounded-[100px] bg-white py-1 px-8 text-lg focus:outline-none hover:shadow-xl">
                        <div className="flex mt-1 justify-center space-x-4 items-center">
                            {/* <img src="" alt="" className='w-6 h-6'/> */}
                            <p className='font-semibold'>Call @ ₹ 38/min</p>
                        </div>
                    </button>
                </div>
                <h3 className='text-xl font-medium'>About me</h3>
                <p className='text-lg text-[#8F8F8F] my-4'>Kuldeep is a Vedic Astrologer and Tarot Card Reader in India.She loves to helpher clients when they are in need.However, her main motive is to give you clarity and insight regarding your life and also to empower you with the spir Wealth and Property, Career issues and <span className='text-blue-500 cursor-pointer'>Show more</span></p>


                <div className="flex flex-col lg:flex-row lg:space-x-16 py-4">
                    <div className="w-full lg:w-1/2">
                        <h3 className='text-xl font-medium mb-6'>Gallery</h3>

                        <div className="grid grid-cols-3 gap-4 lg:gap-8">
                            <img src={astrologerProfileImage1} alt="" className='w-full h-[172px] object-cover rounded-[10px]' />
                            <img src={astrologerProfileImage2} alt="" className='w-full h-[172px] object-cover rounded-[10px]' />
                            <img src={astrologerProfileImage1} alt="" className='w-full h-[172px] object-cover rounded-[10px]' />
                            <img src={astrologerProfileImage2} alt="" className='w-full h-[172px] object-cover rounded-[10px]' />
                            <img src={astrologerProfileImage1} alt="" className='w-full h-[172px] object-cover rounded-[10px]' />
                            <img src={astrologerProfileImage2} alt="" className='w-full h-[172px] object-cover rounded-[10px]' />
                        </div>


                    </div>

                    <div className="w-full lg:w-1/2">
                        <h3 className='text-xl font-medium mb-6'>Customer Reviews</h3>
                        <div className='mb-4'>
                            <div className="bg-[#EEEEEE] rounded-t-[10px] p-4">
                                <div className="flex items-center space-x-2">
                                    <img src={astrologerIcon} alt="" className='w-10 h-10 rounded-full' />
                                    <h4 className='text-lg text-[#ABABAB]'>Shubham V</h4>
                                    <Rating />
                                </div>
                                <p className='text-base pt-2 text-[#686767]'>"I love how the app encourages reflection. It's not often that I can say an app makes me feel better and more regulated afterward."</p>
                            </div>
                            <div className="bg-[#DFDFDF] rounded-b-[10px] p-4">
                                <h4 className='text-lg text-[#F27806] font-medium'>Astro Kuldeep</h4>
                                <p className='text-base pt-1 text-[#686767]'>Thank you dear,  may the divine blessing always with you stay blessed in keep smiling</p>
                            </div>
                        </div>
                        <div className="bg-[#EEEEEE] rounded-[10px] p-4">
                            <div className="flex items-center space-x-2">
                                <img src={astrologerIcon} alt="" className='w-10 h-10 rounded-full' />
                                <h4 className='text-lg text-[#ABABAB]'>Shubham V</h4>
                                <Rating />
                            </div>
                            <p className='text-base pt-2 text-[#686767]'>"I love how the app encourages reflection. It's not often that I can say an app makes me feel better and more regulated afterward."</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AstrologerProfile