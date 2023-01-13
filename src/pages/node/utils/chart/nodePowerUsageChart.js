import "../../NodeStyle.scss";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "2022.07",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "2022.08",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "2022.09",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "2022.10",
    uv: 2990,
    pv: 4800,
    amt: 2181
  },
  {
    name: "2022.11",
    uv: 2290,
    pv: 3800,
    amt: 2500
  },
  {
    name: "2022.12",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "2023.01",
    uv: 1200,
    pv: 2341,
    amt: 1890
  },
];

export default function App() {
  return (
    <div
      className="boxShadow boxLayoutel2"
      style={({ display: "flex" }, { flexDirection: "column" })}
    >
      <h3>전력 사용량</h3>
      <AreaChart
      width={500}
      height={360}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
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
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
    </div>
  );
}
