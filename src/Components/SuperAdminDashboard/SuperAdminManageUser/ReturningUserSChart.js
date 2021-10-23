
import React from 'react'
import { Pie, defaults, Bar } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const ReturningUserSChart = () => {
  return (
      <Pie
        data={{
            labels: ["Returning Users", "New Users"],
            datasets: [
            {
            //   label: 'Returning UserS',
              data: [55,33],
              backgroundColor: "#6ED3FF",
              borderColor:"#6ED3FF",
              borderWidth: 1,
            },
            // {
            //   label: 'New Users',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: '#1497FF',
            // //   borderColor: 'red',
            // },
            
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: 
              {
                ticks: {
                  // beginAtZero: true,
                  callback: function(value, index, values) {
                    return value + "K";
                  }
                },
                grid: {
                  borderColor: '#6ED3FF',
                  borderWidth: 2,
                  drawBorder: true,
                  
                }
                
              },
            x: 
              {
                grid: {
                  borderColor: '#6ED3FF',
                  borderWidth: 2,
                  drawBorder: true,
                  drawOnChartArea:false,
                }
              },
            
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
  )
}

export default ReturningUserSChart;