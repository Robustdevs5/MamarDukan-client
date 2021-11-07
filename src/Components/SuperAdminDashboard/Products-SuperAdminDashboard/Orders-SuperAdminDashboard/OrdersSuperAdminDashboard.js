import React from 'react';
import { AiOutlineTeam } from 'react-icons/ai';
import { RiArrowDownSFill } from 'react-icons/ri';
import RecentOrdersSuperAdminDashboard from '../../RecentOrders -SuperAdminDashboard/RecentOrdersSuperAdminDashboard';
import { DashboardContainer } from '../../Style/AddSuperAdminStyle';
import BarCharts from './BarCharts';
import BarChart from '../../SuperAdminDashboard/BarChart';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';
import ReturningUserSChart from '../../SuperAdminManageUser/ReturningUserSChart';
import TopbarSuperAdminDashboard from '../../Topbar-SuperAdminDashboard/TopbarSuperAdminDashboard';
import Navbar from '../../../Navbar/Navbar/Navbar';
import TopBar from '../../../TopBar/TopBar';



const OrdersSuperAdminDashboard = () => {

    
    return (
        <div className=" ">
        <TopBar/>
        <Navbar/>
        <DashboardContainer>
            <SuperAdminSidebar/>

            <div className="md:w-5/6 w-full h-screen scrollBar">
                <TopbarSuperAdminDashboard/>
                <h1 className="mt-3 text-2xl font-bold text-gray-900 m-2 border-l-2 border-red-600 pl-2 tracking-tighter">
                    All orders overview
                </h1>
               
                <div className="w-full font-medium grid grid-cols-1 md:grid-cols-2 mx-4 mt-20 tracking-tight text-white " >
                  
                    <div className="p-5 h-80 ">
                       <p className=" font-bold border-l-4 tracking-tight border-red-600 p-2 " style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
                            Sales Figures
                        </p>
                        <div className='py-2 px-5 shadow-xl bg-gray-50 h-full flex items-center'>
                           
                            {/* <ReturningUserSChart/> */}
                            
                            <BarChart/>
                        </div>
                    </div>
                    <div className="p-5 h-80 ">
                       <p className=" font-bold border-l-4 tracking-tight border-red-600 p-2 " style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
                            NEW VS RETURNING USERS
                        </p>
                        <div className='py-2 px-5 shadow-xl bg-gray-50 h-full flex items-center'>
                           
                            {/* <ReturningUserSChart/> */}
                            
                            <BarCharts/>
                        </div>
                    </div>
                </div>
                    <div className='bg-gray-200'>
                        <RecentOrdersSuperAdminDashboard/>
                    </div>
            </div>
        </DashboardContainer>
    </div>
    );
};

export default OrdersSuperAdminDashboard;