import React, { useContext } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaMapMarkerAlt, FaRegUser } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlinePayments, MdPayment } from 'react-icons/md';



const ShipingInfo = (props) => {
    
    return (
        <div className="">
            <h1 className="font-bold text-2xl m-2 mt-16">Shiping Information</h1>

            <div className="text-gray-700">
                <div className="flex items-center py-1">
                    <FaRegUser className="h-4 w-4 mx-3 fill-current"></FaRegUser>
                    <h3 className="">
                        <span className="font-bold">Name :  </span>
                        Tamal Datta
                    </h3>
                </div>

                <div className="flex items-center py-1">
                    <FiPhoneCall className="h-4 w-4 mx-3 fill-current"></FiPhoneCall>
                    <h3 className="">
                        <span className="font-bold">Phone : </span>
                        011122365
                    </h3>
                </div>

                <div className="flex items-center py-1">
                    <AiOutlineMail className="h-4 w-4 mx-3 fill-current"></AiOutlineMail>
                    <h3 className="">
                        <span className="font-bold">Email : </span>
                        0909009900@ganil.com
                    </h3>
                </div>

                <div className="flex items-center py-1">
                    <FaMapMarkerAlt className="h-4 w-4 mx-3 fill-current"></FaMapMarkerAlt>
                    <h3 className="">
                        <span className="font-bold">Address :  </span>
                        20 , jolarpar, Sylhet
                    </h3>
                </div>

                <div className="flex items-center py-1">
                    <MdPayment className="h-4 w-4 mx-3 fill-current"></MdPayment>
                    <h3 className="">
                        <span className="font-bold">Payment method :  </span>
                        Stripe
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ShipingInfo;