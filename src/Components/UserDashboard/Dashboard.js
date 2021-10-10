import React from 'react';
import TopBar from '../TopBar/TopBar';
import Navbar from '../Navbar/Navbar/Navbar';
import FooterCatagory from '../Footer/FooterCatagory';
import Footer from '../Footer/Footer';
import Sidebar from './Sidebar';

const Dashboard = () => {
    
    return (
        <div>
            <TopBar />
            <Navbar />
            <Sidebar />
            <FooterCatagory />
            <Footer />
        </div>
    );
};

export default Dashboard;