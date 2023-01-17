import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../../recoil/selector";
import { NodeFirebase } from "../../utils/nodeMockData";

const NodeNetworkChartStatus = () => {
  const isDark = useRecoilValue(getTheme);
  const [data, setData] = useState([]);
  const [nodeChartDataList, setNodeChartDataList] = useState([]);

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

  const getAverage = (serviceName) => {
    let sum = 0;
    const serviceDataLength = nodeChartDataList.filter(
      (data) => data.serviceName === serviceName
    ).length;
    nodeChartDataList.filter((data) => {
      if (data.serviceName === serviceName) {
        sum += data.TPS;
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
      className={
        isDark ? "boxShadowBlack boxLayoutel2" : "boxShadow boxLayoutel2"
      }
      style={({ display: "flex" }, { flexDirection: "column" })}
    >
      <h3>노드 네트워크 평균 상태</h3>
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
        <XAxis dataKey="serviceName" />
        <YAxis ticks={[50, 100, 150, 200, 250, 300]} />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="average"
          stroke="#0F3460"
          fill="#8DCBE6"
        />
      </AreaChart>
    </div>
  );
};

export default NodeNetworkChartStatus;
