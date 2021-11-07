
import React, { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaCartPlus, FaChartBar, FaUserCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import useProducts from "../../hooks/useProducts";
import CompareDropdown from "../Cart/CompareCart/CompareDropdown";
import WishlistDropwon from "../Cart/WishlistCart/WishlistDropwon";
import CartDropdown from "../Cart/ShopingCart/CartDropdown";
import styles from "../StyledComponent/TopBar.module.css";
import profile from "../../images/profile.png";
import CustomerCare from "./CustomerCare";
import SearchBar from "./SearchBar";
import { toast } from "react-toastify";


const TopBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [wishlistDropwon, setWishlistDropwon] = useState(false);
  const [compareDropdown, setCompareDropdown] = useState(false); 
  const { wishlistCart,  SetWishlistCart } = useContext(userContext);
  
  const { CompareCart} = useContext(userContext);
  const { user, setUser } = useContext(userContext);
  const { cart, setCart } = useContext(userContext);
  const [products, setProducts] = useProducts(); 
  let history = useHistory();


  const handleLogout = () => {
    // sessionStorage.clear();
    // window.localStorage.clear(); //clear all localstorage
    window.sessionStorage.removeItem("user"); //remove one item
      toast.success("You have signed out", {
          position: "bottom-left",
      });
    // window.location.reload();
  };


  return (
    <main className="md:h-20 pl-0 sticky top-0 z-50 primary_BG_color ">
      <section className=" pt-5 md:pt-0 md:grid md:grid-cols-2 md:items-center  ">

        <div className=" flex justify-evenly  items-center  ">
            <div className=''>
                  <strong  className='flex uppercase text-gray-200 font-bold text-lg md:font-extrabold md:text-2xl'>
                    <FaCartPlus className="mr-3 text-white text-3xl"  />
                      Mamar
                    <span  className='text-red-600'> Dukan  </span>
                </strong>
            </div>
            <SearchBar className={styles.topBar_search_input}  placeholder="Enter a product Name..." data={products} />
          </div>
        
        <div className='flex justify-evenly md:justify-end  items-center w-full '>
          
          <div onMouseEnter={() => setCompareDropdown(true)}
              onMouseLeave={() => setCompareDropdown(false)}>

            <div className={styles.topBar_tags}>
                <button href="#" className="w-10 h-10 items-center flex justify-center">
                    <FaChartBar size={30}></FaChartBar>
                </button>
                <strong className="text-gray-100 -ml-2 -mt-6 bg-red-600 rounded-full px-1">
                    {CompareCart.length}
                </strong>
            </div>
          </div>

          <div onMouseEnter={() => setWishlistDropwon(true)}
              onMouseLeave={() => setWishlistDropwon(false)} >

            <div className={styles.topBar_tags}>
                <button href="#" className="w-10 h-10 items-center flex justify-center">
                    <AiOutlineHeart size={30}></AiOutlineHeart>
                </button>
                <strong className="text-gray-100 -ml-2 -mt-6 bg-red-600 rounded-full px-1">
                    {wishlistCart.length}
                </strong>
            </div>
          </div>

          <div onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)} >

            <div className={styles.topBar_tags}>
                <button href="#" className="w-10 h-10 items-center flex justify-center">
                   <MdShoppingCart size={30}></MdShoppingCart>
                </button>
                <strong className="text-gray-100 -ml-2 -mt-6 bg-red-600 rounded-full px-1">
                    {cart.length}
                </strong>
            </div>
          </div>

          <CustomerCare/>


          <div className='flex items-center'>
              {user.email ?
                  <div className="h-8 ml-2 w-10 hidden sm:block text-white fill-current text-white-600">
                    <img src={user.img || profile} className="h-full w-full rounded-full " alt="" />
                </div>
                :  
                <FaUserCircle size={30} className="h-8 ml-2  hidden sm:block text-white fill-current text-white-600"></FaUserCircle>

                }

              <div>
                  {user.email &&
                  <>
                    
                    <button className={styles.topBar_login_register} >{user.username}</button>
                    <a href='/login' className={styles.topBar_login_register} onClick={handleLogout}>Logout </a>
                  </>
                  }
                  
                  {!user.email && <>
                      <Link to="/login">
                        <button  className={styles.topBar_login_register}>Login </button>
                      </Link> 
                      <Link to="/register">
                        <button className={styles.topBar_login_register}> Register</button>
                      </Link> 
                    </>
                  }
              </div>
          </div>
        </div>
      </section>
      {dropdown && <CartDropdown setDropdown={setDropdown} />}
      {wishlistDropwon && <WishlistDropwon setWishlistDropwon={setWishlistDropwon} />}
      {compareDropdown && <CompareDropdown setCompareDropdown={setCompareDropdown} />}
    </main>
  );
};
export default TopBar;
