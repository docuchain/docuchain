import React from "react";
import Button from "../components/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
export default function appearance(props) {
  const { isBlack } = props;
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
