import React from "react";
import AvgTransSize from "../utils/AvgTransSize";
import TimeperTrans from "../utils/TimeperTrans";
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
