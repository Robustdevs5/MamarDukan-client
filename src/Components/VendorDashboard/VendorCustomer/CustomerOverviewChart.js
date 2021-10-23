import React from 'react';
import { Bar } from 'react-chartjs-2';

const barData = {
    
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "New Customer",
        data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
          ],
          borderWidth: 1
      },
      {
        label: "Return Customer",
        data: [53, 23, 45, 61, 34, 35, 53, 23, 45, 61, 34, 35],
        backgroundColor: [
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
      }
    ]
  };

const CustomerOverviewChart = () => {
    return (
        <div>
            <Bar 
            data={barData}
            width={10}
            height={5}
            options={{maintainAspectRatio: false}}
            />
        </div>
    );
};

export default CustomerOverviewChart;