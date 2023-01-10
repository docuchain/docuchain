import React from "react";
import AvgTransSize from "../utils/avgTransSize";
import TimeperTrans from "../utils/timeperTrans";
import "./TransChart.scss";

const TransChart = (props) => {
  const { data, fetchdata } = props;
  return (
    <div className="TransChart">
      <TimeperTrans data={data} fetchdata={fetchdata} />
      <AvgTransSize data={data} fetchdata={fetchdata} />
    </div>
  );
};

export default TransChart;
