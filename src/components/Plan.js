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
        "Lorem ipsum is a dummy text and we use it for Printing. Lorem ipsum is a dummy text and we use it for Printing",
      logo: PlanOneLogo,
      backgroundImage: PlanOneBackground,
      stroke: PlanOneImage,
    },
    residency: {
      heading: "PERMANENT RESIDENCY",
      subHeadeing:
        "Lorem ipsum is a dummy text and we use it for Printing. Lorem ipsum is a dummy text and we use it for Printing",
      logo: PlanTwoLogo,
      backgroundImage: PlanTwoBackground,
      stroke: PlanTwoImage,
    },
    golden: {
      heading: "EUROPEAN GOLDEN VISA",
      subHeadeing:
        "Lorem ipsum is a dummy text and we use it for Printing. Lorem ipsum is a dummy text and we use it for Printing",
      logo: PlanThreeLogo,
      backgroundImage: PlanThreeBackground,
      stroke: PlanThreeImage,
    },
    overseas: {
      heading: "OVERSEAS EDUCATION",
      subHeadeing:
        "Lorem ipsum is a dummy text and we use it for Printing. Lorem ipsum is a dummy text and we use it for Printing",
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
      <Button className="plan-btn">View All Programmes</Button>
      <img src={planObject[name]?.stroke} className="plan-stroke" />
    </div>
  );
};

export default Plan;
