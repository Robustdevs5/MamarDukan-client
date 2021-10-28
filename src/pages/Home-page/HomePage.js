import React from "react";
import AllInOne from "../../Components/AllInOne/AllInOne";
import BestRatedProduct from "../../Components/BestRatedProduct/BestRatedProduct";
import ClassicProducts from "../../Components/ClassicProducts/ClassicProducts";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import Footer from "../../Components/Footer/Footer";
import MostViewedProducts from "../../Components/MostViewedProducts/MostViewedProducts";
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import NewArrivalProduct from "../../Components/NewArrivalProduct/NewArrivalProduct";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Newsletter from "../../Components/Newsletter/Newsletter";
import { Policies } from "../../Components/Policies/Policies";
import Slider from "../../Components/Slider/Slider";
import SummerStyles from "../../Components/SummerStyles/SummerStyles";
import TechnologyProducts from "../../Components/TechnologyProducts/TechnologyProducts";
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
      <TechnologyProducts />
      <BestRatedProduct />
      <SummerStyles/>
      <ClassicProducts/>
      <TechnologyProducts />
      <AllInOne/>
      <MostViewedProducts />
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default HomePage;
