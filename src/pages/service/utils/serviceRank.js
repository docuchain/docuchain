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
import { Bar } from "react-chartjs-2";
import "./components/data";
import { Data } from "./components/data";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
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
      type: "line",
      label: "Dataset 1",
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
const serviceRank = () => {
  return (
    <>
      {" "}
      <Chart type="bar" data={data} />
    </>
  );
};

export default serviceRank;
