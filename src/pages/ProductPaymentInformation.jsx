import React from 'react'
import {Link} from 'react-router-dom'
import navgrahaPooja from '../assets/image/navgrahaPooja.png'
import editText from '../assets/image/edit-text.png'

const ProductPaymentInformation = () => {
  return (
    <>
         <div className='bg-[#FFF0E0]'>
         <div className="bg-white">
            <h3 className="text-[#F27806] text-center text-2xl font-bold py-5">Payment Information</h3>
        </div>
            <div className="flex flex-col md:flex-row w-full mt-8 mb-4 md:w-4/5 mx-auto border-[6px] border-[#F27806] bg-[#F8F8F8] rounded-3xl">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                    <div className="flex flex-col">
                        <img src={navgrahaPooja} alt=""  className='w-full h-full mt-10 md:w-[438px] justify-center items-center md:h-[274px] mx-auto rounded-3xl'/>
                        <h3 className='text-[#F27806] my-4 text-center text-2xl font-bold'>15 Ratti Amethyst</h3>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                <div className="w-full bg-[#F8F8F8] h-full rounded-r-3xl">
                                    <div className="flex flex-col  px-14 py-20 justify-between overflow-y-auto">
                                        <div className="flex">
                                        <p className="text-2xl font-black leading-9 text-gray-800">Address</p>
                                        <Link to='/edit-address' className='ml-auto'>
                                        <img src={editText} alt="" className="w-6 h-6 ml-auto"/>

                                        </Link>
                                        </div>
                                        <p className='text-[#8C9099]'>GC76+79C, Blossom County, Sector 90, Noida, Uttar Pradesh 201305</p>
                                        <div>
                                            <div className="flex items-center justify-between pt-8">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-xl font-bold leading-none text-gray-800">₹ 11,250</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Delivery Charge</p>
                                                <p className="text-base leading-none text-gray-800">Free</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Gst @ 3.0%</p>
                                                <p className="text-base leading-none text-gray-800">₹ 450</p>
                                            </div>
                                        </div>
                                        <div>
                                            <hr className='my-4 border-2 border-[#D9D9D9]'/>
                                            <div className="flex items-center justify-between">
                                                <p className="text-xl leading-normal text-gray-800">Total</p>
                                                <p className="text-xl font-bold leading-normal text-right text-gray-800">₹ 11,250</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                </div>
                <div>
            

                </div>
            </div>

           <div className="py-3">
           <button className="flex rounded-3xl  mx-auto bg-[#F27806] border-0  px-6 py-2 text-center text-xl text-white focus:outline-none hover:shadow-xl tracking-wide">
              <Link to='booking-successfull'>Proceed for Payment</Link>
            </button>
           </div>


         </div>
    </>
  )
}

export default ProductPaymentInformation