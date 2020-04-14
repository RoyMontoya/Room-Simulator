import React, { useState } from "react";
import LightPanel from "../LightPanel";
import "./style.css";

const Room = () => {
  const [isLightsOn, setLightOn] = useState(false);

  const toggleLight = () => {
    return setLightOn(!isLightsOn);
  };

  return (
    <div className="room-box">
      <LightPanel isLightsOn={isLightsOn} toggleLight={toggleLight} />
    </div>
  );
};

export default Room;
