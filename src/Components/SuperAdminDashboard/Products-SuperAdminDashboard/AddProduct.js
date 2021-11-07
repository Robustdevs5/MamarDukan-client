import React from 'react';
import Navbar from '../../Navbar/Navbar/Navbar';
import TopBar from '../../TopBar/TopBar';
import { DashboardContainer } from '../Style/AddSuperAdminStyle';
import SuperAdminSidebar from '../SuperAdminSidebar/SuperAdminSidebar';
import AddProductFrom from './AddProductFrom';

const AddProduct = () => {
    return (
        <div className=" ">
        <TopBar/>
        <Navbar/>
        <DashboardContainer>
            <SuperAdminSidebar/>

            <div className="md:w-5/6 w-full h-screen scrollBar">
                <AddProductFrom />
            </div>
        </DashboardContainer>
    </div>
    );
};

export default AddProduct;