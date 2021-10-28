import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import CustomerDetail from './CustomerDetails';
import '../../Components/StyledComponent/Global.css'

const CustomerInfo = () => {
    return (
        <div className="">
            <div className="flex m-6" >
                <div className="w-14 h-14 text-6xl rounded-full bg-green-200"><FcCheckmark className="w-full h-full p-2" /></div>
                <div className="w-11/12">
                <h1 className="text-2xl ml-2">Your Order is placed successfully</h1>
                <h4 className="text-xl ml-2"> your order is confirmed</h4>
                </div>
            </div>
            <div className="m-4" >
                <CustomerDetail />
            </div>
            <div className="ml-8" >
                <button className="primary_BTN p-2">Continue shipping</button>
                <button className="primary_BTN_Outline p-2 ml-16">Print</button>
            </div>
        </div>
    );
};

export default CustomerInfo;