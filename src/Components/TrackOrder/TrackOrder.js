import React from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar/Navbar';
import TopBar from '../TopBar/TopBar';
import '../Authentication/SignIn/SignIn.css';



const TrackOrder = () => {


    const handleSubmit = (e) => {

        const orderInfo = {
            orderId: e.target.orderId.value,
            email: e.target.email.value
        };

        const userSignUp = `http://localhost:5000/`;
        fetch(userSignUp, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(async res => await res.json())
            .then(async user => {
                console.log('user10', user)
                // user ? alert(user.message) : alert("failed")
                //     if (user) {
                //         toast.success(user.message, {
                //             position: "bottom-right",
                //         });
                //     }
                //     sessionStorage.setItem('user', JSON.stringify(user));
                //     history.push('/')
                // })
                // .catch(error => {
                // alert(error.message);
                // console.log(error);
                //     toast.error(error.message, {
                //         position: "bottom-right",
                //     });
            });
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
                    <input type="text" name="orderId" className="form-control" placeholder="Order ID" required />

                    <label className="flex items-start py-2 text-gray-700">Email Address*</label>
                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />

                    <input type="submit" value="Submit" className="submit-button btn" />

                </form>
            </div>

            <ToastContainer />
            <Footer />
        </>
    );
};

export default TrackOrder;
