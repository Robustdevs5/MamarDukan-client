import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
            // async function fetchFunction() {
            //     try{
            //       const response = await fetch(`https://mamardukan.herokuapp.com/products`);
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