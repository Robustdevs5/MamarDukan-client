import { faCcMastercard, faCcPaypal, faCcVisa, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../StyledComponent/Footer.css'

const Footer = () => {
    return (
        <div className="">
            <div className="footer">
                <div className="Service">
                    <h4 className="title">Shotcut Link</h4>
                    <p>Terms and Conditions</p>
                    <p>Cookies policy</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="FeatureLink">
                    <h4 className="title">Feature</h4>
                    <p>Returns policy</p>
                    <p>FAQ</p>
                </div>
                <div className="Contact">
                    <h4 className="title">Contact</h4>
                    <p><FontAwesomeIcon icon={faEnvelope} /> mail@mail.com</p>
                    <p><FontAwesomeIcon icon={faPhoneAlt} /> +880123456789</p>
                </div>
                <div className="Icon">
                    <div className="Social">
                        <h4 className="title">Follow Us</h4>
                            <div className="iconwraper">
                                <FontAwesomeIcon className="iconbutton" icon={faTwitter} />
                                <FontAwesomeIcon className="iconbutton" icon={faFacebook} />
                                <FontAwesomeIcon className="iconbutton" icon={faInstagram} />
                            </div>
                    </div>
                    <div className="PaymentGateway">
                        <h4 className="title">Payment Method</h4>
                            <div className="iconwraper">
                                <FontAwesomeIcon className="iconbutton" icon={faCcVisa} />
                                <FontAwesomeIcon className="iconbutton" icon={faCcMastercard} />
                                <FontAwesomeIcon className="iconbutton" icon={faCcPaypal} />
                            </div>
                    </div>
                </div>
            </div>
            <div className="Trusted">

            </div>
            <p className="copyright">Copyright @2021 Robust Devs All rights reserved.</p>
        </div>
    );
};

export default Footer;