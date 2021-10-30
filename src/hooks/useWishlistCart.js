import {useEffect, useContext } from 'react';
import { userContext } from '../App';
import { getWishlistToDb } from '../Components/Cart/WishlistCart/WishListCartDatabase';

const useWishlistCart = product => {
    const { wishlistCart, SetWishlistCart } = useContext(userContext);
console.log('wishlistCart wishlistCart', wishlistCart)
    useEffect(() => {

        if (product.length) {
            const savedCart = getWishlistToDb();
            const storedCart = [];
            
console.log('storedCart storedCart', storedCart)
            for (const _id in savedCart) {
                const addedProduct = product.find(product => product._id === _id);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[_id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            SetWishlistCart(storedCart);
        }

    }, [product]);

    return [wishlistCart, SetWishlistCart];
};

export default useWishlistCart;