import React from 'react'
import { Pie, defaults, Bar } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const PieChart = () => {
  return (
      <Bar
        data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
            {
              label: 'Views',
              data: [12, 19, 13, 15, 20, 33],
              backgroundColor: "#6ED3FF",
              borderColor:"#6ED3FF",
              borderWidth: 1,
            },
            {
              label: 'Clicks',
              data: [47, 52, 67, 58, 9, 50],
              backgroundColor: '#1497FF',
            //   borderColor: 'red',
            },
            
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

export default PieChart