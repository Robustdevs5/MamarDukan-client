import React from 'react';
import Logo from '../../Navbar/Logo/Logo';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminPanel = () => {

    return (
        <>
            <div className="w-screen h-20 p-6 bg-gray-800">
                <Logo />
            </div>
            <AdminSidebar />
        </>
    );
};

export default AdminPanel;
