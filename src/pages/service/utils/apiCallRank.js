import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { dbService } from "../../../apis/firebase";

function TimePerTrans() {
  const serviceRef = collection(dbService, "serviceChart2");
  const [transChartData, setTransChartData] = useState([]);

  useEffect(() => {
    async function getService() {
      const data = await getDocs(serviceRef);
      console.log(data);
      setTransChartData(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getService();
  }, []);

  return (
    <div className="serviceRank_BarChart">
      <h3>API 호출 상위 Top5</h3>
      <BarChart
        width={590}
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
        <XAxis dataKey="API" />
        <YAxis />
        <Tooltip />
        <Bar type="monotone" dataKey="APINum" fill="#2563EB" barSize={30} />
      </BarChart>
    </div>
  );
}

export default TimePerTrans;
