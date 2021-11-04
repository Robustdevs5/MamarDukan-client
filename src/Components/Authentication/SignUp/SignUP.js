import React, { useState } from 'react';
import Topbar from '../../TopBar/TopBar'
import Navbar from '../../Navbar/Navbar/Navbar';
import Footer from '../../Footer/Footer';
import UserSignUpFrom from './VendorSingupFrom';
import  '../../StyledComponent/Signup.css';
import VendorSingupFrom from './UserSignUpFrom';
import { CgArrowLeftR,  CgArrowRightR} from "react-icons/cg";

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
            <div className='flex justify-center w-screen h-full py-20'>
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
                                <h1>To buy products!</h1>
                                <p>Please sign up with your personal info and keep connected with us</p>
                                <button class="ghost flex items-center" id="signIn" onClick={handleLogin}>
                                    <CgArrowLeftR size={30} className='pr-2'/> Sign Up
                                </button>
                            </div>
                            <div class="overlay-panel overlay-right tracking-tight">
                                <h1>Are you interested?</h1>
                                <p>To sell products on Mamar Dukan. Enter your personal details and start journey with us</p>
                                <button class="ghost flex items-center" id="signUp" onClick={handleRegister}>
                                    Vendor account <CgArrowRightR size={30} className='pl-2'/>
                                </button>
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