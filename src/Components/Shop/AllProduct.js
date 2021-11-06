import { TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import star from "../../images/5star.png";
import CartButton from '../Cart/CartButton/CartButton';


const AllProduct = () => {

    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const history = useHistory();


    //Fetching Product.............................................
    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])


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
        <>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {product
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(product =>
                    <div className="group relative p-2 bg-white">

                        <div className="overflow-x-hidden relative mb-4 w-full h-full md:w-44 md:h-44">
                            <img onClick={() => handleProductClick(product._id)} className="rounded cursor-pointer h-full w-full" src={product.img} alt="8192" />
                            <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                                            <span className="font-bold">Sale</span>
                                        </div>
                                        <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">
                                            <CartButton cartProduct={product}/>
        
                                        </div>
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
            
        </div>
        <section className="w-full block">
        <div className="flex items-center justify-center">
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
        </section>      
        </>
    );
};

export default AllProduct;
