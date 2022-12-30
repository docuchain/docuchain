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
import { Data } from "../component/data";
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
const labels = Data.map((item) => item.label);

export const data = {
  labels,
  datasets: [
    {
      label: "누적 호출 상위 TOP5",
      data: Data.map((data) => data.amount),
      backgroundColor: "rgb(40,171,223)",
    },
  ],
};

const serviceRank = () => {
  return (
    <>
      {" "}
      <Chart type="bar" data={data} />
    </>
  );
};

export default serviceRank;
