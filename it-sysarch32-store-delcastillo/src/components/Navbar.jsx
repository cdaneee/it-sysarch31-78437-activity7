/* eslint-disable no-unused-vars */
import React from "react";
import logo from '../images/new.png';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside">

        <div className='logo-name'>

        <a href="http://localhost:5173">
          <img src={logo} alt="logo" />
          </a>  

          <Link to="/product-page" 
          className="navlink-text">
            JentleGlasses
          </Link>
        </div>
      </div>



      <div className="rightside">
        <Link to="/cart" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-shopping-cart">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </Link>
      </div>
   </div>
  );
}

export default Navbar;