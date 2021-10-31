import { faCcMastercard, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../StyledComponent/Footer.css';
import FooterCol from './FooterCol';

const Footer = () => {
    const Shotcut = [
        {name: "Track your order" , link: "/trackOrder"},
        {name: "Terms and Conditions" , link: "/terms-and-conditions"},
        {name: "Privacy Policy" , link: "/privacy-policy"},
        {name: "Cookies policy" , link: "/privacy-policy"},
        {name: "Help Center" , link: "/help-center"},
    ]
    const ourAddress = [
        {name: "Location" , link: "//google.com/map"},
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},       
    ]
    const OurLink = [
        {name: "How To Buy" , link: "/how-to-buy"},
        {name: "Returns & refunds" , link: "/return-and-refund"},
        {name: "Join with Affiliate" , link: "/affiliates"},
        {name: "Careers" , link: "/careers"},
        {name: "Sell on mamar dukan" , link: "/seller"},
    ]
    const services = [
        {name: "About Mamar Dukan" , link: "/about"},
        {name: "Guide" , link: "/Guide"},
        {name: "FAQ" , link: "/faqs"},
        {name: "Contact Us" , link: "/contact"},
        {name: "Blog" , link: "/blog"}
    ]


    return (
        <div className="">
            <div className="footer">
                <FooterCol key={1} menuTitle={"SHORTCUT"} menuItems={Shotcut}/>
                <FooterCol key={2} menuTitle={"OUR LINK"} menuItems={OurLink}/>
                <FooterCol key={3} menuTitle={"SERVICE"} menuItems={services}/>
                <FooterCol key={4} menuTitle={"ABOUT US"} menuItems={ourAddress}>
                <div className="PaymentGateway">
                            <h4 className="title">Payment Method</h4>
                                <div className="iconwraper">
                                    <FontAwesomeIcon className="iconbutton" icon={faCcVisa} />
                                    <FontAwesomeIcon className="iconbutton" icon={faCcMastercard} />
                                    <FontAwesomeIcon className="iconbutton" icon={faCcPaypal} />
                                </div>
                        </div>
                </FooterCol>
            </div>
            <p className="copyright">Copyright @ 2021 Robust Devs. All rights reserved.</p>       
        </div>
    );
};

export default Footer;