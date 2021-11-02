import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';

const HelpCenter = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <div className="bg-white">
          <div className="w-full text-center justify-center item-center ">
              <h1 className="font-bold text-5xl text-gray-700 py-16">
                Mamar Dukan Help Center
              </h1>
          </div>
          <div class="container mx-auto pb-12">
            <div class="flex flex-wrap">
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2"><Link to="/how-to-buy">How to buy a product from mamar dukan.</Link> </h2>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2"><Link to="/return-and-refund">Mamar dukan return & refund policy</Link></h2>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2"><Link to="/affiliates">Mamar dukan affiliate policy</Link> </h2>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2"><Link to="/terms-and-conditions">Mamar dukan terms & conditions</Link> </h2>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2"><Link to="/privacy-policy">Mamar dukan privacy policy</Link> </h2>
                </div>
              </div>              
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2"><Link to="/trackOrder">How to your track order</Link> </h2>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2"><Link to="/privacy-policy">HMamar dukan cookies policy</Link> </h2>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2"><Link to="/contact">HMamar dukan customer care</Link> </h2>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2"><Link to="/blog">HMamar dukan blogs</Link> </h2>
                </div>
              </div>
            </div>
          </div>
      </div>                   
      <Footer />
    </>
  );
};

export default HelpCenter;