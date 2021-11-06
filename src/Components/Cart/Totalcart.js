import React, { useContext } from 'react';
import { userContext } from '../../App';

const Totalcart = ({setPriceTotal}) => {
    const { cart, setCart } = useContext(userContext);

    let totalQuantity = 0;
    let subTotal = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        subTotal = subTotal + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = subTotal > 0 ? 15 : 0;
    const tax = (subTotal + shipping) * 0.10;
    const Total = subTotal + shipping + tax;
    // const totalPrice = setPriceTotal(Total)
    setPriceTotal = Total

    return (
        <div className="pt-12 md:pt-0 2xl:ps-4 tracking-tight">
        {/* <h2 className="text-xl font-bold border-l-4 border-red-600 ml-5 pl-2 capitalize ">Price Summary</h2> */}

        <div
            className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Subtotal<span className="ml-2">${subTotal.toFixed(2)}</span></div>
        <div
            className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Shipping Cost<span className="ml-2">${shipping.toFixed(2)}</span></div>
        <div
            className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Tax<span className="ml-2">${tax.toFixed(2)}</span></div>
        <div
            className="flex justify-between items-center w-full py-4 text-sm font-extrabold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Total<span className="ml-2">${Total.toFixed(2)}</span></div>
        
    </div>
    );
};

export default Totalcart;