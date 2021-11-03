import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Tamal from './tamal';
import ProductReview from './ProductReview';

const StarRating = () => {
    const [ rating, setRating ]=useState(0)
    const [ hoverRating, setHoverRating] = useState(null)
    
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
                            <textarea 
                                placeholder="write something about this product" 
                                className="text-grey-darkest flex-1 p-3 m-1 bg-transparent focus:outline-none outline-none bg-gray-100 rounded resize-none" 
                                rows="5" 
                                name="tt">
                                    This product is awesome.
                            </textarea>
                            
                            <div className='flex px-5'>
                                {
                                    [...Array(5)].map((star, i) => {
                                        const ratingValue = i + 1;

                                        return (
                                        <label >
                                            <input 
                                            
                                                    className='hidden'
                                                    type='radio'
                                                    name="rating"
                                                    value={ratingValue}
                                                    onClick={()=> setRating(ratingValue)}
                                            />
                                            <FaStar
                                            
                                                    className='cursor-pointer'
                                                    color={ratingValue <= (hoverRating  || rating) ? '#ffc107' : '#e4e5e9'}
                                                    size={20}
                                                    onMouseEnter={() => setHoverRating(ratingValue)}
                                                    onMouseLeave={() => setHoverRating(null)}
                                            />
                                        </label> 

                                        )
                                    })
                                }
                                <small className='px-8 text-base tracking-tighter'>{rating} star</small>
                            </div>
                            <button type='submit' className='mt-6 primary_BTN px-5 py-1 rounded'>Review</button>
                        </div>
                        {/* <Tamal/> */}

                    </div>
                </div>
            </div>
            
            <ProductReview/>
        </div>
    );
};

export default StarRating;