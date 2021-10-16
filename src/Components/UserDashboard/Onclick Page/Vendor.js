import React from 'react';

const Vendor = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Become A Vendor</h1>
            <h3 className='py-1'>Shop Name :</h3>
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-1'>Shop URL :</h3> 
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-1'>Phone Number :</h3>
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <p className="border-2 text-center p-2 hover:bg-pink-500 cursor-pointer "> Update</p>
        </div>
    );
};

export default Vendor;