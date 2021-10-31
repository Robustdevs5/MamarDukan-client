
import React, { useState, useEffect, useContext } from "react";
import CartDropdown from "./CartDropdown";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import CustomerCare from "./CustomerCare";
import styles from "../StyledComponent/TopBar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart,AiOutlineSearch } from "react-icons/ai";
import { FaChartBar, FaUserCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import WishlistDropwon from "./WishlistDropwon";
import CompareDropdown from "./CompareDropdown";


const TopBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [wishlistDropwon, setWishlistDropwon] = useState(false);
  const [compareDropdown, setCompareDropdown] = useState(false);
  const { wishlistCart, SetWishlistCart } = useContext(userContext);
  console.log('wishlistCart', wishlistCart)
  const { user, setUser } = useContext(userContext);
  const { cart, setCart } = useContext(userContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/login" } };


  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    
    // return loggedInUser ? JSON.parse(loggedInUser) : {};
  }, [user]);


  const handleLogout = () => {
    // sessionStorage.clear();
    // window.localStorage.clear(); //clear all localstorage
    window.sessionStorage.removeItem("user"); //remove one item
    history.replace(from);
  };


  const handleUserDashboard = () => {
    history.push('/dashboard');
  };


  // primary_BG_color
  return (
    <main className="h-20 pl-0 sticky top-0 z-50 primary_BG_color ">
      <section className=" flex justify-between  items-center  ">
        <div className="flex justify-between items-center">
          <div className="mx-0 sm:mx-4 hidden sm:block ">
            <p className="text-lg sm:text-2xl text-white font-bold ">Mamar Dukan</p>
          </div>


        
        </div>
        
        <div className='flex justify-end items-center w-9/12'>
        <form action="" className=" sm:w-3/5 w-full h-10  items-center flex flex-row">
            <input
              type="text"
              placeholder="Search"
              className={styles.topBar_search_input}
            />
            <AiOutlineSearch size={33} className={styles.topBar_search_icon} />
          </form>
          
          <div onMouseEnter={() => setCompareDropdown(true)}
              onMouseLeave={() => setCompareDropdown(false)}>

            <div className={styles.topBar_tags}>
                <button href="#" className="w-10 h-10 items-center flex justify-center">
                    <FaChartBar size={30}></FaChartBar>
                </button>
                <strong className="text-gray-100 -ml-2 -mt-6 bg-red-600 rounded-full px-1">
                  {cart.length}
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
              <FaUserCircle size={30} className="h-8 ml-2  hidden sm:block text-white fill-current text-white-600"></FaUserCircle>
              <div>
                  {user.email ?
                    <button className={styles.topBar_login_register} onClick={handleUserDashboard}>{user.username}</button>
                  :
                    <Link to="/login">
                      <p className={styles.topBar_login_register}>Login </p>{" "}
                    </Link> }

                  { user.email ?
                    <button className={styles.topBar_login_register} onClick={handleLogout}>Logout</button>
                  :
                    <Link to="/register">
                      <p className={styles.topBar_login_register}> Register</p>{" "}
                    </Link> }
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
