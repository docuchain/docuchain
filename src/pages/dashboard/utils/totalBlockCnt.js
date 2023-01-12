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
      style={
        ({ height: "400px" }, { display: "flex" }, { flexDirection: "column" })
      }
    >
      <h3>전체 블록 수</h3>
      <h1 className="DashboardCntNum">{data.length}</h1>
      <Timer />
    </div>
  );
};

export default TotalBlockCnt;
