import React from 'react';
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import TopBar from "../../Components/TopBar/TopBar";
import Footer from "../Footer/Footer";
import './Deatils.css';
import Description from './Description';
import ProductInfo from './ProductInfo';

const ProductDeatils = () => {
    return (
        <>
            <TopBar />
            <Header />
            <Navbar />
            <div className="container mx-auto">
                {/* <div className="product-detail">
                    <div className="entry-product-header">
                        <div className="entry-left">
                            <h1 className="product_title entry-title">Amcrest Security Camera in White Color</h1>
                            <ul className="entry-meta">
                                <li className="meta-brand">Brand: 
                                <a href="#" className="meta-value">Amcrest</a></li>
                                <li><img src={star} alt="" /></li> 
                                <li className="meta-sku">SKU: <span className="meta-value">YI1133569247 </span></li>
                            </ul>
                        </div>
                        <div className="social-links">
                            <a title="" href="#" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a title="" href="#" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a title="" href="#" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div> 
                    </div>
                </div> */}
                <ProductInfo />
                <Description />
            </div>           
            <Footer />
        </>
    );
};

export default ProductDeatils;