import React, { useState } from 'react';
import AccountInformation from './Onclick Page/AccountInformation';
import UpdateProfile from './Onclick Page/UpdateProfile';
import Orders from './Onclick Page/Orders';
import Address from './Onclick Page/Address';
import ChangePassword from './Onclick Page/ChangePassword';
import Vendor from './Onclick Page/Vendor';

const Sidebar = () => {
    const [active, setActive] = useState('Account')
    const button = [
        {   
            Title : 'Account',
            name: 'Account Information'
        },{   
            Title : 'Profile',
            name: 'Update Profile'
        },{   
            Title : 'Orders',
            name: 'Orders'
        },{   
            Title : 'Address',
            name: 'Address'
        },{   
            Title : 'Password',
            name: 'Change Password'
        },{   
            Title : 'Vendor',
            name: 'Become A Vendor'
        },{   
            Title : 'Logout',
            name: 'Logout'
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
                <ul>
                    {
                        button.map((item, index) => <li className="cursor-pointer p-4 font-bold	border-2 hover:bg-red-50" onClick={() => setActive(`${item.Title}`)} key={index} item={item}>{item.name}</li>)
                    }
                </ul>
            </div>
            <div className="">
                {active === 'Account' && <AccountInformation />}
                {active === 'Profile' && <UpdateProfile />}
                {active === 'Orders' && <Orders />}
                {active === 'Address' && <Address />}
                {active === 'Password' && <ChangePassword />}
                {active === 'Vendor' && <Vendor />}
                {active === 'Logout' && <Vendor />}
            </div>
        </div>
    );
};

export default Sidebar;