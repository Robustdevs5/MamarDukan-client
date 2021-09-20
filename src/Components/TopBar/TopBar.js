import { ShoppingCart } from "@mui/icons-material";
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
    <div class="bg-blue-800 flex h-20 items-center w-100 justify-between">
      <div class="mx-2 sm:mx-8">
        <h1 class="font-bold font-7xl text-white">MamurDokan</h1>
      </div>
      <form action="" class=" w-2/5 h-1/2   flex flex-row">
        <input
          type="text"
          placeholder="Search"
          class={styles.topBar_search_input}
        />
        <SearchIcon class={styles.topBar_search_icon} />
      </form>
      <div class={styles.topBar_tags}>
        <Link to="/checkout" class="flex">
          <div class=" px-4 flex flex-col justify-center">
            {" "}
            <ShoppingCart></ShoppingCart>
            <p class="px-2">{0}</p>
          </div>
          <p>Cart</p>
        </Link>{" "}
      </div>{" "}
      <div class={styles.topBar_dropdown}>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              Customer Care
              <ChevronDownIcon className="-mr-1 ml-2  w-5" aria-hidden="true" />
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
                    <a
                      href="/helpCenter"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Help Center
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/shipping"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Shipping & Delivery
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="return&refunds"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Return & Refunds
                    </a>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="payment"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Payment
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>{" "}
      </div>
      <div>
        {" "}
        <Link to="/login">
          <p class={styles.topBar_login_register}>Login </p>{" "}
        </Link>
        <Link to="/register">
          {" "}
          <p class={styles.topBar_login_register}> Register</p>{" "}
        </Link>
      </div>
    </div>
  );
};
export default TopBar;
