import React from 'react';
import SuperAdminSidebar from '../../../SuperAdminSidebar/SuperAdminSidebar';
import Allorder from './Allorder';
import SearchInvoice from './SearchInvoice';

const OrderReview = () => {
    return (
        <div className=" bg-gray-800 ">
            <div className="flex flex-wrap">
                <SuperAdminSidebar />
                <div className="sm:w-4/5 w-screen mx-auto flex">
                    <div className="">
                        <Allorder />
                    </div>
                    {/* <div className="">
                        <SearchInvo\
                        
                        ice />
                    </div> */}

                    <h1> Tamal</h1>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;