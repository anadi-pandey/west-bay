import React from "react";
import "../App.css";
import Flag from "../components/Flag";
import OutlineOne from "../icons/HeroOutlineOne";
import OutlineTwo from "../icons/HeroOutlineTwo";
import TimeCard from "../components/TimeCard";
import Circle from "../icons/Circle";
import onedash from "../assets/Asset_dash1.png";
import twodash from "../assets/Asset_dash.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="flags-container">
        <Flag name="Europe" />
        <Flag name="Canada" />
        <Flag name="UK" />
        <Flag name="US" />
        <Flag name="NewZealand" />
      </div>
      <div className="banner">
        <div className="banner-head">Unlocking Dreams Globally</div>
        <div className="banner-text">
          A beacon of excellence in global immigration services
        </div>
      </div>
      <div className="outline-right">
        <OutlineOne />
      </div>
      <div className="outline-left">
        <OutlineTwo />
      </div>

      <div className="timeline-container">
        <div className="timeline-head">
          With 15+ Years of Excellence in Pioneering Immigration Solutions and
          Transforming Lives Worldwide
        </div>
        <div className="time-sub">SERVING YOU SINCE 2009</div>

        <div className="time-card-container">
          <TimeCard name="Clients" number="1000+" />
          <TimeCard name="Universities" number="500+" />
          <TimeCard name="Countries" number="150+" />
          <TimeCard name="Clients" number="1000+" />
        </div>
        <button className="learn-more-btn">Learn More About Us</button>
      </div>

      <div className="journey">
        <div className="journey-heading">
          The Simplest 3 Steps for your bright future
        </div>
        <div className="journey-sub">
          Lorem ipsum is a dummy text and we use it for Printing
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
        <div className="tile">
          <div className="tile-item">Send Email</div>
          <div className="tile-item">Verify Documents</div>
          <div className="tile-item">Get Started</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
