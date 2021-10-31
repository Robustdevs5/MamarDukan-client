import React, { useState } from 'react';
import ShipingInfo from '../../../UserDashboard/Onclick Page/ShipingInfo';
import DeliveryDetails from './DeliveryDetails';
import DeliveryReport from './DeliveryReport';
const OrdersTable = (props) => {
    const {Data  } = props;
    const [Dropdown , setDropdown] = useState(false)
    
    return (
        <div>
            <h4 class="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">All Customers</h4>
                <section class="container mx-auto py-6 font-mono">
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th onClick={() => setDropdown(false)} class="px-4 py-3">Order ID</th>
                                <th class="px-4 py-3">Name</th>
                                <th class="px-4 py-3">Date</th>
                                <th class="px-4 py-3">Amount</th>
                                <th class="px-4 py-3">Status</th>
                            </tr>
                            </thead>
                            {
                                Data.map((item, index) => {
                                return [
                                    Dropdown ?        <tbody class="bg-white">                     
                                    <tr item={item} key={index} class="text-gray-700 m-8">
                                    <td onClick={() => Dropdown ? setDropdown(false) : setDropdown(true)} class="px-4 py-3 text-ms font-semibold border cursor-pointer">{item.ID}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Name}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Data}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Price}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Status}</td>
                                   </tr> 
                                    <tr> <DeliveryDetails className="w-40 h-40" /> </tr>
                                    </tbody>
                                    : <tbody class="bg-white">

                                    <tr item={item} key={index} class="text-gray-700 m-8">
                                    <td onClick={() => Dropdown ? setDropdown(false) : setDropdown(true)} class="px-4 py-3 text-ms font-semibold border cursor-pointer">{item.ID}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Name}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Data}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Price}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Status}</td>
                                   </tr>  </tbody>
                                ]
                                })

                            }
                           
                        </table>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default OrdersTable;