import React from "react";
import Bulb from "./Bulb";
import "./style.css";

const Lamp = ({ isLightsOn = true }) => (
  <div className="lamp-box">
    <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>background</title>
        <rect
          fill="none"
          id="canvas_background"
          height="402"
          width="582"
          y="-1"
          x="-1"
        />
        <g
          display="none"
          overflow="visible"
          y="0"
          x="0"
          height="100%"
          width="100%"
          id="canvasGrid"
        >
          <rect
            fill="url(#gridpattern)"
            strokeWidth="0"
            y="0"
            x="0"
            height="100%"
            width="100%"
          />
        </g>
      </g>
      <g>
        <title>Layer 1</title>
        <rect
          id="svg_2"
          height="193"
          width="10"
          y="-0.546875"
          x="250.5"
          strokeOpacity="null"
          strokeWidth="1.5"
          stroke="#000"
          fill="#4C261D"
        />
        <line
          strokeLinecap="undefined"
          strokeLinejoin="undefined"
          id="svg_5"
          y2="191.453125"
          x2="192.5"
          y1="95.453125"
          x1="253.5"
          fillOpacity="null"
          strokeOpacity="null"
          strokeWidth="1.5"
          stroke="#000"
          fill="none"
        />
        <line
          strokeLinecap="undefined"
          strokeLinejoin="undefined"
          id="svg_6"
          y2="191.453125"
          x2="313.5"
          y1="100.453125"
          x1="261.5"
          fillOpacity="null"
          strokeOpacity="null"
          strokeWidth="1.5"
          stroke="#000"
          fill="none"
        />
        <rect
          stroke="#000000"
          id="svg_7"
          height="17.999999"
          width="121"
          y="191.453125"
          x="193.5"
          strokeWidth="1.5"
          fill="#4C261D"
        />
        <Bulb isLightsOn={isLightsOn} />
      </g>
    </svg>
  </div>
);

export default Lamp;
