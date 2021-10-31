import {useEffect, useContext } from 'react';
import { userContext } from '../App';
import { getCompareToDb } from '../Components/Cart/CompareCart/CompareCartDatabase';

const useCompareCart = product => {
    const { CompareCart, SetCompareCart} = useContext(userContext);
    useEffect(() => {

        if (product.length) {
            const savedCart = getCompareToDb();
            const storedCart = [];
            
            for (const _id in savedCart) {
                const addedProduct = product.find(product => product._id === _id);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[_id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            SetCompareCart(storedCart);
        }

    }, [product]);

    return [CompareCart, SetCompareCart];
};

export default useCompareCart;