import React from 'react';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';

const CustomerSuperAdminDashboard = () => {
    return (
        <div className=" bg-gray-800 ">
            {/* <div className="w-screen h-20 p-6">
                <Logo />
            </div> */}

            <div className="flex flex-wrap">
                <SuperAdminSidebar/>

                <div className="sm:w-3/5 w-screen mx-4">
                    <h1 className="mt-3 text-2xl font-bold text-white m-2 ">
                        Customer Super Admin Dashboard
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default CustomerSuperAdminDashboard;