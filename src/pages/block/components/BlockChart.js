/* eslint-disable */
import React from "react";
import TimeperBlock from "../utils/timeperBlock";
import AvgBlock from "../utils/avgBlockSize";
import "../BlockStyle.css";

export default function BlockChart() {
  return (
    <div className="blockChartContainer">
      <TimeperBlock />
      <AvgBlock />
    </div>
  );
}
