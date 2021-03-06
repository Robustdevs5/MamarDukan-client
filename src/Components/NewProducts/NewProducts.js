import React from 'react';
import Slider from "react-slick";
import star from "../../images/5star.png";
import right from "../../images/right.png";
import left from "../../images/left.png";



const NewProducts = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick} >

                <img className="arrow"
                    src={right} alt="" />

            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick} >

                <img className="arrow"
                    src={left} alt="" />

            </div>
        );
    }


    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

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
                    slidesToShow: 3,
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
        <div className="p-2 mb-5 mt-10">

            <div className="px-8 productHeader mx-12 h-14 mb-4 rounded flex bg-gray-300">
                <h1 className="text-3xl text-gray-800 font-bold py-2">Deal of the day</h1>

                <div className="ml-auto py-4 hover:text-blue-700">
                    <a href=" ">View all</a>
                </div>
            </div>

            <Slider {...settings} className="px-12">
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://i.ibb.co/dGxSgHk/8192.jpg" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1622979138084-c03ae28968ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1515849430397-7aee921bbea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://i.ibb.co/dGxSgHk/8192.jpg" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1622979138084-c03ae28968ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1515849430397-7aee921bbea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>

            </Slider>

        </div>
    );
};

export default NewProducts;
