import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function ServiceRank(props) {
  const { data, fetchdata } = props;

  const countFunc = (a) => {
    const result1 = data.filter((user) => user.serviceName.includes(a));
    return result1.length;
  };
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
      apiKinds: "DID DOCUMENT",
      topFiveService: countFunc("E서비스"),
      topFiveApi: avgFunc("DID DOCUMENT"),
    },
  ];

  return (
    <div className="Chart">
      <h3 className="chart_trans_title">누적 호출 상위 Top5</h3>
      <BarChart
        width={590}
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
        <XAxis dataKey="serviceName" />
        <YAxis />
        <Tooltip />
        <Bar
          type="monotone"
          dataKey="topFiveService"
          fill="#2563EB"
          barSize={30}
          key={Math.random()}
        />
      </BarChart>
    </div>
  );
}

export default ServiceRank;
