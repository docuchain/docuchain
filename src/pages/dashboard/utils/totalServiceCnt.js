import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";
import Timer from "./timer";

const TotalServiceCnt = (props) => {
  const isDark = useRecoilValue(getTheme);
  const { data, fetchdata } = props;

  return (
    <div
      className={
        isDark
          ? "TotalServiceCnt boxShadowBlack boxLayoutel4"
          : "TotalServiceCnt boxShadow boxLayoutel4"
      }
      style={
        ({ height: "400px" }, { display: "flex" }, { flexDirection: "column" })
      }
    >
      <h3>전체 서비스 등록 건수</h3>
      <h1 className={isDark ? "DashboardCntNumBlack" : "DashboardCntNum"}>
        {data.length}
      </h1>
      <Timer />
    </div>
  );
};

export default TotalServiceCnt;
