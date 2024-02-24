import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


const UsersDetails = () => {
  return (
    <BarChart 
    series={[
      { data: [35, 44, 24, 34],label:"SeriesA" },
      { data: [51, 6, 49, 30],label:"SeriesB" },
      { data: [15, 25, 30, 50],label:"SeriesC" },
      { data: [60, 50, 15, 25],label:"SeriesD" },
    ]}
    height={240}
   
    xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
    margin={{ top: 10, bottom: 50, left: 10, right: 10 }}
    slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'right' },
          padding: 0,
        },
      }}
  />
  )
}

export default UsersDetails
