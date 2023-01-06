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

function TimePerTrans() {
  const transRef = collection(dbService, "transChart");
  const [transChartData, setTransChartData] = useState([]);

  useEffect(() => {
    async function getTrans() {
      const data = await getDocs(transRef);
      console.log(data);
      setTransChartData(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getTrans();
  }, []);

  return (
    <div style={{ width: "600px" }}>
      <h3>시간당 트랜잭션 수(개)</h3>
      <AreaChart
        width={600}
        height={400}
        data={transChartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="transNum"
          stroke="#8884d8"
          fill="#8884d8"
          key={Math.random()}
        />
      </AreaChart>
    </div>
  );
}

export default TimePerTrans;
