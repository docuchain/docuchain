/* eslint-disable */
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  LineController,
  BarController,
} from "chart.js";
import { Data } from "../utils/data";
import { AvgData } from "../utils/avgData";
import { Chart } from "react-chartjs-2";
import { blockServiceData } from "./blockServiceData";

console.log(blockServiceData);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  LineController,
  BarController
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js line Chart",
    },
  },
};

const labels = AvgData.map((item) => item.label);
const blockSize = AvgData.map((data) => {
  data.amount;
});
export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "평균 블록 크기(KB)",
      data: AvgData.map((data) => data.amount),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
    },
  ],
};

export default function avgBlockSize() {
  return (
    <div style={{ width: 600, heigth: 200 }}>
      <Chart type="line" data={data} />
    </div>
  );
}
