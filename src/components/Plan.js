import React from "react";
import PlanOneBackground from "../assets/planOneBackground.png";
import PlanOneImage from "../assets/planOneStroke.png";
import PlanOneLogo from "../assets/planOneLogo.png";

import PlanTwoBackground from "../assets/planTwoBackground.png";
import PlanTwoImage from "../assets/planTwoStroke.png";
import PlanTwoLogo from "../assets/planTwoLogo.png";

import PlanThreeBackground from "../assets/planThreeBackground.png";
import PlanThreeImage from "../assets/planThreeStroke.png";
import PlanThreeLogo from "../assets/planThreeLogo.png";

import PlanFourBackground from "../assets/planFourBackground.png";
import PlanFourImage from "../assets/planFourStroke.png";
import PlanFourLogo from "../assets/planFourLogo.png";
import { Button } from "antd";

const Plan = ({ name }) => {
  const planObject = {
    invest: {
      heading: "Citizenship by Investment",
      subHeadeing:
        "Invest in a new chapter of life – discover Citizenship by Investment for a secure and promising future.",
      logo: PlanOneLogo,
      backgroundImage: PlanOneBackground,
      stroke: PlanOneImage,
    },
    residency: {
      heading: "PERMANENT RESIDENCY",
      subHeadeing:
        "Build roots in a new home with ease – explore our Permanent Residency services for a stable and global lifestyle.",
      logo: PlanTwoLogo,
      backgroundImage: PlanTwoBackground,
      stroke: PlanTwoImage,
    },
    golden: {
      heading: "EUROPEAN GOLDEN VISA",
      subHeadeing:
        "Invest in your European dream – explore the European Golden Visa for a seamless pathway to a new life abroad.",
      logo: PlanThreeLogo,
      backgroundImage: PlanThreeBackground,
      stroke: PlanThreeImage,
    },
    overseas: {
      heading: "OVERSEAS EDUCATION",
      subHeadeing:
        "Empower your journey to knowledge – unlock Overseas Education opportunities for a world-class academic experience.",
      logo: PlanFourLogo,
      backgroundImage: PlanFourBackground,
      stroke: PlanFourImage,
    },
  };

  return (
    <div
      className="plan-container"
      style={{ backgroundImage: `url(${planObject[name]?.backgroundImage})` }}
    >
      <img src={planObject[name]?.logo} className="plan-logo" />
      <div className="plan-heading">{planObject[name]?.heading}</div>
      <div className="plan-sub-heading">{planObject[name]?.subHeadeing}</div>
      <Button className="plan-btn">View All Program</Button>
      <img src={planObject[name]?.stroke} className="plan-stroke" />
    </div>
  );
};

export default Plan;
