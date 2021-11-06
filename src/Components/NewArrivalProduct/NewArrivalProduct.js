import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import star from "../../images/5star.png";
import CartButton from '../Cart/CartButton/CartButton';
import { ComputerTechnology } from '../HomepageProductData/HomepageProductData';
import { Loader } from '../Loader/Loader';

const NewArrivalProduct = () => {
  
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useProducts();     
    const [firstFiveProduct, setFirstFiveProduct] = useState()
    function shuffleArray(array) {
        setTimeout(async function(){ 
            try{
                let i = array.length - 1;
                for (; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    const temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                
                }
                setFirstFiveProduct(array)
            }
            catch(err) {
            }
        }, 6000);
    }
    
    shuffleArray(products.products);
    const history = useHistory();
    const handleProductClick = (id) =>{
        history.push(`/product/${id}`);
    }



    return (
        <div className="my-20 w-full px-5">
            <div className="px-3 bg-gray-100">
                <ul className="md:flex md:justify-between items-center  ">
                    <div>
                        <h1 className="tracking-tight uppercase sm:text-2xl text-gray-800 font-bold py-2 my-4 md:py-1 md:pl-3 md:my-0 md:border-red-600 mb-10 border-l-4"> New Arrival</h1>
                    </div>
                    <div className="flex">
                        {
                            ComputerTechnology.map((item, index) =>
                                <li key={index} className={item.cls}>
                                    <Link to={item.path} className="py-1 px-2 mx-3 md:mx-0 primary_BTN  rounded duration-300">{item.title}
                                    </Link>
                                </li>
                            )
                        }
                    </div>
                </ul>
                
            <hr/>
            </div>
            <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 lg:grid-flow-col xl:gap-4">
                {
                    products.products && products.products.slice(0,9).map((firstFiveProducts, index) => {
                        return <Fragment firstFiveProducts={firstFiveProducts} key={index} >
                            
                            { index <= 3 ? 
                                    <div className="group relative w-full bg-white border cursor-pointer" onClick={() => handleProductClick(firstFiveProducts._id)}>
                                        <div className="overflow-x-hidden relative border-b p-2">
                                            <img className="h-48 w-full object-cover" src={firstFiveProducts.img} alt=''/>
                                            
                                            <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                                                <span className="font-bold">Sale</span>
                                            </div>
                                            <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">
                                                <CartButton cartProduct={firstFiveProducts}/>
            
                                            </div>
                                        </div>
                                        <div className="px-3">
                                            <div className="flex py-3">
                                                <h5 className="text-base font-bold text-green-700">${firstFiveProducts.price}</h5>
                                                <del className="px-4 text-base text-gray-500">$10000</del>
                                            </div>

                                            <p className="text-gray-700 text-sm mb-2">Sold by: <span className="hover:text-blue-500 cursor-pointer"> Mr. Rahim</span></p>
                                            <hr />

                                            <div className="py-3 flex justify-between">
                                                <div>
                                                    <p onClick={() => handleProductClick(firstFiveProducts._id)} className="text-blue-500 hover:text-yellow-500 cursor-pointer text-sm">{firstFiveProducts.name}</p>

                                                    <div className="flex">
                                                        <img src={star} style={{ width: '60px', height: '15px' }} alt="" />
                                                        <p className="text-gray-600 text-xs px-1">(10)</p>
                                                    </div>
                                                </div>

                                                <p className="text-gray-600 text-xs px-1">Sold: 10</p>
                                            </div>
                                        </div>
                                    </div>
                            : index == 4 ?
                                    <div className="relative w-full bg-white border cursor-pointer row-span-1 md:row-span-2 col-span-2" onClick={() => handleProductClick(firstFiveProducts._id)}>
                                        <div className="overflow-x-hidden relative border-b p-2">
                                            <div className="h-screen w-auto">
                                                <img  className="h-full w-full object-cover p-4" src={firstFiveProducts.img} alt='first Five Products' />
                                            </div>
                                            <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                            </p>
                                            <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                                                <span className="font-bold">Sale</span>
                                            </div>
                                        </div>
                                     <div className="flex py-3 justify-evenly items-center">
                                            <div className="flex py-3">
                                                <h5 className="text-base font-bold text-green-700">${firstFiveProducts.price}</h5>
                                                <del className="px-4 text-base text-gray-500">$10000</del>
                                            </div>

                                            <p className="text-gray-700 text-sm mb-2">Sold by: <span className="hover:text-blue-500 cursor-pointer"> Mr. Rahim</span></p>
                                            <hr />

                                            <div className="py-3">
                                                <p className="text-blue-500 hover:text-yellow-500 cursor-pointer text-sm">{firstFiveProducts.name}</p>

                                                <div className="flex">
                                                    <img src={star} style={{ width: '60px', height: '15px' }} alt="" />
                                                    <p className="text-gray-600 text-xs px-1">(10)</p>
                                                </div>

                                                <p className="text-gray-600 text-xs px-1">Sold: 10</p>
                                            </div>
                                        </div>
                                    </div>
                                
                                : 
                                <div className="group relative w-full bg-white border cursor-pointer" onClick={() => handleProductClick(firstFiveProducts._id)}>
                                    <div className="overflow-x-hidden relative border-b p-2">
                                        <img className="h-48 w-full object-cover" src={firstFiveProducts.img} alt=''/>
                                        
                                        <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                                            <span className="font-bold">Sale</span>
                                        </div>
                                        <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">
                                            <CartButton cartProduct={firstFiveProducts}/>
        
                                        </div>
                                    </div>
                                    <div className="px-3">
                                        <div className="flex py-3">
                                            <h5 className="text-base font-bold text-green-700">${firstFiveProducts.price}</h5>
                                            <del className="px-4 text-base text-gray-500">$10000</del>
                                        </div>

                                        <p className="text-gray-700 text-sm mb-2">Sold by: <span className="hover:text-blue-500 cursor-pointer"> Mr. Rahim</span></p>
                                        <hr />

                                        <div className="py-3 flex justify-between">
                                            <div>
                                                <p onClick={() => handleProductClick(firstFiveProducts._id)} className="text-blue-500 hover:text-yellow-500 cursor-pointer text-sm">{firstFiveProducts.name}</p>

                                                <div className="flex">
                                                    <img src={star} style={{ width: '60px', height: '15px' }} alt="" />
                                                    <p className="text-gray-600 text-xs px-1">(10)</p>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 text-xs px-1">Sold: 10</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </Fragment>
                    })
                }           
            </div>
            { !products.products && <Loader/>
            }
        </div>
    );
};

export default NewArrivalProduct;