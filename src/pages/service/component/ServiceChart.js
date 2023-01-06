import React from "react";
import "../CSS/Service.scss";
import ServiceRank from "../utils/serviceRank";
import ApiCallRank from "../utils/apiCallRank";

const ServiceChart = () => {
  return (
    <div className="ServiceChart">
      <div className="serviceChart_Top5" style={{ backgroundColor: "#ffffff" }}>
        <ServiceRank />
      </div>
      <div
        className="serviceChart_Top5 Barchart_apiCallRank"
        style={{ backgroundColor: "#ffffff" }}
      >
        <ApiCallRank />
      </div>
    </div>
  );
};

export default ServiceChart;
