import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar/Navbar';
import TopBar from '../../TopBar/TopBar';
import './SignIn.css';

const SIgnIn = () => {

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
                    <h3 className="login-heading">Log In</h3>
                    
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
                    <div className="savingPassword">
                        <input
                            type="checkbox"
                            name="save-password"
                            id="save-password"
                        />
                        <label
                            htmlFor="save-password"
                            style={{ marginRight: "50px" }}
                        >
                            &nbsp;Remember Me
                        </label>
                        <Link
                            to="/login"
                            style={{ textDecoration: "underline" }}
                        >
                            Forgot Password
                        </Link>
                    </div>
                    <input type="submit" value="Log In" className="submit-button btn"/>
                    <p>Don' have an account?
                        <Link
                            to="/register"
                            style={{ textDecoration: "underline", paddingLeft:'10px' }}
                        >
                            Create An Account
                        </Link>
                    </p>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default SIgnIn;