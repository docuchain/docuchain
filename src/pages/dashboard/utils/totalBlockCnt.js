import { display } from "@mui/system";
import React, { useEffect } from "react";
import Timer from "./timer";

const TotalBlockCnt = (props) => {
  const { data, fetchdata } = props;

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  return (
    <div
      className="TotalBlockCnt boxShadow boxLayoutel4"
      style={{ height: "400px" }}
    >
      <div>
        <h1>전체 블록 수</h1>
        <h3>{data.length}</h3>
        <Timer />
      </div>
    </div>
  );
};

export default TotalBlockCnt;
