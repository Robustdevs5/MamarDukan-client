import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';
import OrderInfo from './OrderInfo';
import OrderInvoice from './OrderInvoice';

const Thankyou = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <div className="w-screen h-auto flex mb-32 mt-8">
                <div className="w-3/5 m-2  border-r-2 border-black ">
                    <OrderInfo />
                </div>
                <div className="w-2/5 m-6 ">
                    <OrderInvoice />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Thankyou;