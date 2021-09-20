import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Menu} from './MenuItems';

const ToggleMenu = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4  items-center text-white pb-10': 'hidden'}
            onClick={toggle}>
            
            {
                Menu.map((item, index) => {
                    return <Fragment key={index}>
                        <Link to={item.path} className={item.class}>
                            {item.title}
                        </Link>
                    </Fragment>
                    
                })
            }

        </div>
    );
};

export default ToggleMenu;