import React, { useEffect, useState } from 'react';
import Navbar from '../../../Navbar/Navbar/Navbar';
import TopBar from '../../../TopBar/TopBar';
import { DashboardContainer } from '../../Style/AddSuperAdminStyle';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';
import TopbarSuperAdminDashboard from '../../Topbar-SuperAdminDashboard/TopbarSuperAdminDashboard';
import Review from './Review';

const ReviewSuperAdminDashboard = () => {

 
    return (
        <div className=" ">
            <TopBar/>
            <Navbar/>
            <DashboardContainer>
                <SuperAdminSidebar/>

                <div className="md:w-5/6 w-full h-screen scrollBar">
                    <TopbarSuperAdminDashboard/>
                    <Review/>
                </div>
        </DashboardContainer>
    </div>
    );
};

export default ReviewSuperAdminDashboard;