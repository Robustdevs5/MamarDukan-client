
import React from 'react';

const CreditCardForm = () => {
    return (
        <form className="justify-center w-full mx-auto" method="post" action>
            <div className="mt-4">
                <div className="w-full">
                    <label for="card-number"
                        className="block mb-3 text-sm font-semibold text-gray-500">Card Number</label>
                    <input name="card-number" type="text" placeholder="Card Number"
                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
            </div>
            <div className="mt-4">
                <div className="w-full">
                    <label for="cardname"
                        className="block mb-3 text-sm font-semibold text-gray-500">Name on Card</label>
                    <input name="cardname" type="text" placeholder="Name on Card"
                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
            </div>
            <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                <div className="w-full lg:w-4/5">
                    <label for="Expiration" className="block mb-3 text-sm font-semibold text-gray-500">Expiration Date (MM/YY)</label>
                    <input name="Expiration" type="text" placeholder="Expiration Date"
                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
                <div className="w-full lg:w-1/5 ">
                    <label for="cvc" className="block mb-3 text-sm font-semibold text-gray-500">CVC</label>
                    <input name="cvc" type="text" placeholder="CVC"
                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
            </div>
        </form>

    );
};

export default CreditCardForm;