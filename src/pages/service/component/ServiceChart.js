import React from "react";
import ServiceRank from "../utils/serviceRank";
import ApiCallRank from "../utils/apiCallRank";
import "../CSS/Service.scss";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";
const ServiceChart = (props) => {
  const isDark = useRecoilValue(getTheme);
  const { data, fetchdata } = props;

  return (
    <div className="boxLayout2">
      <div
        className={
          isDark ? "boxShadowBlack boxLayoutel2" : "boxShadow boxLayoutel2"
        }
      >
        <ServiceRank data={data} fetchdata={fetchdata} />
      </div>
      <div
        className={
          isDark ? "boxShadowBlack boxLayoutel2" : "boxShadow boxLayoutel2"
        }
      >
        <ApiCallRank data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default ServiceChart;
