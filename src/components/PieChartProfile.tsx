import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Male', 'Female', 'Other'],
  datasets: [
    {
      label: 'User Profiles',
      data: [500, 300, 50], // Sample data for Male, Female, and Other
      backgroundColor: ['#3B82F6', '#EF4444', '#10B981'], // Colors for Male, Female, Other
      hoverOffset: 4,
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
    tooltip: {
      enabled: true,
    },
  },
};

const PieChartProfile = () => {
  return (
    <div className="w-full h-[400px] sm:h-[400px] md:h-[450px] lg:h-[380px] min-h-[300px] max-w-full lg:max-w-[600px] mx-auto">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartProfile;
