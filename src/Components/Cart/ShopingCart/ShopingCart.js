import React, { useContext, useState } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar/Navbar';
import TopBar from '../../TopBar/TopBar';
import Table from '../../ShopingCart/Table';
import { userContext } from '../../../App';
import { toast, ToastContainer } from 'react-toastify';
import { addToDb, removeFromDb } from './CartDatabase';


const ShopingCart = () => {
  const { cart, setCart } = useContext(userContext);

  const onAdd = (newProduct) => {
    const exists = cart.find(pd => pd._id === newProduct._id);
    let newCart = [];
    if (exists) {
        const rest = cart.filter(pd => pd._id !== newProduct._id);
        exists.quantity = exists.quantity + 1;
        newCart = [newProduct , ...rest];
        toast.success( "increase "+ exists.quantity + " quantity", {
            position: "bottom-right",
        });
    }
   
    setCart(newCart);
    // save to local storage (for now)
    addToDb(newProduct._id);

}


  const onRemove = (newProduct) => {
    const exist = cart.find(pd => pd._id === newProduct._id);
    let newCart = [];
    if (exist) {
        const rest = cart.filter(pd => pd._id !== newProduct._id);
        exist.quantity = exist.quantity - 1;
        newCart = [ newProduct , ...rest];
        
        // if(exist.quantity <= 1){
        //   exist.quantity = 1
        // }
        toast.success( "decrease "+ exist.quantity + " quantity", {
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
        <ToastContainer/>
        <Footer />
      </div>
    </div>
  );
};

export default ShopingCart;