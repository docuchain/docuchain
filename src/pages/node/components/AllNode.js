import React from 'react';

import NodeNetworkChart from "../utils/chart/nodeNetworkChart";
import NodeTrafficChart from "../utils/chart/nodeTrafficChart";
import NodeCpuChart from "../utils/chart/nodeCpuChart";

const AllNode = () => {
  return (
    <div>
      <h2>전체노드 지원현황 페이지</h2>
      <NodeNetworkChart/>
      <NodeTrafficChart/>
      <NodeCpuChart/>
    </div>
  );
};

export default AllNode;