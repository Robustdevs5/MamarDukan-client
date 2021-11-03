import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';

const HowToBuy = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
        	
          <div className="w-full text-center justify-center item-center ">
              <h1 className="font-bold text-5xl text-gray-700 py-16">
              How To Buy
              </h1>
          </div>
          <section className="bg-gray-50">
            <div className="p-4 mt-4">
                <h1 className="text-4xl text-center font-semibold mb-6">Follow the steps to buy product</h1>
                <div className="container">
                <div className="flex flex-col md:grid grid-cols-12 text-gray-50">

                    <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-green-900 pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-900 shadow text-center">
                        <i className="fas fa-check-circle text-white">1</i>
                        </div>
                    </div>
                    <div className="bg-green-900 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                        <h3 className="font-semibold text-lg mb-1">Choose Product</h3>
                    </div>
                    </div>
                    <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-green-900 pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-900 shadow text-center">
                        <i className="fas fa-check-circle text-white">1</i>
                        </div>
                    </div>
                    <div className="bg-green-900 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                        <h3 className="font-semibold text-lg mb-1">Add To Cart</h3>
                    </div>
                    </div>

                    <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-green-800 pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-800 shadow text-center">
                        <i className="fas fa-check-circle text-white">2</i>
                        </div>
                    </div>
                    <div className="bg-green-800 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                        <h3 className="font-semibold text-lg mb-1">View Cart </h3>
                    </div>
                    </div>
                    <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-green-700 pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-700 shadow text-center">
                        <i className="fas fa-check-circle text-white">3</i>
                        </div>
                    </div>
                    <div className="bg-green-700 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                        <h3 className="font-semibold text-lg mb-1">Checkout Cart</h3>
                    </div>
                    </div>
                    <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-green-600 pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-600 shadow text-center">
                        <i className="fas fa-check-circle text-white">4</i>
                        </div>
                    </div>
                    <div className="bg-green-600 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                        <h3 className="font-semibold text-lg mb-1">Shipping Address</h3>
                    </div>
                    </div>
                    <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                        <i className="fas fa-check-circle text-white">5</i>
                        </div>
                    </div>
                    <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                        <h3 className="font-semibold text-lg mb-1">Payment</h3>
                    </div>
                    </div>
                    <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-green-400 pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-400 shadow text-center">
                        <i className="fas fa-check-circle text-white">6</i>
                        </div>
                    </div>
                    <div className="bg-green-400 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                        <h3 className="font-semibold text-lg mb-1">Place Order</h3>
                    </div>
                    </div>

                    <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-custom pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-custom shadow text-center">
                        <i className="fas fa-exclamation-circle text-gray-400">7</i>
                        </div>
                    </div>
                    <div className="bg-custom col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                        <h3 className="font-semibold text-lg mb-1 text-gray-400">Delivery</h3>
                    </div>
                    </div>

                </div>
                </div>
            </div>
            </section>

      <Footer />
    </>
  );
};

export default HowToBuy;