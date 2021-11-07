import { TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';
import useProducts from '../../../../hooks/useProducts';
import { Loader } from '../../../Loader/Loader';
import Modal from '../../../Modal/Modal'
import { DashboardTitle, TableBodyData, TableBodyRow } from '../../Style/AddSuperAdminStyle';
import OrderDeleteModal from './OrderDeleteModal';
import OrderStatusModal from './OrderStatusModal';

const AllProduct = () => {
    // const [products, setProducts] = useProducts();
    const [products, setProducts] = useState([]);
    const [deleteId, setDeleteId] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [modalDeleteStatus, setModalDeleteStatus] = useState(false);
    const [modalUpdateStatus, setModalUpdateStatus] = useState(false);
    const [modalViewStatus, setModalViewStatus] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [tableFilter, setTableFilter] = useState([]);
    const [notFound, setNotFound] = useState(false);
    

      // pagination........................................................
      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(10);
      const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(event.target.value);
          setPage(0);
      };
  
      const handleChangePage = (event, newPage) => {
          setPage(newPage);
      };
      useEffect(() => {
        // fetch(`https://mamar-dukan.herokuapp.com/orders`)
        fetch(`https://mamar-dukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data =>
                setProducts(data.products)
            )
    }, [])


    // Delete...........................................................
    const deleted = () => {
        fetch(`https://mamar-dukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }

    const [modalId, setModalId] = useState(null);
    const handleModal = (item)=>{
        setModalId(item._id)
        setModalViewStatus(true);
        console.log(item._id)
        
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

    return (
        <div>
                <section class="container mx-auto pt-20">
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div class="w-full overflow-x-auto">
                        <div className=" flex justify-between sticky top-0" style={{ background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
                        <DashboardTitle >
                            All products
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
                        <table class="w-full">
                            <thead>
                            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th class="px-4 py-3">Name</th>
                                <th class="px-4 py-3">Price</th>
                                <th class="px-4 py-3">Brand</th>
                                <th class="px-4 py-3">Image</th>
                                <th class="px-4 py-3">Category</th>
                                <th class="px-4 py-3">Color</th>
                                <th class="px-4 py-3">Size</th>
                                <th class="px-4 py-3">Department</th>
                                <th class="px-4 py-3">Action</th>
                            </tr>
                            </thead>
                            <tbody class="bg-white">
                            {searchValue.length > 0 ?
                            tableFilter.map((item, index) => {
                                return <TableBodyRow item={item} key={index} >

                                    <TableBodyData>{item.name}</TableBodyData>
                                    <TableBodyData>
                                        <div className='flex px-5 items-center'>
                                            
                                            <p> {item.price}</p>
                                        </div>
                                    </TableBodyData>

                                    <TableBodyData>{item.brand}</TableBodyData>
                                    <TableBodyData>${item.price}</TableBodyData>
                                    <TableBodyData> 
                                        <div class="flex items-center text-sm">
                                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                            <img class="object-cover w-full h-full rounded-full" src={item.img} alt="" loading="lazy" />
                                            <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                    </TableBodyData>
                                    <TableBodyData>{item.category}</TableBodyData>
                                    <TableBodyData>{item.color}</TableBodyData>

                                
                                    <TableBodyData>{item.size}</TableBodyData>
                                    <TableBodyData>{item.department}</TableBodyData>

                                    <TableBodyData>
                                        <div className='flex items-center text-2xl'>
                                            <button onClick={() => handleModal(item)}  className='text-blue-800 p-1 hover:bg-gray-900 rounded-full hover:text-gray-50'><AiFillEye /></button>

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
                               products && products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item) => {
                                return [
                                    <tr item={item} key={item._id} class="text-gray-700">
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.name}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">${item.price}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.brand}</td>

                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                            <img class="object-cover w-full h-full rounded-full" src={item.img} alt="" loading="lazy" />
                                            <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                    </td>                                    
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.category}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.color}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.size}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.department}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border"><div className='flex items-center text-2xl'>
                                            <button onClick={() => handleModal(item)}  className='text-blue-800 p-1 hover:bg-gray-900 rounded-full hover:text-gray-50'><AiFillEye /></button>

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
                                        </div></td>
                                </tr>
                                ]
                                })
                            }
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
                            </tbody>
                            {modalViewStatus && <Modal
                                setModalStatus={setModalViewStatus}
                                modalId={modalId}
                            />}
                              {modalUpdateStatus && <OrderStatusModal
                                setModalUpdateStatus={setModalUpdateStatus}
                                updateId={updateId}
                                deleted={deleted}
                            />}
                            
                            {modalDeleteStatus && <OrderDeleteModal
                                setModalDeleteStatus={setModalDeleteStatus}
                                deleteId={deleteId}
                                deleted={deleted}
                            />}
                           
                        </table>
                        {
                                !products  && <Loader/>
                            }
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default AllProduct;