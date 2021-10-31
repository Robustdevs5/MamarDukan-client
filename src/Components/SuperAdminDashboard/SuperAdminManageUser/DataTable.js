import React from 'react';

const DataTable = (props) => {
    const {Data} = props ;
    // const {Name , Mail , Phone , Status , Action} = User ;
    return (
        <div>
            <h4 class="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">All Customers</h4>
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
                            {
                                Data.map((item, index) => {
                                return [
                                    <tr item={item} key={index} class="text-gray-700">
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Name}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Mail}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Phone}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Status}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.Active}</td>
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

export default DataTable;