import React from "react";
import Circle from "../icons/Circle";
import onedash from "../assets/Asset_dash1.png";
import twodash from "../assets/Asset_dash.png";

const Journey = () => {
  return (
    <div>
      <div className="journey" style={{ marginTop: "100px" }}>
        <div className="journey-heading" style={{ paddingTop: "100px" }}>
          Follow 3 Simple Steps Towards Global Residency{" "}
        </div>
        <div className="journey-sub" style={{ fontSize: "28px" }}>
          Your dream destination awaits
        </div>
        <div className="journey-steps">
          <Circle number="1" />
          <div style={{ position: "relative", top: "-12px" }}>
            <img src={onedash} />
          </div>
          <Circle number="2" />
          <div>
            <img src={twodash} />
          </div>
          <Circle number="3" />
        </div>
        <div className="tile" style={{ marginTop: "35px" }}>
          <div className="tile-item" style={{ position: "relative" }}>
            Meet Us
          </div>
          <div
            className="tile-item"
            style={{ position: "relative", left: "15px" }}
          >
            Discuss With Us
          </div>
          <div
            className="tile-item"
            style={{ position: "relative", left: "20px" }}
          >
            Fly Abroad
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
