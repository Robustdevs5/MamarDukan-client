import { TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { Loader } from '../../../Loader/Loader';

const Review = () => {
    const [Review , setReview] = useState([]);
    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/review`)
        .then (res => res.json())
        .then (data => setReview(data.review))
    }, [])

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
            <h4 class="mt-3 text-2xl font-bold text-gray-900 m-2 border-l-2 border-red-600 pl-2 tracking-tighter">All Review</h4>
                <section class="container mx-auto py-6 ">
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th class="px-4 py-3">Name</th>
                                <th class="px-4 py-3">Review</th>
                                <th class="px-4 py-3">Rating</th>
                                <th class="px-4 py-3">Products img</th>
                                <th class="px-4 py-3">products name</th>
                                <th class="px-4 py-3">products Brand</th>
                                <th class="px-4 py-3">Data</th>
                                
                            </tr>
                            </thead>
                            <tbody class="bg-white">
                            {
                               Review && Review.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
                                    console.log(item.result.reviewRating)
                                return [
                                    <tr item={item} key={item._id} class="text-gray-700">
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.result.name}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.result.review}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border"><div className='flex items-center'>{item.result.reviewRating}<FaStar className='text-yellow-400'/></div></td>
                                    <td class="px-4 py-3 text-ms font-semibold border"><img src={item.result.product.img} alt='' className='h-8 w-8' /></td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.result.product.name}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{item.result.product.brand}</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">{(new Date(item.result.date).toLocaleDateString())}</td>
                                </tr>
                                ]
                                })
                            }
                             <TablePagination
                                rowsPerPageOptions={[]}
                                component="div"
                                count={Review.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                checkboxSelection
                            />
                            </tbody>
                            
           
                        </table>
                        </div>
                        
                        {!Review && <Loader/>}
                    </div>
                </section>
        </div>
    );
};

export default Review;