import axios from "axios";
import { useState } from "react";
import { AiTwotoneBank } from "react-icons/ai";
import { FaMapMarkerAlt, FaRegUser } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

export const CreditCardForm = () => {
    return (
        <form className="justify-center w-full mx-auto">
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

export const TransferForm = ({setBankDrapImg, bankDrapImg}) => {
    
    const [imageURLStatus, setImageURLStatus] = useState();
      const handleImageUpload = (event) => {
        const imageData = new FormData()
        imageData.set('key', 'ca6c9c7b95b538d35b5137a6b8deb060');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setBankDrapImg(response.data.data.display_url);
                setImageURLStatus(true);
                if (response) {
                    toast.success('bankdrap Uploaded Successfully', {
                        position: "bottom-right",
                    });
                }
            })
            .catch(function (error) {
                toast.error(error, {
                    position: "bottom-right",
                });
            });
    }
    return (
        <form className="justify-center w-full mx-auto">
            <div className="mt-4">
                <div className="w-8/12 border-2 border-gray-500 rounded-lg pl-10">
                    <h1 className="font-bold text-2xl my-2 text-gray-700">Bank Account Information</h1>

                    <div className="flex items-center ">
                        <FaRegUser className="h-4 w-4 mx-3 fill-current"></FaRegUser>
                        <h3 className="text-gray-700">
                            <span className="font-bold">Bank name : </span>
                            Mamar Dukan
                        </h3>
                    </div>

                    <div className="flex items-center py-1">
                        <AiTwotoneBank className="h-4 w-4 mx-3 fill-current"></AiTwotoneBank>
                        <h3 className="text-gray-700">
                            <span className="font-bold">A/C : </span>
                           6578462584456
                        </h3>
                    </div>
                    <div className="flex items-center py-1">
                        <FaMapMarkerAlt className="h-4 w-4 mx-3 fill-current"></FaMapMarkerAlt>
                        <h3 className="text-gray-700">
                            <span className="font-bold">Branch name : </span>
                           Bangladesh corporate branch
                        </h3>
                    </div>
                </div>
                <div className="w-full mt-6">
                    <label for="card-number"
                        className="block mb-3 text-sm font-semibold text-gray-700">Bankdrap Number</label>
                    <input name="card-number" type="text" placeholder="Enter your bangdrap number."
                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
                <div class="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="image"
                    >
                       Bankdrap Image
                    </label>
                    <input
                        class="shadow appearance-none border-1 hover:bg-blue-600 hover:text-gray-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                        onChange={handleImageUpload}
                        type="file"
                        name="image"
                    />
                    {imageURLStatus?
                        <small className="text-green-600">Image Uploaded</small>
                        :
                        <small className="text-red-700">Upload your bankdrap Image</small>
                    }
                    <div className='w-8/12 h-52'>
                        <img className="w-full mx-36 h-full" src={bankDrapImg} alt="" />
                    </div>

                </div>{" "}
            </div>
            <ToastContainer/>
        </form>

    );
};

export const PaypalForm = () => {
    return (
        <form className="justify-center w-full mx-auto">
            <div className="mt-4">
                <div className="w-full">
                    <label for="number"
                        className="block mb-3 text-sm font-semibold text-gray-500">Paypal Number</label>
                    <input name="number" type="text" placeholder="Number"
                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
            </div>
        </form>

    );
};