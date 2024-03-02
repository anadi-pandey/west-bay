import React, { useContext, useEffect, useRef, useState } from "react";
import globalPresence from "../assets/mapOriginal.png";
import gloabContacts from "../Pages/Union (3).png";
import Contacts from "./Contacts";
import { AppContext } from "../AppContext";
import imageContainer from "./IMAGECont.png";

const GlobalPresence = ({ isMobile }) => {
  // Constants:
  const divRef = useRef(null);
  const { appState, updateValue } = useContext(AppContext);

  //   State:
  const [isVisible, setIsVisible] = useState(false);

  //   Effects:
  useEffect(() => {
    console.log("Global Presence Mounted");
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        console.log("Global Presence Entered viewport");
        // updateValue(true, "showBackToTop");
      } else if (!entry.isIntersecting && isVisible) {
        console.log("Global Presence  exited viewport");
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

  return (
    <div className="global_presence" ref={divRef}>
      <div className="global-sub">OFFICES AROUND THE WORLD</div>
      <div className="global-main">OUR GLOBAL PRESENCE</div>
      {!isMobile && (
        <div className="global-text">
          At Westbay Global, we're strategically positioned to serve you better,
          with offices in key locations across the globe. Our international
          network ensures seamless support wherever you are. Explore our office
          locations and find the closest one to assist you on your journey.
        </div>
      )}
      {isMobile && (
        <div className="global-text">
          At Westbay Global, we're strategically positioned to serve you better,
          with offices in key locations across the globe.
        </div>
      )}
      <div>
        <img
          src={globalPresence}
          alt="globalpresence"
          style={{ width: "100%" }}
        />
        <div
          style={
            !isMobile
              ? {
                  position: "relative",
                  top: "-160px",
                  marginLeft: "100px",
                  boxSizing: "border-box",
                  width: "1250px",
                  height: "770px",
                }
              : {
                  position: "relative",
                  top: "-170px",
                  marginLeft: "30px",
                  boxSizing: "border-box",
                  width: "1250px",
                  height: "770px",
                }
          }
        >
          <div
            style={
              !isMobile
                ? { position: "absolute", top: "0", left: "0" }
                : { position: "absolute", top: "70px", left: "-1%" }
            }
          >
            {!isMobile && <img src={gloabContacts} alt="Contacts" />}{" "}
            {isMobile && <img src={imageContainer} />}
          </div>
          <div
            style={
              !isMobile
                ? {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "1200px",
                    marginInline: "auto",
                    marginLeft: "10px",
                    marginTop: "50px",
                    padding: "50px",
                    boxSizing: "border-box",
                  }
                : {}
            }
          >
            <Contacts isMobile={isMobile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
