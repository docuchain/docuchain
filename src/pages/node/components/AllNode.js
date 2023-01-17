import React from "react";

import NodeServicePercentageChart from "../utils/chart/nodeServicePercentageChart";
import NodeServiceActivationChart from "../utils/chart/nodeServiceActivationChart";
import NodeNetworkSpeedChart from "../utils/chart/nodeNetworkSpeedChart";
import NodeNetworkStateChart from "../utils/chart/nodeNetworkStatusChart";

const AllNode = () => {
  return (
    <div>
      <div className="maginBw100"></div>
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
