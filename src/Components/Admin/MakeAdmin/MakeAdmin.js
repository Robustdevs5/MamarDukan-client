import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../../Navbar/Logo/Logo";
import AdminPanel from "../AdminPanel/AdminPanel";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  //   const onSubmit = (data) => {
  //     const adminData = {
  //       name: data.name,
  //       email: data.email,
  //     };

  //     fetch("https://fierce-garden-72152.herokuapp.com/addAdmin", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(adminData),
  //     }).then((res) => console.log(res));
  //     reset({});
  //   };
  return (
    <div className=" bg-gray-800 ">
      <div className="w-screen h-20 p-6">
        <Logo />
      </div>

      <div className="flex flex-wrap h-screen">
        <AdminPanel></AdminPanel>

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

export default MakeAdmin;
