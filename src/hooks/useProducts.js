import { useContext, useEffect } from "react";
import { useState } from "react"
import { userContext } from "../App";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    
//   const { products, setProducts } = useContext(userContext);
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
                          
            //         });;
            //     }
            //     catch(err) {
            //     //   throw err;
            //     }
            //   }
    }, []);
    return [products, setProducts];
}

export default useProducts;