import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';

const BlogDetails = () => {
    const [blog, setBlog] = useState([]);
    const [recentBlogs, setRecentBlogs] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:5000/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data.result))
    }, [id])
    

        useEffect(() => {
            fetch(`http://localhost:5000/blogs`)
                .then(res => res.json())
                .then(data => setRecentBlogs(data.blog))
        }, [])

        const history = useHistory();
        const handleBlogClick = (id) => {
            history.push(`/blog/${id}`);
        }
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

        <main className="relative container mx-auto bg-white">
        
        <div className="px-6 py-8">
        <div className="container flex justify-between mx-auto">
        
            <div className="w-full lg:w-8/12"> 
                <div className="w-full mx-auto pb-8">
                    <div className="relative overflow-hidden rounded-2xl">
                    <img className="w-full h-full inset-0 object-cover" src={blog.img} alt="Blog Title" />
                    </div>
                </div>   
                <article className="">
                    <h1 className="text-2xl font-bold">{blog.name}</h1>
                    <h2 className="mt-2 text-sm text-gray-500">Admin, 28 November 2021</h2>

                    <p className="mt-6">{blog.description}</p>
                </article>
            </div>
            <div className="hidden w-4/12 -mx-8 lg:block">
                <div className="px-8 mt-10">
                    <h1 className="border-l-4 border-red-600 pl-4 mb-4 text-xl font-bold text-gray-700">Categories</h1>
                    <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <ul>
                            <li className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- How To</li>
                            <li className="mt-2 mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Dashboard</li>
                            <li className="mt-2 mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Vendor
                            </li>
                            <li className="mt-2 mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Design</li>
                            <li className="flex items-center mt-2 mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Product</li>
                            <li className="flex items-center mt-2 mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Discount
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-8 mt-10">
                    <h1 className="border-l-4 border-red-600 pl-4 mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
                    <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                    {
                    recentBlogs
                    .slice(0,5)
                    .map(blog =>
                        <div className="mt-4">
                            <p onClick={() => handleBlogClick(blog._id)} className="text-lg font-medium text-gray-700 hover:underline">{blog.name}</p>
                        </div>
                    )}            
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