import React, { useEffect, useState } from 'react';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';
import AllProduct from './AllProduct';

const AllProductsSuperAdminDashboard = () => {
    const [Product , setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
        .then (res => res.json())
        .then (data => setProduct(data.products))
    }, [])
    return (
    <div className=" bg-gray-800 ">
        <div className="flex flex-wrap">
            <SuperAdminSidebar/>
            <div className="sm:w-4/5 w-screen mx-auto">
               <AllProduct Data={Product} />
            </div>
        </div>
    </div>
    );
};

export default AllProductsSuperAdminDashboard;