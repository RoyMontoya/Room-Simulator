import React, { useState } from "react";
import LightPanel from "../LightPanel";
import Lamp from "../Lamp";
import Baseboard from "../BaseBoard";
import Door from "../Door";
import Window from "../Window";
import "./style.css";

const Room = () => {
  const [isLightsOn, setLightOn] = useState(true);

  const toggleLight = () => {
    return setLightOn(!isLightsOn);
  };

  return (
    <div className="room-box">
      <Lamp isLightsOn={isLightsOn} />
      <Baseboard />
      <Door />
      <Window />
      {!isLightsOn ? <div className="shadow-box" /> : null}
      <LightPanel isLightsOn={isLightsOn} toggleLight={toggleLight} />
    </div>
  );
};

export default Room;
