import React, { useEffect } from "react";
import ServiceRank from "../utils/serviceRank";
import ApiCallRank from "../utils/apiCallRank";
import "../CSS/Service.scss";
const ServiceChart = (props) => {
  const { data, fetchdata } = props;

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="boxLayout2">
      <div className="boxLayoutel2 boxShadowNonePadding">
        <ServiceRank data={data} fetchdata={fetchdata} />
      </div>
      <div className="boxLayoutel2 boxShadowNonePadding">
        <ApiCallRank
          className="ServiceChart"
          data={data}
          fetchdata={fetchdata}
        />
      </div>
    </div>
  );
};

export default ServiceChart;
