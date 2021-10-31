import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';

const NotFound = () => {
  return (
    <>
    <TopBar />
    <Header />
    <Navbar />
        <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                <div className="border-t border-gray-200 text-center pt-8">
                    <h1 className="text-9xl font-bold primary_color">404</h1>
                    <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                    <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                    <button className="primary_BTN font-semibold px-6 py-3 rounded-md mr-6">
                    <Link to="/">HOME</Link> 
                    </button>
                    <button className="primary_BTN_Outline font-semibold px-6 py-3 rounded-md">
                    <Link to="/contact">Contact Us</Link>
                    </button>
                </div>
            </div>
        </div>
    <Footer />
    </>
    );
};

export default NotFound;