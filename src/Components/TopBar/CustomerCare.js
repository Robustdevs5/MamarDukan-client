
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, SearchIcon, UserIcon } from "@heroicons/react/solid";
import { SupportAgentOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from "../StyledComponent/TopBar.module.css";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  
const CustomerCare = () => {
    return (
        <div className={styles.topBar_dropdown}>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex items-center">
                <p className="md:block hidden px-1"> Customer Care </p>
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
    );
};

export default CustomerCare;