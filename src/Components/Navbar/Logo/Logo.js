import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Logo = ({closeMobileMenu}) => {
    return (
        <Link to='/' 
            onClick={closeMobileMenu} 
            className='justify-self-start cursor-pointer text-xl'
        >
            <FontAwesomeIcon 
                className="mr-3 text-white text-3xl" 
                icon={faCartPlus} />

            <strong 
                className='uppercase text-gray-200 font-bold text-lg md:font-extrabold md:text-2xl'>
                Mamar
                <span 
                    className='text-yellow-400'> Dukan
                 </span>
            </strong>
            
        </Link>
    );
};

export default Logo;