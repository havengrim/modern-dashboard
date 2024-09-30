import { Line } from 'react-chartjs-2';
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

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [120, 190, 30, 50, 200, 130],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.4, // Smooth curves
        pointRadius: 4, // Adjust point size
        pointHoverRadius: 6, // Hover effect for points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows flexibility in height
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          autoSkip: true, // Automatically skip labels on small screens
          maxTicksLimit: 6, // Limit number of ticks to prevent crowding
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          autoSkip: true,
          maxTicksLimit: 5, // Limit number of ticks for y-axis
        },
      },
    },
  };

  return (
    <div className='w-full h-[400px] sm:h-[400px] md:h-[450px] lg:h-[380px] min-h-[300px] max-w-full lg:max-w-full mx-auto'> 
      <Line data={data} options={options} className='!h-full !w-full' />
    </div>
  );
};

export default LineChart;
