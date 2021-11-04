import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import useShuffleProducts from '../../hooks/useShuffleProducts';
// import Modal from '../Modal/Modal';
import star from "../../images/5star.png";
import CartButton from '../Cart/CartButton/CartButton';
import { ComputerTechnology } from '../HomepageProductData/HomepageProductData';
import { Loader } from '../Loader/Loader';
import Countdown from './Countdown';


const FlashSaleProducts = () => {

    const [shuffleProduct, setShuffleProduct] = useShuffleProducts()

    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 3000,
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
            <div className="px-3 bg-gray-100">
                <ul className="md:flex md:justify-between items-center  ">
                    <div>
                        <h1 className="tracking-tight uppercase text-2xl text-gray-800 font-bold py-2 my-4 md:py-1 pl-3 md:my-0 border-red-600 mb-10 border-l-4"> Flash sales </h1>
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
                
            <hr/>
            </div>

            <div className="h-full w-full bg-cover relative py-16 bg-no-repeat bg-right" style={{backgroundImage:"url(https://demo2.madrasthemes.com/tokoo/wp-content/uploads/2018/07/bg-lady-1.jpg)"}}>
                <div className="hidden md:block">
                    <div className="w-3/5 flex pb-12">
                        <div className="w-2/5 bg-white p-4 text-right border-r-2 border-gray-400">
                            <h2 className="text-gray-800 text-6xl font-bold items-center pr-4 uppercase">Flash <br/>Sale</h2>
                        </div>
                        <Countdown/>
                    </div>  
                </div>             
                <Slider {...settings} className="px-10 w-9/12">
                    {
                        shuffleProduct && shuffleProduct.slice(0,32).map(flashSaleProducts =>
                            <div className="px-2 mb-2 group relative w-full bg-white cursor-pointer">
                                <div className="overflow-x-hidden relative border-b p-2 border">
                                    <img className="h-48 w-full object-cover" src={flashSaleProducts.img} alt={flashSaleProducts.name} />
                                    
                                    <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                                        <span className="font-bold">Sale</span>
                                    </div>
                                    <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">
                                        <CartButton cartProduct={flashSaleProducts}/>
                                    </div>
                                </div>
                                <div className="px-3 border-b p-2 border">
                                    <div className="flex py-3">
                                        <h5 className="text-base font-bold text-green-700">${flashSaleProducts.price}</h5>
                                        <del className="px-4 text-base text-gray-500">$10000</del>
                                    </div>

                                    <p className="text-gray-700 text-sm mb-2">Sold by: <span className="hover:text-blue-500 cursor-pointer"> Mr. Rahim</span></p>
                                    <hr />

                                    <div className="py-3 flex justify-between">
                                        <div>
                                            <p onClick={() => handleProductClick(flashSaleProducts._id)} className="text-blue-500 hover:text-yellow-500 cursor-pointer text-sm">{flashSaleProducts.name}</p>

                                            <div className="flex">
                                                <img src={star} style={{ width: '60px', height: '15px' }} alt="" />
                                                <p className="text-gray-600 text-xs px-1">(10)</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 text-xs px-1">Sold: 10</p>
                                    </div>
                                </div>
                            </div>
                        )}
                   
                </Slider>
            </div> 
            { !shuffleProduct && <Loader/>
            }
        </div>
    );
};

export default FlashSaleProducts;
