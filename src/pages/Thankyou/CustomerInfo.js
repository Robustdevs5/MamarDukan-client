import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import CustomerDetail from './CustomerDetails';

const CustomerInfo = () => {
    return (
        <div className="">
            <div className="flex m-4" >
                <div className="w-2/12  font-center"><FcCheckmark /></div>
                <div className="w-10/12">
                <h1 className="">Your Order is placed successfully</h1>
                <h4 className=""> your order is confirmed</h4>
                </div>
            </div>
            <div className="m-4" >
                <CustomerDetail />
            </div>
            <div className="" >
                <button>Continue shipping</button>
            </div>
        </div>
    );
};

export default CustomerInfo;