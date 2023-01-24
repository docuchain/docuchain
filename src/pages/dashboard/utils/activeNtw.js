import React from "react";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";

function ActiveNtw(props) {
  const isDark = useRecoilValue(getTheme);
  const { data, fetchdata } = props;

  const countFunc = (a, b) => {
    const filterService = data.filter((user) => user.serviceName.includes(a));

    return filterService.length;
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
      timePerService: countFunc(" 10:"),
      ntwAPerTPS: countFunc(" 10:", "A"),
      ntwBPerTPS: countFunc(" 10:", "B"),
      ntwCPerTPS: countFunc(" 10:", "C"),
      ntwDPerTPS: countFunc(" 10:", "D"),
      ntwAPerBlock: countFunc(" 10:", "A"),
      ntwBPerBlock: countFunc(" 10:", "B"),
      ntwCPerBlock: countFunc(" 10:", "C"),
      ntwDPerBlock: countFunc(" 10:", "D"),
      ntwPerService: countFunc("A", "A"),
    },
    {
      time: "11:00",
      serviceName: "B서비스",
      apiKinds: "디지털 콘텐츠 검증",
      topFiveService: countFunc("B서비스"),
      topFiveApi: avgFunc("디지털 콘텐츠 검증"),
      timePerService: countFunc(" 11:"),
      ntwAPerTPS: countFunc(" 11:", "A"),
      ntwBPerTPS: countFunc(" 11:", "B"),
      ntwCPerTPS: countFunc(" 11:", "C"),
      ntwDPerTPS: countFunc(" 11:", "D"),
      ntwAPerBlock: countFunc(" 11:", "A"),
      ntwBPerBlock: countFunc(" 11:", "B"),
      ntwCPerBlock: countFunc(" 11:", "C"),
      ntwDPerBlock: countFunc(" 11:", "D"),
      ntwPerService: countFunc("B", "B"),
    },
    {
      time: "12:00",
      serviceName: "C서비스",
      apiKinds: "디지털 콘텐츠 등록",
      topFiveService: countFunc("C서비스"),
      topFiveApi: avgFunc("디지털 콘텐츠 등록"),
      timePerService: countFunc(" 12:"),
      ntwAPerTPS: countFunc(" 12:", "A"),
      ntwBPerTPS: countFunc(" 12:", "B"),
      ntwCPerTPS: countFunc(" 12:", "C"),
      ntwDPerTPS: countFunc(" 12:", "D"),
      ntwAPerBlock: countFunc(" 12:", "A"),
      ntwBPerBlock: countFunc(" 12:", "B"),
      ntwCPerBlock: countFunc(" 12:", "C"),
      ntwDPerBlock: countFunc(" 12:", "D"),
      ntwPerService: countFunc("C", "C"),
    },
    {
      time: "13:00",
      serviceName: "D서비스",
      apiKinds: "IPFS 업로드",
      topFiveService: countFunc("D서비스"),
      topFiveApi: avgFunc("IPFS 업로드"),
      timePerService: countFunc(" 13:"),
      ntwAPerTPS: countFunc(" 13:", "A"),
      ntwBPerTPS: countFunc(" 13:", "B"),
      ntwCPerTPS: countFunc(" 13:", "C"),
      ntwDPerTPS: countFunc(" 13:", "D"),
      ntwAPerBlock: countFunc(" 13:", "A"),
      ntwBPerBlock: countFunc(" 13:", "B"),
      ntwCPerBlock: countFunc(" 13:", "C"),
      ntwDPerBlock: countFunc(" 13:", "D"),
      ntwPerService: countFunc("D", "D"),
    },
    {
      time: "14:00",
      serviceName: "E서비스",
      apiKinds: "DID DOCUMENT 등록",
      topFiveService: countFunc("E서비스"),
      topFiveApi: avgFunc("DID DOCUMENT 등록"),
      timePerService: countFunc(" 14:"),
      ntwAPerTPS: countFunc(" 14:", "A"),
      ntwBPerTPS: countFunc(" 14:", "B"),
      ntwCPerTPS: countFunc(" 14:", "C"),
      ntwDPerTPS: countFunc(" 14:", "D"),
      ntwAPerBlock: countFunc(" 14:", "A"),
      ntwBPerBlock: countFunc(" 14:", "B"),
      ntwCPerBlock: countFunc(" 14:", "C"),
      ntwDPerBlock: countFunc(" 14:", "D"),
      ntwPerService: countFunc("E", "A"),
    },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#c782e5"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div
        className={
          isDark ? " boxShadowBlack boxLayoutel2" : " boxShadow boxLayoutel2"
        }
        style={({ display: "flex" }, { flexDirection: "column" })}
      >
        <h3>서비스별 네트워크 활동 비율</h3>
        <PieChart
          style={{ textAlign: "center" }}
          width={600}
          height={400}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <Legend />
          <Tooltip content="d" />
          <Pie
            data={Data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="ntwPerService"
            nameKey="serviceName"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
}
export default ActiveNtw;
