import React from 'react';
import { CgArrowRightR } from "react-icons/cg";
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';
import Product from '../../images/promotion-1.jpg';

const Compare = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <div className="bg-white">
          <div className="w-full text-center justify-center item-center ">
              <h1 className="font-bold text-5xl text-gray-700 py-16">
                Compare Product
              </h1>
          </div>
          <div className="container mx-auto px-4 pb-16">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="">
                            <tr className="border-b border-gray-300">
                            <th
                                scope="col"
                                className="bg-gray-50 px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                PRODUCT
                            </th>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                <p className="border-b border-gray-300 text-md font-medium text-gray-700 cursor-pointer mb-4 pb-2">Remove</p>
                                <img className="w-64 h-full" src={Product} alt="Product Title" />
                                <p className="pt-2 text-md font-medium text-gray-700">Red & Black Headphone</p>
                            </td>
                            
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                <p className="border-b border-gray-300 text-md font-medium text-gray-700 cursor-pointer mb-4 pb-2">Remove</p>
                                <img className="w-64 h-full" src={Product} alt="Product Title" />
                                <p className="pt-2 text-md font-medium text-gray-700">Red & Black Headphone</p>
                            </td>
                            </tr>
                            <tr className="border-b border-gray-300">
                            <th
                                scope="col"
                                className="bg-gray-50 px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                RATING
                            </th>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                            >
                                5 Star
                            </td>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                            >
                                5 Star
                            </td>
                            </tr>
                            
                            <tr className="border-b border-gray-300">
                            <th
                                scope="col"
                                className="bg-gray-50 px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                PRICE	
                            </th>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                $50
                            </td>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                $50
                            </td>
                            </tr>
                            <tr className="border-b border-gray-300">
                            <th
                                scope="col"
                                className="bg-gray-50 px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                DESCRIPTION	
                            </th>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Et minus eos corporis beatae vel <br />repellendus ducimus quod nemo cumque voluptate.
                            </td>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Et minus eos corporis beatae vel <br />repellendus ducimus quod nemo cumque voluptate.
                            </td>
                            </tr>
                            <tr className="border-b border-gray-300">
                            <th
                                scope="col"
                                className="bg-gray-50 px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                COLOR	
                            </th>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                Red
                            </td>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                Black
                            </td>
                            </tr>
                            <tr className="border-b border-gray-300">
                            <th
                                scope="col"
                                className="bg-gray-50 px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                SIZE	
                            </th>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                <span className="border border-gray-300 py-2 px-4 my-2">XL</span>
                            </td>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                <span className="border border-gray-300 py-2 px-4 my-2">XLL</span>
                            </td>

                            </tr>
                            <tr>
                            <th
                                scope="col"
                                className="bg-gray-50 px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                               	
                            </th>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                <button className="primary_BTN py-2 px-5 rounded w-full flex items-center justify-evenly">Add to Cart <CgArrowRightR /></button>
                            </td>
                            <td
                                className="px-6 py-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider"
                            >
                                <button className="primary_BTN py-2 px-5 rounded w-full flex items-center justify-evenly">Add to Cart <CgArrowRightR /></button>
                            </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
      </div>                   
      <Footer />
    </>
  );
};

export default Compare;