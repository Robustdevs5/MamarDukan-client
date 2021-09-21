import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import {NewArrivals} from '../Menu/MenuItems';

export default function NewArrivalsSubMenu() {
    return (
        <div className="grid grid-cols-1">
            <div className="group relative text-sm ">
                    {
                        NewArrivals.map((item, index) => {
                            return (
                                
                                <Fragment key={index}>                                
                                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        <Link to={item.path} className="object-center object-cover ">
                                            <img src={item.shopImg} className="h-40" alt="Models sitting back to back, wearing Basic Tee in black and bone. "/>
                                        </Link>
                                    </div>

                                    <div className='flex py-3 items-center'>
                                        <p className="p-2  block text-lg font-medium text-left text-blue-900">{item.title}</p>
                                        <Link to={item.path} className=" ox-5 p-2 bg-yellow-400 block text-gray-900 font-medium text-bold rounded">Shop now </Link>
                                    </div>
                                </Fragment>
                            );
                        })
                    }
            </div>
        </div>
    )
}
