import React from 'react';
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorNavbar from '../VendorTopbar/VendorNavbar';
import MessageOverview from './MessageOverview';

const VendorMessage = () => {
    return (
        <div className="flex flex-no-wrap">
                <VendorSidebar />
            <div className="container mx-auto md:w-4/5 w-11/12">
                <VendorNavbar />
                <MessageOverview />
            </div>
        </div>
    );
};

export default VendorMessage;