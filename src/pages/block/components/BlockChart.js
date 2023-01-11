/* eslint-disable */
import React from "react";
import TimeperBlock from "../utils/timeperBlock";
import AvgBlock from "../utils/avgBlockSize";

export default function BlockChart(props) {
  const { data, fetchdata } = props;
  return (
    <div>
      <TimeperBlock data={data} fetchdata={fetchdata} />
      <AvgBlock data={data} fetchdata={fetchdata} />
    </div>
  );
}
