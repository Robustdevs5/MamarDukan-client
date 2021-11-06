import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const Logo = ({closeMobileMenu}) => {
    return (
        <Link to='/' 
            onClick={closeMobileMenu} 
            className='flex justify-self-start cursor-pointer text-xl'
        >
            {/* <FaCartPlus 
                className="mr-3 text-white text-3xl" 
                 /> */}
            <strong 
                className='uppercase text-gray-200 font-bold text-normal md:font-bold md:text-xl'>
                {/* Mamar */}
                
                    Shop by Department
                {/* <span  className='text-red-600'> Dukan  </span> */}
            </strong>
            
        </Link>
    );
};

export default Logo;