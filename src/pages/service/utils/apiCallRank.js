import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function ApiCallRank(props) {
  const { data, fetchdata } = props;

  useEffect(() => {
    fetchdata();
  }, []);

  const countFunc = (a) => {
    // let count = 0;
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].timeStamp.includes(a) == true) {
    //     count++;
    //   }
    // }
    // return count;
    const result1 = data.filter((user) => user.serviceName.includes(a));
    return result1.length;
  };
  console.log(countFunc("A서비스"));
  const avgFunc = (a) => {
    const result2 = data.filter((user) => user.apiKinds.includes(a));

    return result2.length;
  };
  console.log(avgFunc("인증서 등록"));
  const Data = [
    {
      time: "10:00",
      serviceName: "A서비스",
      apiKinds: "인증서 등록",
      topFiveService: countFunc("A서비스"),
      topFiveApi: avgFunc("인증서 등록"),
    },
    {
      time: "11:00",
      serviceName: "B서비스",
      apiKinds: "디지털 콘텐츠 검증",
      topFiveService: countFunc("B서비스"),
      topFiveApi: avgFunc("디지털 콘텐츠 검증"),
    },
    {
      time: "12:00",
      serviceName: "C서비스",
      apiKinds: "디지털 콘텐츠 등록",
      topFiveService: countFunc("C서비스"),
      topFiveApi: avgFunc("디지털 콘텐츠 등록"),
    },
    {
      time: "13:00",
      serviceName: "D서비스",
      apiKinds: "IPFS 업로드",
      topFiveService: countFunc("D서비스"),
      topFiveApi: avgFunc("IPFS 업로드"),
    },
    {
      time: "14:00",
      serviceName: "E서비스",
      apiKinds: "DID DOCUMENT 등록",
      topFiveService: countFunc("E서비스"),
      topFiveApi: avgFunc("DID DOCUMENT 등록"),
    },
  ];
  return (
    <div>
      <h3>API 호출 상위 Top5</h3>
      <BarChart
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
        <XAxis dataKey="apiKinds" />
        <YAxis />
        <Tooltip />
        <Bar type="monotone" dataKey="topFiveApi" fill="#2563EB" barSize={30} />
      </BarChart>
    </div>
  );
}

export default ApiCallRank;
