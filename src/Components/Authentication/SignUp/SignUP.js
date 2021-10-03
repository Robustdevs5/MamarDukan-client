import React, { useState } from 'react';
import Topbar from '../../TopBar/TopBar'
import Navbar from '../../Navbar/Navbar/Navbar';
import Footer from '../../Footer/Footer';
import UserSignUpFrom from './UserSignUpFrom';
import  '../../StyledComponent/Signup.css';
import VendorSingupFrom from './VendorSingupFrom';

const SignUP = () => {
    const [isAuthContainerActive, setIsAuthContainerActive] = useState(false);
    const handleLogin = () => {
        setIsAuthContainerActive(false);
     };  
     const handleRegister = () => {
        setIsAuthContainerActive(true);
     };
    return (
        <div>
            <Topbar/>
            <Navbar/> 
            {/* <div  className= {isAuthContainerActive ? "AuthContainer right-panel-active" : "AuthContainer"}>  */}
            <div className='flex justify-center w-screen py-20'>
                <div className= {isAuthContainerActive ? "AuthContainer right-panel-active" : "AuthContainer"}>
                        <div class="form-AuthContainer sign-up-AuthContainer">
                            <UserSignUpFrom />
                        </div>
                        <div class="form-AuthContainer sign-in-AuthContainer">
                            <VendorSingupFrom/>
                        </div>
                        <div class="overlay-AuthContainer">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button class="ghost" id="signIn" onClick={handleLogin}>Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button class="ghost" id="signUp" onClick={handleRegister}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SignUP;