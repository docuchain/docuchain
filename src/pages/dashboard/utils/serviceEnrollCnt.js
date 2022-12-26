import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Data } from '../data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' 
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
    
  },
  scales: {
    // ⑫y축에 대한 설정(Object)
    y: {
        // ⑬시작을 0부터 하게끔 설정(최소값이 0보다 크더라도)(boolean)
        beginAtZero: true
    }
  }
};

const labels = Data.map((item)=>item.label)

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'serviceCnt',
      data: Data.map((data)=>data.serviceCnt),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const ServiceEnrollCnt = () => {
  return (
    <div className='ServiceEnrollCnt' style={{width:'600px',height:'400px'}}>
      <h3>시간당 서비스 등록 건 수</h3>
      <Line options={options} data={data} />
    </div>
  )
}

export default ServiceEnrollCnt