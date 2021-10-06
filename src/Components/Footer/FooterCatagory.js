import React from 'react';
import {Catagory} from '../ShopingCart/Data'

const FooterCatagory = () => {
    return (
        <div className="mt-10">
        <div className="">
            {
                Catagory.map((item, index) => <div key={index} item={item} className="flex mb-5 ml-5">
                    <h1 className="mr-5">{item.title}</h1>
                    <p className="mr-5">{item.p.P1}</p>
                    <p className="mr-5">{item.p.P2}</p>
                    <p className="mr-5">{item.p.P3}</p>
                    <p className="mr-5">{item.p.P4}</p>
                    <p className="mr-5">{item.p.P5}</p>
                </div>)
            }
        </div></div>
    );
};

export default FooterCatagory;