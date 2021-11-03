import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AiFillMail } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"
import { userContext } from '../../../App';
// import '../../StyledComponent/Signup.module.css';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const VendorSingupFrom = () => {
  const [user, setUser] = useState({
    username: '',
    email:'',
    password: '',
  })
  const is_valid_email = email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email); 
  const hasNumber = input => /\d/.test(input);
  const handleOnChange = (e) => {
    const newUserInfo = {
        ...user
      };
    let isValid = true;
    if(e.target.name === 'email'){
        isValid = is_valid_email(e.target.value);
      }
      if(e.target.name === "password"){
        isValid = e.target.value.length > 8 && hasNumber(e.target.value);
      }
      newUserInfo[e.target.name] = e.target.value;
      newUserInfo.isValid = isValid;
      setUser(newUserInfo);
}

const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
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


 // React hook form
 const { register, handleSubmit, formState: { errors } } = useForm();

 const onSubmit = (data) => {
     console.log(data)
     const passwordsMatch = checkPasswords();
     // const emailMatch = emailCheck();
     const userInfo = {
         name: data.name,
         email: data.email,
         password: data.password,
         shopUrl: data.shopUrl,
         shopName: data.shopName,
         phoneNumber: data?.PhoneNumber,
     };

     if (passwordsMatch) {
         const userSignUp = `https://mamardukan.herokuapp.com/user/anotheruser`;
         fetch(userSignUp, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(userInfo)
         })
             .then(async res => await res.json())
             .then(async user => {
                 console.log('user10', user)
                 user ? alert(user.message) : alert("failed")
             })
             .catch(error => {
                 alert(error.message);
                 console.log(error);
             });
     } else {
         toast.error("Your Passwords don't match!", {
             position: "top-right",
         });
     };
 };


    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm()
  //     async function handleSignup(userInfo) {
  //       try { 

  //       } catch (err) { 

  //       }
  //     }
  //     console.log("User",user)
  //     const [password1, setPassword] = useState('');
  //     const [confirmPassword, setConfirmPassword] = useState('');


  //     const checkPasswords = (confirmPassword) => {
  //       return user.password === confirmPassword;
  //   };
  //   const passwordsMatch = checkPasswords();
  //   const handleBlur = (e) => {
  //     if (e.target.name === "password") {
  //         setPassword(e.target.value);
  //     }
  //     if (e.target.name === "confirmPassword") {
  //         setConfirmPassword(e.target.value);
  //     }
  // };

    // console.log("passwordsMatch",passwordsMatch)


    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="">
          <h1>Create an account</h1>
          <div class="social-AuthContainer">
            <a href="#" class="social"><AiFillGithub/></a>
            <a href="#" class="social"><FcGoogle/></a>
          </div>

          <span>or use your email for registration</span>
           <input  id="username"
                label="User Name"
                name="username"
                onChange={handleOnChange}
                autoComplete="username"  type="text" placeholder="Name" />
            <input   id="email"
                label="Email Address"
                name="email"
                onChange={handleOnChange}
                autoComplete="email" type="email" placeholder="Email" />
            <input type="password" name="password" className="form-control"
                        {...register('password', { required: true, minLength: 6, pattern: /\d{1}/ })}
                        placeholder="Your Password" 
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


          <a href="#">Forgot your password?</a>
          
          <button>Sign In</button>
        </form>
    );
};


export default VendorSingupFrom;
