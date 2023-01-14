import React, { useState } from "react";
import Button from "../components/Button";
// test
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { getTheme } from "../../../recoil/selector";
import { useRecoilValue } from "recoil";
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
          {isBlack ? (
            <LightModeIcon className="icon2" />
          ) : (
            <DarkModeIcon className="icon2" />
          )}
        </Button>
      </div>
    </div>
  );
}
