import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import p1 from '../../images/promotion-1.jpg';
import p2 from '../../images/promotion-2.jpg';
import slider1 from '../../images/slider-11.jpg';
import slider2 from '../../images/slider-12.jpg';
import slider3 from '../../images/slider-13.jpg';
import '../StyledComponent/Global.css';

const Sliders = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
    };
    return (
        <div className="mx-2 xs:grid-cols-1 md:grid grid-cols-3 gap-2 slider pt-4">
            <div className="md:col-span-2 slider-blog">
                <Slider {...settings}>
                    <div className="sin-slider-blog cursor-pointer">
                        <div className="slider-blog-img">
                            <img src={slider1} alt="Slider Avatar" />
                        </div>
                        <div className="slider-blog-content">
                            <h5 className="text-white font-bold pb-2 uppercase text-2xl">Top Brands</h5>
                            <h3 className="font-bold md:font-black text-white pb-5 uppercase text-5xl">New Collections</h3>                            
                            <button className="primary_BTN py-3 px-6 rounded-full"><Link to="/shop"
                            >Shop Now</Link></button>
                        </div>
                    </div>
                    <div className="sin-slider-blog cursor-pointer">
                        <div className="slider-blog-img">
                            <img src={slider2} alt="Slider Avatar" />
                        </div>
                        <div className="slider-blog-content">
                            <h5 className="text-white font-bold pb-2 uppercase text-2xl">For men & women</h5>
                            <h3 className="font-bold md:font-black text-white pb-5 uppercase text-5xl">Smart Watches</h3>
                            
                            <button className="primary_BTN font-bold py-3 px-6 rounded-full"><Link to="/shop">Shop Now</Link></button>
                        </div>
                    </div>
                    <div className="sin-slider-blog cursor-pointer">
                        <div className="slider-blog-img">
                            <img src={slider3} alt="Slider Avatar" />
                        </div>
                        <div className="slider-blog-content">
                            <h5 className="text-white font-bold pb-2 uppercase text-2xl">Winter 2021</h5>
                            <h3 className="font-bold md:font-black text-white pb-5 uppercase text-5xl">Women Fashion</h3>
                            <button className="primary_BTN font-bold py-3 px-6 rounded-full"><Link to="/shop">Shop Now</Link></button>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="promotion-post">
                <div className="pb-2">
                    <Link to="/shop"><img src={p1} alt="Promotion banner" /></Link>
                </div>
                <div>
                    <Link to="/shop"><img src={p2} alt="Promotion banner" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Sliders;
