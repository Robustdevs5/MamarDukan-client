import React from 'react';
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const BottomBar = () => {
    return (
        <div className="md:hidden bottom-0 left-0 bg-custom right-0 fixed z-50 flex justify-center items-center w-full">
            <div className="relative flex-1 items-center flex justify-center">
                <button className="w-10 h-10">
                    <AiOutlineHome size={30}></AiOutlineHome>
                </button>
            </div>
            <div className="relative flex-1 items-center flex justify-center">
                <button className="w-10 h-10">
                    <AiOutlineHeart size={30}></AiOutlineHeart>
                </button>
                <strong className="absolute top-0 text-gray-100 -ml-2 -mt-6 bg-red-600 rounded-full px-1">
                    2
                </strong>
            </div>
            <div className="relative flex-1 items-center flex justify-center">
                <button className="w-10 h-10">
                    <FaChartBar size={30}></FaChartBar>
                </button>
                <strong className="absolute top-0 text-gray-100 -ml-2 -mt-6 bg-red-600 rounded-full px-1">
                    2
                </strong>
            </div>
            <div className="relative flex-1 items-center flex justify-center">
                <button className="w-10 h-10">
                    <MdShoppingCart size={30}></MdShoppingCart>
                </button>
                <strong className="absolute text-gray-100 top-0 -mt-6 bg-red-600 rounded-full px-1">
                    2
                </strong>
            </div>
        </div> 
);
};

export default BottomBar;