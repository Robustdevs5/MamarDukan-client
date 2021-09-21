import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import ToggleMenu from './ToggleMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    useEffect(() => {
      
        const hideMenu = () => {
            if(window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
                console.log('working');
            }
        };

        window.addEventListener("resize", hideMenu);
        
        return() => {
            window.removeEventListener("remove", hideMenu);
        };
    })

    
    return (
        <div className='mx-auto px-5 bg-blue-700'>
            <Menu toggle={toggle}/>
            <ToggleMenu isOpen={isOpen} toggle={toggle}/>
        </div>
    );
};

export default Navbar;