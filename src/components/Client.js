import React from "react";
import black from "../assets/Ellipse 6.png";
import twitter from "../assets/vector (4).png";
import star from "../assets/Shape.png";

const Client = ({ name }) => {
  return (
    <div className="client-card">
      <div className="upper-part">
        <div className="twitter-container">
          <img src={black} />
          <img src={twitter} className="twitter" />
        </div>
        <div className="client-name">{name}</div>
        <div className="client-rating">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div>
      </div>
      <div className="lower-part">
        Lorem Ipsum is a dummy text and we use it for printing. Lorem Ipsum is a
        dummy text and we use it for printing. Lorem Ipsum is a dummy text and
        we use it for printing
      </div>
    </div>
  );
};

export default Client;
