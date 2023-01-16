import React from "react";
import ServiceRank from "../utils/serviceRank";
import ApiCallRank from "../utils/apiCallRank";
import "../CSS/Service.scss";
const ServiceChart = (props) => {
  const { data, fetchdata } = props;

  return (
    <div className="boxLayout2">
      <div className="boxLayoutel2 boxShadow">
        <ServiceRank data={data} fetchdata={fetchdata} />
      </div>
      <div className="boxLayoutel2 boxShadow">
        <ApiCallRank data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default ServiceChart;
