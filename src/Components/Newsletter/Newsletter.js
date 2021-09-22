import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
    return (
        <div className="bg-blue-700 mx-auto pl-5">
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
                        <from className=" tracking-tight md:justify-center md:flex">
                            <input 
                                type='email' placeholder='Email' 
                                className="px-5 w-80 mr-5 h-10 focus:outline-none rounded "
                            />
                            <button className='items-center rounded py-2 md:mt-0 mt-2 px-5 bg-blue-900 text-gray-50  hover:bg-blue-800 capitalize font-bold'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon className="mr-3" icon={faLocationArrow} />
                                    <p>Notify me</p>
                                </div>
                            </button>
                        
                        </from>
                    
                        <article className="md:text-center p-3 tracking-tight text-gray-200 ">
                             We care about the protection of your data. Read our
                            <Link to='/privacy' className='underline hover:text-blue-300 pl-2'>Privacy Policy</Link>
                        </article>
                    </div>
                </div>
            </dl>
        </div>
    );
};

export default Newsletter;