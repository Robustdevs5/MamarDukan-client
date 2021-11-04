import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Ie9VqKA9RGUKPzpRVUr3EBr9AjVwrTUnJ23FXdzTUEAQ3Hz96sf5aQJICuFTgluBvc76FAftBtEQ06nW7BUbSCC00D9J8tnWt');
const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51Ie9VqKA9RGUKPzp3Jloro2oCc90GABGEqBmodtmXZ0k0GPkWddfmkxo7tSTcS31clTD99OOklULUjzdzOXjkc020092gccmOY',
  };
const StripePayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
                <PaymentCard handlePayment = {handlePayment}></PaymentCard>
        </Elements>
    );
};

export default StripePayment; 