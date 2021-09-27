import React from 'react';
import './Deatils.css';
import img from "../../Images/1.jpg"

const Deatils = () => {
    return (
        <div className="Details">
           <div className="right">
                <img src={img}></img>
           </div>
           <div className="left">
               <h1>Title of Deatils Dukan amet consectetur adipisicing elit</h1> 
                <p>spacefication</p>
                <label>Choose a size</label>
                <select name="Size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                <h3>Price: 500$</h3>
                <div style={{display: 'flex'}} className="seller">
                    <img className="w-12 mr-6" src={img}></img>
                    <p>seller</p>
                </div>
                <button>Add to Cart</button>
                <button>Buy Now</button>
           </div>
        </div>
    );
};

export default Deatils;