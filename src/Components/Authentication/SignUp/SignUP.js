import { faFacebookSquare, faGoogle, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar/Navbar';
import TopBar from '../../TopBar/TopBar';
import '../SignIn/SignIn.css';

const SignUP = () => {
    // React hook form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <>
        <TopBar />
        <Header />
        <Navbar /> 
            <div className="form-card">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="login-heading">Create an account</h3>
                    <input type="text" name="name" className="form-control"
                        {...register('name', { required: true })} placeholder="Your Name"
                    />
                    {errors.name && errors.name.type === "required" && <span>Name is required</span>}
                    <input type="email" name="email" className="form-control" placeholder="Your Email"
                        {...register('email', { required: true, pattern: /\S+@\S+\.\S+/})}           
                    />
                    {errors.email && (<span className="error">
                            {errors.email.type === "required" ? "Email is required" : "Your Email pattern is not correct"}
                        </span>
                    )}
                    <input type="password" name="password" className="form-control"
                        {...register('password', {required: true, minLength: 6,pattern: /\d{1}/})}
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
                        {...register('confirmPassword', { required: true, minLength: 6,pattern: /\d{1}/})}
                        placeholder="Confirm Your Password" className="form-control"
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
                    
                    <input type="radio" value="I'm customer" name="customer"/>
                    <label for="age1">I am a customer</label>
                    <input type="radio" value="I'm customer" name="customer"/>
                    <label for="age1">I am a Vendor</label>
                    <input type="submit" value="Create" className="submit-button btn"/>
                    <p>Already have an account? 
                        <Link
                            to="/login"
                            style={{ textDecoration: "underline", paddingLeft:'10px' }}
                        >
                            Login
                        </Link>
                    </p>
                    <div className="social-login">
                        <h4>Or Continue With</h4>
                        <br />
                        <button className="login-btn">
                        <span><FontAwesomeIcon icon={faGoogle}/></span> Google</button>
                        <button className="login-btn">
                        <span><FontAwesomeIcon icon={faFacebookSquare}/></span>Facebook</button>
                        <button className="login-btn"><span><FontAwesomeIcon icon={faTwitterSquare} /></span>Twitter</button>                       
                    </div>
                </form>          
            </div>
        <Footer />
        </>
    );
};

export default SignUP;