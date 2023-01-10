import React from "react";
import {
  MdLightMode,
  MdNightlight,
  MdOutlineLightMode,
  MdOutlineNightlight,
} from "react-icons/md";
import "../style/appearance.scss";

export default function appearance() {
  return (
    <div className="Appearance">
      <div className="appearanceBtn">
        <MdLightMode className="mdLightMode" />
      </div>
    </div>
  );
}
