
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


const data = [
  { id: 0, value: 10, label: 'Gaming' },
  { id: 1, value: 35, label: 'Electronics' },
  { id: 3, value: 20, label: 'Auto-Moto' },
  { id: 4, value: 15, label: 'Fashion' },
  { id: 5, value: 20, label: 'Sport' },  
];
const Chartt = () => {
  return (
    <div>
        <h3>Stats By Category</h3>
      <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
    </div>
  )
}

export default Chartt
