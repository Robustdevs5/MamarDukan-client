import React from 'react';
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import TopBar from "../../Components/TopBar/TopBar";
import Footer from "../Footer/Footer";
import Description from './Description';
import ProductInfo from './ProductInfo';

const ProductDeatils = () => {
    return (
        <>
            <TopBar />
            <Navbar />
            <div className="container mx-auto">
                <ProductInfo />
                <Description />
            </div>           
            <Footer />
        </>
    );
};

export default ProductDeatils;