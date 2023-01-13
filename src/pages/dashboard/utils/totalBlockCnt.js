import { display } from "@mui/system";
import React, { useEffect } from "react";
import Timer from "./timer";
import { getTheme } from "../../../recoil/selector";
import { useRecoilValue } from "recoil";
const TotalBlockCnt = (props) => {
  const isDark = useRecoilValue(getTheme);
  const dark = "";

  const { data, fetchdata } = props;
  // useEffect(() => {
  //   fetchdata();
  // }, []);

  return (
    <div
      className={
        isDark
          ? "TotalBlockCnt boxShadowBlack boxLayoutel4"
          : "TotalBlockCnt boxShadow boxLayoutel4"
      }
      style={
        ({ height: "400px" }, { display: "flex" }, { flexDirection: "column" })
      }
    >
      <h3>전체 블록 수</h3>
      <h1 className="DashboardCntNum">{data.length}</h1>
      {/* <Timer /> */}
    </div>
  );
};

export default TotalBlockCnt;
