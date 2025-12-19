import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FunctionalitiesChart = () => {
  // Data from the Figma design
  const data = {
    labels: ['Finished', 'Canceled', 'In progress'],
    datasets: [
      {
        data: [26, 16, 6], // Values from the chart: 26 Finished, 16 Canceled, 6 In progress
        backgroundColor: [
          '#1C365B', // Navy Blue for Finished (54%)
          '#F9BD39', // Orange for Canceled (33%)
          '#7D939F', // Gray for In progress (13%)
        ],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
            const percentage = Math.round((value / total) * 100) + '%';
            return `${label}: ${value} (${percentage})`;
          }
        }
      }
    },
    maintainAspectRatio: false,
  };

  // Calculate total for center text
  const total = data.datasets[0].data.reduce((acc, value) => acc + value, 0);

  return (
    <div className="h-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="relative h-[200px] sm:h-[229px] w-[200px] sm:w-[240px]">
        <Doughnut data={data} options={options} />
        <div className="absolute bg-white flex justify-center items-center flex-col shadow-[0px_1px_14px_0px_#0000000D] w-[100px] sm:w-[117px] h-[100px] sm:h-[117px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-xl font-semibold text-black">{total}</span>
          <span className="text-xs font-medium text-(--main-ligth-color)">Job</span>
        </div>
      </div>
      
      <div className="flex flex-row sm:flex-col justify-center gap-4 h-full">
        {data.labels.map((label, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-sm text-[#76767B]">
              {label}
            </span>
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              />
              <span className="font-semibold text-[#344054]">
                {data.datasets[0].data[index]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunctionalitiesChart; 