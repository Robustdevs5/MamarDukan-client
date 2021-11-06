import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ProductReview from './ProductReview';
import { useParams } from 'react-router';

const StarRating = ({review, setReview, singleProduct}) => {
    const [ rating, setRating ]=useState(0)
    // const [review, setReview] = useState([]);
    
    useEffect(() => {
        fetch('https://mamar-dukan.herokuapp.com/review/')
            .then(res => res.json())
            .then(data => setReview(data.review));
    }, [review]);

    
    
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
                            {
                                review && review.map(review => {
                                   return <div key={review._id} class="border  shadow rounded-md p-4 max-w-lg w-full mx-auto my-2">
                                        <div class="flex space-x-4">
                                            <div class="rounded-full  h-12 w-12">{review.result.name}</div>
                                            <div class="flex-1 space-y-4 py-1 px-5">
                                                <div class="h-4 flex items-center rounded w-3/4 text-gray-700 font-bold">
                                                    {review.result.review}
                                                    <FaStar size={20} className="px-1 text-yellow-400"/>
                                                    {review.result.reviewRating}
                                                </div>
                                                <div class="space-y-2 flex items-center">
                                                    <div class="h-4  rounded w-5/6">{(new Date(review.result.date).toLocaleDateString())}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                         
                            <hr/>
                            
                            <hr/>
                        </div>
                    </div>
                    
                    <div className="col mt-8 sm:ml-8 sm:mt-0 sm:w-1/2 h-80 sticky top-32">
                        <div className="box border rounded flex flex-col shadow bg-white">
                            <div className="box__title bg-grey-lighter px-3 py-2 border-l-4 border-red-500">
                                <h3 className="text-sm text-grey-darker font-medium">Write a review</h3>
                            </div>
                            <hr/>
                            
                            <ProductReview singleProduct={singleProduct} rating={rating} setRating={setRating}/>
                            
                            
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default StarRating;