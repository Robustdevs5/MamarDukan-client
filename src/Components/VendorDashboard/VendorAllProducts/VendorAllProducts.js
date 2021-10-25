import React from 'react';
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorNavbar from '../VendorTopbar/VendorNavbar';

const VendorAllProducts = () => {
    return (
        <div className="flex flex-no-wrap">
            <VendorSidebar />
            
            <div className="container mx-auto py-6 md:w-4/5 w-11/12">
            <VendorNavbar />
                <div className="w-full h-full rounded">

                <h4 class="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">All Products</h4>
                    <section class="container mx-auto py-6 font-mono">
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th class="px-4 py-3">Name</th>
                                <th class="px-4 py-3">Price</th>
                                <th class="px-4 py-3">Brand</th>
                                <th class="px-4 py-3">Image</th>
                                <th class="px-4 py-3">Category</th>
                                <th class="px-4 py-3">Color</th>
                                <th class="px-4 py-3">Size</th>
                                <th class="px-4 py-3">Department</th>
                                <th class="px-4 py-3">Action</th>
                            </tr>
                            </thead>
                            <tbody class="bg-white">
                            <tr class="text-gray-700">
                                <td class="px-4 py-3 text-ms font-semibold border">Sufyan</td>
                                <td class="px-4 py-3 text-ms font-semibold border">100</td>
                                <td class="px-4 py-3 text-ms font-semibold border">Acer</td>
                                
                                <td class="px-4 py-3 border">
                                <div class="flex items-center text-sm">
                                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                    <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                    </div>
                                </div>
                                </td>
                                <td class="px-4 py-3 text-ms font-semibold border">Men</td>
                                <td class="px-4 py-3 text-ms font-semibold border">Red</td>
                                <td class="px-4 py-3 text-ms font-semibold border">M</td>
                                <td class="px-4 py-3 text-ms font-semibold border">Cloths</td>
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

export default VendorAllProducts;