import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AiFillMail } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"
import { userContext } from '../../../App';
// import '../../StyledComponent/Signup.module.css';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import axios from 'axios';
import Imageupload from './Imageupload';

const  UserSignUpFrom = () => {
      const [password, setPassword] = useState();
      const [confirmPassword, setConfirmPassword] = useState();
      const { register, handleSubmit, formState: { errors } } = useForm();
      const [imageURLStatus, setImageURLStatus] = useState(0);

console.log(";setImageURLStatus", imageURLStatus)
        // Checking passwords
        const handleBlur = (e) => {
          if (e.target.name === "password") {
              setPassword(e.target.value);
          }
          if (e.target.name === "confirmPassword") {
              setConfirmPassword(e.target.value);
          }
      };

      // Two passwords match
      const checkPasswords = () => {
          return password === confirmPassword;
      };


      const onSubmit = (data) => {
          console.log(data)
          const passwordsMatch = checkPasswords();
          // const emailMatch = emailCheck();
          const userInfo = {
                name: data.name,
                email: data.email,
                password: data.password,
                username: data.username,
                img: imageURLStatus,
                phoneNumber: data.PhoneNumber,
          };
  
          console.log('user info', userInfo)
          if (passwordsMatch) {
              const userSignUp = `http://localhost:5000/user/register-user`;
              fetch(userSignUp, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(userInfo)
              })
                  .then(async res => await res.json())
                  .then(async user => {
                        toast.success(user.message, {
                            position: "bottom-right",
                        });
                  })
                  .catch(error => {
                        toast.error(error.message, {
                            position: "bottom-right",
                        });
                  });
          } else {
              toast.error("Your Passwords don't match!", {
                  position: "top-right",
              });
          };
      };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <h1>Create an account</h1>
          <div class="social-AuthContainer">
            <a href="#" class="social"><AiFillGithub/></a>
            <a href="#" class="social"><FcGoogle/></a>
          </div>

          <span>or use your email for registration</span>

            <label className="w-full">
                <input type="text" 
                    name="name" className="form-control "
                    {...register('name', { required: true })} placeholder="Your Name"
                />
                {errors.name && errors.name.type === "required" && 
                <span className="error">Name is required</span>}

            </label>
            <label className="w-full">
                <input type="text" 
                    name="username" className="form-control "
                    {...register('username', { required: true })} placeholder="Your username"
                />
                {errors.name && errors.username.type === "required" && 
                <span className="error">username is required</span>}

            </label>
            <label className="w-full">
                <input type="email" 
                    name="email" className="form-control" placeholder="Your Email"
                    {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                />
                {errors.email && (
                    <span className="error">
                        {errors.email.type === "required" ? "Email is required" : "Your Email pattern is not correct"}
                    </span>
                )}
            </label>
            <label className="w-full">
                <input type="password" name="password" className="form-control"
                        {...register('password', { required: true, minLength: 6, pattern: /\d{1}/ })}
                        placeholder="Your Password" onBlur={handleBlur}
                    />
                    {errors.password && (
                        <span className="error">
                            {errors.password.type === "required" &&
                                "Password is required"}
                            {errors.password.type === "pattern" &&
                                "Your password must contain one or more numbers"}
                            {errors.password.type === "minLength" &&
                                "Your Password must contain at least 8 characters"}
                        </span>
                    )}

            </label>
            <label className="w-full">
                    <input type="password" name="confirmPassword"
                        {...register('confirmPassword', { required: true, minLength: 6, pattern: /\d{1}/ })}
                        placeholder="Confirm Your Password" className="form-control" onChange={handleBlur}
                    />
                    {errors.confirmPassword && (
                        <span className="error">
                            {errors.confirmPassword.type === "required" &&
                                "Password is required"}
                            {errors.confirmPassword.type === "pattern" &&
                                "Your password must contain one or more numbers"}
                            {errors.confirmPassword.type === "minLength" &&
                                "Your Password must contain at least 8 characters"}
                        </span>
                    )}

            </label>
            <Imageupload imageURLStatus={imageURLStatus} setImageURLStatus={setImageURLStatus}/>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default  UserSignUpFrom;
