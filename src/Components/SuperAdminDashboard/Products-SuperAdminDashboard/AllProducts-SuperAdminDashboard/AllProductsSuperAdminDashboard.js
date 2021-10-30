import React from 'react';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';
import AllProduct from './AllProduct';
import { Product } from './Product';

const AllProductsSuperAdminDashboard = () => {
    return (
    <div className=" bg-gray-800 ">
        <div className="flex flex-wrap">
            <SuperAdminSidebar/>
            <div className="sm:w-4/5 w-screen mx-auto">
               <AllProduct Data={Product} />
            </div>
        </div>
    </div>
    );
};

export default AllProductsSuperAdminDashboard;