import React, { useState } from 'react';
import AddressFrom from './AddressFrom';

const Address = () => {
    const [address, setAddress] = useState(false)
    return (
        <div className="p-8">
            <h2 className="py-1">Address Book</h2>
            <p className="">Add a new address</p>
            {address && <AddressFrom />}
        </div>
    );
};

export default Address;