import React from "react";
import Clients from "../assets/Icon_Clients.png";
import Universities from "../assets/Icon_Uni (1).png";
import Countries from "../assets/Icon_Uni (2).png";
import visas from "../assets/Icon_Clients (1).png";
import CountUp from "./CountUp";

const TimeCard = ({ name, number, startCount }) => {
  const cardObject = {
    Clients: Clients,
    Universities: Universities,
    Countries: Countries,
  };
  return (
    <div className="time-card">
      <div className="number-heading">
        {
          <CountUp
            start={0}
            end={Number(number) + 100}
            duration={1}
            startNow={startCount}
          />
        }
      </div>
      <div className="text-heading">{name}</div>
      {name !== "Successful Visas" && <img src={cardObject[name]} />}{" "}
      {name === "Successful Visas" && <img src={visas} />}{" "}
    </div>
  );
};

export default TimeCard;
