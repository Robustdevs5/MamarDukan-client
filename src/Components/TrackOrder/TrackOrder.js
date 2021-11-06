import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar/Navbar';
import TopBar from '../TopBar/TopBar';
import '../Authentication/SignIn/SignIn.css';
import OrderModal from '../UserDashboard/Onclick Page/OrderModal/Modal/OrderModal';



const TrackOrder = () => {

   

    const handleSubmit = (e) => {
        const input = document.getElementById('order').value
        handleModal(input)
        e.preventDefault()


    }


    

    const [modalUpdateStatus, setModalStatus] = useState(false);
    const [modalId, setModalId] = useState(null);
    // }
    const handleModal = (item)=>{
        setModalId(item)
        setModalStatus(true);
        
    }
    


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
            {modalUpdateStatus && <OrderModal
                    setModalStatus={setModalStatus}
                    modalId={modalId} />}

            <ToastContainer />
            <Footer />
        </>
    );
};

export default TrackOrder;
