import React, { useContext, useEffect, useRef, useState } from "react";
import "../App.css";
import rect from "../assets/Rectangle 150.png";
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
import globalPresence from "../assets/mapOriginal.png";
import gloabContacts from "../Pages/Union (3).png";
import Contacts from "../components/Contacts";
import awards from "../assets/partners/Group 41.png";
import badge from "../assets/partners/Group 42.png";
import choice from "../assets/partners/Client_Choice_2021_International_winner.png";
import law from "../assets/partners/Siegel.png";
import law2 from "../assets/partners/Le_TempsBZ_TAKCH2022.png";
import iso from "../assets/partners/ISO-27001-Certification.png";
import girlImage from "../assets/pretty-smiling-woman-transperent-glasses 1.png";
import { Button, Carousel, Checkbox, Form, Input, Select, Switch } from "antd";
import question from "../assets/Group 43.png";
import {
  PauseCircleFilled,
  PlayCircleFilled,
  RightCircleFilled,
} from "@ant-design/icons";
import { AppContext } from "../AppContext";
import Slider from "../components/Slider";

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
  const headerRef = useRef();
  const [showVideo, setShowVideo] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const { showHeader, updateValue } = useContext(AppContext);

  const scrollToMiddle = () => {
    const divElement = divRef.current;
    const middlePosition = divElement.offsetTop + divElement.offsetHeight / 3;
    window.scrollTo({
      top: middlePosition,
      behavior: "smooth",
    });
  };

  const scrollToNextDiv = () => {
    const divElement = nextDivRef.current;
    const middlePosition = (divElement.offsetTop + divElement.offsetHeight) / 3;
    window.scrollTo({
      top: middlePosition,
      behavior: "smooth",
    });
  };

  // Effects:

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
      setPlayedOnce(true);
      updateValue(true);
      const home = document.getElementById("home-container");
      if (home.style.display === "none") {
        home.style.display = "block"; // or "inline", "inline-block", etc. depending on the element type
      } else {
        home.style.display = "none";
      }
      scrollToNextDiv();
    }
  };

  const [mainIndex, setMainIndex] = useState(0);

  const slideNext = () => {
    if (mainIndex < 2) {
      setMainIndex(mainIndex + 1);
    }
  };

  const slidePrev = () => {
    if (mainIndex > 0) {
      setMainIndex(mainIndex - 1);
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
            onEnded={() => {
              handlePausePlay("skip");
            }}
            autoplay
            muted
            ONm={() => console.log("Dikhao")}
          ></video>
          <div
            style={{
              position: "absolute",
              bottom: "100px",
              right: "37%",
              textAlign: "center",
            }}
          >
            {!isPlaying && (
              <PlayCircleFilled
                style={{
                  color: "rgba(236,236,236,0.5)",
                  fontSize: "58px",
                  marginInline: "50px",
                }}
                onClick={() => handlePausePlay("play")}
              />
            )}
            {isPlaying && (
              <PauseCircleFilled
                style={{
                  color: "rgba(236,236,236,0.5)",
                  fontSize: "58px",
                  marginInline: "50px",
                }}
                onClick={() => handlePausePlay("pause")}
              />
            )}
            <RightCircleFilled
              style={{
                color: "rgba(236,236,236,0.5)",
                fontSize: "58px",
                marginInline: "50px",
              }}
              onClick={() => {
                updateValue(true);
                handlePausePlay("skip");
              }}
            />
          </div>
        </div>
      )}

      <div
        className="home-container"
        ref={nextDivRef}
        id="home-container"
        style={{ display: "none" }}
      >
        <div className="flags-container">
          <Flag name="UK" />
          <Flag name="Canada" />
          <Flag name="US" />
          <Flag name="NewZealand" />
          <Flag name="Europe" />
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
                height: "770px",
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
            <TimeCard name="Successful Visas" number="2250+" />
            <TimeCard name="Clients" number="1200+" />
            <TimeCard name="Universities" number="150+" />
            <TimeCard name="Countries" number="30+" />
          </div>
          <button className="learn-more-btn">Learn More About Us</button>
        </div>

        <div className="journey" style={{ marginTop: "100px" }}>
          <div className="journey-heading">
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
          <div className="tile">
            <div
              className="tile-item"
              style={{ position: "relative", left: "-15px" }}
            >
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

        <div
          className="services"
          style={{
            marginTop: "60px",
            paddingBottom: "0",
          }}
        >
          <div className="service-title">OUR SERVICES</div>
          <div className="services-text">CHOOSE YOUR PLAN/PATH</div>

          <div className="services-sub-text">
            {" "}
            Explore Your Options: Uncover Our Services to Find the Right Path
            for Your Journey.
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

        <div
          className="visas"
          style={{
            marginTop: "50px",
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
            style={{ marginTop: "240px", position: "relative" }}
          >
            <img
              src={awards}
              alt="award"
              style={{
                position: "relative",
                marginRight: "-40px",
                top: "-22px",
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

        <div className="visas client">
          <div className="service-title">CLIENT'S STORIES</div>
          <div className="services-text">DONT TAKE OUR WORD FOR IT</div>
          <div className="service-title">See what our clients have to say</div>
          <div
            style={{
              display: "flex",
              marginInline: "auto",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "60px",
              marginTop: "60px",
            }}
          >
            <div style={{ width: "80%", position: "relative" }}>
              <Slider mainIndex={mainIndex} />
              <div className="btn-prev" onClick={slidePrev}>
                &lang;
              </div>
              <div className="btn-next" onClick={slideNext}>
                &rang;
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "630px",
            marginInline: "auto",
            display: "flex",
            textAlign: "center",
            justifyContent: "space-between",
            position: "relative",
            top: "-10px",
            alignItems: "center",
          }}
        >
          <div>
            <img src={question} alt="?" />
          </div>
          <div
            style={{
              fontFamily: "Noto Sans",
              color: "#000",
              fontSize: "30px",
            }}
          >
            Didn’t find what you were looking for ?
          </div>
        </div>
        <div
          className="get-in-touch"
          style={{
            display: "flex",
            width: "80%",
            marginInline: "auto",
            marginTop: "20px",
          }}
        >
          <div className="get-image">
            <img src={girlImage} />
          </div>
          <div
            style={{ width: "50%", padding: "80px", boxSizing: "border-box" }}
          >
            <div className="contact-us-heading">GET IN TOUCH WITH US</div>
            <Form layout="vertical">
              <Form.Item
                label={
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "150%",
                      position: "relative",
                      top: "5px",
                      fontFamily: "Noto Sans",
                      marginBottom: "5px",
                    }}
                  >
                    Name
                  </span>
                }
                style={{ marginBottom: "20px" }}
              >
                <Input
                  placeholder="Enter Name"
                  style={{
                    height: "50px",
                    boxSizing: "border-box",
                    fontSize: "medium",
                  }}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "150%",
                      position: "relative",
                      top: "5px",
                      fontFamily: "Noto Sans",
                      marginBottom: "5px",
                    }}
                  >
                    Preferred Country
                  </span>
                }
                style={{ marginBottom: "20px" }}
              >
                <Select
                  placeholder={
                    <span
                      style={{
                        fontFamily: "Noto Sans",
                        fontSize: "larger",
                      }}
                    >
                      Choose Country
                    </span>
                  }
                  style={{
                    height: "50px",
                    boxSizing: "border-box",
                    fontSize: "larger",
                  }}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "150%",
                      position: "relative",
                      top: "5px",
                      fontFamily: "Noto Sans",
                      marginBottom: "5px",
                    }}
                  >
                    Contact Number
                  </span>
                }
                style={{ marginBottom: "20px" }}
              >
                <Input
                  placeholder="Contact Number"
                  style={{
                    height: "50px",
                    boxSizing: "border-box",
                    fontSize: "medium",
                  }}
                />
              </Form.Item>
              <Form.Item style={{ marginBottom: "20px" }}>
                <Switch defaultChecked />
                <span
                  style={{
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "150%",
                    marginLeft: "20px",
                    position: "relative",
                    top: "5px",
                    fontFamily: "Noto Sans",
                  }}
                >
                  Use this as Whatsapp Number
                </span>
              </Form.Item>
              <Form.Item
                label={
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "150%",
                      position: "relative",
                      top: "5px",
                      fontFamily: "Noto Sans",
                      marginBottom: "5px",
                    }}
                  >
                    Email Address
                  </span>
                }
                style={{ marginBottom: "20px" }}
              >
                <Input
                  placeholder="Email "
                  style={{
                    height: "50px",
                    boxSizing: "border-box",
                    fontSize: "medium",
                  }}
                />
              </Form.Item>
              <Checkbox
                style={{
                  marginRight: "10px",
                  position: "relative",
                  top: "3px",
                }}
              />{" "}
              <span
                style={{
                  fontSize: "20px",
                  color: "#000",
                  lineHeight: "150%",
                  position: "relative",
                  top: "5px",
                  fontFamily: "Noto Sans",
                  marginBottom: "5px",
                  marginTop: "30px",
                }}
              >
                I accept the Terms & Conditions
              </span>
              <div
                style={{
                  margin: "30px auto",
                  textAlign: "center",
                  marginTop: "30px",
                }}
              >
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: "#045690",
                    fontSize: "20px",
                    fontFamily: "Noto Sans",
                    color: "white",
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                >
                  Submit
                </Button>
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
