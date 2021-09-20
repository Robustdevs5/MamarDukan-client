import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import { Menu } from './MenuItems';

const Navbar = ({toggle}) => {
    const [dropDown, setDropDown] = useState(false)
    return (
        <Fragment>
            <nav className='flex justify-start items-center h-16  text-white shadow-sm font-sans' role='navigation'>
                <Link to='/' className=''>Mamar Dukan</Link>
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
                <ul className='pr-8 md:flex text-center md:justify-between hidden'>
                    {
                        Menu.map((item, index) => {
                            
                            if (item.title === "Shop"){
                                return (
                                <li key={index} 
                                    className='flex items-center '
                                    onMouseEnter={() => setDropDown(true)}
                                    onMouseLeave={() => setDropDown(false)}
                                >
                                    <Link to={item.path} className={item.class}>
                                    {item.title}
                                </Link>
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
                </ul>
            </nav>
        </Fragment>
    );
};

export default Navbar;