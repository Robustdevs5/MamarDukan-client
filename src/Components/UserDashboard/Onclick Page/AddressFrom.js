import React from 'react';

const AddressFrom = () => {
    return (
        <div className="">
            <h1 className="text-2xl font-bold">Create Password</h1>
            <h3 className='py-1'>Full Name :</h3>
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-1'>Email :</h3> 
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-1'>Phone :</h3>
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-1'>State :</h3> 
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-1'>City :</h3> 
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-1'>Address :</h3>  
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input><br />
            <p className="border-2 text-center p-2 hover:bg-pink-500 cursor-pointer "> Update</p>
        </div>
    );
};

export default AddressFrom;