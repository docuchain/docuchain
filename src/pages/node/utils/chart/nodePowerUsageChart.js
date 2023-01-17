import React from "react";

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

const data = [
  {
    date: "2022.07",
    uv: 300,
    kWh: 139,
    kW: 221,
  },
  {
    date: "2022.08",
    uv: 200,
    kWh: 980,
    kW: 229,
  },
  {
    date: "2022.09",
    uv: 278,
    kWh: 390,
    kW: 200,
  },
  {
    date: "2022.10",
    uv: 299,
    kWh: 480,
    kW: 218,
  },
  {
    date: "2022.11",
    uv: 229,
    kWh: 380,
    kW: 250,
  },
  {
    date: "2022.12",
    uv: 349,
    kWh: 430,
    kW: 210,
  },
  {
    date: "2023.01",
    uv: 120,
    kWh: 234,
    kW: 189,
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
      <h3 style={isDark ? { color: "white" } : {}}>전력 사용량(kWH)</h3>
      <AreaChart
        width={500}
        height={360}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" stroke={isDark ? "white" : "black"} />
        <YAxis stroke={isDark ? "white" : "black"} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="kWh"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="kW"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </div>
  );
}
