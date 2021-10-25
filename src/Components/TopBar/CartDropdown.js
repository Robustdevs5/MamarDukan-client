import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const CartDropdown = ({ setDropdown }) => {
  return (
    <div
      className="   max-width-full absolute  top-20 md:right-20 right-2 z-50 rounded-2 bg-gray-100 "
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      <div className="h-full flex flex-col  shadow-xl ">
        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6 px-2">
          <h4 className="text-lg font-medium text-gray-900 border-l-4 border-red-600 pl-3">Shopping cart</h4>
          <hr/>
          <div className="mt-8 overflow-hidden h-52 overflow-y-scroll">
            <div className="flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="py-6 flex">
                    <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between  font-medium text-gray-900 text-blue-500">
                          <p>
                            <a href={product.href}>{product.name}</a>
                          </p>
                          <p className="ml-4">{product.price}</p>
                        </div>
                      </div>
                      <div className="mr-auto">
                        {" "}
                        <p className="mt-1 text-sm text-gray-500 ">
                          {product.color}
                        </p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {product.quantity}</p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$22.00</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Tax</p>
            <p>$284.00</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p>$262.00</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-4 flex justify-between">
            <Link
              to="/cart"
              className="flex justify-center items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium primary_BTN_Outline"
            >
              View Cart
            </Link>

            <Link
              to="/cart"
              className="flex justify-center items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium  primary_BTN"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartDropdown;
