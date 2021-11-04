import React, { useEffect, useState } from 'react';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';
import Review from './Review';

const ReviewSuperAdminDashboard = () => {

    const [Review1 , setReview] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
        .then (res => res.json())
        .then (data => setReview(data.orders))
    }, [])
    console.log("Review" , Review1)
    return (
        <div className=" bg-gray-800 ">
        {/* <div className="w-screen h-20 p-6">
            <Logo />
        </div> */}

        <div className="flex flex-wrap">
            <SuperAdminSidebar/>

            <div className="sm:w-4/5 w-screen mx-4">
                <Review Data={Review1}/>
            </div>
        </div>
    </div>
    );
};

export default ReviewSuperAdminDashboard;