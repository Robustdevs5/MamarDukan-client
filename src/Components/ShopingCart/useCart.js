import { useState, useEffect, useContext } from 'react';
import { userContext } from '../../App';
import { getStoredCart } from './CartDatabase';

const useCart = products => {
    // const [cart, setCart] = useState([]);
    const { cart, setCart } = useContext(userContext);

    useEffect(() => {

        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const _id in savedCart) {
                const addedProduct = products.find(product => product._id === _id);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[_id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

    }, [products]);

    return [cart, setCart];
};

export default useCart;