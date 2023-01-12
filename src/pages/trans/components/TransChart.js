import React from "react";
import AvgTransSize from "../utils/avgTransSize";
import TimeperTrans from "../utils/timeperTrans";

const TransChart = (props) => {
  const { data, fetchdata } = props;
  return (
    <div className="boxLayout2">
      <div className="boxLayoutel2 boxShadow">
        <TimeperTrans data={data} fetchdata={fetchdata} />
      </div>
      <div className="boxLayoutel2 boxShadow">
        <AvgTransSize data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default TransChart;
