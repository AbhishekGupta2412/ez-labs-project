import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero">
          <img src={logo} alt="Varnan Films Logo" />
        </a>
      </div>
      <div className="navbar-links">
        <a href="#services">Services</a>
        <a href="#portfolio">Their Stories</a>
        <a href="#about">Our Story</a>
        <a href="#hero">Varnan</a>
        <a href="#contact" className="navbar-button">
          Let’s Talk
        </a>
        <div className="navbar-menu-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18H21"
              stroke="#0F3255"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#0F3255"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 6H21"
              stroke="#0F3255"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
