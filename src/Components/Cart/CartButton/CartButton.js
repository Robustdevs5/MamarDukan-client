import React, { Fragment, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import useProducts from '../../../hooks/useProducts';
import useCart from '../../../hooks/useCart';
import useWishlistCart from '../../../hooks/useWishlistCart';
import { AddWishlistToDb } from '../WishlistCart/WishListCartDatabase';
import { addToDb } from '../ShopingCart/CartDatabase';
import { AddCompareToDb } from '../CompareCart/CompareCartDatabase';
import { userContext } from '../../../App';
import Modal from '../../Modal/Modal';
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { HiPresentationChartBar, HiOutlinePresentationChartBar } from "react-icons/hi";
import { MdShoppingCart } from 'react-icons/md';



const CartButton = ({cartProduct}) => {
    const [products] = useProducts(); 
    const [cart, setCart] = useCart(products);
    const [love, setLove] = useState(false)
    const [compare, setCompare] = useState(false)
    const [modalUpdateStatus, setModalStatus] = useState(false);
    const [modalId, setModalId] = useState(null);
    const [wishlistCart, SetWishlistCart] = useWishlistCart(products);
    const { CompareCart, SetCompareCart} = useContext(userContext);
    
    // console.log('CompareCart', CompareCart)
    // console.log('wishlistCart', wishlistCart)

    /**================ Add Cart ====================*/
    const handleAddToCart = (cartProduct) => {
        const exists = cart.find(pd => pd._id === cartProduct._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== cartProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, cartProduct];
            toast.success( "increase "+ exists.quantity + " quantity", {
                position: "bottom-right",
            });
        }
        else {
            cartProduct.quantity = 1;
            newCart = [...cart, cartProduct];
            toast.success( "Product added", {
                position: "bottom-right",
            });
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(cartProduct._id);
    }

    /**======================= Add Wishlist ================== */
    const handleAddToWishlist = (cartProduct) => {
        const exists = wishlistCart.find(pd => pd._id === cartProduct._id);
        let newCart = [];
        if (exists) {
            const rest = wishlistCart.filter(pd => pd._id !== cartProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, cartProduct];
            toast.warning( "already "+ exists.name + " added", {
                position: "bottom-right",
            });
            
        }
        else {
            newCart = [...wishlistCart, cartProduct];
            
            setLove(true)
            toast.success( "wishlist Cart product added", {
                position: "bottom-right",
            });
        }
        
        SetWishlistCart(newCart);
        // save to local storage (for now)
        AddWishlistToDb(cartProduct._id);
    }

    

    /** ================ Add Compare Cart =========================*/
    const handleCompare = (cartProduct) => {
        const exists = CompareCart.find(pd => pd._id === cartProduct._id);
        if (exists) {
            toast.warning( "already "+ exists.name + " added", {
                position: "bottom-right",
            });
        }
        else {
            let newCart = [...CompareCart, cartProduct];
            SetCompareCart(newCart);

            setCompare(true)
            toast.success( "wishlist Cart product added", {
                position: "bottom-right",
            });
        }
        // save to local storage (for now)
        AddCompareToDb(cartProduct._id);
    }


    const handleModalOpen = (id) => {
        setModalStatus(true);
        setModalId(id)
    }


    return (
        <Fragment>

            <button
                onClick={() => handleAddToCart(cartProduct)}
                title='add to cart'
                className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2">
                <MdShoppingCart />
            </button>

            <button
                onClick={() => handleModalOpen(cartProduct._id)}
                title='view products'
                className="rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2">
                <AiOutlineEye />
            </button>

            <button
                onClick={() => handleAddToWishlist(cartProduct)}
                title='add to wishlist'
                className={
                    love ? "rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2 cursor-not-allowed" 
                    : "rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2 cursor-pointer"}>
                {love ? <AiFillHeart className='text-red-500'/> : <AiOutlineHeart/>}
                
            </button >

            <button
                onClick={() => handleCompare(cartProduct)}
                title='add to compare list'
                className={
                    compare ? "rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2 cursor-not-allowed" 
                    : "rounded-full hover:bg-yellow-400 text-xl text-gray-600 hover:text-gray-800 py-1 px-2 cursor-pointer"}>
                
                {compare ? <HiPresentationChartBar className='text-red-500'/> :<HiOutlinePresentationChartBar/>}
            </button>
            {modalUpdateStatus && <Modal
                setModalStatus={setModalStatus}
                modalId={modalId}
            />}
        </Fragment>
    );
};

export default CartButton;