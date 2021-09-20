import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './test.css'


const Test = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <h2>Center Mode</h2>
            <Slider {...settings}>
                <div>
                    <img src="https://i.ibb.co/dGxSgHk/8192.jpg" alt="8192" />
                </div>
                <div>
                    <img src="https://i.ibb.co/dGxSgHk/8192.jpg" alt="8192" />
                </div>
                <div>
                    <img src="https://i.ibb.co/dGxSgHk/8192.jpg" alt="8192" />
                </div>
                <div>
                    <img src="https://i.ibb.co/dGxSgHk/8192.jpg" alt="8192" />
                </div>
                <div>
                    <img src="https://i.ibb.co/dGxSgHk/8192.jpg" alt="8192" />
                </div>
                <div>
                    <img src="https://i.ibb.co/dGxSgHk/8192.jpg" alt="8192" />
                </div>
            </Slider>
    </div>
    );
};

export default Test;