import React from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ComparisonChild = () => {
  const data = {
    labels: ['بعد الولادة ', 'الشهر الاول', 'الشهر الثاني', 'الشهر الرابع', 'الشهر السادس', 'الشهر الاثنا عشر', 'الشهر الثامن عشر'],
    datasets: [
      {
        label: 'Child A',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Child B',
        data: [45, 49, 60, 71, 46, 35, 30],
        fill: false,
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div style={{ width: '600px', margin: '0 auto', padding: '20px' }}>
        <h2>Comparison of Children's Data</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ComparisonChild;