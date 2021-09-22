import React from 'react'
import {Accessories} from '../Navbar/Menu/MenuItems';


export default function HomepageMiddle() {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 
                <div className="lg:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">A better way to buy </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    All in one platform
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
                        {Accessories.map((feature, index) => (
                        <div key={index} className="relative">
                            <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
