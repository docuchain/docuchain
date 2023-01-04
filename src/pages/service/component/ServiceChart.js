import React from "react";
import "../CSS/Service.scss";
import ServiceRank from "../utils/serviceRank";
import ApiCallRank from "../utils/apiCallRank";

const ServiceChart = () => {
  return (
    <div className="ServiceChart" style={{ backgroundColor: "#F4F4F4" }}>
      <ServiceRank className="ServiceRank" />
      <ApiCallRank />
    </div>
  );
};

export default ServiceChart;
