import React from 'react';

const Totalcart = (props) => {
    const {itemsPrice , taxPrice , totalPrice} = props;
    return (
        <div>
            <div className="bg-gray-200 border-2 p-5">
                <div className="flex py-5"><h1 className="w-3/6 text-left">Subtotal</h1><p className="w-3/6 text-right">{itemsPrice.toFixed(2)}</p></div>
                <div className="flex border-t-2 border-gray-400 py-5"><h1 className="w-3/6 text-left">TotalTax</h1><p className="w-3/6 text-right">{taxPrice.toFixed(2)}</p></div>
                <div className="flex border-t-2 border-gray-400 py-5"><h1 className="w-3/6 text-left">Total</h1><p className="w-3/6 text-right">{totalPrice.toFixed(2)}</p></div>
            </div>
            <div className="flex">
                <h1 className="border-2 bg-white text-center mt-3 py-3 w-3/6 mr-2 cursor-pointer hover:bg-red-700">Back to Shop</h1>
                <h1 className="border-2 bg-white text-center mt-3 py-3 w-3/6 ml-2 cursor-pointer hover:bg-red-700">Proced to checkout</h1>
            </div>
        </div>
    );
};

export default Totalcart;