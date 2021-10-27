import React from 'react';
import RecentOrders from './RecentOrders';
import ShipingInfo from './ShipingInfo';

const Orders = () => {
    return (
        <div>
            <div className="flex h-96">
                <div className="left h-2/2 w-2/5 m-7 bg-gray-300">
                    <ShipingInfo />
                </div>
                <div className="right h-2/2 w-2/5 m-7 bg-gray-300">

                </div>
            </div>
            <div className="">
                <RecentOrders />
            </div>
        </div>
    );
};

export default Orders;