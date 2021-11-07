import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { ToastContainer } from 'react-toastify';
import useProducts from '../../hooks/useProducts';
import star from "../../images/5star.png";
import CartButton from '../Cart/CartButton/CartButton';
import { NewProductOffer } from '../HomepageProductData/HomepageProductData';


const NewProducts = () => {
    const [products, setProducts] = useProducts(); 

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

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
    const handleProductClick = (id) => {
        history.push(`/product/${id}`);
    }

    return (
        <div className="my-20 w-full">
            <div className="px-3 bg-gray-100">
               <ul className="md:flex md:justify-between items-center  ">
                    <div>
                        <li>
                            <h1 className="tracking-tight uppercase text-2xl text-gray-800 font-bold py-2 my-4 md:py-1 pl-3 md:my-0 border-red-600 mb-10 border-l-4"> Deal of the day</h1>
                        </li>
                    </div>
                    <div className="hidden md:block">
                        {
                            NewProductOffer.map((item, index) =>
                                <li key={index} className={item.cls}>
                                    <Link to={item.path} className="py-1 px-2 mx-3 md:mx-0 primary_BTN  rounded duration-300">{item.title}</Link>
                                </li>
                            )
                        }
                    </div>
                </ul>
            </div>

            <Slider {...settings} className="px-8">

                {
                   products.products && products.products.map(newProduct => {
                         return <div className="p-2 border rounded hover:shadow-2xl group hover:border-blue-900 shadow px-6">

                            <div className="mb-4 w-40 h-40  pb-5">
                                <img onClick={() => handleProductClick(newProduct._id)} className="rounded cursor-pointer h-full w-full"
                                    src={newProduct.img} alt="8192" />
                                     <div className=" flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">
                                        <CartButton cartProduct={newProduct}/>
                                    </div>
                            </div>


                            <div className="flex py-3 mt-2">
                                <h5 className="text-base font-bold text-green-700">${newProduct.price}</h5>
                                <del className="px-4 text-base text-gray-500">10000</del>
                            </div>

                            <p className="text-gray-700 text-sm mb-2">Sold by: <span className="hover:text-blue-500 cursor-pointer"> Mr. Rahim</span></p>
                            <hr />

                            <div className="py-3">
                                <p onClick={() => handleProductClick(newProduct._id)}
                                    className="text-blue-500 hover:text-yellow-500 cursor-pointer text-sm">{newProduct.name}</p>

                                <div className="flex">
                                    <img src={star} style={{ width: '60px', height: '15px' }} alt="" />
                                    <p className="text-gray-600 text-xs px-1">{newProduct.order.review == null? '5': newProduct.order.review}</p>
                                </div>

                                <p className="text-gray-600 text-xs px-1">Sold: 10</p>
                            </div>
                        </div>
          })}

            </Slider>
            <ToastContainer />
        </div>
    );
};

export default NewProducts;
