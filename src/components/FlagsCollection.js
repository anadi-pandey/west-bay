import React, { useContext, useEffect, useRef, useState } from "react";
import Flag from "./Flag";
import OutlineOne from "../icons/HeroOutlineOne";
import OutlineTwo from "../icons/HeroOutlineTwo";
import { AppContext } from "../AppContext";

const FlagsCollection = () => {
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
    </div>
  );
};

export default FlagsCollection;
