import React from "react";
import Circle from "../icons/Circle";
import onedash from "../assets/Asset_dash1.png";
import twodash from "../assets/Asset_dash.png";
import odash from "../assets/Asset_dash1 (1).png";
import tdash from "../assets/Asset_dash1 (1).png";

const Journey = ({ isMobile }) => {
  return (
    <div>
      <div
        className="journey"
        style={{ marginTop: "100px", position: "relative" }}
      >
        <div className="journey-heading" style={{ paddingTop: "100px" }}>
          Follow 3 Simple Steps Towards Global Residency{" "}
        </div>
        <div className="journey-sub" style={{ fontSize: "28px" }}>
          Your dream destination awaits
        </div>
        {!isMobile && (
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
        )}
        {!isMobile && (
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
        )}
        {isMobile && (
          <div className="journey-steps">
            <Circle number="1" />
            <div style={{ position: "relative" }}>
              <img src={odash} />
            </div>
            <Circle number="2" />
            <div>
              <img src={tdash} />
            </div>
            <Circle number="3" />
          </div>
        )}
        {isMobile && (
          <div style={{}}>
            <div
              className="tile-item"
              style={{
                position: "absolute",
                left: "37%",
                top: "42%",
                width: "fit-content",
                backgroundColor: "#325C93",
              }}
            >
              Meet Us
            </div>
            <div
              className="tile-item"
              style={{
                position: "absolute",
                left: "33%",
                top: "69%",
                width: "150px",
                textAlign: "center",
                backgroundColor: "#325C93",
              }}
            >
              Discuss With Us
            </div>
            <div
              className="tile-item"
              style={{ position: "absolute", left: "33%", top: "92%" }}
            >
              Fly Abroad
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Journey;
