import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeadset, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <TopBar />
            <Header />
            <Navbar />
            <div className="mx-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116812.2487696026!2d90.32176313514991!3d23.804984056705162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sBanani%20Model%20Town%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1633243225428!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>

      <section className="mt-20 pb-10 bg-blueGray-200">
        <div className="container mx-auto">  
        <div><h2 className="text-3xl font-bold text-center pb-10">Contact Us For Any Questions</h2></div>      
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-custom">
                    <FontAwesomeIcon className="iconbutton" icon={faEnvelope} />
                  </div>
                  <h6 className="text-xl font-semibold">Contact Directly</h6>
                  <p className="mt-2 text-blueGray-500">
                    contact@mamardukan.com
                  </p>
                  <p className="mb-4 text-blueGray-500">(+004) 912-3548-07</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-custom">
                    <FontAwesomeIcon className="iconbutton" icon={faMapMarkerAlt} />
                  </div>
                  <h6 className="text-xl font-semibold">Head Quater</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    17 Queen St, Southbank, Melbourne, 10560, Australia
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-custom">
                    <FontAwesomeIcon className="iconbutton" icon={faEnvelope} />
                  </div>
                  <h6 className="text-xl font-semibold">Work With Us</h6>
                  <p className="mt-2 text-blueGray-500">
                    Send your CV to our email:                    
                  </p>
                  <p className="mb-4 text-blueGray-500">career@martfury.com</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-custom">
                    <FontAwesomeIcon className="iconbutton" icon={faHeadset} />
                  </div>
                  <h6 className="text-xl font-semibold">Customer Service</h6>
                  <p className="mt-2 text-blueGray-500">
                    customercare@mamardukan.com                   
                  </p>
                  <p className="mb-4 text-blueGray-500">(800) 843-2446 </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-custom">
                    <FontAwesomeIcon className="iconbutton" icon={faPhoneAlt} />
                  </div>
                  <h6 className="text-xl font-semibold">Media Relations</h6>
                  <p className="mt-2 text-blueGray-500">
                    media@mamardukan.com                   
                  </p>
                  <p className="mb-4 text-blueGray-500">(801) 947-3564 </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-custom">
                    <FontAwesomeIcon className="iconbutton" icon={faPhoneAlt} />
                  </div>
                  <h6 className="text-xl font-semibold">Vendor Support</h6>
                  <p className="mt-2 text-blueGray-500">
                    vendorsupport@mamardukan.com                   
                  </p>
                  <p className="mb-4 text-blueGray-500">(801) 947-3100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto mt-10 pb-20">  
      <div><h2 className="text-3xl font-bold text-center pb-10">Get In Touch</h2></div>       
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4 text-center">
              <div className="w-full h-full bg-center bg-cover">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80" />
              </div>          
            </div>
            <div className="w-full md:w-6/12 px-4 text-center">
            
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Name
                  </label>
                  <input className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane Doe" />         
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Phone
                  </label>
                  <input className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Phone" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    E-mail
                  </label>
                  <input className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="E-mail" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Message
                  </label>
                  <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Message"></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button className="btn shadow bg-red-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Send
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </form>
            </div>
          </div>
      </div>
      
            <Footer />           
        </>
    );
};

export default Contact;