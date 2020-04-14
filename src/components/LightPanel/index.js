import React from "react";
import Switch from "@material-ui/core/Switch";
import "./style.css";

const LightPanel = props => (
  <div className="light-panel-box">
    <div className="light-panel-switch">
      <Switch
        color="default"
        checked={props.isLightsOn}
        onChange={props.toggleLight}
      />
    </div>
  </div>
);

export default LightPanel;
