import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import walletMoney from '../assets/image/walletMoney.png'

const AddMoney = () => {

    const [selectedAmount, setSelectedAmount] = useState("");
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  
    // Function to handle button click
    const handleButtonClick = (amount, index) => {
      // Set the selected amount to the clicked button's value
      setSelectedAmount(amount);
      // Update the selected button index
      setSelectedButtonIndex(index);
    };
  
    // Function to handle input change
    const handleInputChange = (event) => {
      // Update the selected amount to the typed value
      setSelectedAmount(event.target.value);
      // Reset the selected button index
      setSelectedButtonIndex(-1);
    };

  return (
    <>
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-[#F27806] to-[#E15602] justify-center items-center lg:space-x-28">
        <div className="flex flex-col ">
            <div className="flex justify-center items-center">
                <img src={walletMoney} alt="walletMoney" className="w-auto h-auto lg:w-[386px] lg:h-[260px]" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="lg:text-5xl text-2xl text-white font-bold">Wallet Balance</h2>
                <h2 className="text-5xl lg:text-9xl text-white font-bold">₹ 20</h2>
            </div>
        </div>

        <div className='w-full h-auto lg:w-[654px] rounded-3xl bg-[#FBFBFB] shadow-lg my-10'>
            <h3 className='text-center text-2xl font-medium text-[#F27806] my-5'>Add Money to Your Wallet</h3>
            <input type="number" value={selectedAmount} onChange={handleInputChange} className='w-4/5 mx-auto flex rounded-2xl px-8 border-[1.5px] text-[#F27806] text-xl font-semibold border-[#F27806]  p-4 placeholder:text-[#F27806]' placeholder='2000' />

            {/* Button grid */}
          <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto mt-8">
            {[50, 100, 200, 500, 1000, 2000, 5000, 10000, 25000].map(
              (amount, index) => (
                <button
                  key={index}
                  className={`${
                    selectedButtonIndex === index
                      ? "bg-orange-400 text-white"
                      : "bg-gray-200"
                  } h-20 text-[#9B9696] font-semibold text-lg py-3 px-10 rounded-lg border shadow-xl`}
                  onClick={() => handleButtonClick(amount, index)}
                >
                  {amount}
                </button>
              )
            )}
          </div>
           

            <h3 className='text-center text-xl font-normal text-[#F27806] my-5'>Choose from available amount</h3>

            <div className="py-3">
            <button className="flex rounded-[14px] mb-2 mx-auto bg-[#F27806] border-0 w-96 px-6 py-4 text-center text-xl font-bold text-white focus:outline-none hover:shadow-xl tracking-wide justify-center items-center">
  <Link to='booking-successfull' className="inline-block w-full">Proceed for Payment</Link>
</button>

           </div>

        </div>
    </div>
    </>
  )
}

export default AddMoney