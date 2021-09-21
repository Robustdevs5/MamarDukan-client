<<<<<<< HEAD
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Sliders from '../../Components/Slider/Slider';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Sliders />
            <Footer/>
        </div>
    );
=======
import React from "react";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MostViewedProducts from "../../Components/MostViewedProducts/MostViewedProducts";
import Navbar from "../../Components/Navbar/Navbar";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Slider from "../../Components/Slider/Slider";
import TopBar from "../../Components/TopBar/TopBar";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Navbar />
      <Slider />
      <NewProducts />
      <FeaturedProduct />
      <MostViewedProducts />
      {/* <Footer /> */}
    </div>
  );
>>>>>>> aaefd70fa715081c5668900d6d3021ade0810c36
};

export default HomePage;
