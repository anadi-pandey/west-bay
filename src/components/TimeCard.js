import React from "react";
import Clients from "../assets/Icon_Clients.png";
import Universities from "../assets/Icon_Uni (1).png";
import Countries from "../assets/Icon_Clients.png";

const TimeCard = ({ name, number }) => {
  const cardObject = {
    Clients: Clients,
    Universities: Universities,
    Countries: Countries,
  };
  return (
    <div className="time-card">
      <div className="number-heading">{number}</div>
      <div className="text-heading">{name}</div>
      <img src={cardObject[name]} />
    </div>
  );
};

export default TimeCard;
