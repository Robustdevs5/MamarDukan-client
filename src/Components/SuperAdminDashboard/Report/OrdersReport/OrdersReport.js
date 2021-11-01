import React from 'react';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';
import OrdersTable from './OrdersTable';
import {Orders} from './Fakedata'

const OrdersReport = () => {

    return (
        <div className=" bg-gray-800 ">
            <div className="flex flex-wrap">
                <SuperAdminSidebar />
                <div className="sm:w-4/5 w-screen mx-auto">
                    <OrdersTable Data={Orders} />
                </div>
            </div>
        </div>
    );
};

export default OrdersReport;