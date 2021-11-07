import React from 'react';
import Navbar from '../../../Navbar/Navbar/Navbar';
import TopBar from '../../../TopBar/TopBar';
import { DashboardContainer } from '../../Style/AddSuperAdminStyle';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';
import TopbarSuperAdminDashboard from '../../Topbar-SuperAdminDashboard/TopbarSuperAdminDashboard';
import DataTable from '../DataTable';
import {User} from '../TableData'

const CustomerSuperAdminDashboard = () => {
    return (
        <div className=" ">
        <TopBar/>
        <Navbar/>
        <DashboardContainer>
            <SuperAdminSidebar/>

            <div className="md:w-5/6 w-full h-screen scrollBar">
                <TopbarSuperAdminDashboard/>
                    <h1 className="mt-3 text-2xl font-bold text-gray-900 m-2 border-l-2 border-red-600 pl-2 tracking-tighter ">All Customer Details</h1>
                    <DataTable Data={User} />
                </div>
            </DashboardContainer>
        </div>
    );
};

export default CustomerSuperAdminDashboard;