import React, { useState, useEffect } from "react";
import "./About.css";
import { FaBuilding, FaHeadset, FaLeaf, FaSwimmingPool } from "react-icons/fa";

// Import your local images from assets
import image1 from "../assets/Vojtek Morsztyn (@vojtek_morsztyn) • Фото и видео….jpg";
import image2 from "../assets/Providing great drinks within a rustic bar….jpg";

const About = () => {
  // Use imported images here
  const images = [image1, image2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about"id="about">
      <div className="about-left">
       <h2 className="about-heading">
  <span className="gold-text">Discover</span> <span className="white-text">Our Story</span>
</h2>

        <p className="about-description">
          Experience unmatched elegance and comfort in our premium apartments,
          where luxury meets lifestyle.
        </p>

        <div className="about-features">
          <div className="feature-item">
            <FaBuilding className="feature-icon" />
            <span>Luxury Apartment</span>
          </div>
          <div className="feature-item">
            <FaHeadset className="feature-icon" />
            <span>24/7 Service</span>
          </div>
          <div className="feature-item">
            <FaLeaf className="feature-icon" />
            <span>Green Space</span>
          </div>
          <div className="feature-item">
            <FaSwimmingPool className="feature-icon" />
            <span>Resort Amenities</span>
          </div>
        </div>
      </div>

      <div className="about-right">
        <img
          src={images[currentImage]}
          alt="About"
          className="about-image fade"
        />
      </div>
    </section>
  );
};

export default About;
