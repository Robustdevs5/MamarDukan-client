import React from "react";
import { Link } from "react-router-dom";
import {Cloth} from '../Menu/MenuItems';

export default function ClothSubMenu() {

  return (
    <div className="pt-10">

        <article className="pb-5">
            <p className="py-2 mr-20 font-medium  hover:bg-blue-700 bg-blue-900 duration-50 rounded-lg">
            Clothing
            </p>
        </article>

        <ul className="flex flex-col space-y-4">

            {
                Cloth.map((item, index) => {
                    return (
                        <li key={index} className="flow-root">
                            <Link
                                to={item.path}
                                className="block font-medium text-left text-blue-900">

                                {item.title}
                                
                            </Link>
                        </li>
                );
                })
            }
        </ul>
    </div>
  );
}
