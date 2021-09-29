import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar/Navbar';
import TopBar from '../../TopBar/TopBar';
// import '../SignIn/SignIn.css';



const SignUP = () => {

    const [customerStatus, setCustomerStatus] = useState(true);
    const [vendorStatus, setVendorStatus] = useState(false);
    const [shopUrl, setShopUrl] = useState("");
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
            const userInfo = {
                name: data.name,
                email: data.email,
                password: data.password,
                ShopName: data.ShopName,
                shopUrl: data.ShopUrl,
                PhoneNumber: data?.PhoneNumber,
            };
            
        if (passwordsMatch) {
            const userSignUp = `http://localhost:5000/user/signup`;
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
            alert("Your Passwords don't match")
        };
    };


    

    const handleCustomerChange = () => {
        setVendorStatus(false);
        setCustomerStatus(true);
    }

    const handleVendorChange = () => {
        setCustomerStatus(true);
        setVendorStatus(true);
    }

    const handleShopName = (e) => {
        setShopUrl(e.target.value)
        console.log(e.target.value)
    }



    return (
        <>
            <TopBar />
            <Header />
            <Navbar />
            <div className="form-card">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="login-heading">Create an account</h3>

                    <input type="text" name="name" className="form-control "
                        {...register('name', { required: true })} placeholder="Your Name"
                    />
                    {errors.name && errors.name.type === "required" && <span className="error">Name is required</span>}


                    <input type="email" name="email" className="form-control" placeholder="Your Email"
                        {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                    {errors.email && (<span className="error">
                        {errors.email.type === "required" ? "Email is required" : "Your Email pattern is not correct"}
                    </span>


                    )}
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


                    <br />

                    <div className="flex items-center justify-start py-2">
                        <input className="cursor-pointer" onChange={handleCustomerChange} type="radio" id="customer" name="user" value="customer" defaultChecked/>
                        <label className="cursor-pointer px-2" for="customer">I am a customer</label>
                    </div>
                    <div className="flex items-center justify-start py-2">
                        <input className="cursor-pointer" onChange={handleVendorChange} type="radio" id="vendor" name="user" value="vendor" />
                        <label className="cursor-pointer px-2" for="vendor">I am a Vendor</label>
                    </div>

                    {vendorStatus && <div>

                        <label className="flex items-start py-2">Shop Name</label>
                        <input onChange={handleShopName} type="text" name="shopName" className="form-control" placeholder="Shop Name" required
                        // {...register('shopName', { required: true })} placeholder="Shop Name"
                        />
                        {errors.name && errors.name.type === "required" && <small className="error">Shop Name is required</small>}

                        <label className="flex items-start py-2">Shop Url</label>
                        <input type="text" name="ShopUrl" className="form-control"
                            {...register('ShopUrl', { required: false })}
                            // value={`https://mamardukan.com/${shopUrl}`}
                            placeholder="Shop Url"
                        />
                        {errors.name && errors.name.type === "required" && <small className="error">Shop Url is required</small>}

                        <label className="flex items-start py-2">Phone</label>
                        <input type="number" name="PhoneNumber" className="form-control"
                            {...register('PhoneNumber',
                                {
                                    maxLength: { value: 11, message: "error message" }
                                })}
                            placeholder="Phone Number"
                        />
                        {errors.name && errors.name.type === "required" && <small className="error">Phone Number is required</small>}

                    </div>
                    }


                    <input type="submit" value="Create" className="submit-button btn my-5" />

                    <p>Already have an account?
                        <Link
                            to="/login"
                            style={{ textDecoration: "underline", paddingLeft: '10px' }}
                        >
                            Login
                        </Link>
                    </p>
                    
                </form>          
            </div>
            <Footer />
        </>
    );
};

export default SignUP;