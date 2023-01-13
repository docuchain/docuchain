import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "서비스A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "서비스B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "서비스C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "서비스D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "서비스E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "서비스F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
];

export default function App() {
  return (
    <div
      className="boxShadow boxLayoutel2"
      style={({ display: "flex" }, { flexDirection: "column" })}
    >
      <h3>처리속도(TPS)</h3> 
      <LineChart
      width={500}
      height={360}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
}
