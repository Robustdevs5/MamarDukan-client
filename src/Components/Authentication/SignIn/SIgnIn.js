// font awesome
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { userContext } from "../../../App";
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar/Navbar';
import TopBar from '../../TopBar/TopBar';
import firebaseConfig from "../firebase.config";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css';
import { useEffect, useState } from 'react';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}



const SIgnIn = () => {

    const { user, setUser } = useContext(userContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const gitProvider = new firebase.auth.GithubAuthProvider();
    const [customerStatus, setCustomerStatus] = useState(true);
    const [vendorStatus, setVendorStatus] = useState(false);
    const [superAdminStatus, setSuperAdminStatus] = useState(false);
    const [adminStatus, setAdminStatus] = useState(false);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };





    // Google sign in
    const handleGoogleLogin = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const googleUser = result.user;
                const { displayName, email, photoURL } = googleUser;
                handleUser(displayName, email, photoURL, true);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("name", displayName);
                sessionStorage.setItem("photo", photoURL);
                handleAuthToken();
            })
            .catch((error) => {
                handleErrorMessage(error);
            });
    };

    // Github sign in
    const handleGitSignIn = () => {
        firebase.auth().signInWithPopup(gitProvider).then((result) => {
            const gitUser = result.user;
            const { displayName, email, photoURL } = gitUser;
            handleUser(displayName, email, photoURL, true);
            sessionStorage.setItem("user", email);
            sessionStorage.setItem("name", displayName);
            sessionStorage.setItem("photo", photoURL);
            handleAuthToken();
        }).catch((error) => {
            handleErrorMessage(error);
        });
    }

    // handles setting auth token in the session storage
    const handleAuthToken = () => {
        firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem("token", idToken);
                history.replace(from);
            })
            .catch(function (error) {
                handleErrorMessage(error);
            });
    };

    // handles user info
    const handleUser = (name, email, photoURL, whetherLoggedIn) => {
        const newUser = { ...user };
        if (name !== undefined) {
            newUser.name = name;
        }
        if (email !== undefined) {
            newUser.email = email;
        }
        if (photoURL !== undefined) {
            newUser.photoURL = photoURL;
        }
        if (whetherLoggedIn !== undefined) {
            newUser.isLoggedIn = true;
        }
        setUser(newUser);
        handleAuthToken();
    };

    // handles error message
    const handleErrorMessage = (error) => {
        const errorMessage = error.message;
        const newUser = { ...user };
        newUser.error = errorMessage;
        setUser(newUser);
    };

    // React hook form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const userInfo = {
            email: data.email,
            password: data.password
        };

        if (vendorStatus) {
            const userSignUp = `http://localhost:5000/user/login`;
            fetch(userSignUp, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then(async res => await res.json())
                .then(async user => {
                    console.log('usesmall0', user)
                    // user ? alert(user.message) : alert("failed")
                    if (user) {
                        toast.success(user.message, {
                            position: "bottom-right",
                        });
                    }
                    sessionStorage.setItem('user', JSON.stringify(user));
                    history.push('/')
                })
                .catch(error => {
                    // alert(error.message);
                    // console.log(error);
                    toast.error(error.message, {
                        position: "bottom-right",
                    });
                });
        }
        else if (customerStatus) {


        }

    };



    const handleCustomerChange = () => {
        setVendorStatus(false);
        setCustomerStatus(true);
    }

    const handleVendorChange = () => {
        setCustomerStatus(true);
        setVendorStatus(true);
    }



    return (
        <>
            <TopBar />
            <Navbar /> 
            <div className="login-container">
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <h3 className="login-heading">Log In</h3>
                        
                        <input type="email" name="email" className="form-control"
                                {...register('email', { requiblue: true })} placeholder="Your email"
                            />
                        {errors.name && errors.name.type === "requiblue" && <span>Name is requiblue</span>}
                        <input type="password" name="password" className="form-control" placeholder="Your password"
                            {...register('password', { requiblue: true})}           
                        />
                        {errors.email && (<span className="error">
                                {errors.email.type === "requiblue" ? "Email is requiblue" : "Your Email pattern is not correct"}
                            </span>
                        )}

                        <p className="error">{user.error}</p> */}

                        
                        <div class="user-box">
                            <input type="text" name="" requiblue="" />
                            <label>Username</label>
                        </div>
                        <div class="user-box">
                            <input type="password" name="" requiblue="" />
                            <label>Password</label>
                        </div>
                        <div className="padding-l-5 flex  justify-between">
                            <h1 className="text-blue-50 text-center">I'm a</h1>
                            <label className=" flex items-center cursor-pointer">
                                <input className="w-6 h-4  cursor-pointer" name="size" type="radio" value="user"  />
                                <small className="text-blue-50 text-center ">User</small>
                            </label>
                            <label className="flex items-center border-l-2 border-blue-400  rounded cursor-pointer">
                                <input className="w-6 h-4 cursor-pointer" name="size" type="radio" value="vendor"/>
                                <small className="text-blue-50 text-center ">Vendor</small>
                            </label>
                            <label className="flex items-center border-l-2 border-blue-400 rounded cursor-pointer">
                                <input className="w-6 h-4 cursor-pointer" name="size" type="radio" value="admin" />
                                <small className="text-blue-50 text-center"> Admin</small>
                            </label>
                            <label className="flex items-center border-l-2 border-blue-400 rounded cursor-pointer">
                                <input className="w-6 h-4 cursor-pointer" name="size" type="radio" value="superAdmin"/>
                                <small className="text-blue-50 text-center">Super Admin</small>
                            </label>
                        </div>
                            <a href="#" className="submitBtn">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Submit
                            </a>

                        {/* <input type="submit" value="Log In" className="submit-button btn"/>
                        <p>Don' have an account?
                            <Link
                                to="/register"
                                style={{ textDecoration: "underline", paddingLeft:small0px' }}
                            >
                                Create An Account
                            </Link>
                        </p> */}
                        
                    </form>
                    <div className="social-login"> 
                        <div className="flex justify-between py-5"> 
                            <h4 className="text-white">Don't have an account?</h4> 
                            <Link to="/register" style={{color:"#03e9f4"}}>
                                 Create an account
                            </Link> 
                        </div>
                        <button onClick={handleGoogleLogin} className="login-btn">
                            <div className="flex justify-between">
                                <h1>Google </h1>
                                <span>
                                    <FontAwesomeIcon className="text-red-600" icon={faGoogle}/>
                                </span> 
                            </div>
                        </button>
                        <button onClick={handleGitSignIn} className="login-btn">
                            <div className="flex justify-between">
                                <h1>Github </h1>
                                <span>
                                    <FontAwesomeIcon  icon={faGithub}/>
                                </span> 
                            </div>
                        </button>                      
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </>
    );
};

export default SIgnIn;