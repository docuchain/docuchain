import React, { useState } from "react";
import Button from "../components/Button";
// test
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { red } from "@mui/material/colors";
export default function appearance(props) {
  const { isBlack } = props;
  const dark = {
    backgroundColor: "red",
  };
  return (
    <div className="Appearance">
      <div className="appearanceBtn headerbtn">
        <Button>
          {/* <DarkModeIcon /> */}
          <LightModeIcon className="icon2" style={isBlack ? { dark } : {}} />
        </Button>
      </div>
    </div>
  );
}
