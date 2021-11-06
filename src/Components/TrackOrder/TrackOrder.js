import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar/Navbar';
import TopBar from '../TopBar/TopBar';
import '../Authentication/SignIn/SignIn.css';
import OrderModal from '../UserDashboard/Onclick Page/OrderModal/Modal/OrderModal';
import ConfirmOrder from '../../pages/ConfirmOrder/ConfirmOrder';



const TrackOrder = () => {

   
    const {Data , setData} =useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    
    }
    const input = document.getElementById('order').value

    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/orders/${input}`)
        .then (res => res.json())
        .then (data => setData(data.orders))
    }, [])
    console.log('TrackOrder' , input)


    

    

    
    


    return (
        <>
            <TopBar />
            <Navbar />

            <div className="form-card">
                <form onSubmit={handleSubmit}>

                    <div className="pb-10">
                        <h3 className="text-2xl text-gray-800">Order tracking</h3>
                        <p className="text-sm py-1 text-gray-500">Tracking your order status</p>
                    </div>

                    <label className="flex items-start py-2 text-gray-700">Order ID*</label>
                    <input id="order" type="text" name="orderId" className="form-control"  placeholder="Order ID" required />

                    <input type="submit" value="Submit" className="submit-button btn" />

                </form>
                    
            </div>

            {Data && <ConfirmOrder /> }

            <ToastContainer />
            <Footer />
        </>
    );
};

export default TrackOrder;
