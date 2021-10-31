import React from 'react';
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
      </div>                   
      <Footer />
    </>
  );
};

export default HelpCenter;