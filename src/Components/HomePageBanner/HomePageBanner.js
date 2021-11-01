import React from 'react';
import { Link } from "react-router-dom";
import bannerImg from '../../images/banner-0.png';

const HomePageBanner = () => {
    return (
        <div className="my-16 hidden md:block" style={{backgroundColor: "#dd2400"}}>
            <div className="relative container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <div className="absolute -top-16">
                            <img src={bannerImg} alt="Banner Title"/>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="text-center py-12">
                            <h2 className="font-bold text-3xl md:text-3xl lg:text-4xl font-heading text-white">Best Smart LED TV</h2>
                            <p className="font-thin text-3xl md:text-3xl lg:text-4xl font-heading text-white">Collection 2021</p>
                            <p className="text-white">Term & Condition May Applied</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="text-center py-12">
                        <Link to="/shop" className="bg-white text-gray-700 font-bold py-4 px-8 rounded">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageBanner;