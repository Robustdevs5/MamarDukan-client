import React, { useEffect, useState } from 'react';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';
import OrdersTable from './OrdersTable';
import {Orders} from './Fakedata'

const OrdersReport = () => {

    const [Data , setData] = useState([])
    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/orders`)
        .then (res => res.json())
        .then (data => setData(data.orders))
    }, [])

    return (
        <div className=" bg-gray-800 ">
            <div className="flex flex-wrap">
                <SuperAdminSidebar />
                <div className="sm:w-4/5 w-screen mx-auto">
                    <OrdersTable Data={Data} />
                </div>
            </div>
        </div>
    );
};

export default OrdersReport;