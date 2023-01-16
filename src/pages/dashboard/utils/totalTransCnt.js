import React from "react";
import Timer from "./timer";

const TotalTransCnt = (props) => {
  const { data, fetchdata } = props;

  return (
    <div
      className="TotalTransCnt boxShadow boxLayoutel4"
      style={
        ({ height: "400px" }, { display: "flex" }, { flexDirection: "column" })
      }
    >
      <h3>전체 트랜잭션 수</h3>
      <h1 className="DashboardCntNum">{data.length}</h1>
      <Timer />
    </div>
  );
};

export default TotalTransCnt;
