import { TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { useHistory } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { Loader } from '../../Components/Loader/Loader';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [page, setPage] = useState(0);

    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data.blog))
    }, [])
    // console.log("All blogs",blogs);

    const history = useHistory();
    const handleBlogClick = (id) => {
        history.push(`/blog/${id}`);
    }

    // pagination........................................................
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(event.target.value);
      setPage(0);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    function WordCount(str) { 
      const length =  str.split(" ").length;
      return Math.ceil(length/100)
    }
    
    // const getDate = (date) => {     
    //     return date.getDay();
    // }
    
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        { blogs &&
          blogs
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map(blog =>
          <div  key={blog._id} className="rounded overflow-hidden shadow-lg">
            <div className="relative">
                <img className="cursor-pointer w-full" src={blog.img} alt={blog.name} />
                <div onClick={() => handleBlogClick(blog._id)} className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
                  <div className="cursor-pointer absolute bottom-0 left-0 bg-custom px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                    {blog.category}
                  </div>
                  <div className="text-sm absolute top-0 right-0 bg-custom px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                    <span className="font-bold">15</span>
                    <small>March</small>
                  </div>
              </div>
            <div className="px-6 py-4">
              <h3 onClick={() => handleBlogClick(blog._id)} className="cursor-pointer font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out">{blog.name}</h3>
              <p className="text-gray-500 text-sm">
                {blog.description.slice(0, 100)+'...'}
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                <FaClock classNameName="iconbutton"  />
                <span className="ml-1">{WordCount(blog.description)} mins read</span></span>
            </div>
          </div>
        )}
          <small className="mb-16"></small>

          {blogs && blogs.length > 2 ?
            <div className="flex items-center justify-center">
                <TablePagination
                    // className=""
                    rowsPerPageOptions={[]}
                    component="div"
                    count={blogs.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    checkboxSelection
                />
              </div>
              : ""
          }
        </div>
      </div>
      { !blogs && <Loader/>}
      <Footer />
    </>
  );
};

export default Blogs;