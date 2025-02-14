import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import * as CoursesAction from '../redux/Actions/courseActions';
import { connect } from "react-redux";
import bgofty from "../../src/assets/image/bgofty.png"

const ThankyouPage = ({ dispatch, demoClassByIdData }) => {

  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const location = useLocation();
  const { itemData } = location.state || {}; // Retrieve the passed data
  console.log("itemData", itemData);
  console.log("demoClassByIdData", demoClassByIdData);
  console.log("Location State:", location.state);

  const { classId } = useParams();

  useEffect(() => {
    dispatch(CoursesAction.getDemoClassById({ classId }));
  }, [dispatch]);


  const handelConnectNow = () => {
    setIsConnectModalOpen(true);
  }

  const closeModal = () => {
    setIsConnectModalOpen(false);
  }

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


  return (
    <>
      <div
        className="relative min-h-screen pt-24"
        style={{
          backgroundImage: `url(${bgofty})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative z-10 mx-1 pt-1 pb-12 rounded-lg ">
          <h3 className="text-6xl md:text-9xl text-center mb-6" style={{ color: "#F27806", fontFamily: "Dancing Script, cursive" }}>
            Thank You!
          </h3>

          <p className="mb-4 text-center text-gray-700 text-lg md:text-xl">
            Your registration for the free demo class has been successfully submitted.
          </p>
          <p className="mb-6 text-center text-gray-700 text-lg md:text-xl">
            Now click on Connect Now to connect to your free demo class.
          </p>

          {/* <div className="flex justify-center mt-6">
            <Link onClick={handelConnectNow} className="bg-black bg-opacity-75 p-4 rounded-full">
              <button className="bg-[#F27806] text-white py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E15602] transition-transform transform hover:scale-105">
                Connect Now
              </button>
            </Link>
          </div> */}
        </div>
      </div>

      {/* Connect Now Modal */}
      {isConnectModalOpen && (
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
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#F27806", }}>Please Enter Number </h3>
            {/* <p className="mb-4">Please fill out the form below to register for the demo class.</p> */}

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

    </>
  );
}

const mapStateToProps = state => ({
  demoRegistrationStatus: state.courses.demoRegistrationStatus,
  demoClassByIdData: state.courses.demoClassByIdData,
})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(ThankyouPage)

