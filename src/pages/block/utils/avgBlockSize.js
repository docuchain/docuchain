/* eslint-disable */
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

  function AvgBlockSize (){
    const [data, setData] = useState([]);

    const fetchdata = async () => {
      try {
        const res = await fetch(
          "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/block/avgBlock.json"
        );
        const result = await res.json();
        setData([...result]);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchdata();
    }, []);
      return (
    <div style={{ width: "600px" }}>
      <h3>평균 블록 크기(KB)</h3>
      <AreaChart
        width={550}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="avgTime" />
        <YAxis/>
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="avgData"
          stroke="#8884d8"
          fill="#8884d8"
          key={Math.random()}
        />
      </AreaChart>
    </div>
  );
  };
  
  export default AvgBlockSize;

