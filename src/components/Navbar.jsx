import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Replace with your logo path
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="logo-container">
        <img src={logo} alt="RJ Atlas Logo" className="logo-img" />
        <h1 className="logo-text">RJ Atlas Residency</h1>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#amenities" onClick={toggleMenu}>Amenities</a></li>
        <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
