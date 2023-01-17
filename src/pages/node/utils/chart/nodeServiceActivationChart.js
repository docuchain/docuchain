import React from "react";
import { colors } from "../../../../lib/colors";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../../recoil/selector";

const data = [
  { serviceName: "활성화", value: 159 },
  { serviceName: "비활성화", value: 83 },
];

const COLORS = [colors.chart_orange, colors.chart_yellow];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function App() {
  const isDark = useRecoilValue(getTheme);
  return (
    <div
      className={
        isDark ? "boxShadowBlack boxLayoutel2" : "boxShadow boxLayoutel2"
      }
      style={({ display: "flex" }, { flexDirection: "column" })}
    >
      <h3>노드 서비스 활성화/비활성화</h3>
      <PieChart width={400} height={400}>
        <Legend />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          nameKey="serviceName"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
