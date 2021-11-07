import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { toast } from 'react-toastify';
import { FcInfo, FcLowPriority, FcRightDown2 } from 'react-icons/fc';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JsobYKTydzaUYaseiTdTYK1fS0UG68mgV7Q9f6RtLKHdHIF33kNzutQNFqgITqPl4T6PfvPrlAmzqlmCng5FLHE00W5nTcwJg');


const CheckoutModal = ({setModalStatus, paymentSuccess, setPaymentSuccess}) => {
    
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)

    if (open === false) {
        setModalStatus(false)
    }
   

    //////Cancel button...................................
    const handleCancel = () => {
        setOpen(false)
        setModalStatus(false)
    }



    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 top-20 left-5 right-5 bottom-2 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center w-full min-h-full pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="flex items-center pb-2">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-50 sm:mx-0 sm:h-10 sm:w-10">
                                        <FcInfo className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Make payment
                                        </Dialog.Title>
                                        
                                    <hr/>
                                       
                                    </div>
                                    
                                </div>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm setOpen={setOpen} paymentSuccess={paymentSuccess} setPaymentSuccess={setPaymentSuccess} setModalStatus={setModalStatus}/>
                                </Elements>
                            </div>
                            <hr/>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium text-white primary_BTN_Outline sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleCancel}
                                >
                                    Close
                                </button>
                            </div>

                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default CheckoutModal;