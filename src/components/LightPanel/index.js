import React from "react";
import "./style.css";
import Switch from "@material-ui/core/Switch";

const LightPanel = props => {
  return (
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
};

export default LightPanel;
