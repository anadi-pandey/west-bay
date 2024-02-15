import React from "react";
import Clients from "../assets/Icon_Clients.png";
import Universities from "../assets/Icon_Uni (1).png";
import Countries from "../assets/Icon_Uni (2).png";
import visas from "../assets/Icon_Clients (1).png";

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
      {name !== "Successful Visas" && <img src={cardObject[name]} />}{" "}
      {name === "Successful Visas" && <img src={visas} />}{" "}
    </div>
  );
};

export default TimeCard;
