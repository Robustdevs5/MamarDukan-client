import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import FooterCatagory from '../Footer/FooterCatagory';
import Navbar from '../Navbar/Navbar/Navbar';
import TopBar from '../TopBar/TopBar';
import Table from './Table';
import {Cart} from "./Data";


const ShopingCart = () => {
  const {products} = Cart;
  const [cartItems, setCartItems] = useState(products);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      <TopBar />
      <Navbar />
      <Table onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      <div className="m-5"><FooterCatagory />
      <Footer /></div>
    </div>
  );
};

export default ShopingCart;