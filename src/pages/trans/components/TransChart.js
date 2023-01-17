import React from "react";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";
import AvgTransSize from "../utils/avgTransSize";
import TimeperTrans from "../utils/timeperTrans";

const TransChart = (props) => {
  const isDark = useRecoilValue(getTheme);
  const { data, fetchdata } = props;
  return (
    <div className="boxLayout2">
      <div
        className={
          isDark ? "boxShadowBlack boxLayoutel2" : "boxShadow boxLayoutel2"
        }
      >
        <TimeperTrans data={data} fetchdata={fetchdata} />
      </div>
      <div
        className={
          isDark ? "boxShadowBlack boxLayoutel2" : "boxShadow boxLayoutel2"
        }
      >
        <AvgTransSize data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default TransChart;
