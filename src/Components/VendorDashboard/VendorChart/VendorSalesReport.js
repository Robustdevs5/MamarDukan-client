import React from 'react';
import { Line, Pie } from "react-chartjs-2";

const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };
  const earnData = {
    labels: [
      'Income',
      'Tax',
      'Fee'
    ],
    datasets: [{
      label: 'Earn',
      data: [3000, 500, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

const VendorSalesReport = () => {
    return (
        <section className="mx-4 xs:grid-cols-1 md:grid grid-cols-4 gap-2 pt-4" style={{height:'400px'}}>
            <div className="md:col-span-3">
                <h4 class="text-3xl font-semibold text-gray-800 dark:text-gray-200">Sales Report</h4>
                <Line data={salesData} />
            </div>
            <div className="earning">
                <h4 class="text-3xl font-semibold text-gray-800 dark:text-gray-200">Earning</h4>
                <Pie data={earnData}/>
            </div>
        </section>
    );
};

export default VendorSalesReport;