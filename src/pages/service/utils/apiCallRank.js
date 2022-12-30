import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../component/data";
import { Data2 } from "../component/data";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

// map을 이용해서 데이터를 불러온다!
const labels = Data2.map((item) => item.label);

export const data = {
  labels,
  datasets: [
    {
      label: "API 호출 상위 TOP5",
      data: Data2.map((data) => data.amount),
      backgroundColor: "rgb(0,120,189)",
    },
  ],
};

const apiCallRank = () => {
  return (
    <>
      {" "}
      <Chart type="bar" data={data} />
    </>
  );
};

export default apiCallRank;
