import React from 'react';
import Slider from "react-slick";
import star from "../../images/5star.png";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import { MostViewedProduct } from '../HomepageProductData/HomepageProductData';



const MostViewedProducts = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick} >

                <KeyboardArrowRightIcon className="arrow" color="primary" />

            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick} >

                <KeyboardArrowLeftIcon className="arrow" color="primary" />

            </div>
        );
    }


    const settings = {
        className: "center",
        dots: false,
        centerMode: true,
        infinite: true,
        slidesToShow: 2.5,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        autoplaySpeed: 3000,
        autoplay: true,
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
                    slidesToShow: 0.5,
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
        <div className="p-2 py-5 my-9">

            <div className="px-8 mx-10 my-8 rounded bg-gray-100 border">
                <ul className="md:flex md:justify-between items-center py-2">
                    <div>
                        <li>
                            <h1 className="sm:text-3xl text-gray-800 font-bold py-2 my-4 md:py-2 md:my-0 border-b-2 border-blue-500 md:border-none"> Most viewed Products</h1>
                        </li>
                    </div>
                    <div className="flex">
                        {
                            MostViewedProduct.map((item, index) =>
                                <li key={index} className="md:px-4">
                                    <Link to={item.path} className="hover:text-blue-800 mr-3">{item.title}</Link>
                                </li>
                            )
                        }
                    </div>
                </ul>
            </div>


            <Slider {...settings} className="px-10">

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
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1596273501899-336404ed1701?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1589401806207-2381455bce76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="8192" />
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
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1596273501899-336404ed1701?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>
                <div className="p-1 pl-2 pr-2">
                    <img className="mb-4 rounded cursor-pointer" src="https://images.unsplash.com/photo-1589401806207-2381455bce76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="8192" />
                    <h5 className="text-2xl font-bold text-green-700">$100</h5>
                    <h3 className="text-blue-700">Product 101</h3>
                    <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                    <small>Sold: (150)</small>
                </div>



            </Slider>
        </div>
    );
};

export default MostViewedProducts;
