import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie9VqKA9RGUKPzpRVUr3EBr9AjVwrTUnJ23FXdzTUEAQ3Hz96sf5aQJICuFTgluBvc76FAftBtEQ06nW7BUbSCC00D9J8tnWt');

const CheckoutIndex = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51Ie9VqKA9RGUKPzp3Jloro2oCc90GABGEqBmodtmXZ0k0GPkWddfmkxo7tSTcS31clTD99OOklULUjzdzOXjkc020092gccmOY',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};
export default CheckoutIndex;