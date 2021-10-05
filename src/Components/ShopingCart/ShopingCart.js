import React from 'react';
import Footer from '../Footer/Footer';
import FooterCatagory from '../Footer/FooterCatagory';
import Navbar from '../Navbar/Navbar/Navbar';
import TopBar from '../TopBar/TopBar';
import Table from './Table';

const ShopingCart = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Table />
      <FooterCatagory />
      <Footer />
    </div>
  );
};

export default ShopingCart;