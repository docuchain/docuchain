import React from "react";

import NodeCpuChart from "./utils/chart/nodeCpuChart";
import NodeMemoryChart from "./utils/chart/nodeMemoryChart";

const NodeDetail = () => {
  return (
    <div>
      <h1>node detail page</h1>
      <NodeCpuChart />
      <NodeMemoryChart />
    </div>
  );
};

export default NodeDetail;
