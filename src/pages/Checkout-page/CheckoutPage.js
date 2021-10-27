import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TiDelete } from 'react-icons/ti';
import { toast, ToastContainer } from 'react-toastify';
import StripePayment from './StripePayment';
import { userContext } from '../../App';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import { removeFromDb } from '../../Components/ShopingCart/CartDatabase';
import TopBar from '../../Components/TopBar/TopBar';
import img from '../../images/bn15.jpg';
import { PaypalForm, TransferForm } from './CreditCardForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const CheckoutPage = () => {
    
    
    const { cart, setCart } = useContext(userContext);
    const { user, setUser } = useContext(userContext);

    const [creditCart, setCreditCart] = useState (false);
    const [paypal, setPaypal] = useState(false);
    const [etransfer, setEtransfer] = useState(false);
    const [stripePayment, setStripePayment] = useState();
    
    console.log('stripePayment', stripePayment);
    console.log('CheckoutPage login', user);
    const [deliveryPrice, setDeliveryPrice] = useState(0);
    console.log("Delivery" , deliveryPrice)
   
    let productId = 0;

    for (const product of cart) {
      productId = product._id;
      console.log('productId', productId)
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const orderDetail = { 
            data,
            productId,
        }

        fetch('https://mamardukan.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your Order Placed successfully');
            }
        })
        console.log(data);
        console.log(errors);
    }
    
    const handlePaymentSuccess = paymentId => {
        
    }

    const handleCreditCart = () => {
        setCreditCart(true);
        setPaypal(false);
        setEtransfer(false);
    }

    const handlePaypal = () => {
        setCreditCart(false);
        setPaypal(true);
        setEtransfer(false);
    }

    const handleEtransfer = () => {
        setCreditCart(false);
        setPaypal(false);
        setEtransfer(true);
    }

    const handleDelivery = () => {
        
    }

    const handleRemove = id => {
        const newCart = cart.filter(product => product._id !== id);
        setCart(newCart);
        removeFromDb(id);
        toast.success("successful product remove", {
          position: "bottom-right",
        });
      }
      
    let totalQuantity = 0;
    let subTotal = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        subTotal = subTotal + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = subTotal > 0 ? 15 : 0;
    const tax = (subTotal + shipping) * 0.10;
    const Total = subTotal + shipping + tax;
    

    ///Payment Method

    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'sk_test_51Ie9VqKA9RGUKPzp3Jloro2oCc90GABGEqBmodtmXZ0k0GPkWddfmkxo7tSTcS31clTD99OOklULUjzdzOXjkc020092gccmOY',
      };

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie9VqKA9RGUKPzpRVUr3EBr9AjVwrTUnJ23FXdzTUEAQ3Hz96sf5aQJICuFTgluBvc76FAftBtEQ06nW7BUbSCC00D9J8tnWt');

// const CheckoutIndex = () => {
  
//  }

    return (
        <>
            <TopBar />
            <Header />
            <Navbar />

        <div className="container p-5 mx-auto">
            <div className="h-40 w-full absolute">
                <img src={img} alt="title" className="w-full h-full opacity-30 " />
            </div>
            <h2 className=" relative  my-14 font-bold md:text-4xl text-center text-heading pb-5 capitalize">Checkout</h2>
            <div className="flex flex-col w-full px-0 mb-10 mx-auto md:flex-row">
                <div className="bg-gray-50 p-5 rounded flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="justify-center w-full mx-auto">
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">{user.username}</label>
                                    <input name="firstName" type="text" placeholder="First Name" 
                                        {...register("firstName", {required: true})}
                                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    <span className="text-red-500">{errors.firstName?.type === 'required' && "First name is required"}</span>
                                    
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input name="Last Name" type="text" placeholder="Last Name" 
                                        {...register("lastName", {required: true})}
                                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    <span className="text-red-500">{errors.lastName?.type === 'required' && "Last name is required"}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Email"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input name="Last Name" type="text" placeholder="Email" 
                                        {...register("email", {required: true})}
                                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    <span className="text-red-500">{errors.email?.type === 'required' && "Email is required"}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Email"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Phone</label>
                                    <input name="phone" type="text" placeholder="Phone Number" 
                                        {...register("phoneNumber", {required: true})}
                                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    <span className="text-red-500">{errors.phoneNumber?.type === 'required' && "Phone Number is required"}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea {...register("address", {required: true})}
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                    <span className="text-red-500">{errors.address?.type === 'required' && "Address is required"}</span>
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label for="city"
                                        className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input name="city" type="text" placeholder="City" 
                                        {...register("city", {required: true})}
                                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    <span className="text-red-500">{errors.city?.type === 'required' && "City is required"}</span>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label for="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input name="postcode" type="text" placeholder="Post Code" 
                                        {...register("postcode", {required: true})}
                                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    <span className="text-red-500">{errors.postcode?.type === 'required' && "Postcode is required"}</span>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input type="checkbox" {...register("checkbox", {required: true})}
                                        className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                    <span className="ml-2">Save this information for next time</span></label>
                            </div>
                            <div className="relative pt-3 xl:pt-6"><label for="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note" {...register("Note")}
                                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                        </div>
                    
                    <div className="pt-6 mt-10 border-t border-gray-300">
                        <h2 className="mb-4 font-bold md:text-xl text-heading ">Delivery Method</h2>
                        <div className="mt-6 flex space-x-4">
                            <button onChange={() => setDeliveryPrice(18)} className="flex-1 text-left w-full bg-white rounded-md border-2 border-blue-500 p-5 focus:outline-none">
                                <label className="flex">
                                    <input type="radio" name="radio" value="Standard" className="form-radio h-5 w-5 text-blue-600" /><span className="ml-2 text-sm text-gray-700">Standard</span>
                                </label>
                                <p>4-10 Business Days</p>
                                <span className="text-gray-700 text-sm font-bold">$18</span>
                            </button>
                            <button onChange={() => setDeliveryPrice(26)} className="flex-1 text-left w-full bg-white rounded-md border p-5 focus:outline-none">
                                <label className="flex">
                                    <input type="radio" name="radio" value="Express" className="form-radio h-5 w-5 text-blue-600" /><span className="ml-2 text-sm text-gray-700">Express</span>
                                </label>
                                <p>2-5 Business Days</p>
                                <span className="text-gray-700 text-sm font-bold">$26</span>
                            </button>
                        </div>
                    </div>
                    <div className="pt-6 mt-10 border-t border-gray-300">
                        <h2 className="mb-4 font-bold md:text-xl text-heading ">Payment</h2>
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input onChange = { handleCreditCart } type="radio" className="form-radio h-5 w-5" name="accountType" value="personal" />
                                <span className="ml-2">Credit Card</span>
                                
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input onChange = { handlePaypal } type="radio" className="form-radio h-5 w-5" name="accountType" value="busines" />
                                <span className="ml-2">Paypal</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input onChange={ handleEtransfer } type="radio" className="form-radio h-5 w-5" name="accountType" value="etransfer" />
                                <span className="ml-2">eTransfer</span>
                            </label>
                        </div>
                        {
<<<<<<< HEAD
                            creditCart && <StripePayment setStripePayment={setStripePayment}/>
=======
                            // <CheckoutIndex />
                            creditCart && <Elements stripe={stripePromise} options={options}>
                                <CheckoutForm />
                            </Elements>
>>>>>>> 321749c2a86889006f37c22751cb7571e591bc16
                        }
                        {
                            paypal && <PaypalForm />
                        }
                        {
                            etransfer && <TransferForm />
                        }
                    </div>
                    <div className="mt-4">
                        <button type="submit"
                            className="w-full px-6 py-2 text-gray-50 primary_BTN">Process to order</button>
                    </div>
                    </form>
                </div>
                <div  className="text-white rounded py-5 flex flex-col w-full ml-0 lg:ml-12 lg:w-4/5 bg-gray-600 ">
                    <div className="pt-12 md:pt-0 2xl:ps-4 tracking-tight">
                        <h2 className="text-xl font-bold border-l-4 border-red-600 ml-5 pl-2 capitalize ">Order Summary</h2>
                        <div className="mt-8">
                            <div className="flex flex-col space-y-4">
                                
                                {
                                    cart.map((item, index) => 
                                        <div item={item} key={index} className="flex justify-between items-center space-x-4 hover:bg-red-700 px-5 shadow-lg ">
                                            <div className="h-16 w-16">
                                                <img src={item.img} alt="title"
                                                    className="w-full h-full" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-bold">{item.name}</h2>
                                                <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                                <span className="text-white">Price</span> ${item.price}
                                            </div>
                                            <div className='text-2xl  rounded-full cursor-pointer' onClick={() => handleRemove(item._id)}>
                                                <TiDelete/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div
                            className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Subtotal<span className="ml-2">${subTotal.toFixed(2)}</span></div>
                        <div
                            className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Shipping Tax<span className="ml-2">${shipping}</span></div>
                        <div
                            className="flex justify-between items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Tax<span className="ml-2">${tax.toFixed(2)}</span></div>
                        <div
                            className="flex justify-between items-center w-full py-4 text-sm font-extrabold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span className="ml-2">${Total.toFixed(2)}</span></div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        <ToastContainer />
        <Footer />           
    </>

    );
};

export default CheckoutPage;