import React from 'react';
import TopBar from "../../Components/TopBar/TopBar";
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Deatils from './Deatils';
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import Footer from "../Footer/Footer"
import Topbar from './Topbar';
import Button from './Button'

const ProductDeatils = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <Navbar />
            <Topbar />
            <Deatils />
            <Button />
            <FeaturedProduct />
            <Footer />
        </div>
    );
};

export default ProductDeatils;