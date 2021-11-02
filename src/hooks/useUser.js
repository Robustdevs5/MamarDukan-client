

import {useEffect, useContext, useState } from 'react';
import { userContext } from '../App';
import { getWishlistToDb } from '../Components/Cart/WishlistCart/WishListCartDatabase';

const useUser = () => {
    const [ wishlistCart, SetWishlistCart ] = useState();
    // const { wishlistCart, SetWishlistCart } = useContext(userContext);
    
    useEffect(() => {

        if () {
            const saveCart = getWishlistToDb();
            const storedCart = [];
            
            for (const _id in saveCart) {
                const addedProduct = products.find(product => product._id === _id);
                if (addedProduct) {
                    // set quantity
                    const quantity = saveCart[_id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            SetWishlistCart(storedCart);
        }

    }, [products]);

    

    return [wishlistCart, SetWishlistCart];
};

export default useUser;