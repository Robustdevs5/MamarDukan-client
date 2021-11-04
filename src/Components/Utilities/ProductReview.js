import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { FaStar } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductReview = ({rating, setRating, singleProduct}) => {

    const [ hoverRating, setHoverRating] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const userInfo = {
            name: data.name,
            review: data.review,
            reviewRating: rating,
            productId: singleProduct._id,
        };

        const userSignUp = `http://localhost:5000/review`;
        fetch(userSignUp, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(async res => await res.json())
            .then(async user => {
                if (user.success) {
                    toast.success(user.message, {
                        position: "bottom-right",
                    });
                    data.target.reset();
                }
            })
            .catch(error => {
                alert(error.message);
                console.log(error);
            });
    };

    const history = useHistory();
    const handleProductClick = (singleProduct) => {
        history.push(`/product/${singleProduct}`);
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <label className="w-full">
                    <input name="name" type="text" placeholder="Name" 
                        {...register("name", {required: true})}
                        className="h-12 my-3 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    <span className="text-red-500">{errors.name?.type === 'required' && "name is required"}</span>
                </label>

                <label claassName="w-full">
                    <textarea cols="20" type="text" rows="4" placeholder="write a review"
                        {...register("review", {required: true})}
                        className="  no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" />
                    <span className="text-red-500">{errors.review?.type === 'required' && "review is required"}</span>
                </label>

                <div className='flex px-5'>
                    {
                        [...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;

                            return (
                            <label >
                                <input 
                                
                                        className='hidden'
                                        type='radio'
                                        name="reviewRating"
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
                <button type='submit' className='mt-6 primary_BTN px-5 py-1 rounded w-full' onClick={() => handleProductClick(singleProduct)}>Review</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default ProductReview;






































































