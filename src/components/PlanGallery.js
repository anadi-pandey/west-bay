import React, { useState } from "react";
import Plan from "./Plan";
import left from "../assets/leftArrow.png";
import right from "../assets/rightArrow.png";

const PlanGallery = () => {
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
  const data = [
    <Plan name="invest" />,
    <Plan name="residency" />,
    <Plan name={"golden"} />,
    <Plan name="overseas" />,
  ];
  return (
    <div style={{ position: "relative" }}>
      <img
        onClick={() => handlePrev()}
        style={{
          color: "rgba(236,236,236,0.9)",
          fontSize: "58px",
          position: "absolute",
          top: "430px",
          left: "2%",
          zIndex: 1400,
        }}
        src={left}
      />
      <img
        src={right}
        style={{
          color: "rgba(236,236,236,0.9)",
          fontSize: "58px",
          position: "absolute",
          top: "430px",
          left: "80%",
          zIndex: 2000,
        }}
        onClick={() => {
          console.log("Next");
          handleNext();
        }}
      />
      <div>{data[activeIndex]}</div>
    </div>
  );
};

export default PlanGallery;
