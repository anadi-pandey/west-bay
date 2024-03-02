import React, { useState, useEffect } from "react";
import westbay from "../assets/westbay.png";

const ZoomBackground = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const zoomLevel = 100 + scrollPos / 15;

  return (
    <div
      className="zoom"
      style={{
        backgroundSize: `${zoomLevel}%`,
        backgroundPosition: "center",
        width: "100%",
        height: "500px",
        overflow: "hidden",
        color: "white",
      }}
    >
      <img
        src={westbay}
        style={{
          position: "absolute",
          top: "35%",
          left: "31%",
        }}
        className="image-zoom"
      />

      <div
        style={{
          width: "fit-content",
          marginInline: "auto",
          fontSize: "30px",
          color: "white",
          position: "absolute",
          top: "68%",
          left: "29%",
          fontFamily: "Noto Sans",
        }}
        className="serving-text"
      >
        Successfully serving you since 15+ Years
      </div>
    </div>
  );
};

export default ZoomBackground;
