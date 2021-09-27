import React from 'react';
import TopBar from "../../Components/TopBar/TopBar";
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Deatils from './Deatils';
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import Footer from "../Footer/Footer"

const ProductDeatils = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <Navbar />
            <Deatils />
            <FeaturedProduct />
            <Footer />
        </div>
    );
};

export default ProductDeatils;