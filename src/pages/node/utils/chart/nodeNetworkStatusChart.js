// 노드 네트워크 상태
import "../../NodeStyle.scss";

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

const NodeNetworkChartStatus = () => {
  const [data, setData] = useState([]);
  const [nodeChartDataList, setNodeChartDataList] = useState([]);

  // const fetchdata = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://docuchain-a7ae3-default-rtdb.asia-southeast1.firebasedatabase.app/docu.json"
  //     );
  //     const result = await res.json();
  //     setData([...result]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  const nodeChartData = NodeFirebase();

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
      <h3>노드 네트워크 상태</h3>
      <AreaChart
        width={600}
        height={400}
        data={nodeChartDataList}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="serviceName" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="TPS"
          stroke="#000"
          fill="url(#splitColor)"
        />
      </AreaChart>
    </div>
  );
};

export default NodeNetworkChartStatus;
