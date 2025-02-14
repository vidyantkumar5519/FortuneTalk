import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import call from "../../assets/icons/call.png";
import chat from "../../assets/icons/chat.png";
import Logo from "../../assets/image/logo92.png";
import TopMenu from "../topMenu/TopMenu.js";
import './navstyle.css';

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Call/Chat", href: "/chat" },
  { name: "Blog", href: "/blog" },
  { name: "Free Insights", href: "#" },
  { name: "Fortune Store", href: "/fortune-store" },
  { name: "Learn & Earn", href: "/courses" },
];

function Navbar({ customerData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);  // Modal ref

  // Derive isLoggedIn from customerData
  const isLoggedIn = customerData && Object.keys(customerData).length > 0;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const confirmLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EB5B00',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!',
      customClass: { popup: 'small-modal' },
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
      }
    });
  };

  const handleLogout = () => {
    // Dispatch multiple actions to clear all relevant state
    dispatch({ type: 'LOGOUT_USER' });
    dispatch({ type: 'SET_CUSTOMER_DATA', payload: null });
    dispatch({ type: 'SET_IS_LOGGED', payload: false });
    
    // Clear localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    
    // Redirect to login page
    navigate('/login', { replace: true });
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLoginSuccess = () => {
    closeModal();
  };

  // Function to close modal on click outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    // Add event listener when modal is open
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    // Cleanup event listener when modal is closed
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]); // Only re-run when modal state changes

  return (

    <>

      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-0">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-[36px] w-[36px]" />
            <span
              className="font-medium text-xl leading-tight ml-2 bg-gradient-to-r from-[#EC740C] to-[#D46003] bg-clip-text text-transparent"
              style={{ fontFamily: '"Righteous", cursive' }}
            >
              FortuneTalk
            </span>
          </Link>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Chat Button */}
            <Link to='/chatCallCard'>
            <div className="bg-[#2EB72E] text-white rounded-full  px-3 py-2 cursor-pointer 
          hover:scale-105 
          transition-all flex items-center space-x-2">
              <img src={chat} alt="Logo" className="h-[20px] w-[20px] text-white" />
              <span style={{ fontFamily: 'Inter', fontSize: "11px", fontWeight: "400" }}>Chat With Astrologer</span>
            </div>
            </Link>

            {/* Call Button */}
            <Link to='/chatCallCard'>
            <div className="bg-[#2EB72E] text-white rounded-full px-3 py-2 cursor-pointer 
          hover:scale-105 
          transition-all flex items-center space-x-2">
              <img src={call} alt="Logo" className="h-[20px] w-[20px]" />
              <span style={{ fontFamily: 'Inter', fontSize: "11px", fontWeight: "400" }}>Talk To Astrologer</span>
            </div>
            </Link>
            {/* Login Button */}
            {isLoggedIn ? (
              <div 
                className="bg-gradient-to-r from-[#EC740C] to-[#D46003] text-white text-xs rounded-full px-3 py-2 cursor-pointer transform duration-300 hover:shadow-lg hover:from-[#D46003] hover:to-[#EC740C] hover:scale-105 transition-all" 
                onClick={confirmLogout}
              >
                Logout
              </div>
            ) : (
              <div 
                className="bg-gradient-to-r from-[#EC740C] to-[#D46003] text-white text-xs rounded-full px-3 py-2 cursor-pointer transform duration-300 hover:shadow-lg hover:from-[#D46003] hover:to-[#EC740C] hover:scale-105 transition-all" 
                onClick={handleLoginClick}
              >
                Login
              </div>
            )}
          </div>

          {/* Mobile Action Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Chat Button */}
            <div className="bg-[#2EB72E] text-white rounded-full px-3 py-2 cursor-pointer hover:bg-[#25a525] transition">
              Chat
            </div>

            {/* Call Button */}
            <div className="bg-[#2EB72E] text-white rounded-full px-3 py-2 cursor-pointer hover:bg-[#25a525] transition">
              Call
            </div>
            {/* login Button */}
            
            {isLoggedIn ? (
              <div 
                className="bg-gradient-to-r from-[#EC740C] to-[#D46003] text-white rounded-full px-6 py-3 cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:from-[#D46003] hover:to-[#EC740C]" 
                onClick={confirmLogout}
              >
                Logout
              </div>
            ) : (
              <div 
                className="bg-gradient-to-r from-[#EC740C] to-[#D46003] text-white rounded-full px-6 py-3 cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:from-[#D46003] hover:to-[#EC740C]" 
                onClick={handleLoginClick}
              >
                Login
              </div>
            )}
          </div>
        </div>
      </div>

      <TopMenu />

    </>

  );
}

const mapStateToProps = (state) => ({
  customerData: state.customer.customerData,
});

export default connect(mapStateToProps)(Navbar);
