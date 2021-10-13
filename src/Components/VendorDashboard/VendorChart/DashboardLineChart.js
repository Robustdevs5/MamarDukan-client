import React from 'react';
import { Line } from 'react-chartjs-2';

const DashboardLineChart = () => {
  return (
      <section className="my-10" style={{height:'300px', backgroundColor:'black'}}>
      <Line
        data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
            {
              label: 'Total Customers',
              data: [10, 20, 25, 30, 34, 43, 33, 55, 21, 74, 77, 83],
              fill: true,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#2BD195",
            },
            {
              label: 'Total Orders',
              data: [33, 53, 85, 41, 44, 65,33, 53, 85, 41, 44, 65],
              backgroundColor: "yellow",
              
              borderColor: "#1497FF",
              pointBackgroundColor: "#2BD195",
              borderWidth: 1,
              radius: 4,
              showLine: true,
            },
            {
                label: "Total Revenue",
                labelColor:"#fff",
                data: [30, 23, 45, 50, 74, 63, 23, 65, 39, 94, 85, 30],
                fill: false,
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                ],
                backgroundColor:"#fff",
                borderWidth: 1,
                pointBackgroundColor: "#2BD195",
              },
              {
                label: "Product Sold",
                data: [33, 25, 35, 45, 54,80, 76,85,36,66,20,100],
                fill: false,
                borderColor: "#2BD195",
                pointBackgroundColor: "#2BD195",
                borderWidth: 1,
                backgroundColor: "#2BD195"
              }
          ],
        }}
        height={300}
        width={500}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: 
              {
                ticks: {
                  callback: function(value, index, values) {
                    return value + "K";
                  }
                },
                grid: {
                  borderColor: '#fff',
                  borderWidth: 2,
                  drawBorder: true,
                  drawOnChartArea:false,
                  
                }
                
              },
            x: 
            {
              grid: {
                borderColor: '#fff',
                borderWidth: 2,
                drawBorder: true,
                drawOnChartArea:false,
              }
            },
            
          },
        }}
      />
      </section>
  )
}

export default DashboardLineChart;