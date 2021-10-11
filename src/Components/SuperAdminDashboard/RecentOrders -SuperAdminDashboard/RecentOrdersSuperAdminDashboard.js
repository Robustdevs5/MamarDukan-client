import React, { useEffect, useState } from 'react';
import '../Style/style-superadmindashboard.css'
import { TableBodyData, TableHeadData, TableBodyRow, Table, DashboardTitle } from '../Style/AddSuperAdminStyle';
import { SidebarData } from './TableTitle';
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { ImSearch } from 'react-icons/im';
import { ToastContainer } from 'react-toastify';
import OrderDeleteModal from './OrderDeleteModal';
import { useHistory } from 'react-router';
import OrderStatusModal from './OrderStatusModal';


const RecentOrdersSuperAdminDashboard = () => {
    const [searchValue, setSearchValue] = useState('');
    const [products, setProducts] = useState([]);
    const [tableFilter, setTableFilter] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [modalDeleteStatus, setModalDeleteStatus] = useState(false);
    const [modalUpdateStatus, setModalUpdateStatus] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [updateId, setUpdateId] = useState(null);




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
        // fetch(`http://mamardukan.herokuapp.com/orders`)
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data =>
                setProducts(data.products)
            )
    }, [])
    // console.log(products);


    // Delete...........................................................
    const deleted = () => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data.products))
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

                                    <TableBodyData>{item.color}</TableBodyData>
                                    <TableBodyData>
                                        <div className='flex px-5 items-center'>
                                            <div className='h-10 px-5'>
                                                <img className="rounded cursor-pointer h-full w-full"
                                                    src={item.img} alt="Best Products" />
                                            </div>
                                            <p>{item.name}</p>
                                        </div>
                                    </TableBodyData>

                                    <TableBodyData>3</TableBodyData>
                                    <TableBodyData>${item.price}</TableBodyData>
                                    <TableBodyData>{item.size}</TableBodyData>
                                    <TableBodyData>{(new Date(item.date).toLocaleDateString())}</TableBodyData>
                                    {/* <TableBodyData>{item.color}</TableBodyData> */}
                                    <TableBodyData>{item.status || "Pending"}</TableBodyData>
                                    <TableBodyData>{item.multiVendorSeller.sellerName}</TableBodyData>
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
                            products.map((item, index) => {
                                return <TableBodyRow item={item} key={index} >

                                    <TableBodyData>{item.color}</TableBodyData>
                                    <TableBodyData>
                                        <div className='flex px-5 items-center'>
                                            <div className='h-10 px-5'>
                                                <img className="rounded cursor-pointer h-full w-full"
                                                    src={item.img} alt="Best Products" />
                                            </div>
                                            <p>{item.name}</p>
                                        </div>
                                    </TableBodyData>

                                    <TableBodyData>3</TableBodyData>
                                    <TableBodyData>${item.price}</TableBodyData>
                                    <TableBodyData>{item.size}</TableBodyData>
                                    <TableBodyData>{(new Date(item.date).toLocaleDateString())}</TableBodyData>
                                    {/* <TableBodyData>{item.color}</TableBodyData> */}
                                    <TableBodyData>{item.status || "Pending"}</TableBodyData>
                                    <TableBodyData>{item.multiVendorSeller.sellerName}</TableBodyData>
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
                    {notFound && <p className="text-red-600 p-4 flex items-center justify-center">No product found!</p>}

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


            <ToastContainer />
        </div>
    );
};

export default RecentOrdersSuperAdminDashboard;