import React from "react";

import { useParams } from "react-router-dom";
import { nodeMockData } from "../node/utils/nodeMockData";
import NodeMemoryChart from "./utils/chart/nodeMemoryChart";
// import NodeRssChart from "./utils/chart/nodeRssChart";
// import NodeUsageChart from "./utils/chart/nodeUsageChart";

const NodeDetail = () => {
  const { nodeName } = useParams();

  const nodeDetailInfo = nodeMockData.nodeList.filter((node, index) => {
    if (node.nodeName === nodeName) {
      return node;
    }
  });

  const NodeIP = nodeDetailInfo[0].IP;

  return (
    <div>
      <h1>상세정보</h1>
      <h3>
        {nodeName} : {NodeIP}
      </h3>

      <NodeMemoryChart />
      {/* <NodeRssChart />
      <NodeUsageChart /> */}
    </div>
  );
};

export default NodeDetail;
