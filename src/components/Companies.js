import React from "react";
import awards from "../assets/partners/Group 41.png";
import badge from "../Pages/Group 54.png";
import choice from "../assets/partners/Client_Choice_2021_International_winner.png";
import law from "../assets/partners/Siegel.png";
import law2 from "../assets/partners/Le_TempsBZ_TAKCH2022.png";
import iso from "../assets/partners/ISO-27001-Certification.png";

const Companies = ({ isMobile }) => {
  return (
    <div>
      <div
        style={
          !isMobile
            ? { position: "relative", height: "700px", marginTop: "80px" }
            : { position: "relative", height: "400px", marginTop: "80px" }
        }
      >
        <div
          className="service-title associated"
          style={{
            marginBottom: "60px",
            marginLeft: "0",
          }}
        >
          ASSOCIATED COMPANIES
        </div>
        <div className="services-text associated">GLOBAL PARTNERS</div>
        <img
          src={badge}
          alt="bagde"
          style={
            !isMobile
              ? { position: "absolute", right: "0px", top: 0 }
              : { position: "absolute", right: "0px", top: 0, width: "30vw" }
          }
        />
        <div
          className="carousel-partners"
          style={
            !isMobile
              ? {
                  marginTop: "240px",
                  margin: "240px auto 0 auto",
                  textAlign: "center",
                  paddingLeft: "50px",
                }
              : {
                  marginTop: "120px",
                  margin: "100px auto 0 auto",
                  textAlign: "center",
                }
          }
        >
          <img
            src={awards}
            alt="award"
            style={
              !isMobile
                ? {
                    position: "relative",
                    marginRight: "-40px",
                    top: "-26px",
                    border: "solid black 1px",
                  }
                : {
                    width: "28%",
                    position: "relative",
                    marginRight: "-40px",
                    top: "-26px",
                  }
            }
          />
          <img
            src={choice}
            alt="award"
            style={
              !isMobile
                ? { position: "relative", marginRight: "-40px" }
                : { width: "28%", position: "relative", marginRight: "-40px" }
            }
          />
          <img
            src={law}
            alt="award"
            style={
              !isMobile
                ? { position: "relative", marginRight: "-70px" }
                : { width: "28%", position: "relative", marginRight: "-70px" }
            }
          />
          <img
            src={law2}
            alt="award"
            style={
              !isMobile
                ? { position: "relative", marginRight: "-20px" }
                : { width: "28%", position: "relative", marginRight: "-20px" }
            }
          />
          <img
            src={iso}
            alt="award"
            style={
              !isMobile
                ? { position: "relative", left: "-40px" }
                : { width: "28%", position: "relative", left: "-40px" }
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;
