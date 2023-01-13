import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { NodeFirebase } from "../node/utils/nodeMockData";
import NodeTPSChart from "./utils/chart/nodeTPSChart";
import NodeLatencyChart from "./utils/chart/nodeLatencyChart";
import NodePowerUsageChart from "./utils/chart/nodePowerUsageChart";
import NodeMemoryChart from "./utils/chart/nodeMemoryChart";

const NodeDetail = () => {
  const { nodeName } = useParams();
  const [nodeIp, setNodeIp] = useState("");
  const nodeTableData = NodeFirebase();

  useEffect(() => {
    if (nodeTableData.length > 0) {
      nodeTableData.filter((node) => {
        if (node.nodeName === nodeName) {
          console.log(node);
          setNodeIp(node.IP);
        }
      });
    } else {
      console.log("nodeTableData length : 0");
    }
  }, [nodeTableData]);

  // 노드 목록으로 이동
  const navigate = useNavigate();
  const toNode = () => {
    navigate(`/node`);
  };

  return (
    <div>
      <h1>상세정보</h1>
      <h3>
        {nodeName} : {nodeIp}
      </h3>
      <button onClick={toNode}>목록으로</button>
      {/* https://speed.cloudflare.com/
      사이트에 접속하는 것만으로 측정
      통신 지연 이나 IP나 서버 정보, 용량별 다운로드 속도 등 상세한 정보 제공 */}

      <div className="boxLayout2 maginBw100">
        <NodeTPSChart />
        <NodeLatencyChart />
      </div>
      <div className="boxLayout2 maginBw100">
        <NodePowerUsageChart />
        <NodeMemoryChart />
      </div>
    </div>
  );
};

export default NodeDetail;
