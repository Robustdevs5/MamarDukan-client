import React from 'react';
import SuperAdminSidebar from '../SuperAdminSidebar/SuperAdminSidebar';
import AddProductFrom from './AddProductFrom';

const AddProduct = () => {
    return (
    <div className=" bg-gray-800 ">
        <div className="flex flex-wrap">
            <SuperAdminSidebar/>
            <div className="sm:w-4/5 w-screen mx-auto">
                <AddProductFrom />
            </div>
        </div>
    </div>
    );
};

export default AddProduct;