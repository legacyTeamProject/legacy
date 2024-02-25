import React from 'react';
import { Bar } from 'react-chartjs-2';

const Charts: React.FC = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["A", "B", "C"],
          datasets: [
            {
              label: "Revenue",
              data: [200, 400, 600],
            },
            {
              label: "Loss",
              data: [60, 80, 70],
            },
          ],
        }}
      />
    </div>
  );
};

export default Charts;
