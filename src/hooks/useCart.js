import { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { getStoredCart } from '../Components/Cart/ShopingCart/CartDatabase';

const useCart = products => {
    const [cart, setCart] = useState([]);
    // const { cart, setCart } = useContext(userContext);

    // setTimeout(
    //      useEffect(() => {

    //         // if (!products){
    //         //     console.log('loadeing')
    //         // } else {
    //             const savedCart = getStoredCart();
    //             const storedCart = [];
    //             for (const _id in savedCart) {
    //                 const addedProduct = products.find(product => product._id === _id);
    //                 if (addedProduct) {
    //                     // set quantity
    //                     const quantity = savedCart[_id];
    //                     addedProduct.quantity = quantity;
    //                     storedCart.push(addedProduct);
    //                 }
    //             }
    //             setCart(storedCart);
    //             console.log('storedCart', storedCart);
            
    //         // }

    //     }, [products]), 500000)

    return [cart, setCart];
};

export default useCart;