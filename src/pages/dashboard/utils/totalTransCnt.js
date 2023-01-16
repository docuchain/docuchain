import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";
import Timer from "./timer";
import { getTheme } from "../../../recoil/selector";
import { useRecoilValue } from "recoil";

const TotalTransCnt = (props) => {
  const isDark = useRecoilValue(getTheme);

  const { data, fetchdata } = props;
  const isDark = useRecoilValue(getTheme);
  // useEffect(() => {
  //   fetchdata();
  // }, []);

  return (
    <div
      className={
        isDark
          ? "TotalTransCnt boxShadowBlack boxLayoutel4"
          : "TotalTransCnt boxShadow boxLayoutel4"
      }
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
