import React, { useEffect, useState } from "react";
import Timer from "./timer";

const TotalServiceCnt = (props) => {
  const { data, fetchdata } = props;

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  return (
    <div
      className="TotalServiceCnt boxShadow boxLayoutel4"
      style={{ height: "400px" }}
    >
      <h3>전체 서비스 등록 건수</h3>
      <h3>{data.length}</h3>
      {/* <Timer /> */}
    </div>
  );
};

export default TotalServiceCnt;
