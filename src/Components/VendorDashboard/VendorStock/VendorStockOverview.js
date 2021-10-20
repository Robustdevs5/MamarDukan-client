import React from 'react';
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorNavbar from '../VendorTopbar/VendorNavbar';

const VendorStockOverview = () => {
    return (
        <div className="flex flex-no-wrap">
                <VendorSidebar />
            <div className="container mx-auto md:w-4/5 w-11/12">
                <VendorNavbar />
                <section class="container mx-auto py-6 font-mono">
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th class="px-4 py-3">Name</th>
                                <th class="px-4 py-3">Image</th>
                                <th class="px-4 py-3">Stock</th>
                                <th class="px-4 py-3">Stock Quantity</th>
                                <th class="px-4 py-3">Action</th>
                            </tr>
                            </thead>
                            <tbody class="bg-white">
                            <tr class="text-gray-700">
                                <td class="px-4 py-3 text-ms font-semibold border">School Bag</td>
                                
                                <td class="px-4 py-3 border">
                                <div class="flex items-center text-sm">
                                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                    <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                    </div>
                                </div>
                                </td>
                                <td class="px-4 py-3 text-ms font-semibold border">In Stock</td>
                                <td class="px-4 py-3 text-ms font-semibold border">50</td>
                                <td class="px-4 py-3 text-ms font-semibold border">Edit | Delete</td>
                            </tr>
                            
                            <tr class="text-gray-700">
                                <td class="px-4 py-3 text-ms font-semibold border">School Bag</td>
                                
                                <td class="px-4 py-3 border">
                                <div class="flex items-center text-sm">
                                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                    <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                    </div>
                                </div>
                                </td>
                                <td class="px-4 py-3 text-ms font-semibold border">Out of stock</td>
                                <td class="px-4 py-3 text-ms font-semibold border">0</td>
                                <td class="px-4 py-3 text-ms font-semibold border">Edit | Delete</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </section>
            </div>
        </div>
    );
};

export default VendorStockOverview;