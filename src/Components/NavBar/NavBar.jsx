import React, { useState } from "react";
import "./NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a style={{ textDecoration: "none" ,color:"purple"}} href="#home">
            Wafi.Hasan
          </a>
        </div>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#work">Work History</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="navbar-mobile">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#work">Work History</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
