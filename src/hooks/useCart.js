import { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import { getStoredCart } from '../Components/Cart/ShopingCart/CartDatabase';

const useCart = products => {
    const [cart, setCart] = useState([]);
    // const { cart, setCart } = useContext(userContext);
    // let product = 0; 
    // setTimeout(async function(){ 
    //     try{
    //     //   console.log('cart',products.products.length )
    //       products = products.products.length
    //     }
    //     catch(err) {
    //         console.log('error f', err)
    //     }
    // }, 3000);
    // console.log('products', products)
    useEffect(() => {

        if (products) {
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

    }, []);

    return [cart, setCart];
};

export default useCart;