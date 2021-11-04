import React, { useEffect, useState } from "react";
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

const calculateTimeLeft = () => {
    let year = 2022;
    let difference = +new Date(`10/01/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;

}

const Sliders = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

        useEffect(() => {
            const timer=setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
            }, 1000);
            // Clear timeout if the component is unmounted
            return () => clearTimeout(timer);
        });


        const timerComponents = [];

        console.log('time', timeLeft.days)
            Object.keys(timeLeft).forEach((interval) => {
            if (!timeLeft[interval]) {
                return;
            }

            timerComponents.push(
                <span>
                    {timeLeft[interval]} {interval}{" "}
                </span>
            );
            });

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
        
        <>
         <div className="w-full flex justify-center items-center my-2">
            <div className="w-full md:w-1/4 bg-white p-4 text-center md:text-right border-r-4 border-gray-400">
                <h2 className="text-gray-800 text-4xl font-bold items-center pr-4 uppercase">Flash Sale</h2>
            </div>
            <div className="w-full md:w-2/4 items-center justify-center">
                
                <div className="flex mt-2 text-center text-gray-800 ">
                    <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900"> Sales Ends in</h4>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold items-center uppercase">{timeLeft.days}</h4>
                        <p className="text-md font-semibold text-gray-600">Days</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold items-center uppercase">{timeLeft.hours}</h4>
                        <p className="text-md font-semibold text-gray-600">Hours</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold items-center uppercase">{timeLeft.minutes}</h4>
                        <p className="text-md font-semibold text-gray-600">Mins</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold items-center uppercase">{timeLeft.seconds}</h4>
                        <p className="text-md font-semibold text-gray-600">Sec</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/4 text-center">
                <button className="primary_BTN font-bold py-3 px-6 rounded-full"><Link to="/shop">Shop Now</Link></button>
            </div>
        </div>   
        <div className="mx-2 xs:grid-cols-1 md:grid grid-cols-3 gap-2 slider">
            
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
        </>
    );
};

export default Sliders;
