import React from 'react';
import { Link } from 'react-router-dom';
import { Categories } from '../Navbar/Menu/MenuItems';


export default function AllInOne() {
    
    
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 
                <div className="lg:text-center">
                    <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">A better way to buy </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-4">
                    Our Popular Category
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {Categories.map((cat, index) => (
                    <div className="w-full rounded-lg shadow border-1 border-gray-300 overflow-hidden flex flex-col justify-center items-center">
                        <div>
                        <Link to="/shop"> <img className="object-center object-cover h-auto w-full" src={cat.img} alt="Author" /></Link>
                        </div>
                        <div className="text-center py-8 sm:py-6">
                            <p className="text-xl text-gray-800 font-bold mb-2"><Link to="/shop">{cat.title}</Link></p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
