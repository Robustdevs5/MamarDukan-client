import React, { Fragment, useEffect, useState } from 'react';
import '../Style/style-superadmindashboard.css'
import star from '../../../images/5star.png'
import { BsStarHalf } from 'react-icons/bs';
import { TableHead } from '../Style/AddSuperAdminStyle';
import { SidebarData } from './TableTitle';
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";


const RecentOrdersSuperAdminDashboard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch(`http://mamardukan.herokuapp.com/orders`)
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => 
                setProducts(data.products) 
            )
    }, [])

    return (
        <div className='h-4/5 overflow-scroll mt-8'>
            <table className='table-auto w-full font-medium grid grid-cols-1 mx-4 mt-20 tracking-tight '>
                <div className="p-5">
                    <h2 className='sticky top-0 text-white py-2 border-l-4 pl-3 border-red-600' style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>Recent Orders</h2>
                    <thead>
                        <tr className='sticky top-10'>
                            {
                                SidebarData.map((item, index) => {
                                    return (
                                        <TableHead item={item} key={index} >
                                                {item.title}
                                        </TableHead>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item, index) => {
                                return <tr item={item} key={index} className='border-separate border border-gray-800 hover:bg-gray-50 hover:shadow-lg'>
                                    <td>{item.color}</td>

                                    <td className='py-2 px-5'>
                                        <div className='flex px-5 items-center'>
                                            <div className='h-10 px-5'>
                                                <img  className="rounded cursor-pointer h-full w-full"
                                                    src={item.img} alt="Best Products" />
                                            </div>
                                            <p>{item.name}</p>
                                        </div>
                                    </td>

                                    <td className='py-2 px-5'>3</td>
                                    <td className='py-2 px-5'>${item.price}</td>
                                    <td className=' py-2 px-5'>{item.size}</td>
                                    <td className=' py-2 px-5'>{(new Date(item.date).toLocaleDateString())}</td>
                                    <td className='py-2 px-5'>{item.color}</td>
                                    <td className='py-2 px-5'>{item.multiVendorSeller.sellerName}</td>
                                    <td className='py-2 px-5'>
                                        <div className='flex text-2xl'>
                                            <button className='text-blue-800 pr-2'><AiFillEye/></button>
                                            <button className='text-yellow-400 pr-2'><AiFillEdit/></button>
                                            <button className='text-pink-700 pr-2'><AiFillDelete/></button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        } 
                    </tbody> 
                    </div>
            </table>
        </div>
    );
};

export default RecentOrdersSuperAdminDashboard;