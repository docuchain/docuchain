import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { dbService } from "../../../apis/firebase";

function NtwTransSpeed(props) {
  const { data, fetchdata } = props;

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  const countFunc = (a, b) => {
    const filterTime = data.filter((user) => user.timeStamp.includes(a));
    const filterNetWork = filterTime.filter((user) => user.network.includes(b));
    const avgResult = filterNetWork
      .map((item) => item.TPS)
      .reduce((prev, curr) => prev + curr, 0);

    return (avgResult / filterNetWork.length).toFixed(2);
  };
  console.log(countFunc(" 10:", "A"));

  const avgFunc = (a) => {
    const result2 = data.filter((user) => user.apiKinds.includes(a));

    return result2.length;
  };

  const Data = [
    {
      time: "10:00",
      serviceName: "A서비스",
      apiKinds: "인증서 등록",
      topFiveService: countFunc("A서비스"),
      topFiveApi: avgFunc("인증서 등록"),
      ntwAPerTPS: countFunc(" 10:", "A"),
      ntwBPerTPS: countFunc(" 10:", "B"),
      ntwCPerTPS: countFunc(" 10:", "C"),
      ntwDPerTPS: countFunc(" 10:", "D"),
    },
    {
      time: "11:00",
      serviceName: "B서비스",
      apiKinds: "디지털 콘텐츠 검증",
      topFiveService: countFunc("B서비스"),
      topFiveApi: avgFunc("디지털 콘텐츠 검증"),
      ntwAPerTPS: countFunc(" 11:", "A"),
      ntwBPerTPS: countFunc(" 11:", "B"),
      ntwCPerTPS: countFunc(" 11:", "C"),
      ntwDPerTPS: countFunc(" 11:", "D"),
    },
    {
      time: "12:00",
      serviceName: "C서비스",
      apiKinds: "디지털 콘텐츠 등록",
      topFiveService: countFunc("C서비스"),
      topFiveApi: avgFunc("디지털 콘텐츠 등록"),
      ntwAPerTPS: countFunc(" 12:", "A"),
      ntwBPerTPS: countFunc(" 12:", "B"),
      ntwCPerTPS: countFunc(" 12:", "C"),
      ntwDPerTPS: countFunc(" 12:", "D"),
    },
    {
      time: "13:00",
      serviceName: "D서비스",
      apiKinds: "IPFS 업로드",
      topFiveService: countFunc("D서비스"),
      topFiveApi: avgFunc("IPFS 업로드"),
      ntwAPerTPS: countFunc(" 13:", "A"),
      ntwBPerTPS: countFunc(" 13:", "B"),
      ntwCPerTPS: countFunc(" 13:", "C"),
      ntwDPerTPS: countFunc(" 13:", "D"),
    },
    {
      time: "14:00",
      serviceName: "E서비스",
      apiKinds: "DID DOCUMENT 등록",
      topFiveService: countFunc("E서비스"),
      topFiveApi: avgFunc("DID DOCUMENT 등록"),
      ntwAPerTPS: countFunc(" 14:", "A"),
      ntwBPerTPS: countFunc(" 14:", "B"),
      ntwCPerTPS: countFunc(" 14:", "C"),
      ntwDPerTPS: countFunc(" 14:", "D"),
    },
  ];

  return (
    <div
      className="boxShadow boxLayoutel2"
      style={({ display: "flex" }, { flexDirection: "column" })}
    >
      <h3>네트워크별 트랜잭션처리속도 (TPS)</h3>
      {/* <ComposedChart
        width={600}
        height={400}
        data={Data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis domain={[0, 400]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="ntwAPerTPS" fill="#0088FE" key={Math.random()} />
        <Bar dataKey="ntwBPerTPS" fill="#00C49F" key={Math.random()} />
        <Bar dataKey="ntwCPerTPS" fill="#FFBB28" key={Math.random()} />
        <Bar dataKey="ntwDPerTPS" fill="#FF8042" key={Math.random()} />
      </BarChart> */}
      <ComposedChart
        width={600}
        height={400}
        data={Data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="time" scale="band" />
        <YAxis domain={[0, 400]} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="ntwAPerTPS"
          fill="#0088FE"
          key={Math.random()}
          name="A네트워크"
        />
        <Bar
          dataKey="ntwBPerTPS"
          fill="#00C49F"
          key={Math.random()}
          name="B네트워크"
        />
        <Bar
          dataKey="ntwCPerTPS"
          fill="#FFBB28"
          key={Math.random()}
          name="C네트워크"
        />
        <Bar
          dataKey="ntwDPerTPS"
          fill="#FF8042"
          key={Math.random()}
          name="D네트워크"
        />
        <Line
          type="monotone"
          dataKey="ntwAPerTPS"
          stroke="#ff7300"
          key={Math.random()}
          legendType="none"
        />
      </ComposedChart>
    </div>
  );
}
export default NtwTransSpeed;
