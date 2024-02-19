import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="testimonial-container">
    <video
      width="auto"
      controls
      className="media"
      src="/one.mp4"
      style={{ width: "auto" }}
    >
      Your browser does not support the video tag.
    </video>
  </div>,
  <div className="testimonial-container">
    <video
      width="auto"
      controls
      className="media"
      src="/two.mp4"
      style={{ width: "auto" }}
    >
      Your browser does not support the video tag.
    </video>
  </div>,
  <div className="testimonial-container">
    <video
      width="auto"
      controls
      className="media"
      src="/three.mp4"
      style={{ width: "auto" }}
    >
      Your browser does not support the video tag.
    </video>
  </div>,
];

const Slider = ({ mainIndex }) => {
  return <div>{items[mainIndex]}</div>;
};

export default Slider;
