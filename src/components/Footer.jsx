import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        
        {/* Logo & Description */}
        <div className="footer-about">
          <h2>
            <span className="gold">RJ</span> Atlas Residency
          </h2>
          <p>
            Atlas Residency offers luxurious living with world-class amenities, ensuring comfort,
            elegance, and an unforgettable experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Amenities</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Amenities */}
        <div className="footer-amenities">
          <h3>Amenities</h3>
          <ul>
            <li>Infinity Pool</li>
            <li>Fitness</li>
            <li>Spa & Wellness</li>
            <li>Gourmet Dining</li>
            <li>Kids Zone</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="footer-connect">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Atlas Residency. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
