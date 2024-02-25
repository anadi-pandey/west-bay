import React, { useContext, useEffect, useRef, useState } from "react";
import Flag from "./Flag";
import OutlineOne from "../icons/HeroOutlineOne";
import OutlineTwo from "../icons/HeroOutlineTwo";
import { AppContext } from "../AppContext";
import Gallery from "./Gallery";

const FlagsCollection = ({ isMobile }) => {
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
        console.log("Flags Collecion Entered viewport");
        updateValue(false, "showBackToTop");
      } else if (!entry.isIntersecting && isVisible) {
        console.log("Flags Collecion exited viewport");
        updateValue(true, "showBackToTop");
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
    <div ref={divRef} style={{ position: "relative" }}>
      {!isMobile && (
        <div className="flags-container">
          <Flag name="UK" />
          <Flag name="Canada" />
          <Flag name="US" />
          <Flag name="NewZealand" />
          <Flag name="Europe" />
        </div>
      )}
      {isMobile && <Gallery />}
      <div className="banner">
        <div className="banner-head">Unlocking Dreams Globally</div>
        <div className="banner-text">
          A beacon of excellence in global immigration services
        </div>
      </div>
      {!isMobile && (
        <div className="outline-right">
          <OutlineOne isMobile />
        </div>
      )}
      {!isMobile && (
        <div className="outline-left">
          <OutlineTwo isMobile />
        </div>
      )}
    </div>
  );
};

export default FlagsCollection;
