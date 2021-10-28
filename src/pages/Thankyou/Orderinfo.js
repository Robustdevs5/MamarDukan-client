import React, { useContext } from 'react';
import { userContext } from '../../App';
import {Cart} from '../../Components/ShopingCart/Data'

const Orderinfo = () => {
    // const { cart, setCart } = useContext(userContext);
    console.log('Order' , Cart)

    return (
        <div className="">
            <h1>Order No : #89374894yrvuefgh</h1>
            {
                Cart.products.map((item, index) => (
                    <div item={item} key={index} className="w-full flex">
                        <div className="w-1/3">
                            <img className="w-20 h-20" src={item.pictureUrl}></img>
                        </div>
                        <h1 className="w-1/3">{item.title}</h1>
                        <h4 className="w-1/3">{item.price}</h4>
                    </div>
                ))
            }


            <div>
                <div
                    className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Subtotal<span className="ml-2">$20</span></div>
                <div
                    className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Shipping Tax<span className="ml-2">$020}</span></div>
                <div
                    className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Tax<span className="ml-2">$20</span></div>
                <div
                    className="flex justify-between items-center w-full py-4 text-sm font-extrabold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Total<span className="ml-2">$20</span></div>
                </div>
        </div>
    );
};

export default Orderinfo;