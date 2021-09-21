import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import styles from "../StyledComponent/TopBar.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const TopBar = () => {
  return (
    <div class="bg-blue-800 flex  h-20  w-full  pl-0">
      <div class="flex  justify-between items-center sm:w-4/6 w-5/6  ">
        <div class="mx-0 sm:mx-4 hidden sm:block ">
          <p class="text-lg sm:text-2xl text-white font-bold ">Mamardokan</p>
        </div>

        {/* Search box  */}

        <form action="" class=" sm:w-3/5 w-full h-1/2   flex flex-row">
          <input
            type="text"
            placeholder="Search"
            class={styles.topBar_search_input}
          />
          <SearchIcon class={styles.topBar_search_icon} />
        </form>
      </div>

      <div
        class="flex justify-end  items-center  flex-grow 
       "
      >
        <div class={styles.topBar_tags}>
          <Link to="/checkout">
            <ShoppingCart></ShoppingCart>
          </Link>{" "}
        </div>

        {/* Customer Care Dropdown */}

        <div class={styles.topBar_dropdown}>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button class="flex items-center">
                Customer Care
                <ChevronDownIcon
                  className="-mr-1 ml-2  w-5"
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
                        to="/payment"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Payment
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>{" "}
        </div>

        {/* Login and Register */}

        <AccountCircle class="h-10 ml-2 "></AccountCircle>

        <div>
          <Link to="/login">
            <p class={styles.topBar_login_register}>Login </p>{" "}
          </Link>

          <Link to="/register">
            <p class={styles.topBar_login_register}> Register</p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
