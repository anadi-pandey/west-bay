import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Flag from "../components/Flag";
import OutlineOne from "../icons/HeroOutlineOne";
import OutlineTwo from "../icons/HeroOutlineTwo";
import TimeCard from "../components/TimeCard";
import Circle from "../icons/Circle";
import onedash from "../assets/Asset_dash1.png";
import twodash from "../assets/Asset_dash.png";
import Plan from "../components/Plan";
import Visa from "../components/Visa";
import Client from "../components/Client";
import ZoomBackground from "../components/ZoomBackground";
import PlayAndPause from "../components/PlayAndPause";
import ReactPlayer from "react-player";
import globalPresence from "../assets/globalPresence.png";
import gloabContacts from "../assets/Union.png";
import Contacts from "../components/Contacts";
import awards from "../assets/partners/Group 41.png";
import badge from "../assets/partners/Group 42.png";
import choice from "../assets/partners/Client_Choice_2021_International_winner.png";
import law from "../assets/partners/Siegel.png";
import law2 from "../assets/partners/Le_TempsBZ_TAKCH2022.png";
import iso from "../assets/partners/ISO-27001-Certification.png";
import girlImage from "../assets/pretty-smiling-woman-transperent-glasses 1.png";
import { Button, Checkbox, Form, Input, Select } from "antd";
import {
  PauseCircleFilled,
  PlayCircleFilled,
  RightCircleFilled,
} from "@ant-design/icons";

const Home = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Functions:
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const nextDivRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  // const formItemLayout =
  //   formLayout === "horizontal"
  //     ? {
  //         labelCol: {
  //           span: 4,
  //         },
  //         wrapperCol: {
  //           span: 14,
  //         },
  //       }
  //     : null;

  const scrollToMiddle = () => {
    // Get the div element
    const divElement = divRef.current;

    // Calculate the middle position of the div
    const middlePosition = divElement.offsetTop + divElement.offsetHeight / 3;

    // Scroll to the middle position
    window.scrollTo({
      top: middlePosition,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  };

  const scrollToNextDiv = () => {
    const divElement = nextDivRef.current;
    const middlePosition = divElement.offsetTop + divElement.offsetHeight / 2;
    window.scrollTo({
      top: middlePosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        console.log("Div entered viewport");
        scrollToMiddle();
        setShowVideo(true);
        videoRef.current.play();
        videoRef.current.playbackRate = 1.25;
      } else if (!entry.isIntersecting && isVisible) {
        console.log("Div exited viewport");
        setShowVideo(false);
      }
      setIsVisible(entry.isIntersecting);
    }, options);

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, [isVisible]);

  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [playedOnce, setPlayedOnce] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleProgress = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    const calculatedProgress = (currentTime / duration) * 100;
    setProgress(calculatedProgress);
  };

  const handlePausePlay = (operation) => {
    console.log(operation);
    if (operation === "play") {
      setIsPlaying(true);
      videoRef.current.play();
      videoRef.current.playbackRate = 1.25;
    }
    if (operation === "pause") {
      setIsPlaying(false);
      videoRef.current.pause();
    }
    if (operation === "skip") {
      scrollToNextDiv();
    }
  };
  return (
    <>
      <ZoomBackground />
      {!playedOnce && (
        <div ref={divRef} style={{ position: "relative", top: "2px" }}>
          <video
            ref={videoRef}
            src="/videoplay.mp4"
            type="video/mp4"
            onTimeUpdate={handleProgress}
            onEnded={() => setPlayedOnce(true)}
            autoplay
            muted
          ></video>
          <div
            style={{
              position: "absolute",
              bottom: "100px",
              right: 0,
              textAlign: "center",
            }}
          >
            {!isPlaying && (
              <PlayCircleFilled
                style={{
                  color: "rgba(236,236,236,0.5)",
                  fontSize: "78px",
                  marginInline: "50px",
                }}
                onClick={() => handlePausePlay("play")}
              />
            )}
            {isPlaying && (
              <PauseCircleFilled
                style={{
                  color: "rgba(236,236,236,0.5)",
                  fontSize: "78px",
                  marginInline: "50px",
                }}
                onClick={() => handlePausePlay("pause")}
              />
            )}
            <RightCircleFilled
              style={{
                color: "rgba(236,236,236,0.5)",
                fontSize: "78px",
                marginInline: "50px",
              }}
              onClick={() => {
                handlePausePlay("skip");
              }}
            />
          </div>
        </div>
      )}

      <div className="home-container" ref={nextDivRef}>
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

        <div className="global_presence">
          <div className="global-sub">OFFICES AROUND THE WORLD</div>
          <div className="global-main">OUR GLOBAL PRESENCE</div>
          <div className="global-text">
            At Westbay Global, we're strategically positioned to serve you
            better, with offices in key locations across the globe. Our
            international network ensures seamless support wherever you are.
            Explore our office locations and find the closest one to assist you
            on your journey.
          </div>
          <div>
            <img
              src={globalPresence}
              alt="globalpresence"
              style={{ width: "100%" }}
            />
            <div
              style={{
                position: "relative",
                top: "-250px",
                marginLeft: "100px",
                boxSizing: "border-box",
                width: "1250px",
                height: "1150px",
              }}
            >
              <div style={{ position: "absolute", top: "0", left: "0" }}>
                <img src={gloabContacts} alt="Contacts" />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "1200px",
                  marginInline: "auto",
                  marginLeft: "10px",
                  marginTop: "50px",
                  padding: "50px",
                  boxSizing: "border-box",
                }}
              >
                <Contacts />
              </div>
            </div>
          </div>
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

        <div className="services">
          <div className="service-title">OUR SERVICES</div>
          <div className="services-text">CHOOSE YOUR PLAN/PATH</div>
          <div className="services-sub-text">
            Lorem ipsum is a dummy text and we use it for Printing
          </div>
          <div className="services-plan-container">
            <Plan name="invest" />
            <Plan name="residency" />
          </div>
          <div className="services-plan-container">
            <Plan name={"golden"} />
            <Plan name="overseas" />
          </div>
        </div>

        <div className="visas">
          <div className="service-title">CLIENT'S PREFERENCE</div>
          <div className="services-text">BEST PR / VISAS TO EXPLORE</div>
          <div className="visas-container">
            <Visa name={"australia"} />
            <Visa name={"uk"} />
            <Visa name={"uae"} />
            <Visa name={"europe"} />
            <Visa name={"germany"} />
            <Visa name={"canada"} />
          </div>
        </div>

        <div
          style={{ position: "relative", height: "800px", marginTop: "40px" }}
        >
          <div className="service-title">ASSOCIATED COMPANIES</div>
          <div className="services-text">GLOBAL PARTNERS</div>
          <img
            src={badge}
            alt="bagde"
            style={{ position: "absolute", right: "0px", top: 0 }}
          />
          <div
            className="carousel-partners"
            style={{ marginTop: "200px", position: "relative" }}
          >
            <img
              src={awards}
              alt="award"
              style={{ position: "relative", marginRight: "-40px" }}
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

        {/* <div className="visas client">
          <div className="service-title">CLIENT'S STORIES</div>
          <div className="services-text">DONT TAKE OUR WORD FOR IT</div>
          <div className="service-title">See what our clients have to say</div>
          <div className="client-container">
            <Client name="Payal" />
            <Client name="Deepanshi" />
            <Client name="Ankit" />
            <Client name="Mayank" />
          </div>
        </div> */}

        <div
          className="get-in-touch"
          style={{ display: "flex", width: "80%", marginInline: "auto" }}
        >
          <div className="get-image">
            <img src={girlImage} />
          </div>
          <div
            style={{ width: "50%", padding: "80px", boxSizing: "border-box" }}
          >
            <div>GET IN TOUCH WITH US</div>
            <Form layout="vertical">
              <Form.Item label="Name">
                <Input placeholder="Enter Name" />
              </Form.Item>
              <Form.Item label="Preferred Country">
                <Select placeholder="Choose Country" />
              </Form.Item>
              <Form.Item label="Contact Number">
                <Input placeholder="Contact Number" />
              </Form.Item>
              <Form.Item label="Email Address">
                <Input placeholder="Contact Number" />
              </Form.Item>
              <Checkbox /> <span>I accept the Terms & Conditions</span>
              <div style={{ margin: "20px auto", textAlign: "center" }}>
                <Button style={{ width: "160px" }}>Submit</Button>
              </div>
            </Form>
          </div>
        </div>

        <div className="footer">
          <div>
            © Copyright Westbay Global Private Limited 2024. All Rights
            Reserved.
          </div>

          <div>About us | Privacy Policy</div>
        </div>
      </div>
    </>
  );
};

export default Home;
