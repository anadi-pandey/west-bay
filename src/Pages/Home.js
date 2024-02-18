import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "../App.css";
import ZoomBackground from "../components/ZoomBackground";

import girlImage from "../assets/pretty-smiling-woman-transperent-glasses 1.png";
import { Button, Checkbox, Form, Input, Modal, Select, Switch } from "antd";
import question from "../assets/Group 43.png";
import {
  PauseCircleFilled,
  PlayCircleFilled,
  RightCircleFilled,
} from "@ant-design/icons";
import { AppContext } from "../AppContext";
import thanks from "./Illustration 2 (1).png";

const GlobalPresence = React.lazy(() => import("../components/GlobalPresence"));
const Timeline = React.lazy(() => import("../components/Timeline"));
const Journey = React.lazy(() => import("../components/Journey"));
const Planner = React.lazy(() => import("../components/Planner"));
const VisaCollection = React.lazy(() => import("../components/VisaCollection"));
const Companies = React.lazy(() => import("../components/Companies"));
const ClientCollection = React.lazy(() =>
  import("../components/ClientCollection")
);
const FlagsCollection = React.lazy(() =>
  import("../components/FlagsCollection")
);

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
  const { appState, updateValue } = useContext(AppContext);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [playedOnce, setPlayedOnce] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const countryOptions = [
    { label: "Australia", value: "AUS" },
    { label: "Canada", value: "CAN" },
    { label: "Europe", value: "EUR" },
    { label: "Europe", value: "EUR" },
    { label: "United Kindom", value: "UK" },
    { label: "United States of America", value: "UK" },
  ];

  // Functions:
  const scrollToMiddle = () => {
    const divElement = divRef.current;
    const middlePosition = divElement.offsetTop + divElement.offsetHeight / 3;
    window.scrollTo({
      top: middlePosition,
      behavior: "smooth",
    });
  };

  // Scroll to top functionality:
  function scrollToTop() {
    return new Promise((resolve, reject) => {
      if ("scrollBehavior" in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setTimeout(() => {
          resolve();
        }, 0);
      } else {
        window.scrollTo(0, 0);
        resolve();
      }
    });
  }

  const scrollToNextDiv = async () => {
    const divElement = nextDivRef.current;
    // Return promise.
    return scrollToTop();
  };

  const handleProgress = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    const calculatedProgress = (currentTime / duration) * 100;
    setProgress(calculatedProgress);
  };

  const handlePausePlay = async (operation) => {
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
      updateValue(true, "header");
      const home = document.getElementById("home-container");
      if (home.style.display === "none") {
        await scrollToNextDiv();
        home.style.display = "block"; // or "inline", "inline-block", etc. depending on the element type
      } else {
        home.style.display = "none";
      }
    }
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

  const phoneOptions = [
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
    { value: "+64", label: "+64" },
    { value: "+971", label: "+971" },
    { value: "+61", label: "+64" },
  ];

  return (
    <>
      {!appState?.isPlayedOnce && <ZoomBackground />}
      {!appState?.isPlayedOnce && (
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
                updateValue(true, "header");
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
        <Suspense fallback={<div>Loading...</div>}>
          <FlagsCollection />
          <GlobalPresence />
          <Timeline />
          <Journey />
          <Planner />
          <VisaCollection />
          <Companies />
          <ClientCollection />
        </Suspense>

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
                  options={countryOptions}
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
                <div style={{ display: "flex" }}>
                  <Select
                    style={{
                      width: "80px",
                      height: "50px",
                      marginRight: "5px",
                    }}
                    options={phoneOptions}
                    placeholder={"+"}
                  />
                  <Input
                    placeholder="Contact Number"
                    style={{
                      height: "50px",
                      boxSizing: "border-box",
                      fontSize: "medium",
                    }}
                  />
                </div>
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
                  onClick={() => setSubmitted(true)}
                >
                  Submit
                </Button>
              </div>
            </Form>
            <Modal
              title=""
              open={submitted}
              onOk={() => console.log("h")}
              onCancel={() => setSubmitted(false)}
              footer={null}
              // closeIcon={null}
              style={{
                position: "absolute",
                top: "15%",
                left: "25%",
                zIndex: "999999",
                padding: "30px",
              }}
              width={"50vw"}
            >
              <div
                style={{
                  width: "70%",
                  marginInline: "auto",
                }}
              >
                <img src={thanks} style={{ width: "100%" }} />
              </div>
              <div
                style={{
                  color: "#00467F",
                  fontFamily: "Montserrat",
                  fontSize: "50px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Thank You !
              </div>
              <div
                style={{
                  color: "#00467F",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: "500",
                  width: "95%",
                  marginInline: "auto",
                  margin: "25px auto",
                }}
              >
                We have received your Request successfully, Our team will get in
                touch with you.
              </div>
            </Modal>
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
