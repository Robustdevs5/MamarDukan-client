import React, { useContext, useState } from "react";
import './Table.css'
import TotalCart from '../Totalcart';
import CupponCart from '../CupponCart'
import { userContext } from "../../../App";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { CgArrowLeftR,  CgArrowRightR} from "react-icons/cg";

const Table = (props) => {
  const { onAdd , onRemove  , onDelete} = props;  
  const { cart, setCart } = useContext(userContext);

  return (
    <div>
      <h1 className="text-center m-10 text-bold text-3xl">Shoping Cart</h1>
    <div className="Table px-7 py-10">
      <div className="tablewraper">
        <div className="tableheader">
          <div className="header bg-gray-300">
            <h1 className="w-1/6 mx-auto p-4 text-center">Picture</h1>
            <h1 className="w-1/6 mx-auto p-4 text-center">Name</h1>
            <h1 className="w-1/6 mx-auto p-4 text-center">Price</h1>
            <h1 className="w-1/6 mx-auto p-4 text-center">quantity</h1>
            <h1 className="w-1/6 mx-auto p-4 text-center">Total</h1>
            <h1 className="w-1/6 mx-auto p-4 text-center">Remove</h1>
          </div>
          {
            cart.map((item, index) => <div className="bg-green-50 mt-2 " key={index} item={item}>
              <div className="w-1/6 mx-auto my-auto  "><img className="w-20 h-20 my-auto mx-auto py-2" src={item.img}  alt=''/></div>
              <h1 className="w-1/6 mx-auto my-auto text-center"> {item.name}</h1>
              <p className='w-1/6 mx-auto my-auto text-center'>${item.price}</p>
              <div className='w-1/6 mx-auto my-auto text-center '>
                  <button onClick={() => onRemove(item)} className="mr-5 cursor-pointer text-3xl">-</button>
                    {item.quantity}
                  <button onClick={() => onAdd(item)} className="ml-5 cursor-pointer text-3xl">+</button>
              </div>
              <div className='w-1/6 mx-auto my-auto text-center '>
              {item.quantity * item.price}
              </div>
              <div className='w-1/6 text-2xl text-center rounded-full cursor-pointer mx-auto my-auto' onClick={() => onDelete(item._id)}>
                  <TiDelete className='block mx-auto'/>
              </div>
            </div>)
          }
        </div>
      </div>
      <div className="CupponTotal grid grid-cols-1 md:grid-cols-2  mt-10">
        <div className=""><CupponCart /></div>
        <div className="">
          <h2 className="text-xl font-bold border-l-4 border-red-600 ml-5 pl-2 capitalize ">Price Summary</h2>
          <TotalCart  />
          <div className="flex justify-around items-center w-full mt-4 tracking-tighter text-center text-lg">
            <Link to="/shop" className="primary_BTN py-2 px-5 rounded w-full mr-3 flex items-center justify-evenly">
                <CgArrowLeftR/> Continue shopping </Link>
            <Link to="/checkout" className="primary_BTN py-2 px-5 rounded w-full flex items-center justify-evenly">
               Checkout <CgArrowRightR/></Link>
        </div>
        </div>

      </div>
    </div>
    
    </div>
  );
};

export default Table;
