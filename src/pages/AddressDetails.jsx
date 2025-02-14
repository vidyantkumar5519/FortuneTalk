import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import currentLocation from "../assets/image/currentLocation.png";

const AddressDetails = () => {
    const [addAddress,setAddAddress]=useState()

    const handleToggle=()=>{
        setAddAddress(!addAddress)
    }
  return (
    <>
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border-none">
            <h3 className="text-[#F27806] text-center font-bold text-2xl  py-4 shadow-xl">Address</h3>
        </div>
        <div className='bg-[#FFF0E0] pb-10'>
        <h3 className="text-black text-center text-lg py-4 font-medium">Continue with your saved Address</h3>

        <div className="w-full m-6 lg:w-3/5 mx-auto rounded-3xl p-6  border-[6px] text-[#838282] text-lg bg-[#F8F8F8] border-[#F27806]">
            <p>Name: Kumari</p>
            <p>Phone: +91 123456789</p>
            <p>Email Id: kumari@gmail.com</p>
            <p>Locality: Near ABC Mall</p>
            <p>City: Noida</p>
            <p>Landmark: Near XYZ School</p>
            <p>Postal-Code: 201301</p>
        </div>

       <div className='my-6'>
       <Link to='/product-payment-information'>
       <button className="flex rounded-3xl mx-auto bg-[#F27806] border-0  px-6 py-2 text-center text-xl text-white focus:outline-none hover:shadow-xl tracking-wide">
              Deliver to This Address
            </button>
        </Link>

        </div>

        <h3 className="text-black text-center text-lg py-4 font-medium cursor-pointer" onClick={handleToggle}>+ Add New Address</h3>

        {
            addAddress && 
            <div className="w-4/5 m-6 lg:w-3/5 mx-auto rounded-3xl p-6  border-[6px] bg-[#F8F8F8] border-[#F27806]">
            <form action="" className="space-y-6">
               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <input type="text" className='border-2 border-[#9B9696] px-3 py-2 rounded-xl' placeholder='Name' />
                <input type="text" className='border-2 border-[#9B9696] px-3 py-2 rounded-xl' placeholder='Emai ID' />
                <input type="text" className='border-2 border-[#9B9696] px-3 py-2 rounded-xl' placeholder='Phone No' />
                <input type="text" className='border-2 border-[#9B9696] px-3 py-2 rounded-xl' placeholder='Landmark' />
               </div>

               <div class="grid grid-cols-12 gap-4">
    <div class="col-span-10">
        <input type="text" className='border-2 border-[#9B9696] px-3 py-2 rounded-xl w-full' placeholder='Name' />
    </div>
    <div class="col-span-2 flex space-x-4">
        {/* Content of the second part */}
        <img src={currentLocation} alt="" className='w-10 h-10 block ml-2' />
        <h3 className='text-[#E15602] text-sm font-bold hidden lg:block'>Current Location</h3>
    </div>
</div>

<div className="grid grid-cols-3 gap-4 lg:gap-12">
<input type="text" className='border-2 border-[#9B9696] px-3 py-2 rounded-xl' placeholder='City' />
<input type="text" className='border-2 border-[#9B9696] px-3 py-2 rounded-xl' placeholder='State' />
<input type="text" className='border-2 border-[#9B9696] px-3 py-2 rounded-xl' placeholder='Pincode' />

</div>

<div className='my-6'>
<Link to='/product-payment-information'>
       <button className="flex rounded-3xl mx-auto bg-[#F27806] border-0  px-6 py-2 text-center text-xl text-white focus:outline-none hover:shadow-xl tracking-wide">
              Deliver to This Address
            </button>
            </Link>
       </div>

            </form>
        </div>
        }
        </div>

    </>
  )
}

export default AddressDetails