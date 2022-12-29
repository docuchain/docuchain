import React from "react";
import AvgTransSize from "../utils/avgTransSize";
import TimeperTrans from "../utils/timeperTrans";

const TransChart = () => {
  return (
    <div>
      <TimeperTrans />
      <AvgTransSize />
    </div>
  );
};

export default TransChart;
