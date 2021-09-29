import React from 'react';
import img from "../../images/1.jpg";
import  {Shortdetails}  from './api';
import './Deatils.css';

const Deatils = () => {

    let quantity = 1;
    return (
        <div className="Details">
           <div className="right">
                <img className="m-auto" src={img} alt=""/>
           </div>
           <div className="left pl-5">
                <h3 className=" text-2xl text-red-600">Price: 500$</h3>
                <p className="text-xs border-b-2 pb-3 mb-5">Sold by:  | status:</p>
                <div className="border-b-2 pb-5 mb-3">
                    {
                        Shortdetails.map((item, index) => 
                            <li className="text-sm" key={index} item={item}> {item.name}</li>
                        )
                    }
                </div>
                <label>Choose a size</label>
                <select className="pl-6 ml-9" name="Size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                <br/>
                <label>Choose a Color</label>
                <select className="pl-6 ml-7" name="Color">
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Red">Red</option>
                    <option value="White">White</option>
                </select>
                
                <div style={{display: 'flex', border: '1px solid black'}} className="seller">
                   
                </div>
                <button>Add to Cart</button>
                <button>Buy Now</button>
           </div>
        </div>
    );
};

export default Deatils;
