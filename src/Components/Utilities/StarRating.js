import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Tamal from './tamal';
import ProductReview from './ProductReview';

const StarRating = () => {
    const [ rating, setRating ]=useState(0)
    const [orders, setOrders] = useState([]);
    console.log('orders', orders)
    useEffect(() => {
        
        fetch('http://localhost:3000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
            // async function fetchFunction() {
            //     try{
            //       const response = await fetch(`https://mamar-dukan.herokuapp.com/products`);
            //       await response.then(res => res.json())
            //           .then(data => {
            //               setProducts(data)
                          
            //                 console.log('data', data);
            //         });;
            //     }
            //     catch(err) {
            //     //   throw err;
            //       console.log(err);
            //     }
            //   }
    }, []);
    
    return (
        <div>
            <div className="app min-h-screen min-v-screen p-8 bg-grey-lightest font-sans tracking-tight">
                <div className="row sm:flex">
                    <div className="col sm:w-1/2">
                        <div className="box border rounded flex flex-col shadow bg-white">
                            <div className="box__title bg-grey-lighter px-3 py-2 border-l-4 border-red-500">
                                <h3 className="text-sm text-grey-darker font-medium">All review</h3>
                            </div>
                            <hr/>
                            <div class="border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto my-2">
                                <div class="animate-pulse flex space-x-4">
                                    <div class="rounded-full bg-blue-400 h-12 w-12">kk</div>
                                    <div class="flex-1 space-y-4 py-1">
                                        <div class="h-4 bg-blue-400 rounded w-3/4">k</div>
                                        <div class="space-y-2">
                                            <div class="h-4 bg-blue-400 rounded">kk</div>
                                            <div class="h-4 bg-blue-400 rounded w-5/6">kkk</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto my-2">
                                <div class="animate-pulse flex space-x-4">
                                    <div class="rounded-full bg-blue-400 h-12 w-12">kk</div>
                                    <div class="flex-1 space-y-4 py-1">
                                        <div class="h-4 bg-blue-400 rounded w-3/4">k</div>
                                        <div class="space-y-2">
                                            <div class="h-4 bg-blue-400 rounded">kk</div>
                                            <div class="h-4 bg-blue-400 rounded w-5/6">kkk</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto my-2">
                                <div class="animate-pulse flex space-x-4">
                                    <div class="rounded-full bg-blue-400 h-12 w-12">kk</div>
                                    <div class="flex-1 space-y-4 py-1">
                                        <div class="h-4 bg-blue-400 rounded w-3/4">k</div>
                                        <div class="space-y-2">
                                            <div class="h-4 bg-blue-400 rounded">kk</div>
                                            <div class="h-4 bg-blue-400 rounded w-5/6">kkk</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto my-2">
                                <div class="animate-pulse flex space-x-4">
                                    <div class="rounded-full bg-blue-400 h-12 w-12">kk</div>
                                    <div class="flex-1 space-y-4 py-1">
                                        <div class="h-4 bg-blue-400 rounded w-3/4">k</div>
                                        <div class="space-y-2">
                                            <div class="h-4 bg-blue-400 rounded">kk</div>
                                            <div class="h-4 bg-blue-400 rounded w-5/6">kkk</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto my-2">
                                <div class="animate-pulse flex space-x-4">
                                    <div class="rounded-full bg-blue-400 h-12 w-12">kk</div>
                                    <div class="flex-1 space-y-4 py-1">
                                        <div class="h-4 bg-blue-400 rounded w-3/4">k</div>
                                        <div class="space-y-2">
                                            <div class="h-4 bg-blue-400 rounded">kk</div>
                                            <div class="h-4 bg-blue-400 rounded w-5/6">kkk</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto my-2">
                                <div class="animate-pulse flex space-x-4">
                                    <div class="rounded-full bg-blue-400 h-12 w-12">kk</div>
                                    <div class="flex-1 space-y-4 py-1">
                                        <div class="h-4 bg-blue-400 rounded w-3/4">k</div>
                                        <div class="space-y-2">
                                            <div class="h-4 bg-blue-400 rounded">kk</div>
                                            <div class="h-4 bg-blue-400 rounded w-5/6">kkk</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto my-2">
                                <div class="animate-pulse flex space-x-4">
                                    <div class="rounded-full bg-blue-400 h-12 w-12">kk</div>
                                    <div class="flex-1 space-y-4 py-1">
                                        <div class="h-4 bg-blue-400 rounded w-3/4">k</div>
                                        <div class="space-y-2">
                                            <div class="h-4 bg-blue-400 rounded">kk</div>
                                            <div class="h-4 bg-blue-400 rounded w-5/6">kkk</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto my-2">
                                <div class="animate-pulse flex space-x-4">
                                    <div class="rounded-full bg-blue-400 h-12 w-12">kk</div>
                                    <div class="flex-1 space-y-4 py-1">
                                        <div class="h-4 bg-blue-400 rounded w-3/4">k</div>
                                        <div class="space-y-2">
                                            <div class="h-4 bg-blue-400 rounded">kk</div>
                                            <div class="h-4 bg-blue-400 rounded w-5/6">kkk</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    
                    <div className="col mt-8 sm:ml-8 sm:mt-0 sm:w-1/2 h-80 sticky top-32">
                        <div className="box border rounded flex flex-col shadow bg-white">
                            <div className="box__title bg-grey-lighter px-3 py-2 border-l-4 border-red-500">
                                <h3 className="text-sm text-grey-darker font-medium">Write a review</h3>
                            </div>
                            <hr/>
                            
                            <ProductReview rating={rating} setRating={setRating}/>
                            
                            
                        </div>
                        {/* <Tamal/> */}

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default StarRating;