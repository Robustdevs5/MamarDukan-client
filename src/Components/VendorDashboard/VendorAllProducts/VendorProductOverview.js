import React from 'react';
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorNavbar from '../VendorTopbar/VendorNavbar';
import ProductOverviewChart from './ProductOverviewChart';

const VendorProductOverview = () => {
    return (
        <div className="flex flex-no-wrap">
                <VendorSidebar />
            <div className="container mx-auto md:w-4/5 w-11/12">
                <VendorNavbar />
                <ProductOverviewChart />
            </div>
        </div>
    );
};

export default VendorProductOverview;