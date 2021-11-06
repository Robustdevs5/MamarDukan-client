import React ,{useEffect, useState}from 'react';
import { AiOutlineMail, AiOutlineNumber } from 'react-icons/ai';
import { FaDollarSign, FaMapMarkerAlt, FaStaylinked } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { MdDateRange } from 'react-icons/md';
import { Loader } from '../../../../Loader/Loader';

const ModalDetails = ({modalId}) => {
    
    const [modalProducts, setModalProducts] = useState({})
    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/orders/${modalId}`)
          .then(res => res.json())
          .then(data => setModalProducts(data.order))
      }, [modalId])
    return (
        <section class="text-gray-900 body-font overflow-hidden w-full bg-white">
            
            {modalProducts ? 
            
            <div class="container mx-auto">
                <div className="flex items-center py-1">
                    <AiOutlineNumber className="h-4 w-4 mx-3 fill-current"></AiOutlineNumber>
                    <h3 className="">
                        <span className="font-bold">OrderID : </span>
                        {modalProducts.orderId ? modalProducts.orderId : ""}
                    </h3>
                </div>
                <div className="flex items-center py-1">
                    <FaStaylinked className="h-4 w-4 mx-3 fill-current"></FaStaylinked>
                    <h3 className="">
                        <span className="font-bold">Status : </span>
                        {modalProducts.status}
                    </h3>
                </div>
                <div className="flex items-center py-1">
                    <FaMapMarkerAlt className="h-4 w-4 mx-3 fill-current"></FaMapMarkerAlt>
                    <h3 className="">
                        <span className="font-bold">Address : </span>
                        {modalProducts.address}
                    </h3>
                </div>
                <div className="flex items-center py-1">
                    <MdDateRange className="h-4 w-4 mx-3 fill-current"></MdDateRange>
                    <h3 className="">
                        <span className="font-bold">Date : </span>
                        {(new Date(modalProducts.date).toLocaleDateString())}
                    </h3>
                </div>
                <div className="flex items-center py-1">
                    <AiOutlineMail className="h-4 w-4 mx-3 fill-current"></AiOutlineMail>
                    <h3 className="">
                        <span className="font-bold">Email : </span>
                        {modalProducts.email}
                    </h3>
                </div>
                <div className="flex items-center py-1">
                    <FiPhoneCall className="h-4 w-4 mx-3 fill-current"></FiPhoneCall>
                    <h3 className="">
                        <span className="font-bold">Phone : </span>
                        {modalProducts.phone}
                    </h3>
                </div>                
                <div className="flex items-center py-1">
                    <FaDollarSign className="h-4 w-4 mx-3 fill-current"></FaDollarSign>
                    <h3 className="">
                        <span className="font-bold">Price : </span>
                        {modalProducts.price}
                    </h3>
                </div>


                {/* <div class="lg:w-4/5 mx-auto">
    
                <div className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200">
                    <img alt="ecommerce" src={modalProducts.img} />
                </div>
    
                <div class=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME: {modalProducts.brand}</h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{modalProducts.name}</h1>
                    <div class="flex mb-4">
                    <span class="flex items-center">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span class="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                        <a class="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        </a>
                    </span>
                    </div>
                    <ul class="list-disc space-y-2">
                    <li class="flex items-start">
                        <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        <p class="ml-2">Unrestrained and portable active stereo speaker</p>
                    </li>
                    <li class="flex items-start">
                        <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        <p class="ml-2">Free from the confines of wires and chords</p>
                    </li>
                    <li class="flex items-start">
                        <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        <p class="ml-2">20 hours of portable capabilities</p>
                    </li>
                    </ul>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <div class="flex">
                        <span class="mr-3">Color</span>
                        <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                    <div class="flex ml-6 items-center">
                        <span class="mr-3">Size</span>
                        <div class="relative">
                        <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                            <option>SM</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                        </div>
                    </div>
                    </div>
                    <div class="flex">
                    <span class="title-font font-medium text-2xl text-gray-900">${modalProducts.price}</span>
                    <button class="flex ml-auto text-white   border-0 py-2 px-6 focus:outline-none primary_BTN  rounded">Add To Cart</button>
                    <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
     */}
            </div>: <Loader/>
        }
      </section>
    );
};

export default ModalDetails;