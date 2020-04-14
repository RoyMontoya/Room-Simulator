import React, { useState } from "react";
import LightPanel from "../LightPanel";
import Lamp from "../Lamp";
import Baseboard from "../BaseBoard";
import Door from "../Door";
import "./style.css";

const Room = () => {
  const [isLightsOn, setLightOn] = useState(true);

  const toggleLight = () => {
    console.log(isLightsOn);
    return setLightOn(!isLightsOn);
  };

  return (
    <div className="room-box">
      <Lamp />
      <Baseboard />
      <Door />
      <LightPanel isLightsOn={isLightsOn} toggleLight={toggleLight} />
    </div>
  );
};

export default Room;
