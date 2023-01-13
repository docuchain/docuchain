import React from "react";

import NodeServicePercentage from "../utils/chart/nodeServicePercentage";
import NodeServiceActivation from "../utils/chart/nodeServiceActivation";
import NodeNetworkSpeedChart from "../utils/chart/nodeNetworkSpeedChart";
import NodeNetworkStateChart from "../utils/chart/nodeNetworkStatusChart";

const AllNode = () => {
  return (
    <div>
      <h2>전체노드 지원현황 페이지</h2>
      <div className="boxLayout2 maginBw100">
        <NodeServicePercentage />
        {/* 노드 서비스 점유율 */}
        <NodeServiceActivation />
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
