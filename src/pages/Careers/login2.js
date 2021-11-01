import React from 'react';
import { Link } from 'react-router-dom';
import loginsvg from '../../images/Mobile-login-bro.svg';

const Login2 = () => {
  return (
    <>
    <div className="bg-white font-open-sans">
    <div className="container mx-auto px-8 py-8 lg:py-40 relative flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <h1 className="text-center lg:text-left text-3xl sm:text-5xl font-light primary_color leading-tight mb-4">Our recruiting strategy <strong className="font-gray-900 text-3xl sm:text-4xl block">hit your hiring plan</strong></h1>
            <p className="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">You must be able to convey information via phone, email, and in person. You want to make sure your tone is always professional but friendly.</p>
            <button className="primary_BTN mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase tracking-widest"><Link to="/contact">Apply Now</Link></button>
            <div className="mt-16 lg:mt-24 flex">
                <span className="w-12 h-1 mx-1 bg-red-500"></span>
                <span className="w-12 h-1 mx-1 bg-red-400"></span>
                <span className="w-12 h-1 mx-1 bg-red-300"></span>
            </div>
        </div>
        <div className="w-full sm:w-2/3 lg:absolute top-0 right-0 bottom-0 mt-16 lg:mr-8">
            <img src={loginsvg} alt="lioigiiin" />
        </div>
    </div>
        </div>
    </>
    );
};

export default Login2;