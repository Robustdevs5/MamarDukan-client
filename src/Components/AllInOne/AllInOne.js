import React from 'react'
import {Accessories} from '../Navbar/Menu/MenuItems';


export default function AllInOne() {
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 
                <div className="lg:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">A better way to buy </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    All in one platform
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0  md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
                        {Accessories.map((feature, index) => (
                        <div key={index} className="relative  md:border hover:border-blue-900 shadow rounded p-2">
                            <dt>
                                <div className="absolute overflow-hidden flex items-center justify-center h-24 w-20 rounded-md bg-blue-500 text-white">
                                    <img className='w-full h-full transform  hover:scale-150 ' src= {feature.Img} alt=''/>
                                </div>
                                <p className="ml-16 text-lg pl-10 leading-6 font-medium text-gray-900 hover:text-blue-800">{feature.title}</p>
                            </dt>
                            <dd className="mt-2 ml-16 pl-10 text-base text-gray-500 ">{feature.description}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
