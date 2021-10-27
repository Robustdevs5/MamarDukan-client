import React, { useContext, useState } from 'react';
import AccountInformation from './Onclick Page/AccountInformation';
import UpdateProfile from './Onclick Page/UpdateProfile';
import Orders from './Onclick Page/Orders';
import Address from './Onclick Page/Address';
import ChangePassword from './Onclick Page/ChangePassword';
import Vendor from './Onclick Page/Vendor';
import "./userDashboard.css";
import { BsListCheck, BsPencilSquare, BsCart } from 'react-icons/bs';
import { FaCartPlus, FaLock, FaMapMarkerAlt, FaRegUser } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import { userContext } from '../../App';



const Sidebar = () => {

    

    const { user, setUser } = useContext(userContext);

    const [active, setActive] = useState('Account')

    const button = [
        {
            Title: 'Account',
            name: 'Account Information',
            icon: <FaRegUser className="h-6 w-5 mx-3 fill-current"></FaRegUser>
        }, {
            Title: 'Profile',
            name: 'Update Profile',
            icon: <BsPencilSquare className="h-6 w-5 mx-3 fill-current"></BsPencilSquare>
        }, {
            Title: 'Orders',
            name: 'Orders',
            icon: <BsListCheck className="h-6 w-5 mx-3 fill-current"></BsListCheck>
        }, {
            Title: 'Address',
            name: 'Address',
            icon: <FaMapMarkerAlt className="h-6 w-5 mx-3 fill-current"></FaMapMarkerAlt>
        }, {
            Title: 'Password',
            name: 'Change Password',
            icon: <FaLock className="h-6 w-5 mx-3 fill-current"></FaLock>
        }, {
            Title: 'Vendor',
            name: 'Become A Vendor',
            icon: <FaCartPlus className="h-6 w-5 mx-3 fill-current"></FaCartPlus>
        }, {
            Title: 'Logout',
            name: 'Logout',
            icon: <IoMdLogOut className="h-6 w-5 mx-3 fill-current"></IoMdLogOut>
        },
    ]



    return (
        <section className="mx-16 text-gray-800">
            <div className="md:flex">
                <div className="md:w-1/3 w-full">

                    <div className="flex my-8">
                        <div className="w-16 h-16">
                            <img
                                className="w-full h-full rounded-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" alt="" />
                        </div>

                        <div className="mx-4 p-1 text-gray-600">
                            <h3>Hello</h3>
                            <p>{user.email || "noemail@gmail.com"}</p>
                        </div>
                    </div>

                    <ul>
                        {
                            button.map((item, index) => <div
                                className="cursor-pointer hover:bg-red-700 hover:text-white rounded p-4 font-bold flex items-center border-2"
                                onClick={() => setActive(`${item.Title}`)}
                                key={index} item={item}
                            >
                                <li className="">
                                    {item.icon}
                                </li>
                                <li className="">
                                    {item.name}
                                </li>

                            </div>
                            )
                        }
                    </ul>
                </div>
                <div className="md:w-3/4 mb-6">
                    {active === 'Account' && <AccountInformation />}
                    {active === 'Profile' && <UpdateProfile />}
                    {active === 'Orders' && <Orders />}
                    {active === 'Address' && <Address />}
                    {active === 'Password' && <ChangePassword />}
                    {active === 'Vendor' && <Vendor />}
                    {active === 'Logout' && <Vendor />}
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
