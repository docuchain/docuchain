import React from "react";
import TimeperBlock from "../utils/timeperBlock";
import AvgBlock from "../utils/avgBlockSize";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";

export default function BlockChart(props) {
  const isDark = useRecoilValue(getTheme);
  const { data, fetchdata } = props;
  return (
    <div className="boxLayout2">
      <div
        className={
          isDark ? "boxShadowBlack boxLayoutel2" : "boxShadow boxLayoutel2"
        }
      >
        <TimeperBlock data={data} fetchdata={fetchdata} />
      </div>
      <div
        className={
          isDark ? "boxShadowBlack boxLayoutel2" : "boxShadow boxLayoutel2"
        }
      >
        <AvgBlock data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
}
