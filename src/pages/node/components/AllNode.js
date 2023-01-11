import React from 'react';

import NodeServicePercentage from "../utils/chart/nodeServicePercentage";
import NodeServiceActivation from "../utils/chart/nodeServiceActivation";
import NodeNetworkChartSpeed from "../utils/chart/nodeNetworkChartSpeed";
import NodeNetworkChartState from "../utils/chart/nodeNetworkChartStatus";

const AllNode = () => {
  return (
    <div>
      <h2>전체노드 지원현황 페이지</h2>
      <NodeServicePercentage/>
      {/* 노드 서비스 점유율 */}
      <NodeServiceActivation/>
      {/* 노드 서비스 활성화/비활성화 */}
      <NodeNetworkChartSpeed/>
      {/* 노드 네트워크 속도 */}
      <NodeNetworkChartState />
      {/* 노드 네트워크 상태 */}
    </div>
  );
};

export default AllNode;