import React from "react";

const Bulb = ({ isLightsOn = true }) => {
  const bulbColor = isLightsOn ? "#FFFF91" : "#FFFFFF";

  return (
    <ellipse
      ry="28"
      rx="33"
      id="svg_10"
      cy="237.453125"
      cx="253.5"
      strokeWidth="1.5"
      stroke="#0f0f00"
      fill={bulbColor}
    />
  );
};

export default Bulb;
