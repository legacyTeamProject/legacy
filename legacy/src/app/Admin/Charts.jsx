import React from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar, Doughnut,Line} from 'react-chartjs-2'
const Charts = () => {
  return (
    <div>
      <Bar
      data={{
        label:["A","B","C"],
        datasets:[
{
    label:"Revenue",
    data:[200,400,600]
},
{
    label:"Loss",
    data:[60,80,70]
}
        ],
      }}>

      </Bar>
    </div>
  )
}

export default Charts
