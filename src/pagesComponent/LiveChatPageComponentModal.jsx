
import React from "react";
import astrologerIcon from "../assets/image/astrologerIcon.jpg";
import Rating from "../components/astrologers/Rating";
export default function LiveChatPageComponentModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-end flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto mt-6 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-t-[60px] shadow-lg px-12 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-xl text-center font-normal text-[#747474]">
                    How was your experience on this chat?
                  </h3>
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col items-center justify-center">
                 <img src={astrologerIcon} alt="" className="w-20 h-20 rounded-full" />
                 <h3 className="text-xl text-[#E15602]">Astro Guruji</h3>
                 <p className="text-[#9B9696] text-sm">(Tarot reader, Relationships)</p>
                 <div>
                    <Rating />  
                 </div>
                    <p className="text-[#9B9696]">Give Ratings</p>
                </div>
                <textarea id="message" rows="4" class="block p-2.5 w-[90%] mx-auto text-sm text-gray-900 bg-[#ECECEC] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-none" placeholder="Tap to start typing"></textarea>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button type="button" class="inline-flex items-center justify-center px-8 rounded-[38px] bg-[#F27806] h-8 w-auto transition duration-500 ease-in-out text-white font-medium hover:shadow-2xl focus:outline-none" onClick={() => setShowModal(false)}>
           Submit
         </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
