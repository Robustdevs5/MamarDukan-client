import React, { useEffect, useState } from 'react';
import TopBar from "../../Components/TopBar/TopBar";
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import AllProduct from './AllProduct';
import star from "../../images/5star.png";
import { TablePagination } from '@mui/material';
import { useHistory } from 'react-router';
import Footer from '../Footer/Footer';
import Newsletter from '../Newsletter/Newsletter';

// import noUiSlider from 'nouislider';
// import noUiSlider from 'nouislider/dist/nouislider.mjs';
// import * as noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';



const Shop = () => {

    const [product, setProduct] = useState([]);
    const [deptProduct, setDeptProduct] = useState([]);
    const [brandProduct, setBrandProduct] = useState([]);
    const [allProductStatus, setAllProductStatus] = useState(true);
    const [deptProductStatus, setDeptProductStatus] = useState(false);
    const [brandProductStatus, setBrandProductStatus] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(12);
    const [page, setPage] = useState(0);

    const history = useHistory();



    //Fetching Product//////////////////////////////////
    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    console.log(product);


    //Department unique Names//////////////////////////////
    let uniqDeptName = [];
    for (let i = 0; i < product.length; i++) {
        let element = product[i].department;
        let index = uniqDeptName.indexOf(element);
        if (index === -1) {
            uniqDeptName.push(element);
        }
    }
    console.log(uniqDeptName)


    // pagination........................................................
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    //Department unique Names//////////////////////////////
    let uniqBrandName = [];
    for (let i = 0; i < product.length; i++) {
        let element = product[i].brand;
        let index = uniqBrandName.indexOf(element);
        if (index === -1) {
            uniqBrandName.push(element);
        }
    }
    console.log(uniqBrandName)


    const handleDepartmentClick = (dept) => {
        fetch(`https://mamardukan.herokuapp.com/products/department?department=${dept}`)
            .then(res => res.json())
            .then(data => setDeptProduct(data.result))
        setDeptProductStatus(true)
        setAllProductStatus(false)
        setBrandProductStatus(false)
    }
    console.log(deptProduct);


    const handleAllProductClick = () => {
        setDeptProductStatus(false)
        setBrandProductStatus(false)
        setAllProductStatus(true)
    }

    const handleProductClick = (id) => {
        history.push(`/product/${id}`);
    }



    const handleBrandChange = (brand) => {
        // let checkBox = document.getElementById(`${brand}`);
        // var text = document.getElementById("brand");

        fetch(`https://mamardukan.herokuapp.com/products/brand?brand=${brand}`)
            .then(res => res.json())
            .then(data => setBrandProduct(data.result))
        setDeptProductStatus(false)
        setAllProductStatus(false)
        setBrandProductStatus(true)

        // if (checkBox.checked === true){
        //     text.style.display = "block";
        //   } else {
        //      text.style.display = "none";
        //   }
    }
    console.log(brandProduct);




    return (
        <>
            <TopBar />
            <Navbar />

            <div className="flex mb-16">


                {/* .......................Shop Sidebar.................. */}
                <div className="md:w-1/5 w-screen h-full mt-8 ml-16 ">

                    <div className="px-5 py-5 bg-blue-100 text-gray-800 rounded mb-8">

                        <h1
                            className="text-2xl my-8 cursor-pointer hover:text-yellow-400"
                            onClick={handleAllProductClick}
                        >
                            All Product
                        </h1>

                        <h1 className="text-lg mb-5">PRODUCT DEPARTMENT</h1>
                        {
                            uniqDeptName.map(uniqDeptName =>
                                <p
                                    className="cursor-pointer hover:text-yellow-400 my-2"
                                    onClick={() => handleDepartmentClick(uniqDeptName)}
                                >
                                    {uniqDeptName}
                                </p>
                            )}
                    </div>


                    <div className="px-5 py-5 bg-blue-100 text-gray-800 rounded">
                        <h1 className="text-lg mb-5">PRODUCT BRAND</h1>
                        {uniqBrandName.map(uniqBrandName =>
                            <div className="flex items-center">
                                <input
                                    onChange={() => handleBrandChange(uniqBrandName)}
                                    className="cursor-pointer hover:text-yellow-400 w-4 h-4"
                                    name="brand"
                                    id={uniqBrandName}
                                    type="radio"
                                    value="1"
                                />

                                <label for={uniqBrandName} className="px-2 cursor-pointer hover:text-yellow-400">
                                    {uniqBrandName}
                                </label>
                                <br />
                            </div>
                        )}
                    </div>


                    <div className="px-5 mt-8 py-5 bg-blue-100 text-gray-800 rounded">
                        <h1 className="text-lg mb-5">BY PRICE</h1>
                        <input type="range" name="" id="" min="0" Max="100000" />
                    </div>


                    <div className="px-5 mt-8 py-5 bg-blue-100 text-gray-800 rounded">
                        <h1 className="text-lg mb-5">BY COLOR</h1>

                        <input type="color"
                            className="cursor-pointer hover:text-yellow-400 w-8 h-8 p-1 rounded-full mr-1 hover:bg-black"
                            id="red"
                            name="red"
                            value="#000000"
                            disabled
                        />
                        <input type="color"
                            className="cursor-pointer hover:text-yellow-400 w-8 h-8 p-1 rounded-full hover:bg-red-600"
                            id="red"
                            name="red"
                            value="#FF0000"
                            disabled
                        />
                        <input type="color"
                            className="cursor-pointer hover:text-yellow-400 w-8 h-8 p-1 rounded-full hover:bg-blue-700"
                            id="red"
                            name="red"
                            value="#0000FF"
                            disabled
                        />
                        <input type="color"
                            className="cursor-pointer hover:text-yellow-400 w-8 h-8 p-1 rounded-full hover:bg-yellow-400"
                            id="red"
                            name="red"
                            value="#FFFF00"
                            disabled
                        />
                        <input type="color"
                            className="cursor-pointer hover:text-yellow-400 w-8 h-8 p-1 rounded-full hover:bg-green-500"
                            id="red"
                            name="red"
                            value="#00FF00"
                            disabled
                        />
                    </div>


                    <div className="px-5 mt-8 py-5 bg-blue-100 text-gray-800 rounded">
                        <h1 className="text-lg mb-8">BY SIZE</h1>

                        <div className="flex items-center">
                            <label
                                class="block text-gray-700 text-sm font-bold"
                                for="size"
                            >
                                Size:
                            </label>

                            <select className="mx-2 rounded w-full py-2 px-3 text-gray-700  focus:ring-2 focus:ring-blue-600"
                                name="size"
                                id="cars"
                            >
                                <option value="All">All</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="XXL">XXXL</option>
                            </select>
                        </div>

                    </div>


                </div>


                {/* {product.length ? "" :
                    <img
                    className="w-100"
                        src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt=""
                    />
                } */}

                {/* ............................All Product..................... */}

                {allProductStatus &&
                    <div className="px-10 pt-10">
                        <AllProduct />
                    </div>}


                {/* ......................Product by Department.................. */}
                {deptProductStatus && <div className="px-10 pt-10">
                    <h3 className="mb-4">
                        <span className="text-lg font-medium">{deptProduct.length} </span>
                        <span className="text-base text-gray-600"> Products found</span>
                    </h3>

                    <div className="grid gap-12 grid-cols-4">
                        {deptProduct
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(product =>
                                <div className="p-2">

                                    <div className="mb-4 w-44 h-44">
                                        <img onClick={() => handleProductClick(product._id)} className="rounded cursor-pointer hover:text-yellow-400 h-full w-full" src={product.img} alt="8192" />
                                    </div>

                                    <div className="flex py-3">
                                        <h5 className="text-base font-bold text-green-700">${product.price}</h5>
                                        <del className="px-4 text-base text-gray-500">10000</del>
                                    </div>

                                    <p className="text-gray-700 text-sm">Sold by: <span className="hover:text-blue-500 cursor-pointer "> Mr. Rahim</span></p>
                                    <hr />

                                    <div className="py-3">
                                        <p onClick={() => handleProductClick(product._id)} className="text-blue-500 hover:text-yellow-500 cursor-pointer text-sm">{product.name}</p>

                                        <div className="flex">
                                            <img src={star} style={{ width: '60px', height: '15px' }} alt="" />
                                            <p className="text-gray-600 text-xs px-1">(0)</p>
                                        </div>

                                        <p className="text-gray-600 text-xs px-1">Sold: 10</p>
                                    </div>
                                </div>
                            )
                        }

                        <small className="mb-16"></small>

                        {deptProduct.length > 10 ?
                            <TablePagination
                                // className=""
                                rowsPerPageOptions={[]}
                                component="div"
                                count={deptProduct.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                checkboxSelection
                            />
                            : ""
                        }
                    </div>
                </div>}




                {/* ......................Product by Brand.................. */}
                {brandProductStatus && <div className="px-10 pt-10" id="brand">
                    <h3 className="mb-4">
                        <span className="text-lg font-medium">{brandProduct.length} </span>
                        <span className="text-base text-gray-600"> Products found</span>
                    </h3>

                    <div className="grid gap-12 grid-cols-4">
                        {brandProduct
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(product =>
                                <div className="p-2">

                                    <div className="mb-4 w-44 h-44">
                                        <img onClick={() => handleProductClick(product._id)} className="rounded cursor-pointer hover:text-yellow-400 h-full w-full" src={product.img} alt="8192" />
                                    </div>

                                    <div className="flex py-3">
                                        <h5 className="text-base font-bold text-green-700">${product.price}</h5>
                                        <del className="px-4 text-base text-gray-500">10000</del>
                                    </div>

                                    <p className="text-gray-700 text-sm">Sold by: <span className="hover:text-blue-500 cursor-pointer "> Mr. Rahim</span></p>
                                    <hr />

                                    <div className="py-3">
                                        <p onClick={() => handleProductClick(product._id)} className="text-blue-500 hover:text-yellow-500 cursor-pointer text-sm">{product.name}</p>

                                        <div className="flex">
                                            <img src={star} style={{ width: '60px', height: '15px' }} alt="" />
                                            <p className="text-gray-600 text-xs px-1">(0)</p>
                                        </div>

                                        <p className="text-gray-600 text-xs px-1">Sold: 10</p>
                                    </div>
                                </div>
                            )
                        }

                        <small className="mb-16"></small>

                        {brandProduct.length > 10 ?
                            <TablePagination
                                className=""
                                rowsPerPageOptions={[]}
                                component="div"
                                count={brandProduct.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                checkboxSelection
                            />
                            : ""
                        }
                    </div>
                </div>}

            </div>
            <Newsletter />
            <Footer />
        </>
    );
};

export default Shop;
