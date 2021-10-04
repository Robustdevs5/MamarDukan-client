import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AiFillMail } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"
import { userContext } from '../../../App';
// import '../../StyledComponent/Signup.module.css';


const VendorSingupFrom = () => {

  const { loggedInUser, setLoggedInUser } = useContext(userContext);



  const handleSubmit = e => {
    e.preventDefault();
    const userInfo = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    setLoggedInUser(userInfo)
  }
  console.log(loggedInUser);


  return (
    // <form onSubmit={handleSubmit()}>
    //   {/* <h1>Sign in</h1>
    //   <div class="social-AuthContainer">
    //     <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
    //     <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
    //     <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
    //   </div> */}
    //   <span>or use your account</span>
    //   <input type="email" name="email" placeholder="Email" />
    //   <input type="password" name="password" placeholder="Password" />
    //   {/* <a href="#">Forgot your password?</a> */}
    //   <button>Sign In</button>
    // </form>


    <form
      class=" shadow-md rounded bg-blue-100 p-6 pb-8 mb-4 grid grid-cols-3 gap-4"
      onSubmit={handleSubmit}
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="name"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
          type="email"
          name="email"
          placeholder="email"
          required
        />
      </div>

      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="name"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>

      <input
        type="submit"
        value="Sign In"
        className="shadow  border-0 rounded bg-blue-600 my-6  p-2 text-white focus:ring-2 focus:ring-blue-600"
      />

    </form>

  );
};

export default VendorSingupFrom;
