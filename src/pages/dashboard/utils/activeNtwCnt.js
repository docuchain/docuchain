import React from "react";
import Timer from "./timer";

const ActiveNtwCnt = (props) => {
  const { data, fetchdata } = props;

  const netWorkKinds = data.filter(
    (v, i) => data.findIndex((x) => x.network === v.network) === i
  );

  return (
    <div
      className="ActiveNtwCnt boxShadow boxLayoutel4"
      style={
        ({ height: "400px" }, { display: "flex" }, { flexDirection: "column" })
      }
    >
      <h3>활성 네트워크 수</h3>
      <h1 className="DashboardCntNum">{netWorkKinds.length}</h1>
      <Timer />
    </div>
  );
};

export default ActiveNtwCnt;
