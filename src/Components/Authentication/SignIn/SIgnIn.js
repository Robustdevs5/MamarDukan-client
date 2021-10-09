import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useContext, useEffect } from "react";
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
import { useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const SIgnIn = () => {

    const { user, setUser } = useContext(userContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const gitProvider = new firebase.auth.GithubAuthProvider();
    const [customerStatus, setCustomerStatus] = useState(false);
    const [vendorStatus, setVendorStatus] = useState(false);
    const [superAdminStatus, setSuperAdminStatus] = useState(false);
    const [adminStatus, setAdminStatus] = useState(false);
    const [token, setToken] = useState([]);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };



    // Google sign in
    const handleGoogleLogin = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                handleAuthToken();
                const googleUser = result.user;
                const { displayName, email, photoURL } = googleUser;
                handleUser(displayName, email, photoURL, true);
                sessionStorage.setItem("user", JSON.stringify(googleUser));
                // sessionStorage.setItem("name", displayName);
                // sessionStorage.setItem("photo", photoURL);
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
            sessionStorage.setItem("user", JSON.stringify(gitUser));
            // sessionStorage.setItem("name", displayName);
            // sessionStorage.setItem("photo", photoURL);
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
                // setToken(idToken)
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


    //////////////Submitting..//////////////
    async function handleSubmit(e) {
        e.preventDefault();

        const userInfo = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        console.log(userInfo);

        //////////////Customer/////////////
        if (customerStatus) {

            try {

                const userSignUp = `https://mamardukan.herokuapp.com/user/login-user`;
                fetch(userSignUp, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(async res => await res.json())
                    .then(async user => {
                        console.log(user)
                        // user ? alert(user.message) : alert("failed")
                        if (user.success) {
                            toast.success(user.message, {
                                position: "bottom-right",
                            });
                            e.target.reset();
                            sessionStorage.setItem('user', JSON.stringify(user));
                            history.push('/');
                        }
                        else {
                            toast.error(user.message, {
                                position: "bottom-right",
                            });
                        }

                    })
            }
            catch (e) {
                alert(e)
            }

        }
        ///////////Vendor///////////
        else if (vendorStatus) {

            try {

                const userSignUp = `https://mamardukan.herokuapp.com/user/login-vendor`;
                fetch(userSignUp, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(async res => await res.json())
                    .then(async user => {
                        console.log(user)
                        if (user.success) {
                            toast.success(user.message, {
                                position: "bottom-right",
                            });
                            e.target.reset();
                            sessionStorage.setItem('user', JSON.stringify(user));
                            history.push('/');
                        }
                        else {
                            toast.error(user.message, {
                                position: "bottom-right",
                            });
                        }
                    })
            }
            catch (e) {
                alert(e)
            }

        }
        //////////////Admin////////////////////////
        else if (adminStatus) {

            try {

                const userSignUp = `https://mamardukan.herokuapp.com/user/login-admin`;
                fetch(userSignUp, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(async res => await res.json())
                    .then(async user => {
                        console.log('usesmall0', user.message)

                        if (user.success) {
                            toast.success(user.message, {
                                position: "bottom-right",
                            });
                            e.target.reset();
                            sessionStorage.setItem('user', JSON.stringify(user));
                            history.push('/');
                        }
                        else {
                            toast.error(user.message, {
                                position: "bottom-right",
                            });
                        }
                    })
            }
            catch (e) {
                alert(e)
            }

        }

        /////////SuperAdmin////////////
        else if (superAdminStatus) {

            try {

                const userSignUp = `https://mamardukan.herokuapp.com/user/login-super-admin`;
                fetch(userSignUp, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(async res => await res.json())
                    .then(async user => {
                        console.log('usesmall0', user.message)
                        if (user.success) {
                            toast.success(user.message, {
                                position: "bottom-right",
                            });
                            e.target.reset();
                            sessionStorage.setItem('user', JSON.stringify(user));
                            history.push('/');
                        }
                        else {
                            toast.error(user.message, {
                                position: "bottom-right",
                            });
                        }
                    })
            }
            catch (e) {
                alert(e)
            }

        }
        else {
            toast.error("Make sure you have select a role", {
                position: "bottom-right",
            });
        }

    };



    const handleUserChange = () => {
        setVendorStatus(false);
        setCustomerStatus(true);
        setSuperAdminStatus(false);
        setAdminStatus(false);
    }

    const handleVendorChange = () => {
        setCustomerStatus(false);
        setVendorStatus(true);
        setSuperAdminStatus(false);
        setAdminStatus(false);
    }

    const handleAdminChange = () => {
        setCustomerStatus(false);
        setVendorStatus(false);
        setSuperAdminStatus(false);
        setAdminStatus(true);
    }

    const handleSuperAdminChange = () => {
        setCustomerStatus(false);
        setVendorStatus(false);
        setSuperAdminStatus(true);
        setAdminStatus(false);
    }



    return (
        <>
            <TopBar />
            <Navbar />
            <div className="login-container">
                <div className="login-box">
                    <h2>Login</h2>

                    <form onSubmit={handleSubmit}>
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
                            <input type="text" name="email" requiblue="" />
                            <label>Username</label>
                        </div>
                        <div class="user-box">
                            <input type="password" name="password" requiblue="" />
                            <label>Password</label>
                        </div>
                        <div className="padding-l-5 flex  justify-between">
                            <h1 className="text-blue-50 text-center">I'm a</h1>

                            <label for="user" className=" flex items-center cursor-pointer">
                                <input onChange={handleUserChange} className="w-6 h-4  cursor-pointer" name="user" type="radio" id='user' value="1" />
                                <small className="text-blue-50 text-center ">user</small>
                            </label>

                            <label  for="vendor" className="flex items-center border-l-2 border-blue-400  rounded cursor-pointer">
                                <input onChange={handleVendorChange} className="w-6 h-4 cursor-pointer" name="vendor" type="radio" id="vendor" value="1" />
                                <small className="text-blue-50 text-center ">Vendor</small>
                            </label>

                            <label className="flex items-center border-l-2 border-blue-400 rounded cursor-pointer">
                                <input onChange={handleAdminChange} className="w-6 h-4 cursor-pointer" name="admin" type="radio" value="1" />
                                <small className="text-blue-50 text-center"> Admin</small>
                            </label>

                            <label className="flex items-center border-l-2 border-blue-400 rounded cursor-pointer">
                                <input onChange={handleSuperAdminChange} className="w-6 h-4 cursor-pointer" name="superAdmin" type="radio" value="1" />
                                <small className="text-blue-50 text-center">Super Admin</small>
                            </label>

                        </div>

                        {/* <a href="#" className="submitBtn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a> */}
                        <label className="submitBtnAnimation">
                            <span className="btnAnimation"></span>
                            <span className="btnAnimation"></span>
                            <span className="btnAnimation"></span>
                            <span className="btnAnimation"></span>
                            <button type="submit" value="Submit">Submit</button>
                        </label>

                    </form>


                    <div className="social-login">
                        <div className="flex justify-between py-5">
                            <h4 className="text-white">Don't have an account?</h4>
                            <Link to="/register" style={{ color: "#03e9f4" }}>
                                Create an account
                            </Link>
                        </div>
                        <button onClick={handleGoogleLogin} className="login-btn">
                            <div className="flex justify-between">
                                <h1>Google </h1>
                                <span>
                                    <FcGoogle />
                                </span>
                            </div>
                        </button>
                        <button onClick={handleGitSignIn} className="login-btn">
                            <div className="flex justify-between">
                                <h1>Github </h1>
                                <span>
                                    <AiFillGithub />
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
