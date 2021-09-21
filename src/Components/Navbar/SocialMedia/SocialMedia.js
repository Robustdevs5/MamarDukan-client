import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '../Menu/MenuItems';
import { Link } from 'react-router-dom';

export default function SocialMedia() {
    return (
        <ul className='md:flex text-white text-center hidden'>
            {
                Icon.map((item, index) => {
                
                    return (
                        <li key={index} className='transition-all duration-500 hover:text-gray-800'>
                            <Link to={item.path} className='text-xl pr-5'>
                                <FontAwesomeIcon className="icon " icon={
                                        item.icon === 'facebook' ? faFacebook :
                                        item.icon === 'instagram' ? faInstagram :
                                        item.icon === 'twitter' ? faTwitter : 
                                        item.icon === 'linkedin' ? faLinkedin : faLinkedin
                                
                                } />
                            </Link>
                        </li>
                    );
                    
                })
            }
        </ul>
    )
}
