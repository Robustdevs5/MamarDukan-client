import React from 'react';
import VendorSidebar from '../Sidebar/VendorSidebar';
import VendorTopbar from '../VendorTopbar/VendorTopbar';

const VendorPanel = () => {
    return (
        <div className="flex flex-no-wrap">
            <VendorSidebar />
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto py-6 md:w-4/5 w-11/12">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded">
                    <VendorTopbar />
                </div>
            </div>
        </div>
    );
};

export default VendorPanel;
