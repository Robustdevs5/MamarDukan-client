import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        
        fetch('https://mamar-dukan.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
            // async function fetchFunction() {
            //     try{
            //       const response = await fetch(`https://mamar-dukan.herokuapp.com/products`);
            //       await response.then(res => res.json())
            //           .then(data => {
            //               setProducts(data)
                          
            //                 console.log('data', data);
            //         });;
            //     }
            //     catch(err) {
            //     //   throw err;
            //       console.log(err);
            //     }
            //   }
    }, []);
    return [products, setProducts];
}

export default useProducts;