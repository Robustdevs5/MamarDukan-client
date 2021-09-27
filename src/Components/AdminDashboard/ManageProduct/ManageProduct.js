import React, { useEffect, useState } from 'react';
import Logo from '../../Navbar/Logo/Logo';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ProductList from './ProductList';



const ManageProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([
            {
                name: "jacket",
                price: 2341,
                _id: "sdlg;k",
            },
            {
                name: "shirt",
                price: 2341,
                _id: "sdlg;k",
            },
            {
                name: "jeans",
                price: 2341,
                _id: "sdlg;k",
            },
        ]);
    }, []);

    return (
        <div className=" bg-gray-800 ">
            <div className="w-screen h-20 p-6">
                <Logo />
            </div>

            <div className="flex flex-wrap">
                <AdminSidebar />

                <div className="sm:w-3/5 w-screen  p-4">
                    <h1 className="mt-3 text-2xl font-bold text-white m-4 ">
                        Manage Products
                    </h1>
                    <div className=" shadow rounded  text-center bg-gray-100   ">
                        <div className=" p-5">
                            <div className="flex justify-between font-bold p-3">
                                <p>Name</p>
                                <p>Price</p>
                                <p>Action</p>
                            </div>
                            <div>
                                {products.length &&
                                    products.map((fd) => (
                                        <ProductList product={fd}></ProductList>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;
