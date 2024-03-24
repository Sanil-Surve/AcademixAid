import React from "react";
import mainlogo from "../assets/academixAid.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../app/userSlice";
import "./Navbar.css";

const Navbar = () => {
  const { firstName, lastName } = useSelector(selectUser);

  return (
    // <div className="navbar">
    //   <div className="navbar-logo">
    //     <img src={mainlogo} alt="AcademixAid Logo" />
    //     <span className="navbar-brand">AcademixAid</span>
    //   </div>
    //   <div className="navbar-user">
    //     {user && (
    //       <span className="user-greeting">
    //         Welcome, {user.firstName} {user.lastName}
    //       </span>
    //     )}
    //   </div>
    // </div>

    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={mainlogo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          AcademixAid
        </a>
      </div>
      <div className="navbar-user">
          <span className="user-greeting">
            Welcome, {firstName} {lastName}
          </span>
      </div>
    </nav>
  );
};

export default Navbar;
