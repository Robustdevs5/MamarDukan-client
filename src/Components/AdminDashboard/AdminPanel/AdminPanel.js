import React, { useContext } from 'react';
import { userContext } from '../../../App';
import Logo from '../../Navbar/Logo/Logo';
import Navbar from '../../Navbar/Navbar/Navbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';



const AdminPanel = () => {

    const { user, setUser } = useContext(userContext);
    console.log(user);
    

    return (
        <>
            <Navbar />
            {/* <div className="w-screen h-20 p-6 bg-gray-800">
                <Logo />
            </div> */}
            <AdminSidebar />
        </>
    );
};

export default AdminPanel;
