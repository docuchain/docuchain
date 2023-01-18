import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../../recoil/selector";

const data = [
  {
    name: "서비스A",
    지연율: 4.2,
    전체: 2800,
    amt: 2400,
  },
  {
    name: "서비스B",
    지연율: 2.9,
    전체: 4698,
    amt: 2210,
  },
  {
    name: "서비스C",
    지연율: 2.1,
    전체: 8900,
    amt: 2290,
  },
  {
    name: "서비스D",
    지연율: 2.5,
    전체: 5908,
    amt: 2000,
  },
  {
    name: "서비스E",
    지연율: 5.4,
    전체: 3810,
    amt: 2181,
  },
  {
    name: "서비스F",
    지연율: 3.7,
    전체: 7800,
    amt: 2500,
  },
];

export default function App() {
  const isDark = useRecoilValue(getTheme);
  return (
    <div
      className={
        isDark ? "boxShadowBlack boxLayoutel2" : "boxShadow boxLayoutel2"
      }
      style={({ display: "flex" }, { flexDirection: "column" })}
    >
      <h3 style={isDark ? { color: "white" } : {}}>지연율(Latency)</h3>
      <LineChart
        width={500}
        height={360}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke={isDark ? "white" : "black"} />
        <YAxis yAxisId="left" stroke={isDark ? "white" : "black"} />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke={isDark ? "white" : "black"}
        />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="전체"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="지연율"
          stroke="#82ca9d"
        />
      </LineChart>
    </div>
  );
}
