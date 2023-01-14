import React from "react";

import NodeServicePercentageChart from "../utils/chart/nodeServicePercentageChart";
import NodeServiceActivationChart from "../utils/chart/nodeServiceActivationChart";
import NodeNetworkSpeedChart from "../utils/chart/nodeNetworkSpeedChart";
import NodeNetworkStateChart from "../utils/chart/nodeNetworkStatusChart";

const AllNode = () => {
  return (
    <div>
      <h2>전체노드 지원현황 페이지</h2>
      <div className="boxLayout2 maginBw100">
          <NodeServicePercentageChart />
          <NodeServiceActivationChart />
      </div>
      <div className="boxLayout2 maginBw100">
        <NodeNetworkSpeedChart />
        <NodeNetworkStateChart />
      </div>
    </div>
  );
};

export default AllNode;
