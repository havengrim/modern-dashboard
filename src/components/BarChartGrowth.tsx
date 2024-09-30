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
      backgroundColor: '#3B82F6', // Light blue color
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
    <div className="w-[75vw] sm:w-full md:w-auto h-auto">
      <div className='grid sm:grid-cols-4 grid-cols-2'>
        <div className='flex flex-col'>
          <span className='text-sm'>Total Customers</span>
          <span className='text-base font-bold text-gray-800 dark:text-foreground'>3,022</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm'>New Users</span>
          <span className='text-base font-bold text-gray-800 dark:text-foreground'>1,500</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm'>Growth</span>
          <span className='text-base font-bold text-gray-800 dark:text-foreground'>20%</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm'>Total Revenue</span>
          <span className='text-base font-bold text-gray-800 dark:text-foreground'>$50,000</span>
        </div>
      </div>
      <div className="h-[300px] sm:h-[400px] lg:h-[500px] mt-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChartGrowth;
