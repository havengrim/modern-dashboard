// components/BarChartGrowth.tsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Growth',
      data: [400, 300, 200, 278, 189, 239, 349, 200, 300, 400, 500, 600],
      backgroundColor: '#ECEEFB', // Light purple color
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, 
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Growth from Jan to Dec',
    },
  },
};

const BarChartGrowth = () => {
  return (
    <div className="w-full sm:w-full md:w-full h-[300px] sm:h-[400px] lg:h-[300px]">
        <div className='w-full flex gap-10 pb-6 '>
            <div className='flex flex-col'>
                <span className='text-base'>Total Customers</span>
                <span className='font-bold text-gray-800 text-xl'>345,678</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-base'>New User</span>
                <span className='font-bold text-gray-800 text-xl'>345,678</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-base'>Growth</span>
                <span className='font-bold text-gray-800 text-xl'>+10%</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-base'>Period</span>
                <span className='font-bold text-gray-800 text-xl'>Month</span>
            </div>
        </div>
        <hr />
    <Bar data={data} options={options} />
  </div>
  );
};

export default BarChartGrowth;
