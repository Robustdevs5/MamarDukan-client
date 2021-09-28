import React from 'react';
import img from "../../images/1.jpg";
import './Deatils.css';

const Deatils = () => {
    return (
        <div className="Details">
           <div className="right">
                <img className="m-auto" src={img} alt=""/>
           </div>
           <div className="left">
               <h1>Title of Deatils Dukan amet consectetur adipisicing elit</h1> 
                <p>spacefication</p>
                <p>Brand : Tamal </p>
                <label>Choose a size</label>
                <select name="Size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                <br/>
                <label>Choose a Color</label>
                <select name="Color">
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Red">Red</option>
                    <option value="White">White</option>
                </select>
                <h3>Price: 500$</h3>
                <div style={{display: 'flex', border: '1px solid black'}} className="seller">
                    <img className="w-12 mr-6 " src={img} alt=""></img>
                    <p>seller</p>
                </div>
                <button>Add to Cart</button>
                <button>Buy Now</button>
           </div>
        </div>
    );
};

export default Deatils;
