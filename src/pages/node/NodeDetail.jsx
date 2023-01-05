import React from "react";

import NodeMemoryChart from "./utils/chart/nodeMemoryChart";
import NodeRssChart from "./utils/chart/nodeRssChart";
import NodeUsageChart from "./utils/chart/nodeUsageChart";

const NodeDetail = () => {
  return (
    <div>
      <h1>node detail page</h1>
      <NodeMemoryChart />
      {/* <NodeRssChart />
      <NodeUsageChart /> */}
    </div>
  );
};

export default NodeDetail;
