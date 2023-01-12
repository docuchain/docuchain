/* eslint-disable */
import React from "react";
import TimeperBlock from "../utils/timeperBlock";
import AvgBlock from "../utils/avgBlockSize";

export default function BlockChart(props) {
  const { data, fetchdata } = props;
  return (
    <div className="boxLayout2">
      <div className="boxLayoutel2 boxShadow">
        <TimeperBlock data={data} fetchdata={fetchdata} />
      </div>
      <div className="boxLayoutel2 boxShadow">
        <AvgBlock data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
}
