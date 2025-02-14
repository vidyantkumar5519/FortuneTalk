import React,{useState} from 'react'
import Call from '../pagesComponent/orderHistoryPageComponent/Call';
import Chat from '../pagesComponent/orderHistoryPageComponent/Chat';
import FortuneStore from '../pagesComponent/orderHistoryPageComponent/FortuneStore';
import Remedy from '../pagesComponent/orderHistoryPageComponent/Remedy';
import Report from '../pagesComponent/orderHistoryPageComponent/Report';

const OrderHistory = () => {

    const [componentToShow, setComponentToShow] = useState(null);
    const [activeButton, setActiveButton] = useState("call");
  
    const handleClick = (component, button) => {
      setComponentToShow(component);
      setActiveButton(button);
    };
  return (
    <>
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#D7D5D5] border-none">
        <h3 className="text-[#F27806] text-center font-bold text-2xl  py-4 shadow-xl">
          Order History
        </h3>
      </div>

    <div className="w-[90%] mt-10  mx-auto flex justify-between space-x-4">
    <button
              className={`inline-flex items-center justify-center lg:w-48 text-center px-3 h-8 lg:h-12 rounded-lg ransition duration-500 ease-in-out text-[#747474] font-medium hover:shadow-2xl focus:outline-none lg:rounded-3xl border-0 ${activeButton === 'call' ? 'bg-gradient-to-r from-[#EE7105] to-[#E25803] text-white' : 'bg-[#E4E4E4] text-[#747474]'} text-md focus:outline-none hover:shadow-xl`}
              onClick={() => handleClick(<Call/>, 'call')}
            >
              Call
            </button>
            <button
              className={`inline-flex items-center justify-center lg:w-48 text-center px-3 h-8 lg:h-12 rounded-lg ransition duration-500 ease-in-out text-[#747474] font-medium hover:shadow-2xl focus:outline-none lg:rounded-3xl border-0 ${activeButton === 'chat' ? 'bg-gradient-to-r from-[#EE7105] to-[#E25803] text-white' : 'bg-[#E4E4E4] text-[#747474]'} text-md focus:outline-none hover:shadow-xl`}
              onClick={() => handleClick(<Chat/>, 'chat')}
            >
              Chat
            </button>
            <button
              className={`inline-flex items-center justify-center lg:w-48 text-center px-3 h-8 lg:h-12 rounded-lg ransition duration-500 ease-in-out text-[#747474] font-medium hover:shadow-2xl focus:outline-none lg:rounded-3xl border-0 ${activeButton === 'remedy' ? 'bg-gradient-to-r from-[#EE7105] to-[#E25803] text-white' : 'bg-[#E4E4E4] text-[#747474]'} text-md focus:outline-none hover:shadow-xl`}
              onClick={() => handleClick(<Remedy/>, 'remedy')}
            >
              Remedy
            </button>
            <button
              className={`inline-flex items-center justify-center lg:w-48 text-center px-3 h-8 lg:h-12 rounded-lg ransition duration-500 ease-in-out text-[#747474] font-medium hover:shadow-2xl focus:outline-none lg:rounded-3xl border-0 ${activeButton === 'fortune-store' ? 'bg-gradient-to-r from-[#EE7105] to-[#E25803] text-white' : 'bg-[#E4E4E4] text-[#747474]'} text-md focus:outline-none hover:shadow-xl`}
              onClick={() => handleClick(<FortuneStore/>, 'fortune-store')}
            >
              Fortune Store
            </button>
            <button
              className={`inline-flex items-center justify-center lg:w-48 text-center px-3 h-8 lg:h-12 rounded-lg ransition duration-500 ease-in-out text-[#747474] font-medium hover:shadow-2xl focus:outline-none lg:rounded-3xl border-0 ${activeButton === 'report' ? 'bg-gradient-to-r from-[#EE7105] to-[#E25803] text-white' : 'bg-[#E4E4E4] text-[#747474]'} text-md focus:outline-none hover:shadow-xl`}
              onClick={() => handleClick(<Report/>, 'report')}
            >
              Report
            </button>
   
        </div>

        <div>
            {componentToShow|| <Call/>}
        </div>
    </>
  )
}

export default OrderHistory