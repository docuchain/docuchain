import React, { useEffect } from "react";
import Timer from "./timer";

const TotalTransCnt = (props) => {
  const { data, fetchdata } = props;

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  return (
    <div
      className="TotalTransCnt boxShadow boxLayoutel4"
      style={{ height: "400px" }}
    >
      <h3>전체 트랜잭션 수</h3>
      <h3>{data.length}</h3>
      <Timer />
    </div>
  );
};

export default TotalTransCnt;
