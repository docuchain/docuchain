import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
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
  };
  
  const labels = Data.map((item)=>item.label)
  
  export const data = {
    labels,
    datasets: [
      {
        label: '네트워크A',
        data: Data.map((data)=>data.blocktimeA),
        backgroundColor: 'rgba(255, 99, 132)',
        borderColor:'rgba(255, 99, 132, 0.5)'
      },
      {
        label: '네트워크B',
        data: Data.map((data)=>data.blocktimeB),
        backgroundColor: 'rgba(53, 162, 235)',
        borderColor:'rgba(53, 162, 235,0.5)'
      },
      {
        label: '네트워크C',
        data: Data.map((data)=>data.blocktimeC),
        backgroundColor: 'rgba(53, 102, 235)',
        borderColor:'rgba(53, 102, 235, 0.5)'
      },
      {
        label: '네트워크D',
        data: Data.map((data)=>data.blocktimeD),
        backgroundColor: 'rgba(53, 12, 235)',
        borderColor:'rgba(53, 12, 235, 0.5)'
      },
    ],
  };
const NtwBlockTime = () => {
  return (
    <div className='NtwBlockTime' style={{width:'600px',height:'400px'}}>
        <h3>네트워크별 블록생성시간(초)</h3>
        <Line options={options} data={data} />
    </div>
  )
}

export default NtwBlockTime