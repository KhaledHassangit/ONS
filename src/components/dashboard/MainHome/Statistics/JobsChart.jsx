import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const JobsChart = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Finished',
        data: [10, 22, 15, 25, 30, 15, 18, 22, 35, 25, 20, 15],
        borderColor: '#1C365B',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'Canceled',
        data: [5, 15, 10, 15, 20, 10, 12, 28, 18, 16, 12, 8],
        borderColor: "#f59331",
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'In Progress',
        data: [8, 10, 18, 12, 14, 22, 8, 16, 20, 14, 10, 6],
        borderColor: '#7D939F',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 0,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
          color: '#76767B',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        ticks: {
          color: '#76767B',
        },
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
  };

  // Sample data for statistics display
  const statistics = [
    { color: '#1C365B', status: 'Finished', value: 24, label: <span className="font-medium text-sm text-green-500">✓</span> },
    { color: '#F9BD39', status: 'Canceled', value: 16, label: <span className="font-medium text-sm text-red-500">✗</span> },
    { color: '#7D939F', status: 'In progress', value: 6, label: <span className="font-medium text-sm">•</span> },
  ];

  return (
    <div className="bg-white  shadow-[0px_4px_24px_0px_#0000000F] p-4 rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-xl font-semibold text-(--main-dark-color) mb-2 sm:mb-0">Jobs for 2025</h2>
        
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {statistics.map((stat, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stat.color }}></div>
              <span className="text-xs text-[#76767B]">{stat.status}</span>
              <span className="text-xs font-medium">{stat.value} {stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative h-[220px]">
        <Line data={data} options={options} />
        
        {/* Sample "In Progress" indicator overlay - only show on larger screens */}
        <div className="absolute top-[70px] min-w-[100px] left-[250px] bg-(--main-orange-color) p-2 rounded-md hidden lg:block">
          <div className="bg-(--main-orange-color) min-w-[64px] flex flex-col text-white px-3 py-1 rounded-md text-sm">
            <span className='text-[10px] font-normal'>In progress</span>
            <div className="text-sm font-semibold">13</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsChart; 