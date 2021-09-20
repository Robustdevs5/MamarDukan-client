import React from 'react';
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Slider />
            <FeaturedProduct />
            <Footer />
        </div>
    );
};

export default HomePage;
