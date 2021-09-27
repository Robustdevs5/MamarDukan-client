import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import star from "../../images/5star.png";
import { MostViewedProduct } from '../HomepageProductData/HomepageProductData';



const MostViewedProducts = () => {

    const [mostViewedProduct, setMostViewedProduct] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => res.json())
            .then(data => setMostViewedProduct(data.slice(0, 16)))
    }, [])
    console.log(mostViewedProduct);


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
                    slidesToShow: 0.5,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <div className="px-2 my-20">

            <div className="px-8 bg-gray-100">
                <ul className="md:flex md:justify-between items-center md:border-b md:border-blue-300 mb-10">
                    <div>
                        <li>
                            <h1 className="tracking-tighter uppercase sm:text-3xl text-gray-800 font-bold py-2 my-4 md:py-2 md:my-0 border-b-2 border-blue-500 md:border-none"> Most viewed Products</h1>
                        </li>
                    </div>
                    <div className="flex">
                        {
                            MostViewedProduct.map((item, index) =>
                                <li key={index} className={item.cls}>
                                    <Link to={item.path} className="py-1 px-2 mx-3 md:mx-0 bg-blue-800 text-white hover:bg-gray-50 hover:text-blue-800 border-2 border-blue-800 duration-300">{item.title}</Link>
                                </li>
                            )
                        }
                    </div>
                </ul>
            </div>


            <Slider {...settings} className="px-10">

                {
                    mostViewedProduct.map(mostViewedProduct =>
                        <div className="p-1 pl-2 pr-2">
                            <img className="mb-4 rounded cursor-pointer" src={mostViewedProduct.url} alt="8192" />
                            <h5 className="text-2xl font-bold text-green-700">$100</h5>
                            <h3 className="text-blue-700">Product 101</h3>
                            <img src={star} style={{ width: '100px', height: '25px' }} alt="" />
                            <small>Sold: (150)</small>
                        </div>
                    )}

            </Slider>
        </div>
    );
};

export default MostViewedProducts;
