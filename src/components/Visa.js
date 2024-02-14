import React from "react";
import AUSTRALIA from "../assets/australiaBackground.png";
import UK from "../assets/ukBackground.png";
import UAE from "../assets/uaeBackground.png";
import CANADA from "../assets/canadaBackground.png";
import GERMANY from "../assets/germanyBackground.png";
import EUROPE from "../assets/europeBackground.png";
import overlay from "../assets/Rectangle 120.png";

const Visa = ({ name }) => {
  const visa = {
    australia: {
      background: AUSTRALIA,
    },
    uk: {
      background: UK,
    },
    uae: {
      background: UAE,
    },
    germany: {
      background: GERMANY,
    },
    europe: {
      background: EUROPE,
    },
    canada: {
      background: CANADA,
    },
  };
  return (
    <div
      className="visa-card"
      style={{ backgroundImage: `url(${visa[name]?.background})` }}
    >
      <div className="visa-name">{name}</div>
      <div className="visa-more">Know more</div>
      <img src={overlay} />
    </div>
  );
};

export default Visa;
