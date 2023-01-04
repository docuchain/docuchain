import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { dbService } from "../../../apis/firebase";

function TimePerTrans() {
  const serviceRef = collection(dbService, "serviceChart");
  const [serviceChartData, setServiceChartData] = useState([]);

  useEffect(() => {
    async function getService() {
      const data = await getDocs(serviceRef);
      console.log(data);
      setServiceChartData(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getService();
  }, []);

  return (
    <div style={{ width: "600px" }}>
      <h3>누적 호출 상위 Top5</h3>
      <BarChart
        width={600}
        height={400}
        data={serviceChartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        // 배경화면 주는 컬러
        style={{ backgroundColor: "#F4F4F4" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="serviceName" />
        <YAxis />
        <Tooltip />
        <Bar type="monotone" dataKey="serviceNum" fill="#0CE9A6" barSize={30} />
      </BarChart>
    </div>
  );
}

export default TimePerTrans;
