import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "서비스A",
    활성화: 4000,
    비활성화: 2400,
    amt: 2400,
  },
  {
    name: "서비스B",
    활성화: 3000,
    비활성화: 1398,
    amt: 2210,
  },
  {
    name: "서비스C",
    활성화: 2000,
    비활성화: 9800,
    amt: 2290,
  },
  {
    name: "서비스D",
    활성화: 2780,
    비활성화: 3908,
    amt: 2000,
  },
  {
    name: "서비스E",
    활성화: 1890,
    비활성화: 4800,
    amt: 2181,
  },
  {
    name: "서비스F",
    활성화: 2390,
    비활성화: 3800,
    amt: 2500,
  },
  {
    name: "서비스G",
    활성화: 3490,
    비활성화: 4300,
    amt: 2100,
  },
];

export default function App() {
  return (
    <div
      className="boxShadow boxLayoutel2"
      style={({ display: "flex" }, { flexDirection: "column" })}
    >
      <h3>서비스 상태</h3> 
      {/* 제목 내 마음대로 */}
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="비활성화" stackId="a" fill="#8884d8" />
        <Bar dataKey="활성화" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
