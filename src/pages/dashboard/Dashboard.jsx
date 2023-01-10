import React from "react";
import ActiveNtwCnt from "./utils/activeNtwCnt";
import TotalBlockCnt from "./utils/totalBlockCnt";
import TotalServiceCnt from "./utils/totalServiceCnt";
import TotalTransCnt from "./utils/totalTransCnt";
import "./Dashboard.scss";
import NtwTransSpeed from "./utils/ntwTransSpeed";
import NtwBlockTime from "./utils/ntwBlockTime";
import ServiceEnrollCnt from "./utils/serviceEnrollCnt";
import ActiveNtw from "./utils/activeNtw";
import "../common/style/boxShadow.scss";

const dashboard = () => {
  return (
    <div className="dashboard">
      <div className="box--shadow">
        <TotalBlockCnt />
      </div>
      <TotalTransCnt />
      <ActiveNtwCnt />
      <TotalServiceCnt />
      <NtwTransSpeed />
      <NtwBlockTime />
      <ServiceEnrollCnt />
      <ActiveNtw />
    </div>
  );
};

export default dashboard;
