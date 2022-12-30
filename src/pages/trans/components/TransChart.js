import React from "react";
import AvgTransSize from "../utils/avgTransSize";
import TimeperTrans from "../utils/timeperTrans";
import "./TransChart.scss";

const TransChart = () => {
  return (
    <div className="TransChart">
      <TimeperTrans />
      <AvgTransSize />
    </div>
  );
};

export default TransChart;
