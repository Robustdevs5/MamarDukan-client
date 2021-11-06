import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { DashboardContainer } from '../../Style/AddSuperAdminStyle';
import SuperAdminSidebar from '../../SuperAdminSidebar/SuperAdminSidebar';
import TopbarSuperAdminDashboard from '../../Topbar-SuperAdminDashboard/TopbarSuperAdminDashboard';



const AddBlog = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);


    const handleSubmit = e => {
        const blogInfo = {
            name: e.target.name.value,
            description: e.target.description.value,
            category: e.target.category.value,
            date: new Date().toDateString('dd/MM/yyyy HH:MM:SS'),
            img: imageURL
        };


        const url = `https://mamar-dukan.herokuapp.com/blogs`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogInfo)
        })
            .then(res => res.json())
            .then(data => {
                setDbStatus(data);
                if (data) {
                    toast.success("Blog added Successfully", {
                        position: "bottom-right",
                    });
                    // e.target.reset();
                }
            })

        e.preventDefault();
    }


    const handleImageUpload = (event) => {
        const imageData = new FormData()
        imageData.set('key', 'ca6c9c7b95b538d35b5137a6b8deb060');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                setImageURLStatus(true);
                if (response) {
                    // alert('Image Uploaded Successfully')

                }
            })
            .catch(function (error) {
            });
    }



    return (
        <>
            <div className=" bg-gray-800 ">
                {/* <div className="w-screen h-20 p-6">
                    <Logo />
                </div> */}
                <DashboardContainer>
                    <SuperAdminSidebar/>
                
                    <div className="md:w-5/6 w-full h-screen scrollBar">
                        <TopbarSuperAdminDashboard/>

                    <section className="mx-10">
                        <h1 className="font-bold text-white p-4 text-2xl">Add a new Blog</h1>
                        <div class="  ">

                            <form
                                class=" shadow-md rounded bg-blue-100 p-6 pb-8 mb-4 grid grid-cols-2 gap-4"
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
                                        placeholder="Name"
                                        required
                                    />
                                </div>

                                <div class="mb-6">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="category"
                                    >
                                        Category
                                    </label>
                                    <select className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600" name="category" id="cars">
                                        <option value="None">None</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Branding">Branding</option>
                                        <option value="Promotion">Promotion</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="How To">How To</option>
                                        <option value="E-commerce">E-commerce</option>
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
                                        placeholder="image"
                                        required
                                    />
                                    {imageURLStatus ?
                                        <small className="text-green-600">Image Uploaded</small>
                                        :
                                        <small className="text-red-700">Upload Image</small>
                                    }

                                </div>{" "}

                                <div class="mb-6">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="description"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="textarea"
                                        name="description"
                                        placeholder="Description"
                                    />
                                </div>
                                <div class="flex items-end justify-end">
                                    {imageURLStatus ? <button
                                        class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                        :
                                        <button
                                            class="bg-blue-300 text-white font-bold py-2 px-4 rounded"
                                            type="submit"
                                            disabled
                                        >
                                            Submit
                                        </button>
                                    }
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </DashboardContainer>
            <ToastContainer /> 
            </div>
        </>

    );
};

export default AddBlog;
