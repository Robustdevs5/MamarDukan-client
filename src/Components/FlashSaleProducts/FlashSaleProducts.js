import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faChartBar, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { toast, ToastContainer } from 'react-toastify';
import { MostViewedProduct } from '../HomepageProductData/HomepageProductData';
import { addToDb } from '../ShopingCart/CartDatabase';
import useCart from '../ShopingCart/useCart';



const FlashSaleProducts = () => {

    const [mostViewedProduct, setMostViewedProduct] = useState([]);
    const [cart, setCart] = useCart(mostViewedProduct);

    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setMostViewedProduct(data.products))
    }, [])
    // console.log(mostViewedProduct);

    const handleAddToCart = (newProduct) => {
        const exists = cart.find(pd => pd._id === newProduct._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== newProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, newProduct];
            toast.success( "increase "+ exists.quantity + " quantity", {
                position: "bottom-right",
            });
        }
        else {
            newProduct.quantity = 1;
            newCart = [...cart, newProduct];
            toast.success( "Product added", {
                position: "bottom-right",
            });
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(newProduct._id);
    
    }

    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 2000,
        rows: 2,
        slidesPerRow: 2,
        autoplaySpeed: 3000,
        autoplay: true,
        pauseOnHover: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className="my-20 w-full">

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
                                    <Link to={item.path} className="py-1 px-2 mx-3 md:mx-0 primary_BTN_Outline rounded  duration-300">{item.title}</Link>
                                </li>
                            )
                        }
                    </div>
                </ul>
            </div>

            <div className="h-full w-full bg-cover relative py-16 bg-no-repeat bg-right" style={{backgroundImage:"url(https://demo2.madrasthemes.com/tokoo/wp-content/uploads/2018/07/bg-lady-1.jpg)"}}>
                <div className="w-3/5 flex pb-12">
                    <div className="w-2/5 bg-white p-4 text-right border-r-2 border-gray-400">
                        <h2 className="text-6xl font-bold items-center pr-4 uppercase">Flash <br/>Sale</h2>
                    </div>
                    <div className="w-3/5 p-8 items-center justify-center">
                        <h4 className="text-lg font-bold text-gray-900 pl-8"> Sales Ends in</h4>
                        <div className="flex mt-2 text-center">
                            <div className="flex-1">
                                <h4 className="text-6xl font-bold items-center uppercase">0</h4>
                                <p className="text-md font-semibold text-gray-600">Days</p>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-6xl font-bold items-center uppercase">7</h4>
                                <p className="text-md font-semibold text-gray-600">Hours</p>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-6xl font-bold items-center uppercase">15</h4>
                                <p className="text-md font-semibold text-gray-600">Mins</p>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-6xl font-bold items-center uppercase">35</h4>
                                <p className="text-md font-semibold text-gray-600">Sec</p>
                            </div>
                        </div>
                    </div>
                </div>               
            <Slider {...settings} className="px-10 w-9/12">
                {
                    mostViewedProduct.map(mostViewedProduct =>
                        <div onClick={() => handleProductClick(mostViewedProduct._id)} className="mb-2 group relative w-full bg-white border cursor-pointer">
                            <div className="overflow-x-hidden relative border-b p-2">
                                <img className="h-48 w-full object-cover" src={mostViewedProduct.img} alt={mostViewedProduct.name} />
                                
                                <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                                    <span className="font-bold">Sale</span>
                                </div>
                                <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">

                                                <button
                                                    onClick={() => handleAddToCart(mostViewedProduct)}
                                                    className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                                >
                                                    <FontAwesomeIcon icon={faShoppingBag} />
                                                </button>

                                                <button
                                                    className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                                >
                                                    <FontAwesomeIcon icon={faEye} />
                                                </button>

                                                <button
                                                    className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                                >
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </button >

                                                <button
                                                    className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                                >
                                                    <FontAwesomeIcon icon={faChartBar} />
                                                </button>

                                            </div>
                            </div>
                            <div className="p-4 flex justify-between ">
                                <div>
                                <p onClick={() => handleProductClick(mostViewedProduct._id)} className="text-md font-semibold text-gray-900 mb-0">{mostViewedProduct.name}</p>
                                <p className="font-bold text-red-900 mt-0">${mostViewedProduct.price}</p>
                                </div>
                            </div>
                        </div>
                    )}

            </Slider>
            </div> 
            <ToastContainer />
        </div>
    );
};

export default FlashSaleProducts;
