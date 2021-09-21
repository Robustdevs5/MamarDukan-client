<<<<<<< HEAD
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slider1 from '../../Images/slider-1.jpg';
import slider2 from '../../Images/slider-2.jpg';
import slider3 from '../../Images/slider-3.jpg';
import '../StyledComponent/Global.css';

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1
    };
    return (
        <div className="container mx-auto slider">
            <div class="md:col-span-2 slider-blog">
                <Slider {...settings}>
                    <div className="sin-slider-blog cursor-pointer">
                        <div className="slider-blog-img">                   
                            <img src={slider1} alt="Slider Avatar"/>
                        </div>
                        <div className="slider-blog-content">
                            <h2>Hello World</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deserunt!</p>
                        </div>
                    </div>
                    <div className="sin-slider-blog cursor-pointer">
                        <div className="slider-blog-img">                   
                            <img src={slider2} alt="Slider Avatar"/>
                        </div>
                        <div className="slider-blog-content">
                            <h2>Hello World</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deserunt!</p>
                        </div>
                    </div>
                    <div className="sin-slider-blog cursor-pointer">
                        <div className="slider-blog-img">                   
                            <img src={slider3} alt="Slider Avatar"/>
                        </div>
                        <div className="slider-blog-content">
                            <h2>Hello World</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deserunt!</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Sliders;
=======
import React from "react";

const Slider = () => {
  return (
    <div>
      
    </div>
  );
};

export default Slider;
>>>>>>> aaefd70fa715081c5668900d6d3021ade0810c36
