import React, { useState } from "react";
import Slider from "./Slider";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

const ClientCollection = () => {
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
    <div>
      {" "}
      <div className="visas client" style={{ marginTop: "40px" }}>
        <div className="service-title" style={{ marginBottom: "40px" }}>
          CLIENT'S STORIES
        </div>
        <div className="services-text" style={{ marginBottom: "40px" }}>
          DONT TAKE OUR WORD FOR IT
        </div>
        <div className="service-title" style={{ marginBottom: "40px" }}>
          See what our clients have to say
        </div>
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

            <LeftCircleFilled
              className="btn-prev"
              onClick={slidePrev}
              style={{
                color: "rgba(236,236,236,0.9)",
                fontSize: "58px",
                marginInline: "50px",
              }}
            />
            <RightCircleFilled
              style={{
                color: "rgba(236,236,236,0.9)",
                fontSize: "58px",
                marginInline: "50px",
              }}
              onClick={slideNext}
              className="btn-next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCollection;
