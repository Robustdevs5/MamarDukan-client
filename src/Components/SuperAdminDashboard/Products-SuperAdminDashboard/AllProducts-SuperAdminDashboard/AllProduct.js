import { TablePagination } from '@mui/material';
import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';
import Modal from '../../../Modal/Modal'

const AllProduct = (props) => {
    const {Data} = props ;
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


      const [modalUpdateStatus, setModalStatus] = useState(false);
    const [modalId, setModalId] = useState(null);
    const handleModal = (item)=>{
        setModalId(item._id)
        setModalStatus(true);
        
    }

    return (
        <div>
            <h4 class="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">All Products</h4>
                <section class="container mx-auto py-6 font-mono">
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div class="w-full overflow-x-auto">
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
                            {
                                Data
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item) => {
                                return [
                                    <tr item={item} key={item._id} class="text-gray-700">
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.name}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.price}</td>
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
                                                // onClick={() => handleUpdate(item._id)}
                                                className='text-yellow-400 p-1 hover:bg-gray-900 rounded-full '>
                                                <AiFillEdit />
                                            </button>

                                            <button
                                                // onClick={() => handleDelete(item._id)}
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
                        count={Data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        checkboxSelection
                    />
                            </tbody>
                            {modalUpdateStatus && <Modal
                setModalStatus={setModalStatus}
                modalId={modalId}
            />}
                            
                        </table>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default AllProduct;