import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="item">
    <video width="100%" controls className="media" src="/one.mp4">
      Your browser does not support the video tag.
    </video>
  </div>,
  <div className="item">
    <video width="100%" controls className="media" src="/two.mp4">
      Your browser does not support the video tag.
    </video>
  </div>,
  <div className="item">
    <video width="100%" controls className="media" src="/three.mp4">
      Your browser does not support the video tag.
    </video>
  </div>,
];

const Slider = ({ mainIndex }) => {
  return (
    <div className="carousel">
      <AliceCarousel
        activeIndex={mainIndex}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
      {/* <p className="index">{`${mainIndex + 1}/${items.length}`}</p> */}
      <div className="caption-container"></div>
    </div>
  );
};

export default Slider;
