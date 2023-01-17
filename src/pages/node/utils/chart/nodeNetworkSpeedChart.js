import React, { useEffect, useState } from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { NodeFirebase } from "../../utils/nodeMockData";

const NodeNetworkChartSpeed = () => {
  const [nodeChartDataList, setNodeChartDataList] = useState([]);

  const nodeChartData = NodeFirebase();

  const getAverage = (serviceName) => {
    let sum = 0;
    const serviceDataLength = nodeChartDataList.filter(
      (data) => data.serviceName === serviceName
    ).length;
    nodeChartDataList.filter((data) => {
      if (data.serviceName === serviceName) {
        sum += data.latency;
      }
    });

    return {
      serviceName: serviceName,
      average: sum / serviceDataLength,
    };
  };

  const average = [
    getAverage("A서비스"),
    getAverage("B서비스"),
    getAverage("C서비스"),
    getAverage("D서비스"),
    getAverage("E서비스"),
  ];

  useEffect(() => {
    if (nodeChartData.length > 0) {
      setNodeChartDataList(nodeChartData);
    } else {
      console.log("nodeChartData length : 0");
    }
  }, [nodeChartData]);

  return (
    <div
      className="boxShadow boxLayoutel2"
      style={({ display: "flex" }, { flexDirection: "column" })}
    >
      <h3>노드 네트워크 속도</h3>
      <AreaChart
        width={600}
        height={400}
        data={average}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nodeName" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="average"
          stroke="#4E944F"
          fill="#B4E197"
          key={Math.random()}
        />
      </AreaChart>
    </div>
  );
};

export default NodeNetworkChartSpeed;
