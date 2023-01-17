import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../../recoil/selector";

const data = [
  {
    subject: "CPU",
    A: 55,
    B: 78,
    fullMark: 150,
  },
  {
    subject: "메모리",
    A: 80,
    B: 120,
    fullMark: 150,
  },
  {
    subject: "디스크",
    A: 77,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "네트워크",
    A: 90,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "GPU",
    A: 44,
    B: 70,
    fullMark: 150,
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
      <h3 style={isDark ? { color: "white" } : {}}>메모리 사용량</h3>
      <RadarChart
        cx={250}
        cy={180}
        outerRadius={150}
        width={500}
        height={360}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke={isDark ? "white" : "black"} />
        <PolarRadiusAxis stroke={isDark ? "white" : "black"} />
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
