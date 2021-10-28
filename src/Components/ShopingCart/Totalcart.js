import React from 'react';

const Totalcart = (props) => {
    const {itemsPrice , taxPrice , totalPrice} = props;
    return (
        <div className="pt-12 md:pt-0 2xl:ps-4 tracking-tight">
        <h2 className="text-xl font-bold border-l-4 border-red-600 ml-5 pl-2 capitalize ">Cart Summary</h2>

        <div
            className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Subtotal<span className="ml-2">$5</span></div>
        <div
            className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Shipping Tax<span className="ml-2">$5</span></div>
        <div
            className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Tax<span className="ml-2">$555</span></div>
        <div
            className="flex justify-between items-center w-full py-4 text-sm font-extrabold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Total<span className="ml-2">$55</span></div>
        
    </div>
    );
};

export default Totalcart;