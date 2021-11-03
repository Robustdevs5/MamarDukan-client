import { TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BsStarHalf } from 'react-icons/bs';
import star from '../../../images/5star.png';
import '../Style/style-superadmindashboard.css';




const FeaturesSuperAdminDashboard = () => {
    const [categories, setCategories] = useState([]);

    const [categoriespage, setCategoriesPage] = useState(0);
    const [rowsCategoriesPerPage, setRowsCategoriesPerPage] = useState(10);

    const [productsPage, setProductsPage] = useState(0);
    const [rowsProductsPerPage, setRowsProductsPerPage] = useState(10);

    const [sellersPage, setSellersPage] = useState(0);
    const [rowsSellersPerPage, setRowsSellersPerPage] = useState(10);
    //Fetching Product.............................................
    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setCategories(data.products))
    }, [])
    
    // Categories pagination................................
    const handleCategoriesChangeRowsPerPage = (event) => {
        setRowsCategoriesPerPage(event.target.value);
        setCategoriesPage(0);
    };

    const handleCategoriesChangePage = (event, newPage) => {
        setCategoriesPage(newPage);
    };

      // Products pagination................................
      const handleProductsChangeRowsPerPage = (event) => {
        setRowsProductsPerPage(event.target.value);
        setProductsPage(0);
    };
    const handleProductsChangePage = (event, newPage) => {
        setProductsPage(newPage);
    };

      // Sellers pagination................................
      const handleSellersChangeRowsPerPage = (event) => {
        setRowsSellersPerPage(event.target.value);
        setSellersPage(0);
    };
    const handleSellersChangePage = (event, newPage) => {
        setSellersPage(newPage);
    };


    return (
        <div className='w-full font-medium grid grid-cols-1 md:grid-cols-3 mx-4 mt-20 tracking-tight my-32'>
            <div className="md:px-5 py-5 h-screen">
                
               <p className="font-bold border-l-4 tracking-tight border-red-600 p-2 text-white" style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
               Top Categories
                </p>
                <div className="h-full">
                {
                    categories
                    .slice(categoriespage * rowsCategoriesPerPage, categoriespage * rowsCategoriesPerPage + rowsCategoriesPerPage)
                    .map((item, index) => (
                        <div key={index} item={item} className='py-2 px-5 shadow-lg'  >
                            {item.category}
                        </div>
                    ))
                }
                </div>
                <div className="flex items-center justify-center my-7 pt-10">
                    <TablePagination
                        rowsPerPageOptions={[]}
                        component="div"
                        count={categories.length}
                        rowsPerPage={rowsCategoriesPerPage}
                        page={categoriespage}
                        onPageChange={handleCategoriesChangePage}
                        onRowsPerPageChange={handleCategoriesChangeRowsPerPage}
                        checkboxSelection
                    />
                </div>
            </div>
            
            <div className="md:px-5 py-5 h-screen">
                
               <p className="font-bold border-l-4 tracking-tight border-red-600 p-2 text-white" style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
               Best Products
                </p>
                <div className="h-full">
                {
                    categories
                    .slice(productsPage * rowsProductsPerPage, productsPage * rowsProductsPerPage + rowsProductsPerPage)
                    .map((item, index) => (
                        <div key={index} item={item} className='py-2 px-5 shadow-lg flex justify-between hover:bg-gray-400'  >
                            <div className='h-10'>
                                 <img  className="rounded cursor-pointer h-full w-full"
                                    src={item.img} alt="Best Products" />
                            </div>
                            <div>
                                <p>{item.name}</p>
                                <img src={star} style={{ width: '60px', height: '15px' }} alt="" />
                            </div>
                            <div>
                                <small>520 sales</small>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div className="flex items-center justify-center my-7 pt-10">
                    <TablePagination
                        rowsPerPageOptions={[]}
                        component="div"
                        count={categories.length}
                        rowsPerPage={rowsProductsPerPage}
                        page={productsPage}
                        onPageChange={handleProductsChangePage}
                        onRowsPerPageChange={handleProductsChangeRowsPerPage}
                        checkboxSelection
                    />
                </div>
            </div>
            
            <div className="md:px-5 py-5 h-screen">
                
               <p className="font-bold border-l-4 tracking-tight border-red-600 p-2 text-white" style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
               Top Sellers
                </p>
                <div className="h-full">
                {
                    categories
                    .slice(sellersPage * rowsSellersPerPage, sellersPage * rowsSellersPerPage + rowsSellersPerPage)
                    .map((item, index) => (
                        <div key={index} item={item} className='py-2 px-5 shadow-lg flex justify-between hover:bg-gray-400'  >
                            <div className='h-10'>
                                 <img  className="rounded cursor-pointer h-full w-full"
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXP2GSt89YvrkgbiSgJyzjue-GlHtCot2jg&usqp=CAU' alt="Best Products" />
                            </div>
                            <div>
                                <p>{item.multiVendorSeller.sellerName}</p>
                                <small>Seller ID #94256</small>
                            </div>
                            <div className='flex items-center text-yellow-600'>
                                <p>4.5</p>
                                <small><BsStarHalf/></small>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div className="flex items-center justify-center my-7 pt-10">
                    <TablePagination
                        rowsPerPageOptions={[]}
                        component="div"
                        count={categories.length}
                        rowsPerPage={rowsSellersPerPage}
                        page={sellersPage}
                        onPageChange={handleSellersChangePage}
                        onRowsPerPageChange={handleSellersChangeRowsPerPage}
                        checkboxSelection
                    />
                </div>
            </div>

        </div>
    );
};

export default FeaturesSuperAdminDashboard;