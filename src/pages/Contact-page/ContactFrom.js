import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ContactFrom = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const messageDetail = { 
            name: data.Name,
            email: data.Email,
            Number: data.Number,
            message: data.message,
        }
        fetch('http://localhost:5000/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageDetail)
        })
        .then(res => res.json())
        .then(data => {
            if(data){                
                toast.success(data.message, {
                    position: "bottom-right",
                });
            }
        })
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Name
                </label>       
                <input name="Name" type="text" placeholder="Name" 
                    {...register("Name", {required: true})}
                    className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                <span className="text-red-500">{errors.Name?.type === 'required' && "name is required"}</span>
            </div>
            <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Phone
                </label>
                <input name="Number" type="number" placeholder="phone number" 
                    {...register("Number", {required: true})}
                    className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                <span className="text-red-500">{errors.Number?.type === 'required' && "number is required"}</span>
                
            </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        E-mail
                    </label>
                    <input name="Email" type="email" placeholder="Email" 
                    {...register("Email", {required: true})}
                    className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                <span className="text-red-500">{errors.Email?.type === 'required' && "email is required"}</span>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Message
                    </label>
                    <textarea cols="20" type="text" rows="4" placeholder="Message"
                        {...register("message", {required: true})}
                        className="  no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" />
                    <span className="text-red-500">{errors.message?.type === 'required' && "Message is required"}</span>
                </div>
            </div>
            {/* <div className="md:flex md:items-center"> */}
                <div className="w-full">
                    <button className="primary_BTN shadow hover:bg-teal-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded w-11/12" type="submit">
                    Send
                    </button>
                </div>
                {/* <div className="md:w-2/3"></div> */}
            {/* </div> */}
      </form>
    );
};

export default ContactFrom;