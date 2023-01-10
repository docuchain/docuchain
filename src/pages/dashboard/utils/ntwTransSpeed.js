import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { dbService } from "../../../apis/firebase";

function NtwTransSpeed() {
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
    <div className="boxShadow2">
      <BarChart
        width={600}
        height={400}
        data={chartInfo}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="networkA" fill="#0088FE" key={Math.random()} />
        <Bar dataKey="networkB" fill="#00C49F" key={Math.random()} />
        <Bar dataKey="networkC" fill="#FFBB28" key={Math.random()} />
        <Bar dataKey="networkD" fill="#FF8042" key={Math.random()} />
      </BarChart>
    </div>
  );
}
export default NtwTransSpeed;
