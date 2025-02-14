import React, { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Logo from "../../assets/image/logo.png";
import Wallet from "../../assets/image/wallethi.png";
import walletBg from "../../assets/image/walletwhitebg.png";
import Swal from "sweetalert2";
import './navstyle.css';
import * as CustomerAction from "../../redux/Actions/customerActions.js";
import { connect } from "react-redux";
import { showNumber } from "../../utils/services.js";
import { setUser } from '../../redux/userSlice';

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Call/Chat", href: "/chat" },
  { name: "Blog", href: "/blog" },
  { name: "Free Insights", href: "#" },
  { name: "Fortune Store", href: "/fortune-store" },
  { name: "Learn & Earn", href: "/courses" },
];

function AppNav({ isLoggedIn, customerData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
    navigate('/login');
  };

  // Function to close modal on click outside
  

  return (
    <div className="relative w-full bg-gradient-to-r from-[#F77C02] to-[#E36D17] border">
    <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3 sm:px-6 lg:px-8">
      <img src={Logo} alt="Logo" className="h-[56px] w-[56px]" />
      <span className="text-white font-bold text-xl leading-tight ml-2">FortuneTalk</span>
    </div>
  </div>
  );
}

const mapStateToProps = (state) => ({
  customerData: state.customer.customerData,
});

export default connect(mapStateToProps)(AppNav);
