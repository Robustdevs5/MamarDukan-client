import React from "react";
import AllInOne from "../../Components/AllInOne/AllInOne";
import BestRatedProduct from "../../Components/BestRatedProduct/BestRatedProduct";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import FlashSaleProducts from "../../Components/FlashSaleProducts/FlashSaleProducts";
import Footer from "../../Components/Footer/Footer";
import HomePageBanner from "../../Components/HomePageBanner/HomePageBanner";
import MostViewedProducts from "../../Components/MostViewedProducts/MostViewedProducts";
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import NewArrivalProduct from "../../Components/NewArrivalProduct/NewArrivalProduct";
import NewProducts from "../../Components/NewProducts/NewProducts";
import { Policies } from "../../Components/Policies/Policies";
import Slider from "../../Components/Slider/Slider";
import SummerStyles from "../../Components/SummerStyles/SummerStyles";
import TopBar from "../../Components/TopBar/TopBar";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Slider />
      <Policies />
      <NewProducts />
      <FeaturedProduct />
      <NewArrivalProduct />
      <BestRatedProduct />
      <FlashSaleProducts />
      <HomePageBanner />
      <SummerStyles/>
      <AllInOne/>
      <MostViewedProducts />
      <Footer />
    </div>
  );
};

export default HomePage;
