import React from "react";
import { Link } from "react-router-dom";

const SummerStyles = () => {
  return (
    <section className="relative bg-white overflow-hidden">
        <article className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                <div className="sm:max-w-lg">
                    <h1 className="text-4xl font font-extrabold tracking-tight text-gray-800 sm:text-6xl">
                        Best Selling Product
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                    This year, our new summer collection will shelter you from the
                    harsh elements of a world that doesn't care if you live or die.
                    </p>
                </div>
                <article>
                    
                    <div className="mt-10">
                        <div aria-hidden="true"  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                                <main  className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                <img
                                                src="https://i.ibb.co/98y5vns/huawei-watch-3-strap-1-2.png"
                                                alt=""
                                                className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                src="https://i.ibb.co/FV7QLwT/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpg"
                                                alt=""
                                                className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                src="https://i.ibb.co/6JZp5yJ/61i-R9-NMc-Kp-L-UL1280.jpg"
                                                alt=""
                                                className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                src="https://i.ibb.co/zVZqzzR/2-a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png"
                                                alt=""
                                                className="w-full h-full object-center object-cover"
                                            />
                                            </div>
                                        
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                src="https://i.ibb.co/z5yqMR3/5417-check-shirt-red-black-thumb.jpg"
                                                alt=""
                                                className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                src="https://i.ibb.co/JrMggZW/71-D9-Imsv-Et-L-UY500.jpg"
                                                alt=""
                                                className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                src="https://i.ibb.co/4sHGg6M/ROCKSHELL-HEADER-736x.png"
                                                alt=""
                                                className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                 </main>
                        </div>
                                

                        <Link to="/shop"
                            className="inline-block text-center primary_BTN rounded-md py-3 px-8 font-medium text-white hover:bg-blue-700"  >
                            Shop Collection
                        </Link>
                    </div>

                </article>
            </section>
        </article>
    </section>
  );
};

export default SummerStyles;
