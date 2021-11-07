import React from 'react';
import Navbar from '../../Navbar/Navbar/Navbar';
import TopBar from '../../TopBar/TopBar';
import { DashboardContainer } from '../Style/AddSuperAdminStyle';
import SuperAdminSidebar from '../SuperAdminSidebar/SuperAdminSidebar';
import TopbarSuperAdminDashboard from '../Topbar-SuperAdminDashboard/TopbarSuperAdminDashboard';


const Report = () => {
    return (
        <div className=" ">
            <TopBar/>
            <Navbar/>
            <DashboardContainer>
                <SuperAdminSidebar/>

                <div className="md:w-5/6 w-full h-screen scrollBar">
                    <TopbarSuperAdminDashboard/>
                    <div className='flex items-center justify-between pt-2 pb-14 px-5 shadow-lg' >
                        <div className=" h-4/5 rounded-lg bg-white p-3 m-2 font-bold">
                        <h1>Sales Activity</h1>
                        </div>

                        <div className="h-4/5 rounded-lg bg-white p-3 m-2 font-bold">
                        <h1>Activity</h1>
                        </div>

                        <div className=" h-4/5 rounded-lg bg-white p-3 m-2 font-bold">
                        <h1>Others</h1>
                        </div>
                    </div>
                </div>
            </DashboardContainer>    
        </div>
    );
};

export default Report;