import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import star from "../../images/5star.png";
import CartButton from '../Cart/CartButton/CartButton';
import { MostViewedProduct } from '../HomepageProductData/HomepageProductData';

const MostViewedProducts = () => {

    const [mostViewedProduct, setMostViewedProduct] = useState([]);

    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setMostViewedProduct(data.products))
    }, [])
    // console.log(mostViewedProduct);

    const settings = {
        className: "center",
        dots: false,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        autoplaySpeed: 3000,
        autoplay: true,
        pauseOnHover: true,
        //nextArrow: <SampleNextArrow />,
        //prevArrow: <SamplePrevArrow />,

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



    const history = useHistory();
    const handleProductClick = (id) => {
        history.push(`/product/${id}`);
    }



    return (
        <div className="px-2 my-20">

            <div className="px-8 bg-gray-100">
                <ul className="md:flex md:justify-between items-center md:border-b md:border-blue-300 mb-10">
                    <div>
                        <li>
                            <h1 className="tracking-tight uppercase text-2xl text-gray-800 font-bold py-2 my-4 md:py-1 pl-3 md:my-0 border-red-600 mb-10 border-l-4"> Most viewed Products</h1>
                        </li>
                    </div>
                    <div className="flex">
                        {
                            MostViewedProduct.map((item, index) =>
                                <li key={index} className={item.cls}>
                                    <Link to={item.path} className="py-1 px-2 mx-3 md:mx-0 primary_BTN_Outline rounded  duration-300">{item.title}</Link>
                                </li>
                            )
                        }
                    </div>
                </ul>
            </div>


            <Slider {...settings} className="px-10">

                {
                    mostViewedProduct.map(mostViewedProduct =>
                        <div key={mostViewedProduct._id} className="group relative p-2 py-6 hover:border-red-600 md:border rounded">

                            <div className="overflow-x-hidden relative mb-4 w-40 h-40">
                                <img onClick={() => handleProductClick(mostViewedProduct._id)} className="rounded cursor-pointer h-full w-full" src={mostViewedProduct.img} alt="8192" />
                                <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                                            <span className="font-bold">Sale</span>
                                        </div>
                                        <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">
                                            <CartButton cartProduct={mostViewedProduct}/>
        
                                        </div>
                            </div>

                            <div className="flex py-3">
                                <h5 className="text-base font-bold text-green-700">${mostViewedProduct.price}</h5>
                                <del className="px-4 text-base text-gray-500">$10000</del>
                            </div>

                            <p className="text-gray-700 text-sm mb-2">Sold by: <span className="hover:text-blue-500 cursor-pointer"> Mr. Rahim</span></p>
                            <hr />

                            <div className="py-3">
                                <p onClick={() => handleProductClick(mostViewedProduct._id)} className="text-blue-500 hover:text-yellow-500 cursor-pointer text-sm">{mostViewedProduct.name}</p>

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

export default MostViewedProducts;
