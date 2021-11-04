import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import TopBar from "../../Components/TopBar/TopBar";
import Footer from "../Footer/Footer";
import Description from './Description';
import ProductInfo from './ProductInfo';

const ProductDeatils = () => {
    const [singleProducts, setSingleProducts] = useState([])
    const [review, setReview] = useState([]);

    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setSingleProducts([data.product]))

    }, [id])


    return (
        <>
            <TopBar />
            <Navbar />
            <div className="container mx-auto">
                <ProductInfo review={review} />
                {singleProducts.map(products =>
                 <Description key={products._key} singleProduct={products} review={review} setReview={setReview}/>)}
            </div>           
            <Footer />
        </>
    );
};

export default ProductDeatils;