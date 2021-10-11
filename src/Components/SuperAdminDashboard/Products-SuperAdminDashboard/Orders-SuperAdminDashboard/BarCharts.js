import React from 'react';
import { Bar, Line } from "react-chartjs-2";

const data = {
    labels: [
      "15-Jan",
      "15-Feb",
      "15-Mar",
      "15-Apr",
      "15-May",
      "15-Jun",
      "15-Jul",
      "15-Aug",
      "15-Sep",
      "15-Oct",
      "15-Nov",
      "15-Dec"
    ],
    datasets: [
      {
        label: "Visit",
        fill: true,
        lineTension: 0,
        backgroundColor: "rgba(131,138,133,0.4)",
        borderColor: "rgba(131,138,133,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(131,138,133,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(131,138,133,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [100, 80, 130, 125, 150, 200, 190, 210, 170, 190, 220, 200]
      },
      {
        label: "Visit Trend (No Season)",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(47,153,76,0.4)",
        borderColor: "rgba(47,153,76,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(47,153,76,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(47,153,76,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210]
      }
    ]
  };
  
  const options = {
    title: {
      display: true,
      text: "Visit with & without Seasonal Impacts",
      fontSize: 20
    },
    legend: {
      display: true,
      position: "bottom"
    },
    scales: {
      y: {
        ticks: {
          // beginAtZero: true,
          callback: function(value, index, values) {
            return value + "K";
          }
        },
        grid: {
          borderColor: 'green',
          borderWidth: 2,
          drawBorder: true,
          drawOnChartArea:false,
          
        }
        
      },
      x: {
        grid: {
          borderColor: 'green',
          borderWidth: 2,
          drawBorder: true,
          drawOnChartArea:false,
        }
      },
      
    }
  };
  

const BarCharts = () => {
    return (
        <Bar data={data} options={options} />
    );
};

export default BarCharts;