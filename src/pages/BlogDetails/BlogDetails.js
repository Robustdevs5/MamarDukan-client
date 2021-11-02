import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';

const BlogDetails = () => {
    const [blog, setBlog] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:5000/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data.result))
    }, [id])
    //console.log("single blog", blog);
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

        <main className="relative container mx-auto bg-white">
        <div className="w-full mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
            <img className="w-full h-full inset-0 object-cover" src={blog.img} alt="Blog Title" />
            </div>
        </div>
        <div className="px-6 py-8">
        <div className="container flex justify-between mx-auto">
            <div className="w-full lg:w-8/12">    
                <article className="">
                    <h1 className="text-2xl font-bold">{blog.name}</h1>
                    <h2 className="mt-2 text-sm text-gray-500">Admin, 28 November 2021</h2>

                    <p className="mt-6">{blog.description}</p>
                </article>
            </div>
            <div className="hidden w-4/12 -mx-8 lg:block">
                <div className="px-8">
                <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
                    <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                        <ul className="-mx-4">
                            <li className="flex items-center"><img
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                                <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Alex John</a><span
                                        className="text-sm font-light text-gray-700">Created 23 Posts</span></p>
                            </li>
                            <li className="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                                <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Jane Doe</a><span
                                        className="text-sm font-light text-gray-700">Created 52 Posts</span></p>
                            </li>
                            <li className="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                                <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Lisa Way</a><span
                                        className="text-sm font-light text-gray-700">Created 73 Posts</span></p>
                            </li>
                            <li className="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                                <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Steve Matt</a><span
                                        className="text-sm font-light text-gray-700">Created 245 Posts</span></p>
                            </li>
                            <li className="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                                <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Khatab
                                        Wedaa</a><span className="text-sm font-light text-gray-700">Created 332 Posts</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-8 mt-10">
                    <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
                    <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <ul>
                            <li><a href="#" className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    How To</a></li>
                            <li className="mt-2"><a href="#"
                                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Dashboard</a></li>
                            <li className="mt-2"><a href="#"
                                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Vendor</a>
                            </li>
                            <li className="mt-2"><a href="#"
                                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Design</a></li>
                            <li className="flex items-center mt-2"><a href="#"
                                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Product</a></li>
                            <li className="flex items-center mt-2"><a href="#"
                                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Discount</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-8 mt-10">
                    <h1 className="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
                    <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div className="mt-4"><a href="#" className="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                                <div className="mt-4"><a href="#" className="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                                <div className="mt-4"><a href="#" className="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                                <div className="mt-4"><a href="#" className="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                                <div className="mt-4"><a href="#" className="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        </main>
      <Footer />
    </>
  );
};

export default BlogDetails;