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
      backgroundColor: '#3B82F6', // Light purple color
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
    <Bar data={data} options={options} />
  </div>
  );
};

export default BarChartGrowth;