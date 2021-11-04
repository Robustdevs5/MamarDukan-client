import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { FaStar } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductReview = ({rating, setRating}) => {

    const [ hoverRating, setHoverRating] = useState(null)


    // React hook form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("data",data)
        // const emailMatch = emailCheck();
        const userInfo = {
            review: data.review,
            reviewRating: rating,
        };
        
        console.log("userInfo",userInfo)

        const userSignUp = `http://localhost:3000/orders`;
        fetch(userSignUp, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(async res => await res.json())
            .then(async user => {
                console.log('user10', user)
                user ? alert(user.message) : alert("failed")
            })
            .catch(error => {
                alert(error.message);
                console.log(error);
            });
    };




    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                
                <textarea cols="20" type="text" rows="4" placeholder="review"
                        {...register("review", {required: true})}
                        className="  no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" />
                    <span className="text-red-500">{errors.review?.type === 'required' && "review is required"}</span>
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
                <button type='submit' className='mt-6 primary_BTN px-5 py-1 rounded w-full'>Review</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default ProductReview;






































































