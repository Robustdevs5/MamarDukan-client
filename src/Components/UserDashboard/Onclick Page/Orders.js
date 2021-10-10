import React from 'react';
import {OrderDetails} from './OrderAPI';

const Orders = () => {
    return (
        <div>
            <h1>Orders</h1>
                <div className="tableheader">
                    <div className="header bg-gray-300">
                        <h1 className="w-1/5 mx-auto p-4 text-center">Picture</h1>
                        <h1 className="w-1/5 mx-auto p-4 text-center">Name</h1>
                        <h1 className="w-1/5 mx-auto p-4 text-center">Price</h1>
                        <h1 className="w-1/5 mx-auto p-4 text-center">quantity</h1>
                    </div>
                    {
                        OrderDetails.map((item, index) => <div className="bg-green-50 mt-2 " key={index} item={item}>
                        <h1 className="w-1/5 mx-auto my-auto text-center"> {item.ID}</h1>
                        <p className='w-1/5 mx-auto my-auto text-center'>{item.Date}</p>
                        <p className='w-1/5 mx-auto my-auto text-center'>{item.Price}</p>
                        <p className='w-1/5 mx-auto my-auto text-center'>{item.Status}</p>
                        </div>)
                    }
                </div>
        </div>
    );
};

export default Orders;