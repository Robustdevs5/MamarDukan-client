import React from 'react';
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const BottomBar = () => {
    return (
        <div className="md:hidden bottom-0 left-0 right-0 fixed z-50 flex justify-end items-center w-full">
            <div className="">
                <button className="w-10 h-10 items-center flex justify-center">
                    <AiOutlineHome size={30}></AiOutlineHome>
                </button>
            </div>
            <div className="">
                <button className="w-10 h-10 items-center flex justify-center">
                    <AiOutlineHeart size={30}></AiOutlineHeart>
                </button>
                <strong className="text-gray-100 -ml-2 -mt-6 bg-red-600 rounded-full px-1">
                    2
                </strong>
            </div>
            <div className="">
                <button className="w-10 h-10 items-center flex justify-center">
                    <FaChartBar size={30}></FaChartBar>
                </button>
                <strong className="text-gray-100 -ml-2 -mt-6 bg-red-600 rounded-full px-1">
                    2
                </strong>
            </div>
            <div className="">
                <button className="w-10 h-10 items-center flex justify-center">
                    <MdShoppingCart size={30}></MdShoppingCart>
                </button>
                <strong className="text-gray-100 -ml-2 -mt-6 bg-red-600 rounded-full px-1">
                    2
                </strong>
            </div>
        </div> 
);
};

export default BottomBar;