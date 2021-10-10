import React, { useState } from 'react';
import AddressFrom from './AddressFrom';

const Address = () => {

    const [address, setAddress] = useState(false)

    const handleClick = () => {
        setAddress(!address)
    }


    return (
        <div className="p-10">

            <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl my-8">Address Book</h2>

                <button
                    onClick={handleClick}
                    className="py-1 px-2 primary_BTN rounded duration-300"
                >
                    {address ? "Cancel" : "Add new address"}
                </button>
            </div>

            <div>
                {address && <AddressFrom />}
            </div>
        </div>
    );
};

export default Address;