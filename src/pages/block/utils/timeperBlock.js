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

function TimePerBlock(props) {
  const { data, fetchdata } = props;

  const countFunc = (a) => {
    // let count = 0;
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].timeStamp.includes(a) == true) {
    //     count++;
    //   }
    // }
    // return count;
    const result1 = data.filter((user) => user.timeStamp.includes(a));
    return result1.length;
  };
  console.log(countFunc(" 10:"));
  const avgFunc = (a) => {
    const result2 = data.filter((user) => user.timeStamp.includes(a));

    const avgResult = result2
      .map((item) => item.blockSize)
      .reduce((prev, curr) => prev + curr, 0);

    return avgResult / result2.length;
  };

  const Data = [
    {
      time: "10:00",
      timePerBlock: countFunc(" 10:"),
      blockSize: avgFunc(" 10:"),
    },
    {
      time: "11:00",
      timePerBlock: countFunc(" 11:"),
      blockSize: avgFunc(" 11:"),
    },
    {
      time: "12:00",
      timePerBlock: countFunc(" 12:"),
      blockSize: avgFunc(" 12:"),
    },
    {
      time: "13:00",
      timePerBlock: countFunc(" 13:"),
      blockSize: avgFunc(" 13:"),
    },
    {
      time: "14:00",
      timePerBlock: countFunc(" 14:"),
      blockSize: avgFunc(" 14:"),
    },
  ];

  return (
    <div>
      <h3>시간 당 블록 수(개)</h3>
      <AreaChart
        width={560}
        height={400}
        data={Data}
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
          dataKey="timePerBlock"
          stroke="#8884d8"
          fill="#8884d8"
          key={Math.random()}
        />
      </AreaChart>
    </div>
  );
}

export default TimePerBlock;
