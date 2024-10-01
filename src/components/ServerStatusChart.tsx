import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ServerStatusBarChart: React.FC = () => {
  // Data for the chart (simulating multiple server status entries)
  const data = {
    labels: Array.from({ length: 40 }, (_, index) => ` ${index + 1}`), // Time intervals
    datasets: [
      {
        label: 'Mbps',
        data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 100)), // Random Mbps values for each time interval
        backgroundColor: '#3B82F6', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1,
        barThickness: 2, // Set the thickness of the bars here
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Maintain aspect ratio for responsiveness
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Mbps',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time Intervals',
        },
      },
    },
  };

  return (
    <div className="w-[80vw] h-[30vh] sm:w-full">
      <Bar data={data} options={options} />
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4'>
        <div className='flex flex-col gap-1'>
            <span className='font-light text-sm'>Country</span>
            <span className='font-semibold text-sm text-gray-900 dark:text-gray-500'>Indonesia</span>
        </div>
        <div className='flex flex-col gap-1'>
            <span className='font-light text-sm'>Domain</span>
            <span className='font-semibold text-sm text-gray-900 dark:text-gray-500'>website.com</span>
        </div>
        <div className='flex flex-col gap-1'>
            <span className='font-light text-sm'>Speed</span>
            <span className='font-semibold text-sm text-gray-900 dark:text-gray-500'>2.0 mbps</span>
        </div>
        </div>
    </div>
  );
};

export default ServerStatusBarChart;
