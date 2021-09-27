import React from 'react';
import { useForm } from 'react-hook-form';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Logo from '../../Navbar/Logo/Logo';



const AddAdmin = () => {

    const { register, handleSubmit, reset } = useForm();

    return (
        <div className=" bg-gray-800 ">
            <div className="w-screen h-20 p-6">
                <Logo />
            </div>

            <div className="flex flex-wrap h-screen">
                <AdminSidebar/>

                <div className="sm:w-3/5 w-screen  p-4">
                    <h1 className="mt-3 text-2xl font-bold text-white m-4 ">
                        Add a new admin
                    </h1>
                    <form>
                        <br />
                        <br />
                        <input
                            placeholder="Name"
                            className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                            type="text"
                            {...register("name", { required: true })}
                        />{" "}
                        <br />
                        <br />
                        <input
                            type="email"
                            className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                            placeholder="email"
                            {...register("email", { required: true })}
                        />
                        <br></br>
                        <input
                            type="submit"
                            value=" New Admin"
                            className="shadow  border-0 rounded bg-blue-600 my-6  p-2 text-white focus:ring-2 focus:ring-blue-600"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;