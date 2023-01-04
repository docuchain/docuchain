import { collection, getDocs } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { dbService } from "../../../apis/firebase";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#00C49F"];
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
function ActiveNtw() {
  const chartData = collection(dbService, "chartData");
  const [chartInfo, setChartInfo] = useState([]);

  useEffect(() => {
    async function getChart() {
      const data = await getDocs(chartData);

      setChartInfo(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getChart();
  }, []);

  return (
    <PieChart width={600} height={400}>
      <Tooltip />
      <Legend />
      <Pie
        data={chartInfo}
        cx={300}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="serviceCnt"
      >
        {chartInfo.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
export default ActiveNtw;
