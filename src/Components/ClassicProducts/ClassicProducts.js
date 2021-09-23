import React from 'react';
import {CloseProducts} from '../Navbar/Menu/MenuItems';

const ClassicProducts = () => {
    return (
        <div className="mx-auto px-5">
            <dl className=" space-y-10 mb-8 px-5 bg-white md:space-y-0  md:gap-x-8 md:gap-y-10">
                <div className="md:grid md:grid-cols-2 py-8 relative items-center">
                   

                    {
                        
                        CloseProducts.map((item, index) =>

                        <div class="flex p-5 border">
                            <div class="flex-none w-48 relative">
                                <img src={item.img} alt="" class="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <form class="flex-auto p-6">
                                <div class="flex flex-wrap">
                                <h1 class="flex-auto text-xl font-semibold">
                                    {item.title}
                                </h1>
                                <div class="text-xl font-semibold text-gray-500">
                                    ${item.price}
                                </div>
                                <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                                    {item.stock}
                                </div>
                                </div>
                                <div class="flex items-baseline mt-4 mb-6">
                                <div class="space-x-2 flex">
                                    <label>
                                    <input class="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg" name="size" type="radio" value="xs" checked/>
                                        {item.xs}
                                    </label>
                                    <label>
                                    <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="s"/>
                                        {item.s}
                                    </label>
                                    <label>
                                    <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="m"/>
                                        {item.m}
                                    </label>
                                    <label>
                                    <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="l"/>
                                        {item.L}
                                    </label>
                                    <label>
                                    <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="xl"/>
                                        {item.xl}
                                    </label>
                                </div>
                                <div class="ml-auto text-sm text-gray-500 underline">Size Guide</div>
                                </div>
                                <div class="flex space-x-3 mb-4 text-sm font-medium">
                                <div class="flex-auto flex space-x-3">
                                    <button class="w-1/2 flex items-center justify-center rounded-md bg-blue-800 text-white" type="submit">{item.BuyNow}</button>
                                    <button class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">{item.AddToBag}</button>
                                </div>
                                <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                                    <svg width="20" height="20" fill="currentColor">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                    </svg>
                                </button>
                                </div>
                                <p class="text-sm text-gray-500">
                                    {item.shipping}
                                </p>
                            </form>
                        </div>
                        )}


                </div>
            </dl>
        </div>
    );
};

export default ClassicProducts;