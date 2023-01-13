import React, { useState } from "react";
import Button from "../components/Button";
// test
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
export default function appearance(props) {
  const { style } = props;
  return (
    <div className="Appearance">
      <div className="appearanceBtn headerbtn">
        <Button>
          {/* <DarkModeIcon /> */}
          <LightModeIcon className="icon2" />
        </Button>
      </div>
    </div>
  );
}
