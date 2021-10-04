import React from "react";
import {ShopingCart} from "./Data";
import './Table.css'

const Table = () => {


  return (
    <div className="Table">
      <div className="tablewraper">
        <div className="tableheader">
          <div className="header">
            <h1 className="w-1/5 mx-auto mt-9 text-center">One</h1>
            <h1 className="w-1/5 mx-auto mt-9 text-center">Two</h1>
            <h1 className="w-1/5 mx-auto mt-9 text-center">Three</h1>
            <h1 className="w-1/5 mx-auto mt-9 text-center">Four</h1>
            <h1 className="w-1/5 mx-auto mt-9 text-center">five</h1>
          </div>
          {
            ShopingCart.map((item, index) => <div key={index} item={item}>
              <div className="w-1/5 mx-auto mt-9 "><img className="w-28 h-28 mx-auto" src={item.pictureUrl}  /></div>
              <h1 className="w-1/5 mx-auto mt-9 text-center"> {item.title}</h1>
              <p className='w-1/5 mx-auto mt-9 text-center'>Price :{item.price}</p>
              <p className='w-1/5 mx-auto mt-9 text-center'>Price :{item.price}</p>
              <p className='w-1/5 mx-auto mt-9 text-center'>Price :{item.price}</p>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Table;
