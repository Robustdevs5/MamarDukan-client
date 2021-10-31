import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import { removeFromDb } from '../ShopingCart/CartDatabase';
import { toast, ToastContainer } from "react-toastify";


const CompareDropdown = ({setCompareDropdown}) => {
    const { cart, setCart } = useContext(userContext);



    const handleRemove = id => {
        const newCart = cart.filter(product => product._id !== id);
        setCart(newCart);
        removeFromDb(id);
        toast.success("successful product remove", {
        position: "bottom-right",
        });
    }
    return (
        <div
        className="  max-width-full absolute  top-16 right-16  md:left-2/4   md:right-1/4  z-50 rounded-xl bg-gray-100 mt-2 "
        onMouseEnter={() => setCompareDropdown(true)}
        onMouseLeave={() => setCompareDropdown(false)}
      >
        <div className="h-full flex flex-col  shadow-xl  ">
          <div className="flex-1 py-6 overflow-y-auto sm:px-6 px-2">
            <h4 className="text-lg font-medium text-gray-900 border-l-4 border-red-600 pl-3">Product Compare</h4>
            <hr/>
            <div className="mt-2 px-4 overflow-hidden h-60 overflow-y-scroll">
              <div className="flow-root  ">
                <ul className="divide-y divide-gray-200 ">
                  
                  {cart.map((product) => (
                    <li key={product._id} className="py-2 flex">
                      <div className="flex-shrink-0 w-14 h-14 border border-gray-200 rounded-md overflow-hidden">
                        <img
                          src={product.img}
                          alt={product.imageAlt}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
  
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between  font-medium text-gray-900">
                            <p>
                              <a href={product.href}>{product.name}</a>
                            </p>
                            <p className="ml-4">${product.price}</p>
                          </div>
                        </div>
                        <div className="mr-auto">
                          {" "}
                          <p className="mt-1 text-sm text-gray-500 ">
                            color: {product.color}
                          </p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <p className="text-gray-500">Quantity: {product.quantity}</p>
  
                          <div className="flex">
                            <button
                              type="button"
                              className="primary_BTN_Outline px-2 font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => handleRemove(product._id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-200 py-2 px-4 sm:px-6"> 
            <hr/>
            <div className="mt-4 flex justify-between">
              <Link to="/cart"
                className="flex justify-center items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium primary_BTN_Outline" >
                View Cart </Link>
  
              <Link to="/checkout"
                className="flex justify-center items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium  primary_BTN" >
                Checkout  </Link>
            </div>
          </div>
        </div>
        
        <ToastContainer />
      </div>
    );
};

export default CompareDropdown;