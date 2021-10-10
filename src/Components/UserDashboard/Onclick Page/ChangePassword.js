import React from 'react';

const ChangePassword = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Change Password</h1>
            <h3 className='py-1'>Current Password :</h3>
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-1'>New Password :</h3> 
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-1'>Confirm Password :</h3>
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <p className="border-2 text-center p-2 hover:bg-pink-500 cursor-pointer "> Change Password</p>
        </div>
    );
};

export default ChangePassword;