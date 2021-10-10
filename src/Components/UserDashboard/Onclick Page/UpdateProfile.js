import React from 'react';

const UpdateProfile = () => {
    return (
        <div className="p-10">
            <h1 className="p-4 font-bold text-2xl">Update Profile</h1>
            <h3 className='py-2'>Full Name :</h3>
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-2'>Date of Birth :</h3>
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-2'>Email :</h3>
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <h3 className='py-2'>Phone :</h3>
            <input placeholder="Your Name" type="text" className="border-2 border-black mb-6 w-full p-4"></input>
            <p className="border-2 text-center p-2 hover:bg-pink-500 cursor-pointer "> Update</p>
        </div>
    );
};

export default UpdateProfile;
