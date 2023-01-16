import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "CPU",
    A: 55,
    B: 78,
    fullMark: 150
  },
  {
    subject: "메모리",
    A: 80,
    B: 120,
    fullMark: 150
  },
  {
    subject: "디스크",
    A: 77,
    B: 110,
    fullMark: 150
  },
  {
    subject: "네트워크",
    A: 90,
    B: 100,
    fullMark: 150
  },
  {
    subject: "GPU",
    A: 44,
    B: 70,
    fullMark: 150
  },
];

export default function App() {
  return (
    <div
      className="boxShadow boxLayoutel2"
      style={({ display: "flex" }, { flexDirection: "column" })}
    >
      <h3>메모리 사용량</h3>
      <RadarChart
      cx={250}
      cy={180}
      outerRadius={150}
      width={500}
      height={360}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
    </div>
  );
}
