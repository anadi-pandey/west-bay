import React from "react";
import Visa from "./Visa";

const VisaCollection = () => {
  return (
    <div
      className="visas"
      style={{
        marginTop: "25px",
        paddingTop: "110px",
        paddingBottom: "90px",
      }}
    >
      <div className="service-title">CLIENT'S PREFERENCE</div>
      <div className="services-text">BEST PR / VISAS TO EXPLORE</div>
      <div className="visas-container">
        <Visa name={"canada"} />
        <Visa name={"new_zealand"} />
        <Visa name={"australia"} />
        <Visa name={"usa"} />
        <Visa name={"uk"} />
        <Visa name={"europe"} />
      </div>
    </div>
  );
};

export default VisaCollection;
