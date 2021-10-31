import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';

const Wishlist = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <div className="bg-white">
          <div className="w-full text-center justify-center item-center ">
              <h1 className="font-bold text-5xl text-gray-700 py-16">
                Wishlist
              </h1>
          </div>

          <section className="container mx-auto py-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">Action</th>
                        <th className="px-4 py-3">Image</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3"></th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 text-ms font-semibold border text-center"> X </td>
                        
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-16 h-16 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">Red & Black Headphone</td>
                        <td className="px-4 py-3 text-ms font-semibold border">$100</td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                            <button className="primary_BTN py-2 px-5 rounded w-full flex items-center justify-evenly">Add to Cart </button>
                        </td>
                    </tr>
                    
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 text-ms font-semibold border text-center"> X </td>
                        
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-16 h-16 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">Red & Black Headphone</td>
                        <td className="px-4 py-3 text-ms font-semibold border">$100</td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                            <button className="primary_BTN py-2 px-5 rounded w-full flex items-center justify-evenly">Add to Cart </button>
                        </td>
                    </tr>
                    
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 text-ms font-semibold border text-center"> X </td>
                        
                        <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-16 h-16 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                        </div>
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">Red & Black Headphone</td>
                        <td className="px-4 py-3 text-ms font-semibold border">$100</td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                            <button className="primary_BTN py-2 px-5 rounded w-full flex items-center justify-evenly">Add to Cart </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </section>
      </div>                   
      <Footer />
    </>
  );
};

export default Wishlist;