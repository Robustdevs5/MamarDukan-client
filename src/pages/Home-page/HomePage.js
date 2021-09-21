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
};

export default HomePage;