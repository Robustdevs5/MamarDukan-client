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
        <div className="container mx-auto px-4">
          <div className="w-full md:w-8/12 mx-auto pt-8 pb-16">
            <h1 className="font-semibold text-2xl md:text-3xl font-heading text-grey-500"> Follow the steps to buy product</h1>
              <div className="">
              <ul className="list-disc space-y-2 pt-8 text-lg">
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7 primary_color">
                    <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-2 text-xl">Find your desired product from our Mamar Dukan website</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7 primary_color">
                    <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-2 text-xl">From the product page click on "Buy Now" if you just want a single product to order</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7 primary_color">
                    <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-2 text-xl">Click on "Add To Cart" if you want to add more products to the cart..</p>
                </li>
                
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7 primary_color">
                    <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-2 text-xl">After adding all of your desired products in cart - Go to the cart - select the products you want to order. </p>
                </li>
                
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7 primary_color">
                    <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-2 text-xl">Click on the “Proceed to Checkout” button</p>
                </li>
              </ul>
              </div>
          </div>                
        </div>

      <Footer />
    </>
  );
};

export default HowToBuy;