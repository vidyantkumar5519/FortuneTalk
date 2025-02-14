import React from "react";
import Scanner from '../../src/assets/image/scanner.png';
import { IphoneIcon, Android } from "../components/svg";

const ScannerSection = () => {
    return (
        <div className='bg-gray-300 w-full flex flex-col items-center px-0 sm:px-8 lg:px-16'>
            <div className="text-black w-full flex flex-col lg:flex-row" style={{ height: 'auto', minHeight: '370px' }}>
                {/* Left Section */}
                <div className="text-black p-4 flex-grow flex-shrink-0 py-10 px-4 sm:px-6 lg:px-7 lg:w-4/5">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center lg:text-left mb-4 lg:mb-6" style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.5), 0 0 8px #8FAEDB' }}>
                        Scan to Unlock Your Best Astrology Experience
                    </div>

                    <div className="text-sm sm:text-base lg:text-lg text-center lg:text-left" style={{ paddingTop: '30px' }}>
                        Unlock a deeper understanding of your life with a simple scan. Our personalized astrology service offers you detailed insights and tailored predictions that reveal the cosmic influences shaping your journey. Discover your unique astrological profile, receive custom guidance, and navigate life with clarity and confidence. Your path through the stars starts here—experience the wisdom of the universe and let it illuminate your way.
                    </div>

                    <div className="flex flex-col items-center gap-4 pt-8 lg:pt-12">
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Button for Android App */}
                            <button className="bg-black text-white py-4 px-10 rounded-lg w-full sm:w-auto flex items-center justify-center gap-3 transition-transform duration-300 ease-in-out transform hover:scale-105 text-lg">
                                <Android />
                                <span className="text-sm sm:text-base">Download Android App</span>
                            </button>

                            {/* Button for iOS App */}
                            <button className="bg-black text-white py-4 px-10 rounded-lg w-full sm:w-auto flex items-center justify-center gap-3 transition-transform duration-300 ease-in-out transform hover:scale-105 text-lg">
                                <IphoneIcon />
                                <span className="text-sm sm:text-base">Download iOS App</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="text-black hidden lg:flex flex-grow flex-shrink-0 justify-end lg:w-1/5 flex items-center justify-center">
                    <div className="bg-black h-80 w-56 flex flex-col justify-end items-center rounded-lg p-4 mb-2">
                        <div className="text-base lg:text-lg font-medium text-white mb-2 text-center" style={{ textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.1), 0 0 2px #8FAEDB' }}>
                            Download by scanning
                        </div>
                        <img src={Scanner} alt="scanner image" className='object-cover' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScannerSection;
