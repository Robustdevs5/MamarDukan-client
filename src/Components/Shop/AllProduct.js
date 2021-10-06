import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import star from "../../images/5star.png";
import { TablePagination } from '@mui/material';



const AllProduct = () => {

    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(12);
    const history = useHistory();


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

    const handleProductClick = (id) => {
        history.push(`/product/${id}`);
    }


    return (
        <div className="grid gap-12 grid-cols-4">
            {product
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(product =>
                    <div className="p-2">

                        <div className="mb-4 w-44 h-44">
                            <img onClick={() => handleProductClick(product._id)} className="rounded cursor-pointer h-full w-full" src={product.img} alt="8192" />
                        </div>

                        <div className="flex py-3">
                            <h5 className="text-base font-bold text-green-700">${product.price}</h5>
                            <del className="px-4 text-base text-gray-500">10000</del>
                        </div>

                        <p className="text-gray-700 text-sm">Sold by: <span className="hover:text-blue-500 cursor-pointer"> Mr. Rahim</span></p>
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

            <TablePagination
                // className="flex items-end justify-end"
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

export default AllProduct;
