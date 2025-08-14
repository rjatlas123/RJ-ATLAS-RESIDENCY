import React from "react";
import "./Home.css";

import img1 from "../assets/bg1.png";
import img2 from "../assets/bg2.png";
import img3 from "../assets/bg3.png";
import img4 from "../assets/bg4.png";

export default function Home() {
  return (
    <section className="hero" role="banner" aria-label="Luxury Living" id="home">
      {/* Slideshow */}
      <div className="slideshow">
        <div className="slide" style={{ backgroundImage: `url(${img1})` }}></div>
        <div className="slide" style={{ backgroundImage: `url(${img2})` }}></div>
        <div className="slide" style={{ backgroundImage: `url(${img3})` }}></div>
        <div className="slide" style={{ backgroundImage: `url(${img4})` }}></div>
      </div>

      {/* Cooling overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="gold-text">Luxury</span> Living <br />Redefined
        </h1>

        <p className="hero__subtitle">
          Experience elegant spaces, modern amenities, and timeless design.
        </p>

        <div className="hero__cta">
          <a href="#book-visit" className="btn btn--gold">Book Visit</a>
          <a href="#virtual-tour" className="btn btn--ghost">Virtual Tour</a>
        </div>
      </div>
    </section>
  );
}
