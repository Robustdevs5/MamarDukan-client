import React from 'react';

const AddProductFrom = () => {
    return (
        <div className="w-full h-full rounded">
                    <h4 class="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">Add Product</h4>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="mt-5 md:mt-0 md:col-span-3">
                            <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                                    Department
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>Cloth</option>
                                        <option>Bag</option>
                                        <option>Shoe</option>
                                    </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>Men</option>
                                        <option>Women</option>
                                        <option>Kids</option>
                                    </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                                        Brand
                                    </label>
                                    <select
                                        id="brand"
                                        name="brand"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>X</option>
                                        <option>Y</option>
                                        <option>Z</option>
                                    </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                                        Size
                                    </label>
                                    <select
                                        id="size"
                                        name="size"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XlL</option>
                                    </select>
                                    </div>

                                    <div className="col-span-6">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                placeholder="you@example.com"
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                    >
                                        <span>Upload a Product image</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>

                </div>
    );
};

export default AddProductFrom;