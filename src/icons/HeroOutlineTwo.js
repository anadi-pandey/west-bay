import * as React from "react";
const OutlineTwo = (props) => (
  <svg
    width={props?.isMobile ? "50vw" : 719}
    height={89}
    viewBox="0 0 719 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M718.279 8.31544C718.279 52.4982 682.462 88.3154 638.279 88.3154L-1.7207 88.3154V0.271324L718.279 0.271324V8.31544Z"
      fill="url(#paint0_linear_148_21495)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_148_21495"
        x1={505.746}
        y1={88.3154}
        x2={-20.2966}
        y2={88.3154}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#58B158" />
        <stop offset={0.495} stopColor="#5AC0A7" />
        <stop offset={1} stopColor="#25548C" />
      </linearGradient>
    </defs>
  </svg>
);
export default OutlineTwo;
