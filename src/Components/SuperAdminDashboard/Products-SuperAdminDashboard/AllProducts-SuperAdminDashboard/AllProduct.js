import React from 'react';

const AllProduct = (props) => {
    const {Data} = props ;
    // const {Name , Mail , Phone , Status , Action} = User ;
    return (
        <div>
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
                            {
                                Data.map((item, index) => {
                                return [
                                    <tr item={item} key={index} class="text-gray-700">
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Name}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Price}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Brand}</td>

                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                            <img class="object-cover w-full h-full rounded-full" src={item.Image} alt="" loading="lazy" />
                                            <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                    </td>                                    
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Category}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Color}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Size}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Department}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Action}</td>
                                </tr>
                                ]
                                })
                            }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default AllProduct;