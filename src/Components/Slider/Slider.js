import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import p1 from '../../Images/promotion-1.jpg';
import p2 from '../../Images/promotion-2.jpg';
import slider1 from '../../Images/slider-11.jpg';
import slider2 from '../../Images/slider-12.jpg';
import slider3 from '../../Images/slider-13.jpg';
import '../StyledComponent/Global.css';

const Sliders = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        fade: true
    };
    return (
        <div className="mx-2 xs:grid-cols-1 md:grid grid-cols-3 gap-2 slider pt-4">
            <div class="md:col-span-2 slider-blog">
                <Slider {...settings}>
                    <div className="sin-slider-blog cursor-pointer">
                        <div className="slider-blog-img">
                            <img src={slider1} alt="Slider Avatar" />
                        </div>
                        <div className="slider-blog-content">
                            <h2>Welcome To Mamar Dukan</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deserunt!</p>
                            <button className="bg-yellow-500 hover:bg-blue-700 text-gray-800 hover:text-blue-50 font-bold py-3 px-6 rounded-full">Shop Now</button>
                        </div>
                    </div>
                    <div className="sin-slider-blog cursor-pointer">
                        <div className="slider-blog-img">
                            <img src={slider2} alt="Slider Avatar" />
                        </div>
                        <div className="slider-blog-content">
                            <h2>Welcome To Mamar Dukan</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deserunt!</p>
                            <button className="bg-yellow-500 hover:bg-blue-700 text-gray-800 hover:text-blue-50 font-bold py-3 px-6 rounded-full">Shop Now</button>
                        </div>
                    </div>
                    <div className="sin-slider-blog cursor-pointer">
                        <div className="slider-blog-img">
                            <img src={slider3} alt="Slider Avatar" />
                        </div>
                        <div className="slider-blog-content">
                            <h2>Welcome To Mamar Dukan</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deserunt!</p>
                            <button className="bg-yellow-500 hover:bg-blue-700 text-gray-800 hover:text-blue-50 font-bold py-3 px-6 rounded-full">Shop Now</button>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="promotion-post">
                <div className="pb-2">
                    <a href=" "><img src={p1} alt="Promotion banner" /></a>
                </div>
                <div>
                    <a href=" "><img src={p2} alt="Promotion banner" /></a>
                </div>
            </div>
        </div>
    );
};

export default Sliders;
