import * as React from "react";
import "../App.css";
const Circle = (props) => (
  <div
    style={{
      width: "fit-content",
      height: "fit-content",
      position: "relative",
    }}
  >
    <svg
      width={104}
      height={104}
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_53_21365)">
        <circle cx={52} cy={48.0178} r={47.279} fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_53_21365"
          x={0.720947}
          y={0.73877}
          width={102.558}
          height={102.558}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_21365"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_21365"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    <span className="number-in-circle">{props?.number}</span>
  </div>
);
export default Circle;
