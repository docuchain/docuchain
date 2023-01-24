import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";

function NtwBlockTime(props) {
  const isDark = useRecoilValue(getTheme);
  const { data, fetchdata } = props;

  const countFunc = (a, b) => {
    const filterTime = data.filter((user) => user.timeStamp.includes(a));
    const filterNetWork = filterTime.filter((user) => user.network.includes(b));

    return (60 / filterNetWork.length).toFixed(2);
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
      ntwAPerTPS: countFunc(" 10:", "A"),
      ntwBPerTPS: countFunc(" 10:", "B"),
      ntwCPerTPS: countFunc(" 10:", "C"),
      ntwDPerTPS: countFunc(" 10:", "D"),
      ntwAPerBlock: countFunc(" 10:", "A"),
      ntwBPerBlock: countFunc(" 10:", "B"),
      ntwCPerBlock: countFunc(" 10:", "C"),
      ntwDPerBlock: countFunc(" 10:", "D"),
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
      ntwAPerBlock: countFunc(" 11:", "A"),
      ntwBPerBlock: countFunc(" 11:", "B"),
      ntwCPerBlock: countFunc(" 11:", "C"),
      ntwDPerBlock: countFunc(" 11:", "D"),
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
      ntwAPerBlock: countFunc(" 12:", "A"),
      ntwBPerBlock: countFunc(" 12:", "B"),
      ntwCPerBlock: countFunc(" 12:", "C"),
      ntwDPerBlock: countFunc(" 12:", "D"),
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
      ntwAPerBlock: countFunc(" 13:", "A"),
      ntwBPerBlock: countFunc(" 13:", "B"),
      ntwCPerBlock: countFunc(" 13:", "C"),
      ntwDPerBlock: countFunc(" 13:", "D"),
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
      ntwAPerBlock: countFunc(" 14:", "A"),
      ntwBPerBlock: countFunc(" 14:", "B"),
      ntwCPerBlock: countFunc(" 14:", "C"),
      ntwDPerBlock: countFunc(" 14:", "D"),
    },
  ];
  return (
    <div
      className={
        isDark ? " boxShadowBlack boxLayoutel2" : " boxShadow boxLayoutel2"
      }
      style={({ display: "flex" }, { flexDirection: "column" })}
    >
      <h3>네트워크별 블록생성시간(분)</h3>
      <LineChart
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          padding={{ left: 30, right: 30 }}
          stroke={isDark ? "white" : "black"}
        />
        <YAxis stroke={isDark ? "white" : "black"} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="ntwAPerBlock"
          stroke="#0088FE"
          activeDot={{ r: 8 }}
          strokeWidth="3px"
          key={Math.random()}
          name="A네트워크"
        />
        <Line
          type="monotone"
          dataKey="ntwBPerBlock"
          stroke="#00C49F"
          activeDot={{ r: 8 }}
          strokeWidth="3px"
          key={Math.random()}
          name="B네트워크"
        />
        <Line
          type="monotone"
          dataKey="ntwCPerBlock"
          stroke="#FFBB28"
          activeDot={{ r: 8 }}
          strokeWidth="3px"
          key={Math.random()}
          name="C네트워크"
        />
        <Line
          type="monotone"
          dataKey="ntwDPerBlock"
          stroke="#FF8042"
          activeDot={{ r: 8 }}
          strokeWidth="3px"
          key={Math.random()}
          name="D네트워크"
        />
      </LineChart>
    </div>
  );
}
export default NtwBlockTime;
