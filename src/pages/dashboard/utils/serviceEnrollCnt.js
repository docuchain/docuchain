import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { dbService } from "../../../apis/firebase";

function ServiceEnrollCnt() {
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
    <div className="boxShadow4">
      <AreaChart
        width={600}
        height={400}
        data={chartInfo}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="serviceCnt"
          stroke="#8884d8"
          fill="#8884d8"
          key={Math.random()}
        />
      </AreaChart>
    </div>
  );
}

export default ServiceEnrollCnt;
