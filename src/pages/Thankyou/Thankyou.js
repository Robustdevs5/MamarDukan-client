import React from 'react';
import Footer from '../../Components/Footer/Footer';
import FooterCatagory from '../../Components/Footer/FooterCatagory';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';
import CustomerInfo from './CustomerInfo';
import Orderinfo from './Orderinfo';

const Thankyou = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <div className="w-screen h-auto flex mb-32 mt-8">
                <div className="w-3/5 m-2  border-r-2 border-black ">
                    <CustomerInfo />
                </div>
                <div className="w-2/5 m-6 ">
                    <Orderinfo />
                </div>
            </div>
            <FooterCatagory />
            <Footer />
        </div>
    );
};

export default Thankyou;