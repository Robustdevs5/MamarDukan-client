import React from 'react';
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorNavbar from '../VendorTopbar/VendorNavbar';

const VendorOrders = () => {
    return (
        <div className="flex flex-no-wrap">
                <VendorSidebar />
            <div className="container mx-auto md:w-4/5 w-11/12">
                <VendorNavbar />
                <div className="w-full h-full rounded">

                <h4 class="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">All Orders</h4>
                    <section class="container mx-auto py-6 font-mono">
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th class="px-4 py-3">Name</th>
                                <th class="px-4 py-3">Mail</th>
                                <th class="px-4 py-3">Phone</th>
                                <th class="px-4 py-3">Status</th>
                                <th class="px-4 py-3">Action</th>
                            </tr>
                            </thead>
                            <tbody class="bg-white">
                            <tr class="text-gray-700">
                                <td class="px-4 py-3 text-ms font-semibold border">Sufyan</td>
                                <td class="px-4 py-3 text-ms font-semibold border">sufyan@gmail.com</td>
                                <td class="px-4 py-3 text-ms font-semibold border">01800 000000</td>
                                <td class="py-3 px-6 text-center border"> 
                                    <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                                </td>
                                <td class="px-4 py-3 text-ms font-semibold border">Edit | Delete</td>
                            </tr>
                            <tr class="text-gray-700">
                                <td class="px-4 py-3 text-ms font-semibold border">Sufyan</td>
                                <td class="px-4 py-3 text-ms font-semibold border">sufyan@gmail.com</td>
                                <td class="px-4 py-3 text-ms font-semibold border">01800 000000</td>
                                <td class="py-3 px-6 text-center border"> 
                                    <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td class="px-4 py-3 text-ms font-semibold border">Edit | Delete</td>
                            </tr>
                            <tr class="text-gray-700">
                                <td class="px-4 py-3 text-ms font-semibold border">Sufyan</td>
                                <td class="px-4 py-3 text-ms font-semibold border">sufyan@gmail.com</td>
                                <td class="px-4 py-3 text-ms font-semibold border">01800 000000</td>
                                <td class="py-3 px-6 text-center border"> 
                                    <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
                                </td>
                                <td class="px-4 py-3 text-ms font-semibold border">Edit | Delete</td>
                            </tr>
                            <tr class="text-gray-700">
                                <td class="px-4 py-3 text-ms font-semibold border">Sufyan</td>
                                <td class="px-4 py-3 text-ms font-semibold border">sufyan@gmail.com</td>
                                <td class="px-4 py-3 text-ms font-semibold border">01800 000000</td>
                                <td class="py-3 px-6 text-center border"> 
                                    <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Scheduled</span>
                                </td>
                                <td class="px-4 py-3 text-ms font-semibold border">Edit | Delete</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default VendorOrders;