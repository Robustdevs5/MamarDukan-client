import { ShoppingCart, SupportAgentOutlined } from "@mui/icons-material";
import React, { useState, useEffect, useContext } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, SearchIcon, UserIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import styles from "../StyledComponent/TopBar.module.css";
import CartDropdown from "./CartDropdown";
// import { useHistory, useLocation } from "react-router";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TopBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { user, setUser } = useContext(userContext);
  const { cart, setCart } = useContext(userContext);
  const [login, SetLogin] = useState()
  console.log('login', login)
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/login" } };


  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      SetLogin(foundUser.email);
      setUser(foundUser.email);
    }
  }, [login]);


  const handleLogout = () => {
    // sessionStorage.clear();
    // window.localStorage.clear(); //clear all localstorage
    window.sessionStorage.removeItem("user"); //remove one item
    history.replace(from);
  };


  const handleUserDashboard = () => {
    history.push('/dashboard');
  };



  return (
    <div class="flex  h-20  w-full  pl-0 sticky top-0 z-50 primary_BG_color">
      <div class="flex  justify-between items-center sm:w-4/6 w-4/6  ">
        <div class="mx-0 sm:mx-4 hidden sm:block ">
          <p class="text-lg sm:text-2xl text-white font-bold ">Mamar Dukan</p>
        </div>

        {/* Search box  */}

        <form action="" className=" sm:w-3/5 w-full h-1/2   flex flex-row">
          <input
            type="text"
            placeholder="Search"
            className={styles.topBar_search_input}
          />
          <SearchIcon className={styles.topBar_search_icon} />
        </form>
      </div>

      <div className="flex justify-end  items-center  flex-grow">
        {/* Add to cart */}
        <div
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          {/* <div className={styles.topBar_tags}>
            <Link to="/cart">
              <ShoppingCart fontSize="large"></ShoppingCart>
            </Link>{" "}
          </div> */}
          <div className={styles.topBar_tags}>
              <button href="#" className="w-10 h-10 items-center flex justify-center">
              <ShoppingCart fontSize="large"></ShoppingCart>
              </button>
              <strong className="text-gray-100 -ml-2 -mt-6 bg-red-600 rounded-full px-1">
                {cart.length}
              </strong>
          </div>
        </div>
        {/* Customer Care Dropdown */}

        <div className={styles.topBar_dropdown}>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex items-center">
                <p className="md:block hidden"> Customer Care</p>
                <SupportAgentOutlined className="md:hidden block h-10   fill-current text-white-800 " />{" "}
                <ChevronDownIcon
                  className="-mr-1 ml-2  w-5 md:block hidden"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className={styles.dropdown_menu_items}>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/helpCenter"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {" "}
                        Help center
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/shopping&delivery"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {" "}
                        Shipping & Delivery
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="return&refunds"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {" "}
                        Return & Refunds
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/customerService"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Customer Service
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>{" "}
        </div>

        {/* Login and Register */}

        <UserIcon className="h-8 ml-2  hidden sm:block text-white fill-current text-white-600"></UserIcon>

        <div>
          {/* {login ? <button className={styles.topBar_login_register} onClick={handleLogout}>Logout</button>
            : <> */}
              {login ?
                <button className={styles.topBar_login_register} onClick={handleUserDashboard}>{login}</button>
                :
                <Link to="/login">
                  <p className={styles.topBar_login_register}>Login </p>{" "}
                </Link>
              }

              {
                login ?
                  <button className={styles.topBar_login_register} onClick={handleLogout}>Logout</button>
                  :
                  <Link to="/register">
                    <p className={styles.topBar_login_register}> Register</p>{" "}
                  </Link>
              }
            {/* </> */}
          {/* } */}
        </div>
      </div>
      {dropdown && <CartDropdown setDropdown={setDropdown} />}
    </div>
  );
};
export default TopBar;
