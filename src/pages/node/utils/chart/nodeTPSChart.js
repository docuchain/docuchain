import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
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
    처리속도: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "서비스B",
    처리속도: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "서비스C",
    처리속도: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "서비스D",
    처리속도: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "서비스E",
    처리속도: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "서비스F",
    처리속도: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
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
      <h3 style={isDark ? { color: "white" } : {}}>처리속도(TPS)</h3>
      <ComposedChart
        width={500}
        height={360}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="name"
          scale="band"
          stroke={isDark ? "white" : "black"}
        />
        <YAxis stroke={isDark ? "white" : "black"} />
        <Tooltip />
        <Legend />
        <Bar dataKey="처리속도" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="처리속도" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
}
