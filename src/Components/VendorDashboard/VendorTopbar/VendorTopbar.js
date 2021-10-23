import React from 'react';

const VendorTopbar = () => {
    return (
        
        <section class="text-gray-600 body-font">
            <div class="container mx-auto">
                
                <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 sm:w-1/4 w-1/2">
                    <div class="bg-indigo-500 rounded-lg p-2 xl:p-6">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">2.7K</h2>
                        <p class="leading-relaxed text-gray-100 font-bold">Total Customers</p>
                    </div>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                    <div class="bg-indigo-500 rounded-lg p-2 xl:p-6">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">1.8K</h2>
                        <p class="leading-relaxed text-gray-100 font-bold">Total Orders</p>
                    </div>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                    <div class="bg-indigo-500 rounded-lg p-2 xl:p-6">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">35</h2>
                        <p class="leading-relaxed text-gray-100 font-bold">Total Revenue</p>
                    </div>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                    <div class="bg-indigo-500 rounded-lg p-2 xl:p-6">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">4</h2>
                        <p class="leading-relaxed text-gray-100 font-bold">Product Sold</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default VendorTopbar;