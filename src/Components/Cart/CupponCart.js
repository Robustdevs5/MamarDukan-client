import React from 'react';

const CupponCart = () => {
    return (
        <div>
            <h1 className="p-5 text-3xl">Cuppon Discount</h1>
            <input className="w-5/6 border-2 m-5 px-5 py-3" placeholder="Apply Coupon Code"></input>
            <h3 className="p-5"><span className=" px-7 py-2 text-2xl border-2">Apply</span></h3>
        </div>
    );
};

export default CupponCart;