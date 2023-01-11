import React, { useEffect } from "react";
import "../CSS/Service.scss";
import ServiceRank from "../utils/serviceRank";
import ApiCallRank from "../utils/apiCallRank";

const ServiceChart = (props) => {
  const { data, fetchdata } = props;

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="ServiceChart">
      <div className="serviceChart_Top5" style={{ backgroundColor: "#ffffff" }}>
        <ServiceRank data={data} fetchdata={fetchdata} />
      </div>
      <div
        className="serviceChart_Top5 Barchart_apiCallRank"
        style={{ backgroundColor: "#ffffff" }}
      >
        <ApiCallRank data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default ServiceChart;
