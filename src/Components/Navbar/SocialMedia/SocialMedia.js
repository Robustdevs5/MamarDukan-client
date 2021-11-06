
import { Icon } from '../Menu/MenuItems';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SocialMedia() {
    return (
        <ul className='md:flex text-white text-center hidden'>
            {
                Icon.map((item, index) => {
                
                    return (
                        <li key={index} className='transition-all duration-500 hover:text-gray-800 pr-5'>
                            <Link to={item.path} className='text-xl '>
                            {
                                    item.icon === 'facebook' && <FaFacebook className="icon " /> }
                                 {   item.icon === 'instagram' && <FaInstagram className="icon " /> }
                                  {  item.icon === 'twitter' && <FaTwitter className="icon " /> }
                                   { item.icon === 'linkedin' && <FaLinkedin className="icon " /> }
                            </Link>
                        </li>
                    );
                    
                })
            }
        </ul>
    )
}
