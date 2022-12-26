import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import { Data } from '../data';


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
        position: 'top' 
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
      
    },
  };

  const labels = Data.map((item)=>item.label)

  export const data = {
    labels,
    datasets: [
      {
        label: '네트워크A',
        data: Data.map((data)=>data.networkA),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '네트워크B',
        data: Data.map((data)=>data.networkB),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: '네트워크C',
        data: Data.map((data)=>data.networkC),
        backgroundColor: 'rgba(53, 102, 235, 0.5)',
      },
      {
        label: '네트워크D',
        data: Data.map((data)=>data.networkD),
        backgroundColor: 'rgba(53, 12, 235, 0.5)',
      },
    ],
  };
const NtwTransSpeed = () => {

  return (
    <div className='NtwTransSpeed'style={{width:'600px',height:'400px'}}>
        <h3>네트워크별 TPS</h3>
        <Bar options={options} data={data} /></div>
  )
}

export default NtwTransSpeed