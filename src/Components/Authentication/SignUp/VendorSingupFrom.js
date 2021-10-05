import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AiFillMail } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"
import { userContext } from '../../../App';
// import '../../StyledComponent/Signup.module.css';


const VendorSingupFrom = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      async function handleSignup(userInfo) {
        try { 

        } catch (err) { 

        }
      }
    return (
        <form onSubmit={handleSubmit(handleSignup)} autoComplete="off" className="">
          <h1>Create an account</h1>
          <div class="social-AuthContainer">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>

          <span>or use your email for registration</span>
           <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          <a href="#">Forgot your password?</a>
          
          <button>Sign In</button>
        </form>
    );
};

export default VendorSingupFrom;
