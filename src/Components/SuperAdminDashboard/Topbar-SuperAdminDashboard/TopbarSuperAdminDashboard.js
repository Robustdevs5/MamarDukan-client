import React from 'react';
import { MdNotificationsActive } from "react-icons/md";
import {FcSms } from 'react-icons/fc';
import {ImSearch} from 'react-icons/im';


const TopbarSuperAdminDashboard = () => {
    return (
        <div className=" bg-white w-screen py-3 shadow">
            <div className="flex flex-wrap mr-10 pr-5 items-center justify-evenly">

                <form action="" className="  flex">
                    <input
                        type="text"
                        placeholder="Search"
                        className="ml-2 rounded-l-full w-60 py-2 px-2 sm:px-5 text-gray-900 leading-tight outline-none border-none"
                    />
                   
                    <button type="submit" className='text-2xl m-0 font-lg sm:mr-2 cursor-pointer text-white rounded-r-2xl focus:outline-none w-16 flex items-center justify-center  bg-red-600 hover:bg-red-800  py-2'>
                        <ImSearch className="" />
                    </button>
                </form>


                <div className="flex md:mt-0 mt-4">
                    <div className="flex items-center border rounded-full border-red-300 py-1 px-2">
                        <img src="https://simgbb.com/avatar/wNhFXn8SYdNf.png" alt="placeholder" className='h-8 rounded-full mr-2' />
                        <strong>Juned Ahmed</strong>
                    </div>
                    <div className="flex">
                        
                        <div className=' mx-3 justify-center items-center flex'>
                            <button href="#" className="w-8 h-8 border rounded-full  border-gray-400 items-center flex justify-center">
                                <FcSms/>
                            </button>
                            <strong className="text-gray-800 -ml-2 -mt-6 bg-yellow-300 rounded-full px-1">22</strong>
                        </div>
                        <div className=' mx-3 justify-center items-center flex'>
                            <button href="#" className="w-8 h-8 border rounded-full  border-gray-400 items-center flex justify-center">
                                <MdNotificationsActive/>
                            </button>
                            <strong className="text-gray-800 -ml-2 -mt-6 bg-yellow-300 rounded-full px-1">88</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopbarSuperAdminDashboard;