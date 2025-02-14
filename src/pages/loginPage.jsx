import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Navbar from '../components/navbar/Navbar';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import logo from '../assets/image/logo92.png'

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [phoneData, setPhoneData] = useState({
    phoneNumber: '',
    countryCode: '91' // Default to India
  });
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [loginStage, setLoginStage] = useState('phone'); // 'phone', 'otp'
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Timer for OTP resend
  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handlePhoneChange = (value, data) => {
    const countryCode = data.dialCode;
    const phoneNumber = value.slice(countryCode.length);
    
    setPhoneData({
      phoneNumber,
      countryCode
    });
  };

  const validatePhoneNumber = () => {
    const { phoneNumber, countryCode } = phoneData;
    const fullPhoneNumber = `+${countryCode}${phoneNumber}`;
    
    // Validate phone number using regex
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    
    if (!phoneNumber || !phoneRegex.test(fullPhoneNumber)) {
      toast.error('Please enter a valid mobile number', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }
    
    return true;
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    
    if (!validatePhoneNumber()) return;

    setLoading(true);
    try {
      // Dispatch login action to send OTP
      await new Promise((resolve, reject) => {
        dispatch({
          type: 'ON_CUSTOMER_LOGIN',
          payload: {
            phoneNumber: phoneData.phoneNumber,
            countryCode: phoneData.countryCode,
            setIsOtpModalOpen: () => {
              setLoginStage('otp');
              resolve();
            },
            onError: (error) => {
              reject(error);
            }
          }
        });
      });

      toast.success('OTP sent successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error(error.message || 'Failed to send OTP', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Auto focus next input
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      toast.error('Please enter complete OTP', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setLoading(true);
    try {
      // Dispatch OTP verification action
      await new Promise((resolve, reject) => {
        dispatch({
          type: 'ON_OTP_VERIFICATION',
          payload: {
            otpData: {
              phoneNumber: phoneData.phoneNumber,
              callingCode: phoneData.countryCode,
            },
            data: { otp: otpCode },
            setIsOtpModalOpen: () => {},
            onClose: () => {},
            onLoginSuccess: () => {
              handleLoginSuccess();
              resolve();
            },
            onError: (error) => {
              reject(error);
            }
          }
        });
      });
    } catch (error) {
      toast.error(error.message || 'OTP verification failed', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0) return;

    setLoading(true);
    try {
      // Resend OTP logic
      await new Promise((resolve, reject) => {
        dispatch({
          type: 'ON_CUSTOMER_LOGIN',
          payload: {
            phoneNumber: phoneData.phoneNumber,
            countryCode: phoneData.countryCode,
            setIsOtpModalOpen: () => {
              setLoginStage('otp');
              resolve();
            },
            onError: (error) => {
              reject(error);
            }
          }
        });
      });
      
      // Set resend timer to 60 seconds
      setResendTimer(60);
      toast.info('OTP resent successfully', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error(error.message || 'Failed to resend OTP', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    toast.success('Login Successful!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EE7105] to-[#E25803]">
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white rounded-2xl shadow-2xl p-10">
          <div className="text-center">
            <img 
              src={logo} 
              alt="FortuneTalk Logo" 
              className="mx-auto h-20 w-auto mb-6"
            />
            <h2 className="text-3xl font-extrabold text-gray-900">
              {loginStage === 'phone' ? 'Login to FortuneTalk' : 'Verify OTP'}
            </h2>
          </div>

          {loginStage === 'phone' ? (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <PhoneInput
                  country={'in'}
                  value={phoneData.countryCode + phoneData.phoneNumber}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                  }}
                  containerClass="w-full"
                  inputClass="!w-full !py-3 !px-4 !border !border-gray-300 !rounded-3xl"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-gradient-to-r from-[#EE7105] to-[#E25803] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE7105]"
                >
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                </button>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  By continuing, you agree to FortuneTalk's 
                  <a href="/terms" className="text-[#EE7105] ml-1">Terms of Service</a>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">
                  Enter the 6-digit OTP sent to +{phoneData.countryCode} {phoneData.phoneNumber}
                </p>
                <button 
                  type="button"
                  onClick={() => setLoginStage('phone')}
                  className="text-[#EE7105] text-sm mt-2"
                >
                  Change Number
                </button>
              </div>
              <div className="flex justify-center space-x-2">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={e => handleOtpChange(e.target, index)}
                    onFocus={e => e.target.select()}
                    className="w-10 h-10 text-center border rounded-md focus:border-[#EE7105] focus:outline-none"
                  />
                ))}
              </div>
              <div className="text-center mt-4">
                <button 
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendTimer > 0}
                  className={`text-sm ${
                    resendTimer > 0 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-[#EE7105] hover:underline'
                  }`}
                >
                  {resendTimer > 0 
                    ? `Resend OTP in ${resendTimer}s` 
                    : 'Resend OTP'
                  }
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-gradient-to-r from-[#EE7105] to-[#E25803] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE7105]"
                >
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </button>
              </div>
            </form>
          )}

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              New to FortuneTalk?{' '}
              <button 
                onClick={() => navigate('/signup')}
                className="font-medium text-[#EE7105] hover:text-[#E25803]"
              >
                Create an Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;