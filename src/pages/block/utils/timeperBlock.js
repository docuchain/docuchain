import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function TimePerBlock(props) {
  const { data, fetchdata } = props;

  const countFunc = (a) => {
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
    <div className="Chart">
      <h3 className="chart_trans_title">시간 당 블록 수(개)</h3>
      <AreaChart
        width={580}
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

        <Area
          type="monotone"
          dataKey="timePerBlock"
          stroke="#8884d8"
          fill="rgba(0,136,254,0.7)"
          key={Math.random()}
        />
      </AreaChart>
    </div>
  );
}

export default TimePerBlock;
