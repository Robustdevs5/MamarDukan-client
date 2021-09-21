import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Cloth, Accessories, Brands, NewArrivals} from './MenuItems';

const DropdownMenu = () => {
    return (
        <div className='inset-36 absolute z-50'>
            <div  className="bg-blue-400  pt-5 pb-8 px-20 space-y-10 grid grid-cols-4 mt-0">
            <div className='pt-10'>
                <article className='pb-5'>
                    <p className="py-2 mr-20 font-medium  hover:bg-blue-700 bg-blue-900 duration-50 rounded-lg">
                    Clothing
                    </p>
                </article>
                <ul className="flex flex-col space-y-4">
                    {
                        Cloth.map((item, index) => {
                            return (
                                <li key={index} className="flow-root">
                                    <Link to={item.path} className="block font-medium text-left text-blue-900" >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

            <div>
                <article>
                    <p className="py-2 mr-20 font-medium hover:bg-blue-700 bg-blue-900 duration-500  rounded-lg">
                        Accessories
                    </p>
                </article>

                <ul className="mt-6 flex flex-col space-y-4">
                    {
                        Accessories.map((item, index) => {
                            return (
                                <li key={index} className="hover:underline flow-root">
                                    <Link to={item.path} className="block font-medium text-left text-blue-900">
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

            <div>
                <article>
                    <p className="py-2 mr-20 font-medium hover:bg-blue-700 bg-blue-900 duration-500  rounded-lg">
                        Brands
                    </p>
                </article>

                <ul className="mt-6 flex flex-col space-y-6">
                    {
                        Brands.map((item, index) => {
                            return (
                                <li key={index} className="hover:underline flow-root ">
                                    <Link to={item.path} className="block font-medium text-left text-blue-900">
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

            <div className="grid grid-cols-1">
                <div className="group relative text-sm ">
                        {
                            NewArrivals.map((item, index) => {
                                return (
                                    
                                    <Fragment key={index}>                                
                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <Link to={item.path} className="object-center object-cover ">
                                                <img src={item.img} className="h-40" alt="Models sitting back to back, wearing Basic Tee in black and bone. "/>
                                            </Link>
                                        </div>

                                        <div className='flex py-3'>
                                            <p className="p-2  block text-lg font-medium text-left text-blue-900">{item.title}</p>
                                            <Link to={item.path} className=" p-2 bg-yellow-400 block text-gray-800 font-medium text-bold">Shop now </Link>
                                        </div>
                                    </Fragment>
                                );
                            })
                        }
                </div>
            </div>
            </div>
        </div>
    );
};

export default DropdownMenu;