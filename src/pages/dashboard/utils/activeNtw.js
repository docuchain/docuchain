import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Data } from '../data';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels);

export const data = {
  labels: Data.map((item)=>item.serviceName),
  datasets: [
    {
      label: '%',
      data: Data.map((data)=>data.serviceNtw),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(53, 162, 235, 0.5)',
        'rgba(53, 102, 235, 0.5)',
        'rgba(53, 12, 235, 0.5)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(53, 102, 235, 1)',
        'rgba(53, 12, 235, 1)',
        
      ],
      borderWidth: 1,
      datalabels:{

        color:'black',         // 너무 흐리다 싶어서 잘 보이도록 완전히 검게..

                                // 배경색을 어떻게 세팅했냐에 따라 적절히..

        font:{size:24}        // pixel 단위이고, 수치로 입력

      }
    },
  ],
};

const ActiveNtw = () => {
  return (
    <div className='ActiveNtw' style={{width:'600px',height:'400px'}} >
      <h3>서비스별 네트워크 활동 비율</h3>
      <Pie data={data} />
    </div>
  )
}

export default ActiveNtw