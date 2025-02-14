import React, { useEffect, useState } from 'react'
import courseClassesImage from '../assets/image/courseClassesImage.png'
import SecureFooter from '../components/footer/SecureFooter'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { api_url, create_razorpay_order, razorpay_key } from '../utils/Constants';
import { ApiRequest } from "../utils/apiRequest";
import Swal from 'sweetalert2';
import * as CoursesAction from '../redux/Actions/courseActions';
import { connect, useDispatch } from "react-redux";
import watchAgainIcon from '../assets/image/watchAgainIcon.png'
import checked from '../assets/image/completed.png'
import GetInTouch from '../components/getInTouch/GetInTouch'
import moment from 'moment';



const LiveClassDetails = ({ dispatch, subClassData }) => {

  console.log("subClassData", subClassData)
  const location = useLocation();
  const navigate = useNavigate();
  const { itemData } = location.state || {}; // Retrieve the passed data
  console.log("itemData", itemData)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  //  Razorpay Section

  const [Razorpay] = useRazorpay();

  const handlePayment = useCallback(async () => {
    try {
      console.log("Payment Razorpay")
      // const order = await createOrder(params);

      console.log(api_url + create_razorpay_order)

      const orderResponse = await ApiRequest.postRequest({
        url: api_url + create_razorpay_order,
        data: {
          amount: "100"
        }
      })

      console.log("rayzorPayResponse  ====>>>", orderResponse)

      if (!orderResponse?.success) {
        // showToastMessage({ message: 'Payment Failed' })
        Swal.fire({
          title: "Payment Failed!",
          text: "Sorry, we're currently experiencing difficulties completing your payment.",
          icon: "error",
        });
        return
      }


      const options = {
        key: "YOUR_KEY_ID",
        amount: "3000",
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: "12345678",
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();

    } catch (e) {
      console.error(e);

    }

  }, [Razorpay]);

  const handelProceed = () => {
    try {
      const payload = {
        courseId: itemData?.courseId?._id,
        liveClassId: itemData?._id,
        customerName: name,
        mobileNumber: number,
      }
      dispatch(CoursesAction.liveClassRegistration({ data: payload, navigate }));

    }
    catch (e) {
      console.log(e);
    }

  }

  // const onRegister = () => {
  //   navigate('/live-payment-information')
  // }

  useEffect(() => {
    dispatch(CoursesAction.getClassByLiveClassId({ liveClassId: itemData?._id }));
  }, [dispatch]);





  return (
    <>
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border-none">
        <h3 className="text-[#F27806] text-center font-bold text-2xl  py-4 shadow-xl">Live Class</h3>
      </div>
      <div className='w-[90%] mx-auto my-8'>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className='w-full lg:w-2/3'>
            <img
              src={subClassData?.liveClass?.image}
              alt=""
              className="w-full  h-auto lg:h-[382px] rounded-3xl object-cover"
            />

          </div>
          <div className="mx-0  lg:mx-10 py-10 w-full lg:w-1/3 flex-wrap">
            <h2 className="text-3xl text-[#E36D17] font-medium my-2">{subClassData?.liveClass?.className}</h2>
            <p className=" text-[#4B4B4B] font-medium mb-4 flex-wrap">{subClassData?.liveClass?.description}</p>
          </div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-r from-[#F27806] to-[#E15602] border-none">
    <Link to='/registration-live-page' state={{ itemData: itemData }}>
            <h3 className="text-white text-center font-medium text-xl  py-4 shadow-xl">Connect to Live Class Now</h3>
            </Link>
        </div> */}


      {itemData?.type == 'booked' ? null : <div className="bg-gradient-to-r from-[#F27806] to-[#E15602] border-none">
        <button
          onClick={openModal}
          className="text-white text-center font-medium text-xl py-4 w-full" >
          Connect to Live Class Now
        </button>
      </div>}


      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#F27806", }}>Registration Form</h3>
            {/* <p className="mb-4">Please fill out the form below to register for the Live class.</p> */}

            <form>
              <div className="mb-4">
                <label className="block mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-lg p-3 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-[#F27806] shadow-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">
                  Number:
                </label>
                <input
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="border rounded-lg p-3 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-[#F27806] shadow-md"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Aligning Submit Button to the Right */}
              <div className="flex justify-end" >
                {/* <Link to="/live-payment-information">  */}
                <div onClick={handelProceed}>
                  <p className="bg-[#F27806] text-white py-2 px-4 rounded-lg hover:bg-[#E15602] focus:outline-none focus:ring-2 focus:ring-[#E15602] cursor-pointer " >   Proceed</p>
                </div>

                {/* </Link> */}
              </div>

              {/* <div className="flex justify-end" onClick={() => handlePayment()}>
                <p className="bg-[#F27806] text-white py-2 px-4 rounded-lg hover:bg-[#E15602] focus:outline-none focus:ring-2 focus:ring-[#E15602] cursor-pointer " >   Proceed</p>
              </div> */}
            </form>
          </div>
        </div>
      )}

      <div className='w-[90%] mx-auto my-8'>
        <h3 className='text-2xl font-normal my-5'>Course Content</h3>
        <ol className='list-decimal list-inside  font-medium text-[#4B4B4B] leading-10 px-4 mb-10'>
          {/* <li>Identify the meaning of every single tarot card</li>
            <li>Confidently give accurate psychic readings using these ancient divination cards</li>
            <li>Use the tarot to improve your love life</li>
            <li>Use the tarot to improve your business, career and finance</li>
            <li>Identify the meaning of every single tarot card</li>
            <li>Confidently give accurate psychic readings using these ancient divination cards</li>
            <li>Use the tarot to improve your love life</li>
            <li>Use the tarot to improve your business, career and finance</li>
            <li>Use the tarot to improve your love life</li>
            <li>Use the tarot to improve your business, career and finance</li> */}
          {subClassData?.liveClass?.courseContent}
        </ol>
      </div>

      <hr />

      {subClassData?.classes?.map((cls, index) => (
        <div className='w-[90%] mx-auto my-4' key={index}>
          <div className='flex justify-between items-center my-2'>
            <h4 className='text-2xl text-[#E36D17] font-medium'>
              {`Class ${index + 1}`} {/* Displaying as Class 1, Class 2, etc. */}
            </h4>
            <div className='flex items-center space-x-4'>
              {cls.completed && (
                <>
                  <p className='text-m text-[green]'>Completed</p>
                  <img src={checked} alt="" className='w-5 h-5 object-cover' />
                </>
              )}
            </div>
            <div className='flex items-center space-x-4'>
              {itemData?.type === 'booked' ? (
                <>
                  <p className='text-m text-[green]'>
                    <a href={cls?.googleMeet} className="hover:underline">Join Now</a>
                  </p>
                  {/* <img src={checked} alt="" className='w-5 h-5 object-cover' /> */}
                </>
              ) : (
                null
              )}
            </div>
          </div>
          <h3 className='text-xl font-medium text-[#4B4B4B]'>{cls.className}</h3>
          <p className='my-3 text-[#4B4B4B]'>{cls.description}</p>
          <div className='flex items-center justify-end space-x-8'>
            <p className='text-[#ABABAB] font-medium'>{moment(cls.time).format('MMMM Do YYYY, h:mm A')}</p>
          </div>
          <hr />
        </div>
      ))}

      <SecureFooter />
    </>
  )
}

const mapStateToProps = (state) => ({ subClassData: state.courses.subClassData, });

const mapDispatchToProps = (dispatch) => ({ dispatch });


export default connect(mapStateToProps, mapDispatchToProps)(LiveClassDetails);



// {classes.map((cls, index) => (
//   <div className='w-[90%] mx-auto my-4' key={index}>
//     <div className='flex justify-between items-center my-2'>
//       <h4 className='text-2xl text-[#E36D17] font-medium'>{cls.title}</h4>
//       <div className='flex items-center space-x-4'>
//         {cls.completed && (
//           <>
//             <p className='text-m text-[green]'>Completed</p>
//             <img src={checked} alt="" className='w-5 h-5 object-cover' />
//           </>
//         )}
//       </div>
//     </div>
//     <h3 className='text-xl font-medium text-[#4B4B4B]'>{cls.title} Description</h3>
//     <p className='my-3 text-[#4B4B4B]'>{cls.description}</p>
//     <div className='flex items-center justify-end space-x-8'>
//       <p className='text-[#ABABAB] font-medium'>{cls.duration}</p>
//     </div>
//     <hr />
//   </div>
// ))}