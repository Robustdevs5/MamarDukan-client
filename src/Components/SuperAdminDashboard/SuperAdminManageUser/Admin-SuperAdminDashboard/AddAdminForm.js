import React from 'react';
import { useForm } from 'react-hook-form';

const AddAdminForm = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const messageDetail = { 
            name: data.Name,
            email: data.Email,
            password: data.Password,
            confirmPassword: data.cPassword,
        }
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Name
                    </label>       
                    <input name="Name" type="text" placeholder="Name" 
                        {...register("Name", {required: true})}
                        className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    <span className="text-red-500">{errors.Name?.type === 'required' && "name is required"}</span>
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
                        Password
                    </label>
                    <input name="Password" type="password" placeholder="Password" 
                    {...register("Password", {required: true})}
                    className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                <span className="text-red-500">{errors.Password?.type === 'required' && "Password is required"}</span>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Confirm Password
                    </label>
                    <input name="Password" type="password" placeholder="Confirm Password" 
                    {...register("cPassword", {required: true})}
                    className="h-12 w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                <span className="text-red-500">{errors.cPassword?.type === 'required' && "Confirm Password is required"}</span>
                </div>
            </div>
            <div className="w-full">
                <button className="primary_BTN shadow hover:bg-teal-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded w-11/12" type="submit">
                Send
                </button>
            </div>
      </form>
    );
};

export default AddAdminForm;