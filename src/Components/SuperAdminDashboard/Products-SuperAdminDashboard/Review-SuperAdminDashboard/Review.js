import { TablePagination } from '@mui/material';
import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';

const Review = (props) => {
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


    return (
        <div>
            <h4 class="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">All Review</h4>
                <section class="container mx-auto py-6 font-mono">
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th class="px-4 py-3">Name</th>
                                <th class="px-4 py-3">E-mail</th>
                                <th class="px-4 py-3">Review</th>
                                <th class="px-4 py-3">Rating</th>
                                <th class="px-4 py-3">Data</th>
                                
                            </tr>
                            </thead>
                            <tbody class="bg-white">
                            {
                                Data
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item) => {
                                return [
                                    <tr item={item} key={item._id} class="text-gray-700">
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.user.name}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.user.email}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.product.review}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.product.reviewRating}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{(new Date(item.order.orderDate).toLocaleDateString())}</td>
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
                            
           
                            
                        </table>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default Review;