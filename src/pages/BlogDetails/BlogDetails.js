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
      fetch(`https://mamar-dukan.herokuapp.com/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data.result))
    }, [id])
    

    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => setRecentBlogs(data.blog))
    }, [])

    const history = useHistory();
    const handleBlogClick = (id) => {
        history.push(`/blog/${id}`);
    }

    //Department unique Names
    let uniqCatName = [];
    for (let i = 0; i < recentBlogs.length; i++) {
        let element = recentBlogs[i].category;
        let index = uniqCatName.indexOf(element);
        if (index === -1) {
            uniqCatName.push(element);
        }
    }

    const handleCategoryClick =(dept)=>{
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
                    <img className="w-full h-full inset-0 object-cover" src={blog.img} alt={blog.name} />
                    </div>
                </div>   
                <article className="">
                    <h1 className="text-2xl font-bold">{blog.name}</h1>
                    <h2 className="mt-2 text-sm text-gray-500">{blog.date}</h2>

                    <p className="mt-6 text-xl">{blog.description}</p>
                </article>
            </div>
            <div className="hidden w-4/12 -mx-8 lg:block">
                <div className="px-8 mt-10">
                    <h1 className="border-l-4 border-red-600 pl-4 mb-4 text-xl font-bold text-gray-700">Categories</h1>
                    <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <ul>
                        {
                    uniqCatName.map(uniqDeptName =>
                            <li className="mt-2 cursor-pointer mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- {uniqDeptName}</li>
                    )}
                            
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
                        <div className="mt-4 cursor-pointer">
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