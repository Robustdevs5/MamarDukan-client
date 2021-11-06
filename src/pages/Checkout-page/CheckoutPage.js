import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TiDelete } from 'react-icons/ti';
import { toast, ToastContainer } from 'react-toastify';
import { userContext } from '../../App';
import { removeFromDb } from '../../Components/Cart/ShopingCart/CartDatabase';
import Totalcart from '../../Components/Cart/Totalcart';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import Newsletter from '../../Components/Newsletter/Newsletter';
import TopBar from '../../Components/TopBar/TopBar';
import img from '../../images/bn15.jpg';
import { PaypalForm, TransferForm } from './CreditCardForm';
import StripePayment from './StripePayment';

const CheckoutPage = () => {
    
    
    const { cart, setCart } = useContext(userContext);
    const { user, setUser } = useContext(userContext);
    const [creditCart, setCreditCart] = useState (false);
    const [paypal, setPaypal] = useState(false);
    const [etransfer, setEtransfer] = useState(false);
    const [stripePayment, setStripePayment] = useState();
    const [deliveryPrice, setDeliveryPrice] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);
    const [bankDrapImg, setBankDrapImg] = useState(null);
   
    let productId = 0;
    let totalQuantity = 0;

    for (const product of cart) {
      productId = product._id
      totalQuantity = product.quantity;
    }
 
    let paymentMethod = creditCart  ? "creditCart" : etransfer ? 'etransfer' : paypal  ? 'paypal' : 'not found'
    let deliveryMethod = deliveryPrice >= 20  ? "express" :'standard'

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        
        const orderDetail = { 
            quantity: totalQuantity,
            productId: productId,
            name: data.Name,
            email: data.email,
            phone: data.phoneNumber,
            bankDrap: bankDrapImg,
            address: data.address,
            city: data.city,
            postcode:data.postcode,
            notes: data.Note,
            deliveryMethod: deliveryMethod,
            price:priceTotal + deliveryPrice,
            paymentMethod:paymentMethod,
            cardnumber:'57575757575757575577'
        }
        

        fetch('https://mamar-dukan.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
        })
        .then(res => res.json())
        .then(data => {
            if(data){                
                toast.success(data.message, {
                    position: "bottom-right",
                });
            }
        })
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


    const handleRemove = id => {
        const newCart = cart.filter(product => product._id !== id);
        setCart(newCart);
        removeFromDb(id);
        toast.success("successful product remove", {
          position: "bottom-right",
        });
      }
    

    return (
        <>
            <TopBar />
            <Header />
            <Navbar />

        <div className="container p-5 mx-auto">
            <h2 className="  my-14 font-bold md:text-4xl text-center text-heading pb-5 capitalize ">Checkout</h2>
            <div className="flex flex-col w-full px-0 mb-10 mx-auto md:flex-row">
                <div className="bg-gray-50 p-5 rounded flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-xl text-heading pl-2 border-l-2 border-red-600">Shipping Address
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="justify-center w-full mx-auto">
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full">
                                    <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Full 
                                        Name</label>
                                    <input name="Last Name" type="text" placeholder="Last Name" 
                                        {...register("Name", {required: true})}
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
                                    <input name="phone" type="number" placeholder="Phone Number" 
                                        {...register("phoneNumber", {required: true})}
                                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    <span className="text-red-500">{errors.phoneNumber?.type === 'required' && "Phone Number is required"}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea cols="20" type="text" rows="4" placeholder="Address"
                                        {...register("address", {required: true})}
                                        className=" w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
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
                        <h2 className="mb-4 font-bold md:text-xl text-heading pl-2 border-l-2 border-red-600">Delivery Method</h2>
                        <div className="mt-6 flex space-x-4">
                            <div  className={deliveryPrice >= 20  ? "flex-1 text-left w-full bg-white rounded-md border-2  p-5 " :'flex-1 text-left w-full bg-white rounded-md border-2  p-5 border-blue-500'}>
                                <label className="flex">
                                    <input onChange={() => setDeliveryPrice(18)} type="radio" name="radio" value="Standard" className="form-radio h-5 w-5 text-blue-600" /><span className="ml-2 text-sm text-gray-700">Standard</span>
                                </label>
                                <p>4-10 Business Days</p>
                                <span className="text-gray-700 text-sm font-bold">$18</span>
                            </div>
                            <div type="radio" className={deliveryPrice <= 20  ? "flex-1 text-left w-full bg-white rounded-md border-2  p-5 " :'flex-1 text-left w-full bg-white rounded-md border-2  p-5 border-blue-500'}>
                                <label className="flex">
                                    <input  onChange={() => setDeliveryPrice(26)} type="radio" name="radio" value="Express" className="form-radio h-5 w-5 text-blue-600" /><span className="ml-2 text-sm text-gray-700">Express</span>
                                </label>
                                <p>2-5 Business Days</p>
                                <span className="text-gray-700 text-sm font-bold">$26</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 mt-10 border-t border-gray-300">
                        <h2 className="mb-4 font-bold md:text-xl text-heading pl-2 border-l-2 border-red-600">Payment</h2>
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input onChange = { handleCreditCart } type="radio" className="form-radio h-5 w-5" name="accountType" value="personal" />
                                <span className="ml-2">Pay using stripe</span>
                                
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
                            creditCart && <StripePayment setStripePayment={setStripePayment}/>
                        }
                        {
                            paypal && <PaypalForm   />
                        }
                        {
                            etransfer && <TransferForm bankDrapImg={bankDrapImg} setBankDrapImg={setBankDrapImg}/>
                        }
                    </div>
                    <div className="mt-4">
                        <button type="submit"
                            className="w-full px-6 py-2 text-gray-50 primary_BTN">Process to order</button>
                    </div>
                    </form>
                </div>
                <div  className="text-white rounded  flex flex-col w-full ml-0 lg:ml-12 lg:w-4/5">
                    <div className="py-5 md:pt-0 2xl:ps-4 tracking-tight bg-red-600 sticky top-28">
                        <h2 className="text-xl font-bold border-l-2 border-gray-300 ml-5 pl-2 capitalize my-5">Order Summary</h2>
                        <div className="my-8">
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
                        
                        <h2 className="text-xl font-bold border-l-2 border-gray-300 ml-5 pl-2 capitalize ">Price Summary</h2>
                        <Totalcart setPriceTotal={setPriceTotal}/>
                        
                    </div>
                </div>
            </div>
        </div>
        
        <ToastContainer />
        <Newsletter/>
        <Footer />           
    </>

    );
};

export default CheckoutPage;