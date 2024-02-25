import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import "../App.css";
import ZoomBackground from "../components/ZoomBackground";
import pause from "./Pause.png";
import play from "./Play.png";
import question from "../assets/Group 43.png";
import { AppContext } from "../AppContext";
import GetInTouch from "../components/GetInTouch";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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

  useEffect(() => {
    const home = document.getElementById("home-container");
    if (appState?.isPlayedOnce) {
      home.style.display = "block"; // or "inline", "inline-block", etc. depending on the element type
    }
  }, [appState]);

  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    console.log("ViewPort Dimensions", window.innerHeight, window.innerWidth);
    if (window.innerWidth < 700) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      {!appState?.isPlayedOnce && <ZoomBackground />}
      {!appState?.isPlayedOnce && (
        <div
          ref={divRef}
          style={{ position: "relative", top: "0px", maxWidth: "100vw" }}
          className="video-after-zoom"
        >
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
            style={{ width: "100%", height: "auto" }}
            className="video-mobile"
          ></video>
          <div
            style={{
              position: "absolute",
              bottom: "100px",
              right: "5%",
              textAlign: "center",
            }}
          >
            {!isPlaying && (
              <img
                src={pause}
                style={{
                  color: "rgba(236,236,236,0.5)",
                  marginInline: "50px",
                  position: "relative",
                  top: "15px",
                  cursor: "pointer",
                }}
                onClick={() => handlePausePlay("play")}
                className="videoIcon"
              />
            )}
            {isPlaying && (
              <img
                style={{
                  color: "rgba(236,236,236,0.5)",
                  marginInline: "50px",
                  fill: "white",
                  zIndex: "5",
                  marginTop: "20px",
                  position: "relative",
                  top: "15px",
                  cursor: "pointer",
                }}
                onClick={() => handlePausePlay("pause")}
                src={play}
                className="videoIcon"
              />
            )}
            <div
              style={{
                backgroundColor: "rgba(236,236,236,0.5)",
                fontSize: "24px",
                marginInline: "10px",
                color: "white",
                display: "inline",
                fontFamily: "Noto Sans",
                padding: "16px 26px 16px 26px",
                borderRadius: "50px",
                textDecoration: "underline",
                position: "relative",
                top: "-10px",
                fontWeight: "500",
                cursor: "pointer",
              }}
              className="video-skip"
              onClick={() => {
                updateValue(true, "header");
                handlePausePlay("skip");
              }}
            >
              Skip Video
            </div>
          </div>
        </div>
      )}

      <div
        className="home-container"
        ref={nextDivRef}
        id="home-container"
        style={{
          display: "none",
          width: "100%",
          boxSizing: "border-box",
          overflowX: "clip",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <FlagsCollection isMobile={isMobile} />
          <div
            style={{
              marginInline: "auto",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <button
              className="header-button"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Request a Call back
            </button>
          </div>
          <GlobalPresence isMobile={isMobile} />
          <Timeline isMobile={isMobile} />
          <Journey isMobile={isMobile} />
          <Planner isMobile={isMobile} />
          <VisaCollection />
          <Companies isMobile={isMobile} />
          <ClientCollection isMobile={isMobile} />
        </Suspense>

        {!isMobile && (
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
        )}

        <GetInTouch isMobile={isMobile} />
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
