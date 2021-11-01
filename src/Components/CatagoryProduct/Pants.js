import React, { useEffect, useState } from 'react';
import Product from './Product';

const Pants = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products/catagory?=pants`)
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    return (
        <div>
            <Product />
        </div>
    );
};

export default Pants;