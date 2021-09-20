import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import { Menu, Icon } from './MenuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({toggle}) => {
    const [dropDown, setDropDown] = useState(false)
    return (
        <Fragment>
            <nav className='flex justify-between items-center h-16  shadow-sm font-sans' role='navigation'>
                <div className="text-white items-center  flex justify-between">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <Link to='/' className="object-center object-cover ">
                            <strong className='font-extrabold text-2xl'>MAMUR <span className='text-yellow-300'>DUKAN</span></strong>
                        </Link>

                         <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>
                <ul className=' text-white pr-8 md:flex text-center md:justify-between hidden'>
                    {
                        Menu.map((item, index) => {
                            
                            if (item.title === "Shop"){
                                return (
                                <li key={index} 
                                    className='flex items-center '
                                    onMouseEnter={() => setDropDown(true)}
                                    onMouseLeave={() => setDropDown(false)}>
                                    
                                    <Link to={item.path} className={item.class}>
                                        {item.title}
                                    </Link>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-6 w-6" 
                                        fill="none" 
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path 
                                            strokeLinecap="round"
                                             strokeLinejoin="round" 
                                             strokeWidth={2} d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    {dropDown && <DropdownMenu/>}
                                </li>
                                );
                            }


                            return (
                                <li key={index} className='flex items-center'>
                                    <Link to={item.path} className={item.class}>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                            
                        })
                    }
                    {
                        Icon.map((item, index) => {
                        
                            return (
                                <li key={index} className='flex justify-end items-center'>
                                    <Link to={item.path} className='px-2 ml-5'>
                                        <FontAwesomeIcon className="icon me-4" icon={
                                                item.icon === 'facebook' ? faFacebook :
                                                item.icon === 'instagram' ? faInstagram :
                                                item.icon === 'twitter' ? faTwitter : 
                                                item.icon === 'linkedin' ? faLinkedin : faLinkedin
                                        
                                        } />
                                    </Link>
                                </li>
                            );
                            
                        })
                    }
                </ul>
            </nav>
        </Fragment>
    );
};

export default Navbar;