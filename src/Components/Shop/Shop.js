import { TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TopBar from "../../Components/TopBar/TopBar";
import Navbar from "../../Components/Navbar/Navbar/Navbar";


const Shop = () => {

    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    //Fetching Product.............................................
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    console.log(product);


    // pagination........................................................
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    //Department unique Names
    let uniqDeptName = [];
    for (let i = 0; i < product.length; i++) {
        let element = product[i].department;
        let index = uniqDeptName.indexOf(element);
        if (index === -1) {
            uniqDeptName.push(element);
        }
    }
    console.log(uniqDeptName)


    //Department unique Names
    let uniqBrandName = [];
    for (let i = 0; i < product.length; i++) {
        let element = product[i].brand;
        let index = uniqBrandName.indexOf(element);
        if (index === -1) {
            uniqBrandName.push(element);
        }
    }
    console.log(uniqBrandName)



    return (
        <div>
            <TopBar />
            <Navbar />

            <div className="md:w-1/5 w-screen h-full mt-5 ml-16">

                <div className="px-5 bg-blue-100 text-gray-800 rounded mb-8">
                    <h1>PRODUCT DEPARTMENT</h1>
                    {
                        uniqDeptName.map(uniqDeptName =>
                            <p>{uniqDeptName}</p>
                        )}
                </div>

                <div className="px-5 bg-blue-100 text-gray-800 rounded">
                    <h1>PRODUCT BRAND</h1>
                    {uniqBrandName.map(uniqBrandName =>
                        <>
                            <input type="checkbox "
                                // className="cursor-pointer"
                                id={uniqBrandName}
                                name={uniqBrandName}
                                value={uniqBrandName}
                            />
                            <label for={uniqBrandName} className="px-2 cursor-pointer">
                                {uniqBrandName}
                            </label>
                            <br />
                        </>
                    )}

                </div>




            </div>

            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={product.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                checkboxSelection
            />
        </div>
    );
};

export default Shop;
