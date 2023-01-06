import React from "react";

import NodeMemoryChart from "./utils/chart/nodeMemoryChart";
// import NodeRssChart from "./utils/chart/nodeRssChart";
// import NodeUsageChart from "./utils/chart/nodeUsageChart";

// import { nodeMockData } from "../node/utils/nodeMockData";

const NodeDetail = () => {
  return (
    <div>
      <h1>상세정보</h1>
      <h3>nodeMockData.nodeName (nodeMockData.ip)</h3>
      {/* id가 ${nodeName}인지 한 번 확인하는 코드 넣기
      props or useParams 사용 해보기 */}
      <NodeMemoryChart />
      {/* <NodeRssChart />
      <NodeUsageChart /> */}
    </div>
  );
};

export default NodeDetail;
