import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { NodeFirebase } from "../node/utils/nodeMockData";
import NodeTPSChart from "./utils/chart/nodeTPSChart";
import NodeLatencyChart from "./utils/chart/nodeLatencyChart";
import NodePowerUsageChart from "./utils/chart/nodePowerUsageChart";
import NodeMemoryChart from "./utils/chart/nodeMemoryChart";
import Button from "@mui/material/Button";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../recoil/selector";

const NodeDetail = () => {
  const isDark = useRecoilValue(getTheme);
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

  const navigate = useNavigate();
  const toNode = () => {
    navigate(`/node`);
  };

  return (
    <div>
      <h1 style={isDark ? { color: "white" } : {}}>상세정보</h1>
      <h3 style={isDark ? { color: "white" } : {}}>
        {nodeName} : {nodeIp}
      </h3>
      <div className="toMainBtnLayout">
        <Button variant="contained" onClick={toNode}>
          목록으로
        </Button>
      </div>

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
