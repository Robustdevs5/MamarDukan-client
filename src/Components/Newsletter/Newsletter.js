import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
    return (
        <div className="mx-auto   ">
            <dl className="bg-blue-700 space-y-10 my-8 p-5 md:space-y-0  md:gap-x-8 md:gap-y-10">
                <div className="md:grid md:grid-cols-2 py-8 relative md:flex md:justify-between items-center">
                    <div>
                        <p className="mt-2 text-2xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                            Want product news and Updates?
                        
                        </p>
                    
                        <p className="mt-2 tracking-tight text-gray-400 text-lg font-bold">
                            Sign up for our newsletter to stay up to date.
                        </p>
                    </div>
                    <div >
                        <from className=" tracking-tight justify-center flex">
                            <input type='email' placeholder='Email' className="px-5 w-80 mr-5 h-10 focus:outline-none rounded "/>
                            <button className='items-center rounded py-2 px-5 bg-blue-300 text-gray-800 capitalize font-bold'>
                                <FontAwesomeIcon 
                                    className="mr-3 text-white text-3xl" 
                                    icon={faRocket} />
                                    Notify me
                            </button>
                        
                        </from>
                    
                        <p className="text-center mt-2 tracking-tight text-gray-200 ">
                            We care about the protection of your data. Read our
                            <Link to='/privacy' className='underline hover:text-white'>Privacy Policy</Link>
                        </p>
                    </div>
                </div>
            </dl>
        </div>
    );
};

export default Newsletter;