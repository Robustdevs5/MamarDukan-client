import React from 'react';
import { useForm } from "react-hook-form";
import { AiFillMail } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"
import { TiTick } from "react-icons/ti"
// import  '../../StyledComponent/Signup.css';
const UserSignUpFrom = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      async function handleSignup(userInfo) {
        // setLoading(true)
        // try {
        //   if (donatedBefore)
        //     userInfo.lastDonationDate = donationDate.lastDonationDate
        //   if(doctor)
        //     userInfo.role = "doctor"
    
        //   const { data } = await signUp(userInfo)
        //   if (!data.user) {
        //     useErrorToast(data.message)
        //     return setLoading(false)
        //   }
        //   localStorage.setItem("profile", JSON.stringify(data))
        //   return setCurrentUser(data.user)
        // } catch (err) {
        //   useErrorToast(err.message)
        //   return setLoading(false)
        // }
      }

    return (
        <form onSubmit={handleSubmit(handleSignup)} autoComplete="off" className="">
			<h1>Create Account</h1>
			<div class="social-AuthContainer">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
        </form>
    );
};

export default UserSignUpFrom;