import React, { useEffect } from "react";

const PlayAndPause = ({ ref, isVisible }) => {
  useEffect(() => {
    console.log("Anadi", isVisible, ref);
  }, [ref, isVisible]);
  return (
    <div
      ref={ref}
      className={`target-div ${isVisible ? "visible" : ""}`}
      style={{ color: "black", border: "solid 1px black" }}
    >
      PlayAndPause
    </div>
  );
};

export default PlayAndPause;
