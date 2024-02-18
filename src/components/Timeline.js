import React, { useEffect, useRef, useState } from "react";
import TimeCard from "./TimeCard";

const Timeline = () => {
  //   State:
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

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
        setStartCount(true);
      } else if (!entry.isIntersecting && isVisible) {
        setStartCount(false);
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
    <div className="timeline-container" ref={divRef}>
      <div className="timeline-head">
        With 15+ Years of Excellence in Pioneering Immigration Solutions and
        Transforming Lives Worldwide
      </div>
      <div className="time-sub">SERVING YOU SINCE 2009</div>

      <div className="time-card-container">
        <TimeCard
          name="Successful Visas"
          number="2250"
          startCount={startCount}
        />
        <TimeCard name="Clients" number="1200" startCount={startCount} />
        <TimeCard name="Universities" number="150" startCount={startCount} />
        <TimeCard name="Countries" number="30" startCount={startCount} />
      </div>
      <button className="learn-more-btn">Learn More About Us</button>
    </div>
  );
};

export default Timeline;
