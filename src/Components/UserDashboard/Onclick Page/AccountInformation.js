import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaMapMarkerAlt, FaRegUser } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { MdDateRange } from 'react-icons/md';
import { userContext } from '../../../App';



const AccountInformation = () => {

    const { user, setUser } = useContext(userContext);
    const [Profile, setprofile] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user/profile')
        .then (response => response.json())
        .then (data => console.log('profile', data))
        .catch (error => console.log('error', error))
    })



    return (
        <div className="p-8">
            <h1 className="font-bold text-2xl my-8">Account Information</h1>

            <div className="text-gray-700">
                <div className="flex items-center py-1">
                    <FaRegUser className="h-4 w-4 mx-3 fill-current"></FaRegUser>
                    <h3 className="">
                        <span className="font-bold">Name :</span>
                        Tamal Datta
                    </h3>
                </div>

                <div className="flex items-center py-1">
                    <MdDateRange className="h-4 w-4 mx-3 fill-current"></MdDateRange>
                    <h3 className="">
                        <span className="font-bold">Date of birth :</span>
                        09-09-08
                    </h3>
                </div>

                <div className="flex items-center py-1">
                    <AiOutlineMail className="h-4 w-4 mx-3 fill-current"></AiOutlineMail>
                    <h3 className="">
                        <span className="font-bold">Email :</span>
                        0909009900@ganil.com
                    </h3>
                </div>

                <div className="flex items-center py-1">
                    <FiPhoneCall className="h-4 w-4 mx-3 fill-current"></FiPhoneCall>
                    <h3 className="">
                        <span className="font-bold">Phone :</span>
                        01781998899
                    </h3>
                </div>

                <div className="flex items-center py-1">
                    <FaMapMarkerAlt className="h-4 w-4 mx-3 fill-current"></FaMapMarkerAlt>
                    <h3 className="">
                        <span className="font-bold">Address :</span>
                        hadfshfn aas jays daskj ha
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default AccountInformation;
