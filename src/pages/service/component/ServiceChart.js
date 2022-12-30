import React from "react";
import ServiceRank from "../utils/serviceRank";
import ApiCallRank from "../utils/apiCallRank";
import ServiceTable from "../utils/serviceTable";

const ServiceChart = () => {
  return (
    <div>
      <ServiceRank />
      <ApiCallRank />
      <ServiceTable />
    </div>
  );
};

export default ServiceChart;
