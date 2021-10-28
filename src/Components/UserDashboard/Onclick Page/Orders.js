import React from 'react';
import OrderTable from './OrderTable';
import RecentOrders from './RecentOrders';
import ShipingInfo from './ShipingInfo';

const Orders = () => {
    return (
        <div>
            <div className="flex h-96 ">
                <div className="left h-2/2 w-2/5 my-7 mx-3 bg-gray-300">
                    <ShipingInfo />
                </div>
                <div className="right h-2/2 w-3/5 my-7 mx-3 bg-gray-300">
                    <OrderTable />
                </div>
            </div>
            <div className="">
                <RecentOrders />
            </div>
        </div>
    );
};

export default Orders;