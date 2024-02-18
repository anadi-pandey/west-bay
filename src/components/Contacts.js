import React from "react";
import greece from "../assets/clipart/greece.png";
import malta from "../assets/clipart/malta.png";
import turkey from "../assets/clipart/turkey.png";
import unitedkingdom from "../assets/clipart/uk.png";
import Ireland from "../assets/clipart/ireland.png";
import dubai from "../assets/clipart/uae.png";
import canada from "../assets/clipart/canada.png";
import india from "../assets/clipart/india.png";
import "../";
import { PhoneFilled } from "@ant-design/icons";
import { Divider } from "antd";

const Contacts = () => {
  return (
    <div className="contact-container">
      <div
        className="contact-row"
        style={{
          display: "flex",
          height: "fit-content",
        }}
      >
        <div className="contact-card">
          <img src={canada} alt="flag" />
          <div className="country-name">CANADA</div>
          <div className="contact-content">
            <PhoneFilled
              style={{ transform: "scaleX(-1)", marginInline: "5px" }}
            />{" "}
            +1 (416) 8273615
          </div>
        </div>

        <div>
          <Divider type="vertical" style={{ height: "160px" }} />
        </div>

        <div className="contact-card">
          <img src={unitedkingdom} alt="flag" />
          <div className="country-name">UNITED KINGDOM</div>
          <div className="contact-content">
            <PhoneFilled
              style={{ transform: "scaleX(-1)", marginInline: "5px" }}
            />{" "}
            +44 7404 113 423
          </div>
        </div>

        <div>
          <Divider type="vertical" style={{ height: "160px" }} />
        </div>

        <div className="contact-card">
          <img src={malta} alt="flag" />
          <div className="country-name">MALTA</div>
          <div className="contact-content">
            <PhoneFilled
              style={{ transform: "scaleX(-1)", marginInline: "5px" }}
            />
            +356 9991 3300
          </div>
        </div>

        <div>
          <Divider type="vertical" style={{ height: "160px" }} />
        </div>
        <div className="contact-card">
          <img src={turkey} alt="flag" />
          <div className="country-name">TURKEY</div>
          <div className="contact-content">
            <PhoneFilled
              style={{ transform: "scaleX(-1)", marginInline: "5px" }}
            />{" "}
            +90 (539) 854 6767
          </div>
        </div>
      </div>

      <div
        className="contact-row"
        style={{
          display: "flex",
          height: "fit-content",
        }}
      >
        <div className="contact-card">
          <img src={Ireland} alt="flag" />
          <div className="country-name">IRELAND</div>
          <div className="contact-content">
            <PhoneFilled
              style={{ transform: "scaleX(-1)", marginInline: "5px" }}
            />{" "}
            +353 89 461 7389
          </div>
        </div>

        <div>
          <Divider type="vertical" style={{ height: "160px" }} />
        </div>
        <div className="contact-card">
          <img src={dubai} alt="flag" />
          <div className="country-name">DUBAI,UAE</div>
          <div className="contact-content">
            <PhoneFilled
              style={{ transform: "scaleX(-1)", marginInline: "5px" }}
            />{" "}
            +971 56 566 5399
          </div>
        </div>

        <div>
          <Divider type="vertical" style={{ height: "160px" }} />
        </div>
        <div className="contact-card">
          <img src={greece} alt="flag" />
          <div className="country-name">GREECE</div>
          <div className="contact-content">
            <PhoneFilled
              style={{ transform: "scaleX(-1)", marginInline: "5px" }}
            />{" "}
            +30 694 149 9621
          </div>
        </div>

        <div>
          <Divider type="vertical" style={{ height: "160px" }} />
        </div>
        <div className="contact-card">
          <img src={india} alt="flag" />
          <div className="country-name">DELHI,INDIA</div>
          <div className="contact-content">
            <PhoneFilled
              style={{ transform: "scaleX(-1)", marginInline: "5px" }}
            />
            +91 9873197533
          </div>
        </div>
      </div>
      <div
        style={{
          width: "64%",
          marginInline: "auto",
          margin: "0px auto",
          color: "#505050",
          fontFamily: "Noto Sans",
          fontSize: "28px",
          position: "relative",
          top: "-15px",
        }}
      >
        Visit Us: C 619, Saraswati Vihar, Pitampura, New Delhi{" "}
      </div>
    </div>
  );
};

export default Contacts;
