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
          <div className=" w-full text-center justify-center item-center ">
              <h1 className="font-bold text-5xl text-gray-700 py-16">
                Mamar Dukan Help Center
              </h1>
          </div>
          <div class="container mx-auto pb-12">
            <div class="flex flex-wrap">
              <div class=" xl:w-1/3 md:w-1/2 p-4">
                <Link to="/how-to-buy"><div class="cursor-pointer hover:bg-red-500  border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class=" text-lg  font-medium title-font mb-2">How to buy a product from mamar dukan. </h2>
                </div></Link>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <Link to="/return-and-refund"><div class="cursor-pointer hover:bg-red-500  border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Mamar dukan return & refund policy</h2>
                </div></Link>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <Link to="/affiliates"><div class="cursor-pointer hover:bg-red-500  border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Mamar dukan affiliate policy </h2>
                </div></Link>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <Link to="/terms-and-conditions"><div class="cursor-pointer hover:bg-red-500  border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Mamar dukan terms & conditions</h2>
                </div></Link> 
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <Link to="/privacy-policy"><div class="cursor-pointer hover:bg-red-500  border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Mamar dukan privacy policy </h2>
                </div></Link>
              </div>              
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <Link to="/trackOrder"><div class="cursor-pointer hover:bg-red-500  border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">How to your track order </h2>
                </div></Link>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <Link to="/privacy-policy"><div class="cursor-pointer hover:bg-red-500  border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Mamar dukan cookies policy </h2>
                </div></Link>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <Link to="/contact"><div class="cursor-pointer hover:bg-red-500  border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Mamar dukan customer care </h2>
                </div></Link>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <Link to="/blog"><div class="cursor-pointer hover:bg-red-500  border border-gray-300 px-6 py-4 rounded-lg">
                  <h2 class="text-lg  font-medium title-font mb-2">Mamar dukan blogs </h2>
                </div></Link>
              </div>
            </div>
          </div>
      </div>                   
      <Footer />
    </>
  );
};

export default HelpCenter;