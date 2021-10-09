import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const BarChart = () => {
  return (
      <Line
        data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
            {
              label: 'Total Customers',
              data: [12, 19, 3, 5, 2, 3],
              fill: true,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            {
              label: 'Total Orders',
              data: [47, 52, 67, 58, 9, 50],
              backgroundColor: 'orange',
              borderColor: 'red',
              borderWidth: 1,
            },
            {
                label: "Total Revenue",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
              },
              {
                label: "Product Sold",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774",
                borderWidth: 1,
              }
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function(value, index, values) {
                    return value + "K";
                  }
                }
              }
            ]
          },
          title: {
            display: true,
            text: "Visit with & without Seasonal Impacts",
            fontSize: 20
          },
          legend: {
            display: true,
            position: "bottom"
          },
        }}
      />
  )
}

export default BarChart