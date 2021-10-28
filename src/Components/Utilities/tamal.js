import React, { useEffect, useState } from 'react';
import StripePayment from '../../pages/Checkout-page/StripePayment';

const Tamal = () => {
    const [tamalRating, setTamalRating] = useState([]);
    const [Rating, setRating] = useState(0);
    console.log('Rating', Rating)
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => {
                setTamalRating(data.review);
                setRating(data.review.length)
            });
    }, []);
    // tamalRating.map(item => {
    //     setRating(Rating + item.star)
    // })

    // let totalQuantity = 0;
    let subTotal = 0;
  
    for (const review of tamalRating) {
    //   if (!product.quantity) {
    //       product.quantity = 1;
    //   }
      subTotal = subTotal + review.star
      console.log('review', review)
      console.log('subTotal', subTotal)
      console.log('length', review.star.length)
    //   totalQuantity = totalQuantity + product.quantity;
    }

    const averageRating = subTotal / Rating;
    
    console.log('averageRating', averageRating)
    return (
        <div>
            {averageRating.toFixed(0)}
            {
                tamalRating.map((item, index) => {
                   return <li item={item} key={index}>
                       {item.star}
                    </li>
                })
            }
            <StripePayment/>
        </div>
    );
};

export default Tamal;