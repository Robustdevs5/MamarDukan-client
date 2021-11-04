import { TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { ImSearch } from 'react-icons/im';
import { ToastContainer } from 'react-toastify';
import { DashboardTitle, Table, TableBodyData, TableBodyRow, TableHeadData } from '../Style/AddSuperAdminStyle';
import '../Style/style-superadmindashboard.css';
import OrderDeleteModal from './OrderDeleteModal';
import OrderStatusModal from './OrderStatusModal';
import { SidebarData } from './TableTitle';


const RecentOrdersSuperAdminDashboard = () => {
    const [searchValue, setSearchValue] = useState('');
    const [products, setProducts] = useState([]);
    const [tableFilter, setTableFilter] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [modalDeleteStatus, setModalDeleteStatus] = useState(false);
    const [modalUpdateStatus, setModalUpdateStatus] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    // pagination................................
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const filterData = (e) => {
        if (e.target.value !== "") {
            setSearchValue(e.target.value);
            const filterTable = products.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase()))
            );

            if (filterTable.length === 0) {
                setNotFound(true);
            } else {
                setNotFound(false);
            }

            setTableFilter([...filterTable])
        } else {
            setSearchValue(e.target.value);
            setProducts([...products]);
        }
    }


    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
        // fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data =>
                setProducts(data.orders)
            )
    }, [])
    console.log("pooo",products);


    // Delete...........................................................
    const deleted = () => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setProducts(data.orders))
    }


    //Update push.......................................................
    const handleUpdate = (id) => {
        setModalUpdateStatus(true);
        setUpdateId(id)
    }


    //Delete...............................................
    const handleDelete = (id) => {
        setModalDeleteStatus(true);
        setDeleteId(id)
    }



    return (
        <div className='h-4/5 overflow-scroll mt-8 pb-14'>

            {/* <Jahid /> */}

            <Table>
                <div className="md:p-5 ">
                    <div className=" flex justify-between sticky top-0" style={{ background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
                        <DashboardTitle >
                            Recent Orders
                        </DashboardTitle>
                        <form action="" className=" flex items-center">
                            <input
                                onChange={filterData}
                                type="text"
                                placeholder="Search"
                                className="ml-2 rounded-l-full w-full h-7  pl-2 sm:px-5 text-gray-900 leading-tight outline-none border-none"
                            />

                            <button type="submit" className='text-2xl m-0 font-lg sm:mr-2 cursor-pointer text-white rounded-r-2xl focus:outline-none w-16 flex items-center justify-center  bg-red-600 hover:bg-red-800  h-7'>
                                <ImSearch className="h-4" />
                            </button>
                        </form>
                    </div>
                    <thead>
                        <tr className='sticky top-10'>
                            {
                                SidebarData.map((item, index) => {
                                    return (
                                        <TableHeadData item={item} key={index} >
                                            {item.title}
                                        </TableHeadData>
                                    )
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>

                        {searchValue.length > 0 ?
                            tableFilter.map((item, index) => {
                                return <TableBodyRow item={item} key={index} >

                                    <TableBodyData>{item.order.orderId}</TableBodyData>
                                    <TableBodyData>
                                        <div className='flex px-5 items-center'>
                                            
                                            <p> {item?.product.product.name}</p>
                                        </div>
                                    </TableBodyData>

                                    <TableBodyData>{item?.product.product.quantity}</TableBodyData>
                                    <TableBodyData>${item.product.product?.price}</TableBodyData>
                                    <TableBodyData>{item.product.product?.size}</TableBodyData>

                                
                                    <TableBodyData>{(new Date(item.order.orderDate).toLocaleDateString())}</TableBodyData>
                                    <TableBodyData>${item.order.status}</TableBodyData>

                                    <TableBodyData>
                                        <div className='flex items-center text-2xl'>
                                            <button className='text-blue-800 p-1 hover:bg-gray-900 rounded-full hover:text-gray-50'><AiFillEye /></button>

                                            <button
                                                onClick={() => handleUpdate(item._id)}
                                                className='text-yellow-400 p-1 hover:bg-gray-900 rounded-full '>
                                                <AiFillEdit />
                                            </button>

                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className='text-pink-700 p-1 hover:bg-gray-900 rounded-full '>
                                                <AiFillDelete />
                                            </button>
                                        </div>
                                    </TableBodyData>
                                </TableBodyRow>
                            })
                            :
                            products
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((item, index) => {
                                return <TableBodyRow item={item} key={index} >

                                    <TableBodyData>{item?.order.orderId}</TableBodyData>
                                    <TableBodyData>
                                        <div className='flex px-5 items-center'>
                                            
                                            <p> {item.product.product?.name}</p>
                                        </div>
                                    </TableBodyData>
                                    <TableBodyData>{item?.product.product?.quantity}</TableBodyData>
                                    <TableBodyData>${item.product.product?.price}</TableBodyData>
                                    <TableBodyData>{item.product.product?.size}</TableBodyData>
                                    <TableBodyData>{(new Date(item.order.orderDate).toLocaleDateString())}</TableBodyData>
                                    <TableBodyData>{item.order.status}</TableBodyData>

                            
                                    <TableBodyData>
                                        <div className='flex items-center text-2xl'>
                                            <button className='text-blue-800 p-1 hover:bg-gray-900 rounded-full hover:text-gray-50'><AiFillEye /></button>

                                            <button
                                                onClick={() => handleUpdate(item._id)}
                                                className='text-yellow-400 p-1 hover:bg-gray-900 rounded-full '>
                                                <AiFillEdit />
                                            </button>

                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className='text-pink-700 p-1 hover:bg-gray-900 rounded-full '>
                                                <AiFillDelete />
                                            </button>
                                        </div>
                                    </TableBodyData>
                                </TableBodyRow>
                            })
                        }

                    </tbody>
                    {notFound && <p className="text-red-600 p-4 flex items-center justify-center">No Order found!</p>}

                </div>
            </Table>

            {modalDeleteStatus && <OrderDeleteModal
                setModalDeleteStatus={setModalDeleteStatus}
                deleteId={deleteId}
                deleted={deleted}
            />}

            {modalUpdateStatus && <OrderStatusModal
                setModalUpdateStatus={setModalUpdateStatus}
                updateId={updateId}
                deleted={deleted}
            />}
            <div className="flex items-center justify-center">
                <TablePagination
                    rowsPerPageOptions={[]}
                    component="div"
                    count={products.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    checkboxSelection
                />
            </div>
            <ToastContainer />
        </div>
    );
};

export default RecentOrdersSuperAdminDashboard;