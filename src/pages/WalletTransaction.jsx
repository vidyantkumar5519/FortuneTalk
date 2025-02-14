import React from 'react'

const WalletTransaction = () => {
    return (
        <>
            <div className="flex justify-around items-center">
                <div className='flex items-center lg:space-x-4'>
                    <span className='text-md lg:text-xl text-[#B4B4B4]'>Available Balance</span>
                    <span className=' text-xl lg:text-5xl text-[#F27806] font-bold'>₹ 20</span>
                </div>
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#D7D5D5] border-none rounded-b-xl">
                    <h3 className="text-[#F27806] text-center font-bold text-lg lg:text-2xl rounded-b-xl  lg:p-4 shadow-xl">
                        Wallet Transactions
                    </h3>
                </div>
                <div>
                    <button type="button" class="inline-flex items-center justify-center px-4 lg:px-8 rounded-[38px] bg-[#F27806] h-12 w-auto transition duration-500 ease-in-out text-white font-medium hover:shadow-2xl focus:outline-none">
                        Recharge Wallet Now
                    </button>
                </div>
            </div>


            <div className="w-[90%] lg:w-4/5 mt-10  mx-auto">
                <div className="flex justify-between items-center w-full py-5 px-2 lg:px-8 bg-[#ECEAEA] text-[#747474] text-sm lg:text-lg font-normal lg:font-medium rounded-3xl">
                    <span className='w-1/3'>Wallet Bonus AT-Money from chat with Manoj</span>
                    <span className='w-1/3 text-end'>Nov 16, 2023, 9:42 AM</span>
                    <span className='text-[#02C95D] w-1/3 text-end'>+100</span>
                </div>
            </div>
            <div className="w-[90%] lg:w-4/5 mt-4  mx-auto">
                <div className="flex justify-between items-center w-full py-5 px-2 lg:px-8 bg-[#ECEAEA] text-[#747474] text-sm lg:text-lg font-normal lg:font-medium rounded-3xl">
                    <span className='w-1/3'>Wallet Bonus AT-Money</span>
                    <span className='w-1/3 text-end'>Nov 16, 2023, 9:42 AM</span>
                    <span className='text-[#C90202] w-1/3 text-end'>-950</span>
                </div>
            </div>
            <div className="w-[90%] lg:w-4/5 mt-4  mx-auto">
                <div className="flex justify-between items-center w-full py-5 px-2 lg:px-8 bg-[#ECEAEA] text-[#747474] text-sm lg:text-lg font-normal lg:font-medium rounded-3xl">
                    <span className='w-1/3'>Wallet Bonus AT-Money from chat with Manoj</span>
                    <span className='w-1/3 text-end'>Nov 16, 2023, 9:42 AM</span>
                    <span className='text-[#02C95D] w-1/3 text-end'>+100</span>
                </div>
            </div>
            <div className="w-[90%] lg:w-4/5 mt-4  mx-auto">
                <div className="flex justify-between items-center w-full py-5 px-2 lg:px-8 bg-[#ECEAEA] text-[#747474] text-sm lg:text-lg font-normal lg:font-medium rounded-3xl">
                    <span className='w-1/3'>Wallet Bonus AT-Money</span>
                    <span className='w-1/3 text-end'>Nov 16, 2023, 9:42 AM</span>
                    <span className='text-[#C90202] w-1/3 text-end'>-950</span>

                </div>
            </div>
            <div className="w-[90%] lg:w-4/5 mt-4  mx-auto">
                <div className="flex justify-between items-center w-full py-5 px-2 lg:px-8 bg-[#ECEAEA] text-[#747474] text-sm lg:text-lg font-normal lg:font-medium rounded-3xl">
                    <span className='w-1/3'>Wallet Bonus AT-Money</span>
                    <span className='w-1/3 text-end'>Nov 16, 2023, 9:42 AM</span>
                    <span className='text-[#02C95D] w-1/3 text-end'>+100</span>
                </div>
            </div>

        </>
    )
}

export default WalletTransaction