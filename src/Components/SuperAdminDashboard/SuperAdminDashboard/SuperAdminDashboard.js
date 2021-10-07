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

const SuperAdminDashboard = () => {
    return (
        <div className=" bg-gray-300 ">
        {/* <div className="w-screen h-20 p-6">
            <Logo />
        </div> */}
        <div className="flex flex-wrap">
            <SuperAdminSidebar/>

            <div className="w-9/12">
                <TopbarSuperAdminDashboard/>
                <h1 className="mt-5 text-2xl font-bold  m-2 border-l-4 tracking-tight border-red-600 pl-2 w-52 bg-gray-200">
                    Sales   
                </h1>
                <div className="w-full font-medium grid grid-cols-2 md:grid-cols-4 mx-4 mt-5 tracking-tight text-white">
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

                <div className="w-full font-medium grid grid-cols-2 md:grid-cols-2 mx-4 mt-5 tracking-tight text-white " >
                    <div className="p-5">
                        <div className='flex items-center justify-between py-2 px-5 bg-gray-800 shadow-lg'>
                           
                            <BarChart/>
                            {/* <BarChart/> */}
                        </div>
                    </div>
                    <div className="p-5 h-80">
                        <div className='py-2 px-5 shadow-lg bg-gray-50 h-full flex items-center'>
                           
                            <BarCharts/>
                            {/* <PieChart/> */}
                        </div>
                    </div>
                </div>

                <div className="w-full font-medium grid grid-cols-1 md:grid-cols-1 mx-4 mt-5 tracking-tight text-white " >
                    <div className="p-5 h-80">
                        <div className='py-2 px-5 shadow-lg bg-gray-50 h-full'>
                           
                            <PieChart/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
};

export default SuperAdminDashboard;