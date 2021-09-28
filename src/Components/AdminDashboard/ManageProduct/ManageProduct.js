import React, { useEffect, useState } from 'react';
import Logo from '../../Navbar/Logo/Logo';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ProductList from './ProductList';



const ManageProduct = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    console.log(product);


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
                                {product.length &&
                                    product.map((product) => (
                                        <ProductList product={product}></ProductList>
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
