import React,{useState} from 'react'
import useProducts from '../../hooks/useProducts';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faChartBar, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const BestRatedProduct = () => {
    
    // const [products, setProducts] = useProducts(); 
    // const [firstFiveProduct, setFirstFiveProduct] = useState()
    // console.log('useProducts', products)
    // console.log('firstFiveProduct', firstFiveProduct)

    // async function shuffleArray(array) {

    //     let i = await array.length - 1;
    //     console.log('i', i) 
    //     for (; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         const temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
        
    //     }
    //      return array.slice(0,5);
    //  }

    // let shuffle= shuffleArray(products.products)
    //     .then(async function(data){
    //         // setFirstFiveProduct(data)

    //         let shuffleProducts;

    //         await data.map((item, index) => {
    //             console.log('data',item);
    //             // setFirstFiveProduct(item) 
                
    //             shuffleProducts = item
    //             // console.log('shuffleProducts item', shuffleProducts);
    //         })
    //     console.log('shuffleProducts', shuffleProducts);
    // })

    
    // console.log('shuffle', shuffle)


    return (
        <div className="px-8">
        <h2 className="tracking-tighter uppercase sm:text-3xl text-gray-800 font-bold py-2 my-4 md:py-2 md:my-0 border-b-2 border-blue-500 md:border-none">Best Rated Product</h2>
        <ul>
            {/* {firstFiveProduct.map((pd, inx) => {
                <p pd={pd} key={inx}>{pd.price}</p>
            })} */}
      </ul>
        {/* {
            firstFive.map((firstFiveProducts, index) => {
                <div firstFiveProducts={firstFiveProducts} key={index} className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 lg:grid-flow-col xl:gap-4">
                    <div className="relative w-full bg-white border cursor-pointer row-span-2 col-span-2">
                        <div className="overflow-x-hidden relative border-b p-2">
                            <img className="h-full w-full object-cover" src={firstFiveProducts.img} alt='first Five Products' />
                            <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            </p>
                            <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                                <span className="font-bold">Sale</span>
                            </div>
                        </div>
                        <div className="p-4 flex justify-between ">
                            <div>
                            <p className="text-md font-semibold text-gray-900 mb-0">Russell Hobbs Kettle Premium Stainlessteel</p>
                            <p className="text-md text-red-900 mt-0">$340</p>
                            </div>
                        </div>
                        <div className="px-2 py-4">
                            <button class="bg-custom hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                        </div>
                    </div>
                    <div className="group relative w-full bg-white border cursor-pointer">
                        <div className="overflow-x-hidden relative border-b p-2">
                            <img className="h-48 w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                            
                            <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                                <span className="font-bold">Sale</span>
                            </div>
                            <div className="bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">
        
                                            <button
                                                className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                            >
                                                <FontAwesomeIcon icon={faShoppingBag} />
                                            </button>
        
                                            <button
                                                className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                            >
                                                <FontAwesomeIcon icon={faEye} />
                                            </button>
        
                                            <button
                                                className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                            >
                                                <FontAwesomeIcon icon={faHeart} />
                                            </button >
        
                                            <button
                                                className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                            >
                                                <FontAwesomeIcon icon={faChartBar} />
                                            </button>
        
                                        </div>
                        </div>
                        <div className="p-4 flex justify-between ">
                            <div>
                            <p className="text-md font-semibold text-gray-900 mb-0">Russell Hobbs Kettle Premium Stainlessteel</p>
                            <p className="font-bold text-red-900 mt-0">$340</p>
                            </div>
                        </div>
                    </div>
                </div>
            })
        } */}
        <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 lg:grid-flow-col xl:gap-4">
            <div className="relative w-full bg-white border cursor-pointer row-span-2 col-span-2">
                <div className="overflow-x-hidden relative border-b p-2">
                    <img className="h-full w-full object-cover" src="https://demo2.madrasthemes.com/tokoo/wp-content/uploads/2018/06/j1.jpg" />
                    <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    </p>
                    <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span className="font-bold">Sale</span>
                    </div>
                </div>
                <div className="p-4 flex justify-between ">
                    <div>
                    <p className="text-md font-semibold text-gray-900 mb-0">Russell Hobbs Kettle Premium Stainlessteel</p>
                    <p className="text-md text-red-900 mt-0">$340</p>
                    </div>
                </div>
                <div className="px-2 py-4">
                    <button class="bg-custom hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                </div>
            </div>
            <div className="group relative w-full bg-white border cursor-pointer">
                <div className="overflow-x-hidden relative border-b p-2">
                    <img className="h-48 w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                    
                    <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span className="font-bold">Sale</span>
                    </div>
                    <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button >

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </button>

                                </div>
                </div>
                <div className="p-4 flex justify-between ">
                    <div>
                    <p className="text-md font-semibold text-gray-900 mb-0">Russell Hobbs Kettle Premium Stainlessteel</p>
                    <p className="font-bold text-red-900 mt-0">$340</p>
                    </div>
                </div>
            </div>
            <div className="group relative w-full bg-white border cursor-pointer">
                <div className="overflow-x-hidden relative border-b p-2">
                    <img className="h-48 w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                    
                    <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span className="font-bold">Sale</span>
                    </div>
                    <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button >

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </button>

                                </div>
                </div>
                <div className="p-4 flex justify-between ">
                    <div>
                    <p className="text-md font-semibold text-gray-900 mb-0">Russell Hobbs Kettle Premium Stainlessteel</p>
                    <p className="font-bold text-red-900 mt-0">$340</p>
                    </div>
                </div>
            </div>
            <div className="group relative w-full bg-white border cursor-pointer">
                <div className="overflow-x-hidden relative border-b p-2">
                    <img className="h-48 w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                    
                    <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span className="font-bold">Sale</span>
                    </div>
                    <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button >

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </button>

                                </div>
                </div>
                <div className="p-4 flex justify-between ">
                    <div>
                    <p className="text-md font-semibold text-gray-900 mb-0">Russell Hobbs Kettle Premium Stainlessteel</p>
                    <p className="font-bold text-red-900 mt-0">$340</p>
                    </div>
                </div>
            </div>
            <div className="group relative w-full bg-white border cursor-pointer">
                <div className="overflow-x-hidden relative border-b p-2">
                    <img className="h-48 w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                    
                    <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span className="font-bold">Sale</span>
                    </div>
                    <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button >

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </button>

                                </div>
                </div>
                <div className="p-4 flex justify-between ">
                    <div>
                    <p className="text-md font-semibold text-gray-900 mb-0">Russell Hobbs Kettle Premium Stainlessteel</p>
                    <p className="font-bold text-red-900 mt-0">$340</p>
                    </div>
                </div>
            </div>
            <div className="group relative w-full bg-white border cursor-pointer">
                <div className="overflow-x-hidden relative border-b p-2">
                    <img className="h-48 w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                    
                    <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span className="font-bold">Sale</span>
                    </div>
                    <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button >

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </button>

                                </div>
                </div>
                <div className="p-4 flex justify-between ">
                    <div>
                    <p className="text-md font-semibold text-gray-900 mb-0">Russell Hobbs Kettle Premium Stainlessteel</p>
                    <p className="font-bold text-red-900 mt-0">$340</p>
                    </div>
                </div>
            </div>
            <div className="group relative w-full bg-white border cursor-pointer">
                <div className="overflow-x-hidden relative border-b p-2">
                    <img className="h-48 w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                    
                    <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span className="font-bold">Sale</span>
                    </div>
                    <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button >

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </button>

                                </div>
                </div>
                <div className="p-4 flex justify-between ">
                    <div>
                    <p className="text-md font-semibold text-gray-900 mb-0">Russell Hobbs Kettle Premium Stainlessteel</p>
                    <p className="font-bold text-red-900 mt-0">$340</p>
                    </div>
                </div>
            </div>
            <div className="group relative w-full bg-white border cursor-pointer">
                <div className="overflow-x-hidden relative border-b p-2">
                    <img className="h-48 w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                    
                    <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span className="font-bold">Sale</span>
                    </div>
                    <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button >

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </button>

                                </div>
                </div>
                <div className="p-4 flex justify-between ">
                    <div>
                    <p className="text-md font-semibold text-gray-900 mb-0">Russell Hobbs Kettle Premium Stainlessteel</p>
                    <p className="font-bold text-red-900 mt-0">$340</p>
                    </div>
                </div>
            </div>
            <div className="group relative w-full bg-white border cursor-pointer">
                <div className="overflow-x-hidden relative border-b p-2">
                    <img className="h-48 w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                    
                    <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span className="font-bold">Sale</span>
                    </div>
                    <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button >

                                    <button
                                        className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2"
                                    >
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </button>

                                </div>
                </div>
                <div className="p-4 flex justify-between ">
                    <div>
                    <p className="text-md font-semibold text-gray-900 mb-0">Russell Hobbs Kettle Premium Stainlessteel</p>
                    <p className="font-bold text-red-900 mt-0">$340</p>
                    </div>
                </div>
            </div>
            
                
            
            
            
           
            
            
           
        </div>
      </div>
    );
};

export default BestRatedProduct;