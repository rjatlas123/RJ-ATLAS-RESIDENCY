import React from "react";
import "./Amenities.css";
import { FaSwimmingPool, FaDumbbell, FaSpa, FaUtensils, FaFilm, FaChild, FaWifi, FaCar } from "react-icons/fa";

const amenities = [
  { icon: <FaSwimmingPool />, title: "Infinity Pool", desc: "Enjoy breathtaking views from our luxury infinity pool." },
  { icon: <FaDumbbell />, title: "Fitness Center", desc: "State-of-the-art gym with modern fitness equipment." },
  { icon: <FaSpa />, title: "Spa & Wellness", desc: "Relax and rejuvenate with our spa and wellness services." },
  { icon: <FaUtensils />, title: "Gourmet Dining", desc: "Indulge in exquisite culinary experiences." },
  { icon: <FaFilm />, title: "Private Theater", desc: "Watch your favorite movies in ultimate comfort." },
  { icon: <FaChild />, title: "Kids Zone", desc: "Fun and safe play area for children." },
  { icon: <FaWifi />, title: "High Speed WiFi", desc: "Stay connected with lightning-fast internet." },
  { icon: <FaCar />, title: "Valet Parking", desc: "Convenient valet parking services available." },
];

const Amenities = () => {
  return (
    <section className="amenities" id="amenities">
      <h2 className="amenities-heading">
        <span className="gold-text">World-Class</span> Amenities
      </h2>
      <p className="amenities-subheading">
        Experience unmatched luxury with our premium facilities.
      </p>

      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div className="amenity-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
