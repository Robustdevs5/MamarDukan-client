import React from 'react'
import { Link } from 'react-router-dom';
import {Accessories} from '../Menu/MenuItems';

export default function AccessoriesSubMenu() {
    return (
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
    )
}
