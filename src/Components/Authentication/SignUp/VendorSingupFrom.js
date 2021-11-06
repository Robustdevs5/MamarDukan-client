import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Imageupload from './Imageupload';
const VendorSingupFrom = () => {

      // async function handleSignup(userInfo) {
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
      // }
      const [password, setPassword] = useState();
      const [confirmPassword, setConfirmPassword] = useState();
      const [shopurl, setShopUrl] = useState(' ');
      const [imageURL, setImageURL] = useState(0);
      const { register, handleSubmit, formState: { errors } } = useForm();
   
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
          const passwordsMatch = checkPasswords();
          const userInfo = {
              name: data.name,
              email: data.email,
              password: data.password,
              shopUrl: data.shopUrl,
              shopName: data.shopName,
              username: data.username,
              img: imageURL,
              phoneNumber: data.PhoneNumber,
          };
  
          if (passwordsMatch) {
              const userSignUp = `https://mamar-dukan.herokuapp.com/user/register-vendor`;
              fetch(userSignUp, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(userInfo)
              })
                  .then(async res => await res.json())
                  .then(async user => {
                      toast.error(user.message, {
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
                  position: "bottom-right",
              });
          };
      };
  
    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" >
          <h1>Vendor Registration form</h1>
          <span>use your email for registration</span>

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
                {errors.username && errors.username.type === "required" && 
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
            <label className="w-full">
                    <input type="text" name="shopName" className="form-control" placeholder="Shop Name"
                        {...register('shopName', { required: true })} />
                        {errors.shopName && errors.shopName.type === "required" && <small className="error">Shop Name is required</small>}
            </label>
            <label className="w-full">
                        <input onInput={e => setShopUrl(e.target.value.trim())} type="text" name="shopUrl" className="form-control"
                            {...register('shopUrl', { required: false })}
                            // value={shopurl}
                            placeholder="Shop Url"
                        />
                        <small className='text-gray-900 font-bold'>{`https://mamardukan.com/${shopurl}`}</small>
                        {errors.name && errors.name.type === "required" && <small className="error">Shop Url is required</small>}
            </label>
            <label className="w-full">
                <input type="number" name="PhoneNumber" className="form-control"
                    {...register('PhoneNumber',
                        {
                            maxLength: { value: 11, message: "error message" }
                        })}
                    placeholder="Phone Number"
                />
                {errors.name && errors.name.type === "required" && <small className="error">Phone Number is required</small>}

             </label>
             <Imageupload imageURLStatus={imageURL} setImageURLStatus={setImageURL}/>
            <button type="submit">Vendor account</button>
        </form>
    );
};
export default VendorSingupFrom;
