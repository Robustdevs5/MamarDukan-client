import React, { useContext, useState } from 'react';
import Footer from '../Footer/Footer';
import FooterCatagory from '../Footer/FooterCatagory';
import Navbar from '../Navbar/Navbar/Navbar';
import TopBar from '../TopBar/TopBar';
import Table from './Table';
import { userContext } from '../../App';
import { toast } from 'react-toastify';
import { addToDb, removeFromDb } from './CartDatabase';
import Newsletter from '../Newsletter/Newsletter';


const ShopingCart = () => {
  const { cart, setCart } = useContext(userContext);

  const onAdd = (newProduct) => {
    const exists = cart.find(pd => pd._id === newProduct._id);
    let newCart = [];
    if (exists) {
        const rest = cart.filter(pd => pd._id !== newProduct._id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, newProduct];
        toast.success( "increase "+ exists.quantity + " quantity", {
            position: "bottom-right",
        });
    }
   
    setCart(newCart);
    // save to local storage (for now)
    addToDb(newProduct._id);

}


const onRemove = (newProduct) => {
  const exists = cart.find(pd => pd._id === newProduct._id);
  let newCart = [];
  if (exists) {
      const rest = cart.filter(pd => pd._id !== newProduct._id);
      exists.quantity = exists.quantity - 1;
      newCart = [...rest, newProduct];
      
      if(exists.quantity <= 1){
        exists.quantity = 1
      }
      toast.success( "decrease "+ exists.quantity + " quantity", {
        position: "bottom-right",
    });
  }

  setCart(newCart);
  // save to local storage (for now)
  addToDb(newProduct._id);

}

const onDelete = id => {
  const newCart = cart.filter(product => product._id !== id);
  setCart(newCart);
  removeFromDb(id);
  toast.success("successful product remove", {
    position: "bottom-right",
  });
}
  return (
    <div>
      <TopBar />
      <Navbar />
      <Table onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} />
      <div className="m-5">
        <FooterCatagory />
        <Newsletter/>
        <Footer />
      </div>
    </div>
  );
};

export default ShopingCart;