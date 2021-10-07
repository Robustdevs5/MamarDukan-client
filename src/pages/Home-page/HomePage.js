import React from "react";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import MostViewedProducts from "../../Components/MostViewedProducts/MostViewedProducts";
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Slider from "../../Components/Slider/Slider";
import TopBar from "../../Components/TopBar/TopBar";
import Footer from "../../Components/Footer/Footer";
import { Policies } from "../../Components/Policies/Policies";
import TechnologyProducts from "../../Components/TechnologyProducts/TechnologyProducts";
import AllInOne from "../../Components/AllInOne/AllInOne";
import Newsletter from "../../Components/Newsletter/Newsletter";
import SummerStyles from "../../Components/SummerStyles/SummerStyles";
import ClassicProducts from "../../Components/ClassicProducts/ClassicProducts";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Slider />
      <Policies />
      <NewProducts />
      <FeaturedProduct />
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
