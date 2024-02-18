import React from "react";
import awards from "../assets/partners/Group 41.png";
import badge from "../Pages/Group 54.png";
import choice from "../assets/partners/Client_Choice_2021_International_winner.png";
import law from "../assets/partners/Siegel.png";
import law2 from "../assets/partners/Le_TempsBZ_TAKCH2022.png";
import iso from "../assets/partners/ISO-27001-Certification.png";

const Companies = () => {
  return (
    <div>
      <div style={{ position: "relative", height: "800px", marginTop: "80px" }}>
        <div className="service-title" style={{ marginBottom: "60px" }}>
          ASSOCIATED COMPANIES
        </div>
        <div className="services-text">GLOBAL PARTNERS</div>
        <img
          src={badge}
          alt="bagde"
          style={{ position: "absolute", right: "0px", top: 0 }}
        />
        <div
          className="carousel-partners"
          style={{ marginTop: "240px", position: "relative" }}
        >
          <img
            src={awards}
            alt="award"
            style={{
              position: "relative",
              marginRight: "-40px",
              top: "-26px",
            }}
          />
          <img
            src={choice}
            alt="award"
            style={{ position: "relative", marginRight: "-40px" }}
          />
          <img
            src={law}
            alt="award"
            style={{ position: "relative", marginRight: "-70px" }}
          />
          <img
            src={law2}
            alt="award"
            style={{ position: "relative", marginRight: "-20px" }}
          />
          <img
            src={iso}
            alt="award"
            style={{ position: "relative", left: "-40px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;
