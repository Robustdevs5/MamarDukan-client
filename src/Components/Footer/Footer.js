import { faCcMastercard, faCcPaypal, faCcVisa, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../StyledComponent/Footer.css'
import FooterCol from './FooterCol';

const Footer = () => {
    const Shotcut = [
        {name: "Track your order" , link: "/track-order"},
        {name: "Terms and Conditions" , link: "/terms"},
        {name: "Privacy Policy" , link: "/privacy"},
        {name: "Cookies policy" , link: "/cookies"},
        {name: "Help Center" , link: "/help"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const services = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <div className="">
            <div className="">
                <div className="">
                    <div className="footer">
                        <FooterCol key={1} menuTitle={"SHOUTCUT"} menuItems={Shotcut}/>
                        <FooterCol key={2} menuTitle={"OUR LINK"} menuItems={oralHealth}/>
                        <FooterCol key={3} menuTitle={"SERVICE"} menuItems={services}/>
                        <FooterCol key={4} menuTitle={"ABOUT US"} menuItems={ourAddress}/>
                            {/* <div className="Icon"> */}
                                {/* <div className="PaymentGateway">
                                    <h4 className="title">Payment Method</h4>
                                        <div className="iconwraper">
                                            <FontAwesomeIcon className="iconbutton" icon={faCcVisa} />
                                            <FontAwesomeIcon className="iconbutton" icon={faCcMastercard} />
                                            <FontAwesomeIcon className="iconbutton" icon={faCcPaypal} />
                                        </div>
                                </div> */}
                            {/* </div> */}
                    </div>
                </div>
            </div>
            <p className="copyright">Copyright @2021 Robust Devs All rights reserved.</p>
        </div>
    );
};

export default Footer;