import React, { useState } from "react";
import {ShopingCart} from "./Data";
import './Table.css'
import TotalCart from './Totalcart';
import CupponCart from './CupponCart'

const Table = () => {
  const [counter, setCounter] = useState(1) 
  // const increseButton = setCounter(counter + 1)

  return (
    <div>
      <h1 className="text-center m-10 text-bold text-3xl">Shoping Cart</h1>
    <div className="Table px-7 py-10">
      <div className="tablewraper">
        <div className="tableheader">
          <div className="header bg-gray-300">
            <h1 className="w-1/5 mx-auto p-4 text-center">Picture</h1>
            <h1 className="w-1/5 mx-auto p-4 text-center">Name</h1>
            <h1 className="w-1/5 mx-auto p-4 text-center">Price</h1>
            <h1 className="w-1/5 mx-auto p-4 text-center">quantity</h1>
            <h1 className="w-1/5 mx-auto p-4 text-center">Total</h1>
          </div>
          {
            ShopingCart.map((item, index) => <div className="bg-green-50 mt-2 " key={index} item={item}>
              <div className="w-1/5 mx-auto my-auto  "><img className="w-20 h-20 my-auto mx-auto py-2" src={item.pictureUrl}  /></div>
              <h1 className="w-1/5 mx-auto my-auto text-center"> {item.title}</h1>
              <p className='w-1/5 mx-auto my-auto text-center'>{item.price}</p>
              <p className='w-1/5 mx-auto my-auto text-center '><a className="border-2 text-center px-3 py-3"><a className="mr-5 cursor-pointer text-3xl">-</a>{counter}<a className="ml-5 cursor-pointer text-3xl">+</a></a></p>
              <p className='w-1/5 mx-auto my-auto text-center'>{item.price}</p>
            </div>)
          }
        </div>
      </div>
      <div className="CupponTotal grid grid-cols-1 md:grid-cols-2  mt-10">
        <div className=""><CupponCart /></div>
        <div className=""><TotalCart /></div>
      </div>
    </div>
    
    </div>
  );
};

export default Table;
