import React, { useState } from "react";
import left from "../assets/leftArrow.png";
import right from "../assets/rightArrow.png";
import Flag from "./Flag";

const Gallery = () => {
  const data = [
    <Flag name="UK" />,
    <Flag name="Canada" />,
    <Flag name="US" />,
    <Flag name="NewZealand" />,
    <Flag name="Europe" />,
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    console.log("Prev");
    if (activeIndex === 0) {
      setActiveIndex(data?.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex === data?.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        paddingTop: "105px",
      }}
    >
      <img
        onClick={() => handlePrev()}
        style={{
          color: "rgba(236,236,236,0.9)",
          fontSize: "58px",
          position: "absolute",
          top: "230px",
          left: "5%",
        }}
        src={left}
      />
      <img
        src={right}
        style={{
          color: "rgba(236,236,236,0.9)",
          fontSize: "58px",
          position: "absolute",
          top: "230px",
          left: "72%",
        }}
        onClick={() => {
          console.log("Next");
          handleNext();
        }}
      />

      {/* Gallery */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflowX: "hidden",
          width: "100vw",
        }}
      >
        <div>{data[activeIndex]}</div>
        <div className="item-container" style={{ marginInline: "20px" }}>
          {data[activeIndex]}
        </div>
        <div>{data[activeIndex]}</div>
      </div>
    </div>
  );
};

export default Gallery;
