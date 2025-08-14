import React from "react";
import "./Resident.css";
import { FaStar } from "react-icons/fa";

const Resident = () => {
  return (
    <section className="resident-section">
      <h2 className="resident-heading">
        <span className="gold-text">Resident</span>{" "}
        <span className="white-text">Experience</span>
      </h2>
      <p className="resident-subheading">
        Hear from our residents about their world-class living experiences.
      </p>

      <div className="resident-cards">
        <div className="resident-card">
          <img src="https://i.pinimg.com/1200x/2c/e0/c8/2ce0c8e9423351561f91c33645141120.jpg" alt="Resident 1" />
          <p className="resident-description">
            "Beautiful spaces, great amenities, and friendly community!"
          </p>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star" />
            ))}
          </div>
        </div>

        <div className="resident-card">
          <img src="https://i.pinimg.com/736x/c1/3a/5d/c13a5dc4a416366048260a8e78100757.jpg" alt="Resident 2" />
          <p className="resident-description">
            "The luxury and comfort here are unmatched."
          </p>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star" />
            ))}
          </div>
        </div>

        <div className="resident-card">
          <img src="https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg" alt="Resident 3" />
          <p className="resident-description">
            "An amazing place to call home, with top-notch services."
          </p>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resident;
