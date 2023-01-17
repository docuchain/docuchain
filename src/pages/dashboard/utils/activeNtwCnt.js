import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";
import Timer from "./timer";

const ActiveNtwCnt = (props) => {
  const isDark = useRecoilValue(getTheme);
  const { data, fetchdata } = props;

  const netWorkKinds = data.filter(
    (v, i) => data.findIndex((x) => x.network === v.network) === i
  );

  return (
    <div
      className={
        isDark
          ? "ActiveNtwCnt boxShadowBlack boxLayoutel4"
          : "ActiveNtwCnt boxShadow boxLayoutel4"
      }
      style={
        ({ height: "400px" }, { display: "flex" }, { flexDirection: "column" })
      }
    >
      <h3>활성 네트워크 수</h3>
      <h1 className={isDark ? "DashboardCntNumBlack" : "DashboardCntNum"}>
        {netWorkKinds.length}
      </h1>
      <Timer />
    </div>
  );
};

export default ActiveNtwCnt;
