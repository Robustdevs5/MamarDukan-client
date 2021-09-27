<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import star from "../../images/5star.png";
>>>>>>> cb4841bb70777ae87f9dacc53e1b7040282b3291
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import star from "../../images/5star.png";
import { NewProduct } from '../HomepageProductData/HomepageProductData';



const NewProducts = () => {

    const [newProduct, setNewProduct] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => res.json())
            .then(data => setNewProduct(data.slice(0,15)))
    }, [])
    console.log(newProduct);



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
        <div className="px-2 my-20">

            <div className="px-8 bg-gray-100">
                <ul className="md:flex md:justify-between items-center md:border-b md:border-blue-300 mb-10">
                    <div>
                        <li>
                            <h1 className="tracking-tighter uppercase sm:text-3xl text-gray-800 font-bold py-2 my-4 md:py-2 md:my-0 border-b-2 border-blue-500 md:border-none"> Deal of the day</h1>
                        </li>
                    </div>
                    <div className="flex">
                        {
                            NewProduct.map((item, index) =>
                                <li key={index} className={item.cls}>
                                    <Link to={item.path} className="py-1 px-2 mx-3 md:mx-0 bg-blue-800 text-white hover:bg-gray-50 hover:text-blue-800 border-2 border-blue-800 duration-300">{item.title}</Link>
                                </li>
                            )
                        }
                    </div>
                </ul>
            </div>


            <Slider {...settings} className="px-12">

                {
                    newProduct.map(newProduct =>
                        <div className="p-1 pl-2 pr-2">
                            <img className="mb-4 rounded cursor-pointer" src={newProduct.url} alt="8192" />
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

export default NewProducts;
