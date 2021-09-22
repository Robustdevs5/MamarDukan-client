import React from 'react'
import { Link } from 'react-router-dom';
import {Brands} from '../Menu/MenuItems';

export default function BrandsSubMenu() {
    return (
        <div>
        <article>
            <p className="py-2 px-5  mr-20 font-medium hover:bg-blue-700 bg-blue-900 duration-500  rounded-lg">
                Brands
            </p>
        </article>

        <ul className="mt-6 flex flex-col space-y-6">
            {
                Brands.map((item, index) => {
                    return (
                        <li key={index} className="hover:underline flow-root ">
                            <Link to={item.path} className="hover:underline block font-medium text-left text-blue-900">
                                {item.title}
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    </div>
    )
}
