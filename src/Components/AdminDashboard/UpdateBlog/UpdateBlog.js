import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Logo from '../../Navbar/Logo/Logo';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const UpdateBlog = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);
    const [blog, setBlog] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data.blog))
    }, [id])

    const handleSubmit = e => {

        const blogInfo = {
            name: e.target.name.value || blog.name,
            description: e.target.description.value || blog.description,
            category: e.target.category.value || blog.category,
            img: imageURL || blog.img
        };
        console.log(blogInfo);


        const url = `http://localhost:5000/blogs/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogInfo)
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

                    <section className="mx-10">
                        <h1 className="font-bold text-white p-4 text-2xl">Update Blog</h1>
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
                                        defaultValue={blog.name}
                                    />
                                </div>

                                <div class="mb-6">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="category"
                                    >
                                        Category: <span className="text-blue-600">{blog.category}</span>
                                    </label>
                                    <select className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600" name="category" id="cars">

                                        <option value="None">None</option>
                                        <option value="Man">Man</option>
                                        <option value="Women">Women</option>
                                    </select>
                                </div>{" "}

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
                                    />
                                    {imageURLStatus ?
                                        <small className="text-green-600">Image Uploaded</small>
                                        :
                                        <small className="text-red-700">Upload Image</small>
                                    }
                                    <img className="w-12 mx-36" src={blog.img} alt="" />

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
                                        defaultValue={blog.description}
                                    />
                                </div>
                                <div class="flex items-end justify-end">
                                    <button
                                        class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Submit
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

export default UpdateBlog;
