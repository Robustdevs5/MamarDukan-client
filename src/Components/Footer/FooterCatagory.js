import React from 'react';
import {Catagory} from '../ShopingCart/Data';
import './FooterCatagory.css'

const FooterCatagory = () => {
    return (
        <div className="mt-10">
        <div className="">
            {
                Catagory.map((item, index) => <div key={index} item={item} className="flex flex-wrap Catagory mb-5 ml-5">
                    <h1 className="mr-5 text-sm font-bold">{item.title}</h1>
                    <p className="mr-2 text-sm text-gray-500 cursor-pointer hover:text-red">{item.p.P1}</p>
                    <p className="mr-2 text-sm text-gray-500 cursor-pointer">{item.p.P2}</p>
                    <p className="mr-2 text-sm text-gray-500 cursor-pointer">{item.p.P3}</p>
                    <p className="mr-2 text-sm text-gray-500 cursor-pointer">{item.p.P4}</p>
                    <p className="mr-2 text-sm text-gray-500 cursor-pointer">{item.p.P5}</p>
                </div>)
            }
        </div></div>
    );
};

export default FooterCatagory;