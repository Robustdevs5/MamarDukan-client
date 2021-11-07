import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';
import OrderInfo from './OrderInfo';
import OrderInvoice from './OrderInvoice';

const ConfirmOrder = () => {
    const [confirmOrder, setConfirmOrder] = useState()
    const { orderDetails } = useParams();
    console.log('id', orderDetails)
    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/orders/${orderDetails}`)
          .then(res => res.json())
          .then(data => console.log('data', data))
  
      }, [orderDetails])
  
  
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

export default ConfirmOrder;