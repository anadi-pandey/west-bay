import React from "react";
import Plan from "./Plan";

const Planner = () => {
  return (
    <div>
      <div
        className="services"
        style={{
          marginTop: "70px",
          paddingBottom: "0",
        }}
      >
        <div className="service-title">OUR SERVICES</div>
        <div className="services-text" style={{ marginTop: "40px" }}>
          CHOOSE YOUR PLAN/PATH
        </div>

        <div className="services-sub-text" style={{ marginTop: "40px" }}>
          {" "}
          Explore Your Options: Uncover Our Services to Find the Right Path for
          Your Journey.
        </div>
        <div className="services-plan-container" style={{ marginTop: "60px" }}>
          <Plan name="invest" />
          <Plan name="residency" />
        </div>
        <div className="services-plan-container">
          <Plan name={"golden"} />
          <Plan name="overseas" />
        </div>
      </div>
    </div>
  );
};

export default Planner;