import React from 'react';

const Vendor = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className="p-8">
            <h1 className="p-4 font-bold text-2xl">Become Vendor</h1>
            <form onClick={handleSubmit}>

                <h3 className="py-2">Full Name :</h3>
                <input placeholder="Your Name" type="text" name="name"
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                >
                </input>

                <h3 className="py-2">Date of Birth :</h3>
                <input placeholder="Date of Birth" type="date" name="DOB"
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                >
                </input>

                <h3 className="py-2">Email :</h3>
                <input placeholder="Your Email" type="email" name="email"
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                >
                </input>

                <h3 className="py-2">Phone :</h3>
                <input placeholder="Phone" type="number" name="phone"
                    className="border rounded border-gray-400 mb-6 w-full p-3"
                >
                </input>

                {/* <p className="border-2 text-center p-2 hover:bg-pink-500 cursor-pointer "> Update</p> */}

                <input type="submit" value="Update"
                    className="p-3 primary_BTN_Outline rounded duration-300 w-full cursor-pointer"
                />
            </form>
        </div>
    );
};

export default Vendor;
