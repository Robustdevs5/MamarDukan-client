import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import star from "../../images/5star.png";
import { ComputerTechnology } from '../HomepageProductData/HomepageProductData';



const TechnologyProducts = () => {

    const [technologyProduct, setTechnologyProduct] = useState([]);

    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products/department?department=Computer`)
            .then(res => res.json())
            .then(data => setTechnologyProduct(data.result))
    }, [])
    // console.log(technologyProduct);


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

        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
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


    const history = useHistory();
    const handleProductClick = (id) =>{
        history.push(`/product/${id}`);
    }




    return (
        <div className="px-2 my-20">

            <div className="px-8 bg-gray-100">
                <ul className="md:flex md:justify-between items-center  mb-10">
                    <div>
                        <h1 className="tracking-tight uppercase sm:text-2xl text-gray-800 font-bold py-2 my-4 md:py-1 md:pl-3 md:my-0 md:border-red-600 mb-10 border-l-4"> Computer & Technology</h1>
                    </div>
                    <div className="flex">
                        {
                            ComputerTechnology.map((item, index) =>
                                <li key={index} className={item.cls}>
                                    <Link to={item.path} className="py-1 px-2 mx-3 md:mx-0 primary_BTN duration-300">{item.title}
                                    </Link>
                                </li>
                            )
                        }
                    </div>
                </ul>
            </div>


            <Slider {...settings} className="px-12">

                {
                    technologyProduct.map(technologyProduct =>
                        <div className="p-2 hover:border-red-600 md:border rounded">
                            <div className="relative">
                                <div className="mb-4 w-10/12 h-40">
                                    <img onClick={() => handleProductClick(technologyProduct._id)} className="rounded cursor-pointer h-full w-full" src={technologyProduct.img} alt="8192" />
                                </div>
                                {/* <div className="absolute bottom-0 left-0 bg-custom px-2 py-1 text-white text-sm rounded-full transition duration-500 ease-in-out">
                                   <span className="font-bold"> Computer</span>
                                </div> */}
                                <a href="!#">
                                    <div className="text-sm absolute top-0 right-0 bg-custom px-4 py-2 text-white flex flex-col items-center justify-center rounded-full transition duration-500 ease-in-out">
                                        <span className="font-bold">Sale</span>
                                    </div>
                                </a>
                            </div>
                            <div className="flex py-3">
                                <h5 className="text-base font-bold text-green-700">${technologyProduct.price}</h5>
                                <del className="px-4 text-base text-gray-500">10000</del>
                            </div>

                            <p className="text-gray-700 text-sm mb-2">Sold by: <span className="hover:text-blue-500 cursor-pointer"> Mr. Rahim</span></p>
                            <hr />

                            <div className="py-3">
                                <p onClick={() => handleProductClick(technologyProduct._id)} className="text-blue-500 hover:text-yellow-500 cursor-pointer text-sm">{technologyProduct.name}</p>

                                <div className="flex">
                                    <img src={star} style={{ width: '60px', height: '15px' }} alt="" />
                                    <p className="text-gray-600 text-xs px-1">(0)</p>
                                </div>

                                <p className="text-gray-600 text-xs px-1">Sold: 10</p>
                            </div>
                        </div>
                    )}

            </Slider>
        </div>
    );
};

export default TechnologyProducts;
