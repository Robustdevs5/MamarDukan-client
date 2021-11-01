import React, { useState } from 'react';
import useProducts from './useProducts';

const useShuffleProducts = () => {
    
    const [products, setProducts] = useProducts();     
    const [shuffleProduct, setShuffleProduct] = useState()
    function shuffleArray(array) {
        // setTimeout(async function(){ 
        //     try{
        //         let i = array.length - 1;
        //         for (; i > 0; i--) {
        //             const j = Math.floor(Math.random() * (i + 1));
        //             const temp = array[i];
        //             array[i] = array[j];
        //             array[j] = temp;
                
        //         }
        //         setShuffleProduct(array)
        //     }
        //     catch(err) {
        //         console.log('error f', err)
        //     }
        // }, 6000);
    }
    
    shuffleArray(products.products);
   
    return [shuffleProduct, setShuffleProduct];
};

export default useShuffleProducts;