import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="">
            <h6 className=" text-primary  border-b-2 text-lg font-bold">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="mt-5">
                 {
                     props.menuItems.map((item, index) => <li key={index} className="py-1 my-1"><Link to={item.link} className="text-secondary">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;
