import React from "react";
import "./Gallery.css";

// Import images from assets
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/CASSANOARCHITETTURA X SKYARK _ artificial intelligence _ interni mediterranei _ Architetto Cassano.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <h2>
          <span className="gold-text">Gallery</span>{" "}
          <span className="white-text">Showcase</span>
        </h2>
        <p className="gallery-subheading">
          Explore our curated collection of stunning images from our property and amenities.
        </p>
      </div>

      <div className="gallery-scroll">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
