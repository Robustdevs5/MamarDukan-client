import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Logo from '../../Navbar/Logo/Logo';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const UpdateProduct = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);
    const [product, setProduct] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data.product))
    }, [id])
console.log(product);


    const handleSubmit = e => {
        const productInfo = {
            name: e.target.name.value,
            description: e.target.description.value,
            size: e.target.size.value,
            category: e.target.category.value,
            color: e.target.color.value,
            department: e.target.department.value,
            seller: e.target.seller.value,
            price: e.target.price.value,
            discount: e.target.discount.value,
            brand: e.target.brand.value,
            img: imageURL
        };
        console.log(productInfo);


        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setDbStatus(data);
                    alert('Product Updated');
                }
            })
        e.preventDefault();
    }


    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', 'ca6c9c7b95b538d35b5137a6b8deb060');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
                setImageURLStatus(true);
                if (response) {
                    alert('Image Uploaded Successfully')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className=" bg-gray-800 ">
                <div className="w-screen h-20 p-6">
                    <Logo />
                </div>

                <div className="flex  md:flex-row flex-col">
                    <AdminSidebar />

                    <section className="mx-4">
                        <h1 className="font-bold text-white p-4 text-2xl">Update product</h1>
                        <div class="  ">

                            <form
                                class=" shadow-md rounded bg-blue-100 p-6 pb-8 mb-4 grid grid-cols-3 gap-4"
                                onSubmit={handleSubmit}
                            >
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="text"
                                        name="name"
                                        defaultValue ={product.name}
                                        placeholder={product.name}
                                    />
                                </div>

                                <div class="mb-6">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="category"
                                    >
                                        Category
                                    </label>
                                    <input
                                        class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="text"
                                        name="category"
                                        placeholder="Category"
                                    />
                                </div>

                                <div class="mb-6">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="department"
                                    >
                                        Department
                                    </label>
                                    <input
                                        class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="text"
                                        name="department"
                                        placeholder="department"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="discount"
                                    >
                                        Discount
                                    </label>
                                    <input
                                        class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="text"
                                        name="discount"
                                        placeholder="discount"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="brand"
                                    >
                                        Brand
                                    </label>
                                    <input
                                        class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="text"
                                        name="brand"
                                        placeholder="Brand"
                                    />
                                </div>
                                <div class="mb-6">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="size"
                                    >
                                        Size
                                    </label>
                                    <input
                                        className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="text"
                                        name="size"
                                        placeholder="Size"
                                    />
                                </div>
                                <div class="mb-6">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="color"
                                    >
                                        Color
                                    </label>
                                    <input
                                        class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="text"
                                        name="color"
                                        placeholder="color"
                                    />
                                </div>
                                <div class="mb-6">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="price"
                                    >
                                        price
                                    </label>
                                    <input
                                        class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="text"
                                        name="price"
                                        placeholder="price"
                                    />
                                </div>{" "}
                                <div class="mb-6">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="seller"
                                    >
                                        seller
                                    </label>
                                    <input
                                        class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="text"
                                        name="seller"
                                        placeholder="seller"
                                    />
                                </div>
                                <div class="mb-6">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="image"
                                    >
                                        Image
                                    </label>
                                    <input
                                        class="shadow appearance-none border-1 hover:bg-blue-600 hover:text-gray-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        onChange={handleImageUpload}
                                        type="file"
                                        name="image"
                                        placeholder="image"
                                    />
                                </div>{" "}
                                <div class="mb-6">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="description"
                                    >
                                        Description
                                    </label>
                                    <input
                                        class="shadow appearance-none h-24 border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="textarea"
                                        name="description"
                                        placeholder="Description"
                                    />
                                </div>
                                <div class="flex items-center justify-between">
                                    <button
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default UpdateProduct;
