import React, { useState, useEffect } from "react";
import westbay from "../assets/westbay.png";

const ZoomBackground = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  const zoomLevel = 100 + scrollPos / 15; // Adjust the scrolling speed as needed

  return (
    <div
      className="zoom"
      style={{
        backgroundSize: `${zoomLevel}%`,
        backgroundPosition: "center",
        width: "100%", // Adjust as needed
        height: "500px", // Adjust as needed
        overflow: "hidden",
        color: "white",
      }}
    >
      <img
        src={westbay}
        style={{ position: "absolute", top: "40%", left: "32%" }}
        className="image-zoom"
      />
      <div
        style={{
          width: "fit-content",
          marginInline: "auto",
          fontSize: "30px",
          color: "white",
          position: "absolute",
          top: "65vh",
          left: "30%",
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
