import React, { useState } from 'react';
import AddressFrom from './AddressFrom';

const Address = () => {

    const [address, setAddress] = useState(false)

    const handleClick = () => {
        setAddress(!address)
    }


    return (
        <>
            <div className="p-8">
                <h2 className="py-1">Address Book</h2>

                <button
                    onClick={handleClick}
                    className="rounded p-2 text-white"
                    style={{backgroundColor: "#dd2400"}}
                >
                    {address ? "Cancel" : "Add new address"}
                </button>
            </div>

            <div>
                {address && <AddressFrom />}
            </div>
        </>
    );
};

export default Address;