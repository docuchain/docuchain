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
import { Chart } from "react-chartjs-2";

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

const labels = Data.map((item) => item.label);

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "시간 당 블록 수(개)",
      data: Data.map((data) => data.amount),
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

export default function TimeperBlock() {
  return (
    <div style={{ width: 600, heigth: 200 }}>
      <Chart type="line" data={data} />
    </div>
  );
}
