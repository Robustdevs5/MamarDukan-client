import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { FaLocationArrow } from 'react-icons/fa';


const Newsletter = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const newsletterDetail = { 
            name: "From Newsletter",
            email: data.email
        }
        fetch('https://mamar-dukan.herokuapp.com/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsletterDetail)
        })
        .then(res => res.json())
        .then(data => {
            if(data){                
                toast.success(data.message, {
                    position: "bottom-right",
                });
            }
        })
    }
    
    return (
        <section className="primary_BG_color mx-auto pl-5">
            <dl className=" space-y-10 my-8 p-5 md:space-y-0  md:gap-x-8 md:gap-y-10">
                <div className="md:grid md:grid-cols-2 py-8 relative items-center">
                    <div>
                        <article className="mt-2 text-2xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                            Want product news and Updates?
                        
                        </article>
                    
                        <article className="p-2 tracking-tight text-gray-100 text-lg font-bold">
                            Sign up for our newsletter to stay up to date.
                        </article>
                    </div>

                    <div className='md:pt-0 pt-3'>
                        <form onSubmit={handleSubmit(onSubmit)} className=" tracking-tight md:justify-center md:flex">
                            
                            <div className=" flex-row ">
                                <div>
                                    <input name="email" type="email" placeholder="Email" 
                                        {...register("email", {required: true})}
                                        className="px-5 w-80 mr-5 h-10 focus:outline-none rounded" />
                                </div>
                                <span className="text-red-500">{errors.email?.type === 'required' && "Email is required"}</span>
                            </div>

                            <button className='h-10 items-center rounded py-2 md:mt-0 mt-2 px-5 primary_BTN capitalize font-bold'>
                                <div className='flex items-center'>
                                    <FaLocationArrow className="mr-3"  />
                                    <p>Notify me</p>
                                </div>
                            </button>
                        
                        </form>
                    
                        <article className="md:text-center p-3 tracking-tight text-gray-200 ">
                             We care about the protection of your data. Read our
                            <Link to='/privacy-policy' className='underline hover:text-blue-300 pl-2'>Privacy Policy</Link>
                        </article>
                    </div>
                </div>
            </dl>
            <ToastContainer/>
        </section>
    );
};

export default Newsletter;