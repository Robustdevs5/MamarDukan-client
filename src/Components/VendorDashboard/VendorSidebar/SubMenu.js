import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = (e) => {
        e.preventDefault();
        setSubnav(!subnav)
    };
    return (
        <>
            <Link className="  flex  text-white font-medium justify-between  items-center py-4 px-5 focus:bg-red-600 tracking-tight text-lg  hover:bg-red-600 hover:border-l-4 cursor-pointer"
                to={item.path} 
                onClick={item.subNav && showSubnav}>
            <div className=' flex items-center'>
                    {item.icon}
                <span className='ml-4'>
                    {item.title}
                </span>
            </div>
            <div>
                {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
            </Link>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <Link to={item.path} 
                            key={index} 
                            className="
                                pl-12
                                h-12
                                flex
                                items-center
                                text-blue-100
                                text-lg
                                cursor-pointer 
                                tracking-tight 
                                hover:bg-red-600 
                                font-medium">
                            {item.icon}
                            <span className='ml-4'>{item.title}</span>
                        </Link>
                    );
                })}
      </>
    );
};

export default SubMenu;