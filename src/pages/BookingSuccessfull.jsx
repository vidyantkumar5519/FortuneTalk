import React, {useState} from 'react'
import navgrahaPooja from '../assets/image/navgrahaPooja.png'
import astrologerIcon from '../assets/image/astrologerIcon.jpg'
const BookingSuccessfull = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
  
  return (
    <>
      <div className="bg-[#FFF0E0]">
        <div className="bg-orange-800">
          <h3 className="text-[#F27806] text-center text-2xl font-bold py-5">
            Booking Details
          </h3>
        </div>
        <div className="">
          <h3 className="text-[#5DC709] text-center text-2xl font-bold pt-5">
            Pooja has been Successfully Booked !!
          </h3>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-8 mb-4 md:w-4/5 mx-auto border-[6px] border-[#F27806] bg-[#F8F8F8] rounded-3xl">
          <div className="w-full md:w-1/2 flex md:my-10 flex-col items-center justify-center">
            <div className="flex flex-col">
              <img
                src={navgrahaPooja}
                alt=""
                className="w-full h-full md:w-[438px] justify-center items-center md:h-[274px] mx-auto rounded-t-3xl"
              />
              <div className="bg-[#F0F0F0] rounded-b-3xl py-5 shadow-xl">
                <h3 className="text-[#F27806] text-center text-2xl font-bold">
                  Jal Abhishek Pooja
                </h3>
                <h4 className="text-[#F27806] text-center text-lg font-semibold">
                  18th October 2023
                </h4>
                <p className="text-[#F27806] text-center text-sm font-medium">
                  at 2:45 pm
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full bg-[#F8F8F8] h-full rounded-r-3xl">
              <div className="flex flex-col  px-14 py-10 justify-between overflow-y-auto">
                <div className="rounded-3xl flex items-center justify-between px-4 cursor-pointer mt-2 bg-[#E7E7E7] shadow-xl" onClick={toggleDetails}>
                  <p className="text-lg text-[#9B9696] p-3">
                    Paid Amount - ₹ 4750/-{" "}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
                {showDetails && (
            <>
              <div>
                <div className="flex items-center justify-between pt-8">
                  <p className="text-base leading-none text-gray-800">
                    Subtotal
                  </p>
                  <p className="text-xl font-bold leading-none text-gray-800">
                    ₹ 11,250
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800">
                    Delivery Charge
                  </p>
                  <p className="text-base leading-none text-gray-800">Free</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800">
                    Gst @ 3.0%
                  </p>
                  <p className="text-base leading-none text-gray-800">
                    ₹ 450
                  </p>
                </div>
              </div>
              <hr className="my-2 border-2 border-[#D9D9D9]" />
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl leading-normal text-gray-800">
                    Total
                  </p>
                  <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                    $10,240
                  </p>
                </div>
              </div>
            </>
          )}

                <div className="flex justify-around mt-6 p-2 items-center rounded-3xl bg-[#E9E9E9] shadow-xl">
                  <img
                    src={astrologerIcon}
                    alt="astrologerImage"
                    className="max-w-[90px] max-h-[90px] border-2 border-white rounded-full"
                  />
                  <h3 className="text-xl text-[#F27806] font-bold">
                    Pooja will Perform by Tarot Disha
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default BookingSuccessfull;
