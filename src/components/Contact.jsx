import React from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Heading */}
        <h2 className="contact-title">
          <span className="gold-text">Contact</span> <span className="white-text">Us</span>
        </h2>
        <p className="contact-subheading">
          We’d love to hear from you! Reach out for any queries or collaborations.
        </p>

        <div className="contact-content">
          {/* Left Side - Info */}
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>123 Main Street, Dubai, UAE</p>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <p>+971 50 123 4567</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>info@example.com</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone Number" required />
              <input type="date" placeholder="Preferred Date" required />
            </div>
            <div className="form-row">
              <textarea placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
