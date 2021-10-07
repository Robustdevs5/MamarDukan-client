import React from 'react';
import { service } from './CustomerServiceData';
import TopBar from "../TopBar/TopBar";
import Navbar from "../Navbar/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';


const CustomerService = () => {

    return (
        <div>
            <TopBar />
            <Navbar />

            <h1 className="px-48 pt-8 pb-6 text-3xl">Hello. What can we help you with?</h1>
            <hr />
            <div>
                <h1 className="px-48 pt-8 pb-2 text-2xl">Things you can do here</h1>
                <div className="mb-16">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 px-40 pt-5 mb-8">
                        {
                            service.map(service =>
                                <Link to={service.path}>
                                    <div className="cursor-pointer border rounded-full p-4 bg-blue-200 hover:bg-blue-400">
                                        <div className="flex">
                                            <div className="w-16 h-16 mx-3">
                                                <img
                                                    className="rounded-full w-full h-full"
                                                    src={service.img} alt=""
                                                />
                                            </div>
                                            <div>
                                                <h3 className="hover:text-yellow-700">{service.title}</h3>
                                                <p className="text-gray-700 text-sm">{service.details}</p>
                                                <p className="text-gray-700 text-sm">{service.details2}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }

                    </div>
                    <hr />
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default CustomerService;
