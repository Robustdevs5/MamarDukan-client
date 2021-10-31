import {useEffect, useContext } from 'react';
import { userContext } from '../App';
import { getWishlistToDb } from '../Components/Cart/WishlistCart/WishListCartDatabase';

const useWishlistCart = products => {
    const { wishlistCart, SetWishlistCart } = useContext(userContext);
    
    useEffect(() => {

        if (products.length) {
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

export default useWishlistCart;