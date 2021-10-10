import React from 'react';
import Logo from '../../Navbar/Logo/Logo';
import SuperAdminSidebar from '../SuperAdminSidebar/SuperAdminSidebar';
import TopbarSuperAdminDashboard from '../Topbar-SuperAdminDashboard/TopbarSuperAdminDashboard';
import { FiDatabase } from "react-icons/fi";
import { RiArrowUpSFill, RiArrowDownSFill , RiExchangeDollarLine} from "react-icons/ri";
import {AiOutlineTeam, AiFillTags} from "react-icons/ai";
import BarChart from './BarChart';
import PieChart from './PieChart';
import BarCharts from './BarCharts';
import FeaturesSuperAdminDashboard from '../Features-SuperAdminDashboard/FeaturesSuperAdminDashboard';

const SuperAdminDashboard = () => {
    return (
        <div className=" ">
        {/* <div className="w-screen h-20 p-6">
            <Logo />
        </div> */}
        <div className="flex flex-wrap ">
            <SuperAdminSidebar/>

            <div className="w-5/6 h-screen scrollBar">
                <TopbarSuperAdminDashboard/>
                {/* <h1 className="mt-5 text-2xl font-bold  m-2 border-l-4 tracking-tight border-red-600 pl-2 w-52 bg-gray-200">
                    Sales   
                </h1> */}
                <div className="w-full font-medium grid grid-cols-2 md:grid-cols-4 -mt-14 tracking-tight text-white">
                    <div className="p-5">
                        <div className='flex items-center justify-between py-2 px-5 shadow-lg' style={{backgroundColor: "#ff5252"}}>
                            <div>
                                <h5>Total Customers</h5>
                                <h2 className='text-2xl'>5.8 K</h2>
                                <small className='flex items-center text-red-900'> 
                                    <RiArrowDownSFill className='text-lg'/> 2.7% from last week
                                </small>
                            </div>
                            <div className=' '>
                                <AiOutlineTeam className='text-4xl'/>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className='flex items-center justify-between  py-2 px-5 shadow-lg' style={{backgroundColor: "#4680ff"}}>
                            <div>
                                <h5>Total Orders</h5>
                                <h2 className='text-2xl'>4805</h2>
                                <small className='flex items-center text-green-300'> 
                                    <RiArrowUpSFill/> 5% from last week
                                </small>
                            </div>
                            <div className=' '>
                                <FiDatabase className='text-4xl'/>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className='flex items-center justify-between py-2 px-5 shadow-lg' style={{backgroundColor: "#11c15b"}}>
                            <div>
                                <h5>Total Revenue</h5>
                                <h2 className='text-2xl '>$24K</h2>
                                <small className='flex items-center text-green-900'> 
                                    <RiArrowUpSFill/> 4.6% from last week
                                </small>
                            </div>
                            <div className=' '>
                                <RiExchangeDollarLine className=' text-4xl'/>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className='flex items-center justify-between py-2 px-5 shadow-lg' style={{backgroundColor: "#ffa21d"}}>
                            <div>
                                <h5>Product Sold</h5>
                                <h2 className='text-2xl '>6,784</h2>
                                <small className='flex items-center text-green-900'> 
                                    <RiArrowUpSFill/> 4.6% from last week
                                </small>
                            </div>
                            <div className=' '>
                                <AiFillTags className=' text-4xl'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full font-medium grid grid-cols-1 md:grid-cols-2 mx-4 mt-20 tracking-tight text-white " >
                    <div className="p-5">
                        <div className='py-2 px-5 shadow-lg' style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
                           
                            <BarCharts/>
                        </div>
                    </div>
                    <div className="p-5 h-80 ">
                       <p className=" font-bold border-l-4 tracking-tight border-red-600 p-2 " style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
                            Product Actions
                        </p>
                        <div className='py-2 px-5 shadow-xl bg-gray-50 h-full flex items-center'>
                           
                            <PieChart/>
                            
                            {/* <BarCharts/> */}
                        </div>
                    </div>
                </div>
                <FeaturesSuperAdminDashboard/>

            </div>
        </div>
    </div>
    );
};

export default SuperAdminDashboard;