import React, { useCallback, useEffect, useState } from "react";
import courseClassesImage from '../assets/image/courseClassesImage.png'
import SecureFooter from '../components/footer/SecureFooter'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import * as CoursesAction from '../redux/Actions/courseActions';
import { connect } from "react-redux";
import AccordionUsage from "./FaqSection";
import TestimonialCourses from "../components/testimonials/TestimonialCourses";
import moment from "moment";
import CountDown from "../components/courses/CountDown";
import { formatTimeFromDateString } from "../utils/services";
import Placement from '../assets/image/placement.png'
import Earning from '../assets/image/earnings.png'
import Certificate from '../assets/image/degree.png'
import '../assets/customStyle/clock.css';
import calendar from '../assets/image/calendar.png';
import clock from '../assets/image/clock.png';
import disbg2 from '../assets/image/disbg2.png';


const DemoClassDetails = ({ dispatch, demoRegistrationStatus, demoClassByIdData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { itemData } = location.state || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const openConnectModal = () => setIsConnectModalOpen(true);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [timeLeft, setTimeLeft] = useState('');
  const [timer, setTimer] = useState(0)

  const closeModal = () => {
    setIsModalOpen(false);
    setIsConnectModalOpen(false);
  }
  const { classId } = useParams();

  useEffect(() => {
    dispatch(CoursesAction.getDemoClassById({ classId }));
  }, [dispatch]);


  useEffect(() => {
    try {
      const date1 = new Date(demoClassByIdData.date); // First date object (date part)
      const date2 = new Date(demoClassByIdData.time);
      const year = date1.getUTCFullYear();
      const month = date1.getUTCMonth();
      const day = date1.getUTCDate();
      const hours = date2.getUTCHours();
      const minutes = date2.getUTCMinutes();
      const seconds = date2.getUTCSeconds();
      const combinedDate = new Date(year, month, day, hours, minutes, seconds);
      const currentDate = new Date();
      const diffInMilliseconds = combinedDate.getTime() - currentDate.getTime();
      const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
      console.log(diffInSeconds, "diffInSeconds")
      setTimer(diffInSeconds)
    } catch (e) {
      console.log(e)
    }

  }, [demoClassByIdData])




  const handelProceed = () => {
    // Validation: Check if number is exactly 10 digits and not all zeros
    if (number.length !== 10 || /^0{10}$/.test(number)) {
      setNumberError("Please enter a valid 10-digit phone number that is not all zeros.");
      return;
    }

    // Clear error if valid
    setNumberError("");

    try {
      const payload = {
        demoClassId: demoClassByIdData?._id,
        customerName: name,
        mobileNumber: number,
      };
      console.log(payload);
      dispatch(CoursesAction.demoClassRegistration({ payload, navigate }));
      setIsModalOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handelConnect = () => {
    // Validation: Check if number is exactly 10 digits and not all zeros
    if (number.length !== 10 || /^0{10}$/.test(number)) {
      setNumberError("Please enter a valid 10-digit phone number that is not all zeros.");
      return;
    }

    // Clear error if valid
    setNumberError("");

    try {
      const payload = {
        demoClassId: demoClassByIdData?._id,
        mobileNumber: number,
        link: demoClassByIdData?.googleMeet,
      };
      console.log(payload);
      dispatch(CoursesAction.getStatusForRegisteredDemo({ data: payload }));
      setIsConnectModalOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    // Allow only numeric input and restrict to 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setNumber(value);
    }
  };

  let learnItems = [];
  try {
    learnItems = demoClassByIdData?.learn ? JSON.parse(demoClassByIdData.learn) : [];
  } catch (error) {
    console.error("Error parsing learn data:", error);
  }

  const formattedTime = formatTimeFromDateString(demoClassByIdData?.time);



  return (
    <>
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border-none">
        <h3 className="text-[#F27806] text-center font-bold text-2xl  py-4 shadow-xl"> Free Demo Class</h3>
      </div>

      <div className='w-[90%] mx-auto my-8'>
        <div className="flex flex-col lg:flex-row">
          <div className='w-full lg:w-2/3 py-2 lg:py-12 flex flex-col items-center'>
            <img
              src={demoClassByIdData?.image}
              alt=""
              className="w-full h-auto lg:h-[382px] rounded-3xl object-cover border-[3px] border-[#EF760A]"
            />
            <Link onClick={openModal} state={{ demoClassByIdData }} className="flex-shrink-0 mt-4">
              <button className="w-[320px] lg:rounded-[58px] rounded-0 border-0 bg-gradient-to-r from-[#EE7105] to-[#E25803] py-2 text-lg text-white focus:outline-none hover:shadow-xl text-center pop">
                Book Your Seat Now
              </button>
            </Link>
          </div>

          <div className="mx-0 lg:mx-10 py-1 w-full lg:w-1/3 flex-wrap">
            <h2 className="text-3xl text-[#E36D17] font-medium my-2">{demoClassByIdData?.className}</h2>
            <p className="text-lg text-[#444444] font-medium mb-0 flex-wrap">{demoClassByIdData?.description}</p>
          </div>
        </div>


      </div>

      {/* <div className="w-[90%] mx-auto my-2 flex flex-col items-center bg-gradient-to-r from-[#EE7105] to-[#E25803] p-6 rounded-lg shadow-lg">
    <div className="text-left w-full md:w-9/10 mb-1 md:mb-0 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-0 text-center">
            <span className="inline-block transform -rotate-6 skew-x-2 bg-[#F0DF20] text-black italic blink text-2xl md:text-5xl font-poppins rounded-full px-2">
                Free
            </span>
            <span className="font-poppins text-3xl md:text-5xl text-white">Demo Class</span>
        </h2>
    </div>
</div> */}

      <div className="w-[90%] mx-auto my-2 flex flex-col items-center bg-gradient-to-r from-[#EE7105] to-[#E25803] p-6 rounded-lg shadow-lg">
        <div className="text-left w-full md:w-9/10 mb-1 md:mb-0 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl text-white mb-0 text-center">
            <span className="inline-block font-medium transform -rotate-12 skew-x-2 bg-[#F0DF20] text-black italic blink text-xl md:text-3xl font-poppins rounded-full px-5">
              Free
            </span>
            <span className="font-poppins text-3xl md:text-5xl text-white">Demo Class</span>
          </h2>
        </div>
      </div>

      <div className="w-[90%] mx-auto my-2 flex flex-col items-center p-3 rounded-lg">
        <div className="flex w-full">
          <div className="flex-1 text-center">
            <span className="inline-flex flex-col items-center justify-center">
              <span className="inline-flex items-center justify-center bg-black rounded-full p-4"> {/* Added a separate span for the icon background */}
                <img src={calendar} alt="Calendar" className="w-8 h-8 " /> {/* Adjusted size */}
              </span>
              <span className="text-black ml-2 text-lg md:text-3xl font-bold mt-2 md:mt-0">
                {demoClassByIdData?.date && moment(demoClassByIdData.date).format('MMMM D, YYYY')}
              </span>
            </span>
          </div>
          <div className="flex-1 text-center">
            <span className="inline-flex flex-col items-center justify-center">
              <span className="inline-flex items-center justify-center bg-black rounded-full p-4"> {/* Added a separate span for the icon background */}
                <img src={clock} alt="Calendar" className="w-8 h-8 " /> {/* Adjusted size */}
              </span>
              <span className="text-black ml-2 text-lg md:text-3xl font-bold mt-2 md:mt-0">
                {formattedTime}
              </span>
            </span>
          </div>
        </div>
      </div>


      <h3 className="text-[#F27806] text-center font-bold text-3xl  py-1 "> TIME LEFT</h3>

      <span className="mt-2  text-center  p-2">
        <CountDown duration={timer} />
      </span>

      <div className="text-center">

        {/* Countdown Section centered below the clock */}
        {/* <span className="text-4xl font-bold text-[#EE7105] mt-4 text-center">
              <CountDown duration={timer} />
            </span>
       */}


        <Link onClick={openModal} state={{ demoClassByIdData }} className="mt-4">
          <button className="w-48 lg:rounded-[58px] rounded-0 border-0 bg-gradient-to-r from-[#EE7105] to-[#E25803] py-2 text-lg text-white focus:outline-none hover:shadow-xl text-center pop">
            Register Now
          </button>
        </Link>
      </div>


      <div className='w-[90%] mx-auto my-8'>
        {/* <h3 className='text-2xl font-normal my-5'>Course Content</h3> */}
        <h3 className='text-2xl font-normal my-5'>Learn And Earn </h3>
        <div className="text-lg text-[#444444] font-medium mb-4 flex-wrap">
          {demoClassByIdData?.courseContent}

        </div>

        {/* <ol className='list-decimal list-inside text-lg font-medium text-[#9B9696] leading-10 px-4 mb-10'>
       
        </ol> */}
      </div>

      <div className='w-[90%] mx-auto my-8'>
        <h3 className='text-2xl font-normal my-5'>What will you learn from this Course?</h3>

        <ul className='list-disc list-inside text-lg font-medium text-[#444444] leading-10 px-4'>
          {Array.isArray(learnItems) && learnItems.map((item, index) => (
            // <li key={item.id}>
            //   {index + 1}. {item.value}
            // </li>
            <li key={item.id}>
              {item.value}
            </li>
          ))}
        </ul>

        {/* <p className="text-lg text-[#444444] font-medium mb-4 flex-wrap" >
          {demoClassByIdData?.learn}
        </p> */}

      </div>

      <div className='w-[90%] mx-auto my-8'>
        <h2 className="text-3xl text-[#E36D17] font-medium my-2 text-center">
          Benefits of Course
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center my-3">
          <div
            className="w-full lg:w-1/3 mx-4 my-2 rounded-3xl bg-[#F9F9F9] transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Adjust values as needed
            }}
          >
            <div className="flex flex-col justify-center items-center space-y-2 py-3">
              <img src={Placement || "Astrologer Image"} alt="" className="max-w-[150px] max-h-[150px] border-2 border-white" />
              <h2 className="text-[#454444] text-2xl font-bold">Instant Placement</h2>
              <p className="text-[#9B9696] text-medium text-center font-medium px-4">Instant placement on FortuneTalk after completing the course.</p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 mx-4 my-2 rounded-3xl bg-[#F9F9F9] shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Adjust values as needed
            }}>
            <div className="flex flex-col justify-center items-center space-y-2 py-3">
              <img src={Certificate || "Astrologer Image"} alt="" className="max-w-[150px] max-h-[150px] border-2 border-white" />
              <h2 className="text-[#454444] text-2xl font-bold">Certificate</h2>
              <p className="text-[#9B9696] text-medium font-medium text-center px-4">Get a globally recognized certificate after completing the course.</p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 mx-4 my-2 rounded-3xl bg-[#F9F9F9] shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Adjust values as needed
            }}>
            <div className="flex flex-col justify-center items-center space-y-2 py-3">
              <img src={Earning || "Astrologer Image"} alt="" className="max-w-[150px] max-h-[150px] border-2 border-white" />
              <h2 className="text-[#454444] text-2xl font-bold">Earning</h2>
              <p className="text-[#9B9696] text-medium font-medium text-center px-4">Earn up to a six-figure monthly income.</p>
            </div>
          </div>
        </div>
      </div>




      <div className="bg-[#FFF0E0]  pb-8">
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E6E4E4] border-none">
          <h3 className="text-[#F27806] text-center font-bold text-2xl  py-4 shadow-xl">FAQ's</h3>
        </div>
        <div className='w-[90%] mx-auto my-8'>
          <AccordionUsage />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col lg:flex-row justify-center items-center p-4 bg-white lg:bg-transparent phone:bg-white phone:p-2 border-t-2 border-gray-500 lg:border-0">
        <p className="text-2xl font-bold block lg:hidden gradient-text pop mb-1 -mt-2">Few Seats Left</p>
        <div className="flex w-full justify-center lg:space-x-4">
          <Link onClick={openModal} state={{ demoClassByIdData }} className="flex-shrink-0">
            <button className="w-48 lg:rounded-[58px] rounded-0 border-0 bg-gradient-to-r from-[#EE7105] to-[#E25803] py-2 text-lg text-white focus:outline-none hover:shadow-xl text-center">
              Register Now
            </button>
          </Link>

          <Link onClick={openConnectModal} state={{ demoClassByIdData }} className="flex-shrink-0">
            <button className="w-48 lg:rounded-[58px] rounded-0 border-0 py-2 text-lg text-white focus:outline-none hover:shadow-xl text-center bg-[#06402A] lg:bg-gradient-to-r from-[#EE7105] to-[#E25803]">
              Connect Now
            </button>
          </Link>
        </div>

        <style jsx>{`
        @keyframes pop {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1); /* Adjust scale as needed */
            }
        }
        .pop {
            animation: pop 0.5s infinite; /* Adjust duration for faster or slower pop */
        }
        .gradient-text {
            background: linear-gradient(90deg, #EE7105, #E25803);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    `}</style>
      </div>


      <style jsx>{`
  @media (max-width: 640px) {
    .fixed {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0; /* Adjust padding as needed */
    }
  }
`}</style>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#F27806" }}>
              Registration Form
            </h3>
            <p className="mb-4">Please fill out the form below to register for the demo class.</p>

            <form>
              <div className="mb-4">
                <label className="block mb-2">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-lg p-3 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-[#F27806] shadow-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Number:</label>
                <input
                  type="text"
                  value={number}
                  onChange={handleNumberChange}
                  className={`border rounded-lg p-3 w-full mt-1 focus:outline-none 
              ${numberError ? "border-red-500" : "border-gray-300"} 
              focus:ring-2 focus:ring-[#F27806] shadow-md`}
                  placeholder="Enter your phone number"
                />
                {numberError && (
                  <p className="text-red-500 text-sm mt-1">{numberError}</p>
                )}
              </div>
              {/* Aligning Submit Button to the Right */}
              <div className="flex justify-end">
                <p
                  onClick={handelProceed}
                  className="bg-[#F27806] text-white py-2 px-4 rounded-lg hover:bg-[#E15602] focus:outline-none focus:ring-2 focus:ring-[#E15602] cursor-pointer"
                >
                  Submit
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Connect Now Modal */}
      {isConnectModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            {/* Modal Content */}
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#F27806", }}>Please Enter Number </h3>

            <form>
              <div className="mb-4">
                <label className="block mb-2">
                  Number:
                </label>
                <input
                  type="text"
                  value={number}
                  onChange={handleNumberChange}
                  className={`border rounded-lg p-3 w-full mt-1 focus:outline-none 
                        ${numberError ? "border-red-500" : "border-gray-300"} 
                        focus:ring-2 focus:ring-[#F27806] shadow-md`}
                  placeholder="Enter your phone number"
                />
                {numberError && (
                  <p className="text-red-500 text-sm mt-1">{numberError}</p>
                )}
              </div>
              {/* Aligning Submit Button to the Right */}
              <div className="flex justify-end">
                <p onClick={handelConnect} className="bg-[#F27806] text-white py-2 px-4 rounded-lg hover:bg-[#E15602] focus:outline-none focus:ring-2 focus:ring-[#E15602] cursor-pointer" >  Submit </p>
              </div>
            </form>
          </div>
        </div>
      )}


      <div className="mb-4">
        <TestimonialCourses />
      </div>
      <div className="mb-[122px] sm:mb-0">
        <SecureFooter />
      </div>

      <style jsx>{`
  @media (max-width: 640px) {
    .fixed {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1rem; /* Adjust padding as needed */
    }
  }
`}</style>

    </>
  )
}

const mapStateToProps = state => ({
  demoRegistrationStatus: state.courses.demoRegistrationStatus,
  demoClassByIdData: state.courses.demoClassByIdData,
})


const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(DemoClassDetails)

