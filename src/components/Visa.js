import React from "react";
import AUSTRALIA from "../assets/australiaBackground.png";
import UK from "../assets/ukBackground.png";
import USA from "../assets/usa.png";
import CANADA from "../assets/canadaBackground.png";
import NEW from "../assets/new.png";
import EUROPE from "../assets/europeBackground.png";
import overlay from "../assets/Rectangle 120.png";
import { ArrowRightOutlined } from "@ant-design/icons";

const Visa = ({ name }) => {
  const visa = {
    australia: {
      background: AUSTRALIA,
    },
    uk: {
      background: UK,
    },
    usa: {
      background: USA,
    },
    new_zealand: {
      background: NEW,
    },
    europe: {
      background: EUROPE,
    },
    canada: {
      background: CANADA,
    },
  };
  return (
    <div
      className="visa-card"
      style={{ backgroundImage: `url(${visa[name]?.background})` }}
    >
      <div className="visa-name">{name?.replace("_", " ")}</div>
      <div className="visa-more">
        Know more <ArrowRightOutlined style={{ marginInline: "5px" }} />
      </div>
      <img src={overlay} />
    </div>
  );
};

export default Visa;
