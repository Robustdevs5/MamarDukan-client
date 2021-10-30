import React from 'react';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';
import DataTable from '../DataTable';
import {Vendor} from '../TableData';

const VendorSuperAdminDashboard = () => {
    return (
    <div className=" bg-gray-800 ">
        <div className="flex flex-wrap">
            <SuperAdminSidebar />
            <div className="sm:w-4/5 w-screen mx-auto">
                <h1 className="mt-3 text-2xl font-bold text-white m-2 ">All Vendor Details</h1>
                <DataTable Data={Vendor} />
            </div>
        </div>
    </div>
    );
};

export default VendorSuperAdminDashboard;