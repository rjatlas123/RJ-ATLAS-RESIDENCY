import React, { useEffect, useState } from "react";
import "./Background.css";

const Background = ({ children }) => {
  const images = [
    "/assets/bg1.png",
    "/assets/bg2.png",
    "/assets/bg3.png",
    "/assets/bg4.png"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-container" id="background">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      <div className="background-overlay"></div>
      <div className="background-content">{children}</div>
    </div>
  );
};

export default Background;
