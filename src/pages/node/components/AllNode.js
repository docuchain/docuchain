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
        {/* 노드 서비스 점유율 */}
        <NodeServiceActivationChart />
        {/* 노드 서비스 활성화/비활성화 */}
      </div>
      <div className="boxLayout2 maginBw100">
        <NodeNetworkSpeedChart />
        {/* 노드 네트워크 속도 */}
        <NodeNetworkStateChart />
        {/* 노드 네트워크 상태 */}
      </div>
    </div>
  );
};

export default AllNode;
