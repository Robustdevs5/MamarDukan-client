import React from 'react';
import SuperAdminSidebar from '../SuperAdminSidebar/SuperAdminSidebar';


const Report = () => {
    return (
        <div className="flex bg-gray-400">
            <SuperAdminSidebar />
            <div className="w-1/4 h-4/5 rounded-lg bg-white p-3 m-2 font-bold">
            <h1>Sales Activity</h1>
            </div>

            <div className="w-1/4 h-4/5 rounded-lg bg-white p-3 m-2 font-bold">
            <h1>Activity</h1>
            </div>

            <div className="w-2/4 h-4/5 rounded-lg bg-white p-3 m-2 font-bold">
            <h1>Others</h1>
            </div>
        </div>
    );
};

export default Report;