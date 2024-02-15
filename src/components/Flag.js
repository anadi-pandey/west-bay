import React from "react";
import Europe from "../assets/Hero_Map_Europe.png";
import Canada from "../assets/Hero_Map_canada (1).png";
import UK from "../assets/Hero_Map_UK (1).png";
import US from "../assets/Hero_Map_US.png";
import NewZealand from "../assets/Hero_Map_Newzealand.png";

const Flag = ({ name }) => {
  const countryObject = {
    Europe: Europe,
    Canada: Canada,
    UK: UK,
    US: US,
    NewZealand: NewZealand,
  };
  return (
    <div>
      <div className="flag-container">
        <img src={countryObject[name]} alt="country" />
      </div>
    </div>
  );
};

export default Flag;
