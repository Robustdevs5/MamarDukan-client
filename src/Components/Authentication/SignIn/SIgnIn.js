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
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar/Navbar';
import TopBar from '../../TopBar/TopBar';
import firebaseConfig from "../firebase.config";
import './SignIn.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app();
}

const SIgnIn = () => {
    const [user, setUser] = useContext(userContext);
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
                sessionStorage.setItem("email", email);
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
                        <span><FontAwesomeIcon icon={faGoogle}/></span> Google
                    </button>
                    <button onClick={handleGitSignIn} className="login-btn">
                        <span><FontAwesomeIcon icon={faGithub}/></span>Github
                    </button>                      
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SIgnIn;