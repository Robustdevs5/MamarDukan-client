import React, { useEffect, useState } from 'react';
import Product from './Product';

const Pants = () => {
    const [product1, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://mamar-dukan.herokuapp.com/products/catagory?=Man`)
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    return (
        <div>
            <Product product1={product1} />
        </div>
    );
};

export default Pants;