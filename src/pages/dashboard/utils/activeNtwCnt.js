import React, { useEffect, useState } from "react";
import Timer from "./timer";

const ActiveNtwCnt = (props) => {
  const { data, fetchdata } = props;

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  //네트워크 개수

  const netWorkKinds = data.filter(
    (v, i) => data.findIndex((x) => x.network === v.network) === i
  );

  return (
    <div
      className="ActiveNtwCnt boxShadow boxLayoutel4"
      style={{ height: "400px" }}
    >
      <h3>활성 네트워크 수</h3>
      <h3>{netWorkKinds.length}</h3>
      <Timer />
    </div>
  );
};

export default ActiveNtwCnt;
