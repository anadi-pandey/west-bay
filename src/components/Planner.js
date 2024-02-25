import React from "react";
import Plan from "./Plan";
import PlanGallery from "./PlanGallery";

const Planner = ({ isMobile }) => {
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
        <div className="services-text" style={{ marginTop: "25px" }}>
          CHOOSE YOUR PLAN/PATH
        </div>

        <div className="services-sub-text" style={{ marginTop: "25px" }}>
          {" "}
          Explore Your Options: Uncover Our Services to Find the Right Path for
          Your Journey.
        </div>
        {!isMobile && (
          <div
            className="services-plan-container"
            style={{ marginTop: "45px" }}
          >
            <Plan name="invest" />
            <Plan name="residency" />
          </div>
        )}
        {!isMobile && (
          <div className="services-plan-container">
            <Plan name={"golden"} />
            <Plan name="overseas" />
          </div>
        )}

        {isMobile && <PlanGallery />}
      </div>
    </div>
  );
};

export default Planner;
