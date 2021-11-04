// font awesome

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useContext  } from "react";
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
import { FaGithub, FaGoogle } from "react-icons/fa";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app();
}

const SIgnIn = () => {
    const {user, setUser} = useContext(userContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const gitProvider = new firebase.auth.GithubAuthProvider();

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
        const userSignUp = `https://mamar-dukan.herokuapp.com/user/login`;
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
                // user ? alert(user.message) : alert("failed")
                if(user) {
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
    
     };
     
  


    return (
        <>
            <TopBar />
            <Navbar /> 
            <div className="form-card">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="login-heading">Log In</h3>
                    
                    <input type="email" name="email" className="form-control"
                            {...register('email', { required: true })} placeholder="Your email"
                        />
                    {errors.name && errors.name.type === "required" && <span>Name is required</span>}
                    <input type="password" name="password" className="form-control" placeholder="Your password"
                        {...register('password', { required: true})}           
                    />
                    {errors.email && (<span className="error">
                            {errors.email.type === "required" ? "Email is required" : "Your Email pattern is not correct"}
                        </span>
                    )}

                    <p className="error">{user.error}</p>
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
                <div className="social-login">
                    <h4>Or Continue With</h4>
                    <br />
                    <button onClick={handleGoogleLogin} className="login-btn">
                        <span><FaGoogle /></span> Google
                    </button>
                    <button onClick={handleGitSignIn} className="login-btn">
                        <span><FaGithub /></span>Github
                    </button>                      
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </>
    );
};

export default SIgnIn;