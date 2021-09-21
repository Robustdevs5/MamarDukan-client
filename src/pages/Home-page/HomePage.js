import React from "react";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import Header from "../../Components/Header/Header";
import MostViewedProducts from "../../Components/MostViewedProducts/MostViewedProducts";
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Slider from "../../Components/Slider/Slider";
import TopBar from "../../Components/TopBar/TopBar";
import Footer from '../../Components/Footer/Footer';

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
      <Footer />
    </div>
  );
};

export default HomePage;
