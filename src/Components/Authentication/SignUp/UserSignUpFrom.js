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
          <h1>Create a Vendor Account</h1>
          <span>use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="text" placeholder="Shop name" />
            <input type="text" placeholder="Shop url" />
          <button>Sign Up</button>
        </form>
    );
};

export default UserSignUpFrom;