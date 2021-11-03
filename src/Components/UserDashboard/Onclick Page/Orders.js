import React, { useEffect, useState } from 'react';
import OrderTable from './OrderTable';
import RecentOrders from './RecentOrders';
import ShipingInfo from './ShipingInfo';

const Orders = () => {
    const [ord , setOrd] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
        .then (res => res.json())
        .then (data => setOrd(data.orders))
    }, [])

    console.log("order 1" , ord)
    const [OrderID , setOrderID] = useState("")
    console.log("id id" , OrderID)

    
    return (
        <div>
            {/* <div className="flex h-96 ">
                {/* <div className="left h-2/2 w-2/5 my-7 mx-3 bg-gray-300">
                    <ShipingInfo OrderID={OrderID} />
                </div> */}
                {/* <div className="right h-2/2 w-3/5 my-7 mx-3 bg-gray-300">
                    <OrderTable setOrderID={setOrderID} ord={ord} />
                </div> */}
            {/* </div> */} 
            <div className="">
                <RecentOrders setOrderID={setOrderID} ord={ord} />
            </div>
        </div>
    );
};

export default Orders;