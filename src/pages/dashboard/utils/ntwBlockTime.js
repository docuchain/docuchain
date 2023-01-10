import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { dbService } from "../../../apis/firebase";

function NtwBlockTime() {
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
    <div className="boxShadow boxLayoutel2">
      <LineChart width={600} height={400} data={chartInfo}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="networkA"
          stroke="#0088FE"
          activeDot={{ r: 8 }}
          strokeWidth="3px"
          key={Math.random()}
        />
        <Line
          type="monotone"
          dataKey="networkB"
          stroke="#00C49F"
          strokeWidth="3px"
          key={Math.random()}
        />
        <Line
          type="monotone"
          dataKey="networkC"
          stroke="#FFBB28"
          activeDot={{ r: 8 }}
          strokeWidth="3px"
          key={Math.random()}
        />
        <Line
          type="monotone"
          dataKey="networkD"
          stroke="#FF8042"
          strokeWidth="3px"
          key={Math.random()}
        />
      </LineChart>
    </div>
  );
}
export default NtwBlockTime;
