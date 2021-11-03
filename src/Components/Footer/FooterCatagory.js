import React from 'react';
import { Link } from 'react-router-dom';
import {Catagory} from './Data';
import './FooterCatagory.css'

const FooterCatagory = () => {
    return (
        <div className="mt-10">
        <div className="">
            {
                Catagory.map((item, index) => <div key={index} item={item} className="flex flex-wrap Catagory mb-5 ml-5">
                    <h1 className="mr-5 text-sm font-bold">{item.title}</h1>
                    <Link to={item.p.link1} > <p className="mr-2 text-sm text-gray-500 cursor-pointer hover:text-red">{item.p.P1}</p></Link>
                    <Link to={item.p.link2} ><p className="mr-2 text-sm text-gray-500 cursor-pointer">{item.p.P2}</p></Link>
                    <Link to={item.p.link3} ><p className="mr-2 text-sm text-gray-500 cursor-pointer">{item.p.P3}</p></Link>
                    <Link to={item.p.link4} ><p className="mr-2 text-sm text-gray-500 cursor-pointer">{item.p.P4}</p></Link>
                    <Link to={item.p.link5} ><p className="mr-2 text-sm text-gray-500 cursor-pointer">{item.p.P5}</p></Link>
                </div>)
            }
        </div></div>
    );
};

export default FooterCatagory;