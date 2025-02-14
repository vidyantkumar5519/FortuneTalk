// import SideBar from "./Sidebar/Sidebar";
// import Header from "./Header/Header";
// import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar/Navbar";
import "./layout.css";
import { Outlet } from "react-router-dom";
// import Loading from "../Components/loading/loading";
// import Footer from "./Footer/Footer";

const Layout = ({ dispatch, isSidebarOpen ,isOpen}) => {
  return (
    <>
      <div className="main-container">
        <div style={{ flex: 1, height: "100vh", overflowY: "auto" }}>
          <Navbar isLoggedIn={true}  />
          <main className="maincontainer">
            <Outlet />{" "}
          </main>
          {/* <Footer /> */}
        </div>
        {/* <div
          onClick={handleClickOutside}
          className={`overlay ${isSidebarOpen ? "show" : ""}`}
        ></div> */}
      </div>
    </>
  );
};

export default Layout;
