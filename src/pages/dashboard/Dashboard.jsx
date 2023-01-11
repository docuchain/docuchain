import React from "react";
import ActiveNtwCnt from "./utils/activeNtwCnt";
import TotalBlockCnt from "./utils/totalBlockCnt";
import TotalServiceCnt from "./utils/totalServiceCnt";
import TotalTransCnt from "./utils/totalTransCnt";
import "../common/style/contents.scss";
import NtwTransSpeed from "./utils/ntwTransSpeed";
import NtwBlockTime from "./utils/ntwBlockTime";
import ServiceEnrollCnt from "./utils/serviceEnrollCnt";
import ActiveNtw from "./utils/activeNtw";
import "../common/style/boxShadow.scss";

const dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="maginBw100 boxLayout4">
        <TotalBlockCnt />
        <TotalTransCnt />
        <ActiveNtwCnt />
        <TotalServiceCnt />
      </div>
      <div className="maginBw100 boxLayout2">
        <NtwTransSpeed />
        <NtwBlockTime />
      </div>
      <div className="maginBw100 boxLayout2">
        <ServiceEnrollCnt />
        <ActiveNtw />
      </div>
    </div>
  );
};

export default dashboard;
