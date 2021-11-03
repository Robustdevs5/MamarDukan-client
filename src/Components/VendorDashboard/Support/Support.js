import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorNavbar from '../VendorTopbar/VendorNavbar';

const VendorSupport = () => {
    return (
        <div className="flex flex-no-wrap">
                <VendorSidebar />
            <div className="container mx-auto py-6 md:w-4/5 w-11/12">
                <VendorNavbar />
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
                            <h6 className="text-xl font-semibold">Contact Directly to Support</h6>
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
                            <h6 className="text-xl font-semibold">Contact Directly to Head Quater</h6>
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
                            <h6 className="text-xl font-semibold">Contact Directly to Admin</h6>
                            <p className="mt-2 text-blueGray-500">
                                Send your CV to our email:                    
                            </p>
                            <p className="mb-4 text-blueGray-500">career@martfury.com</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda nostrum maxime suscipit sunt aliquid, in laudantium velit a veniam fugiat rerum voluptatibus totam accusamus exercitationem molestiae, corrupti reiciendis! Cumque totam similique est dolore qui, voluptatem perspiciatis vero pariatur nemo eum repellat velit. Molestiae veniam soluta mollitia eveniet, exercitationem quo.</p>
              </div>          
            </div>
            <div className="w-full md:w-6/12 px-4 text-center">
            
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane Doe" />         
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Phone" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <input className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="E-mail" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <input className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="subject" type="text" placeholder="Subject" />
                </div>
              </div>
              
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Department
                </label>
                <select
                    id="category"
                    name="category"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option>Admin</option>
                    <option>Support</option>
                    <option>Account</option>
                </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Message"></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button className="btn shadow bg-red-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded" type="button">
                    Send
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </form>
            </div>
          </div>
      </div>
            </div>
        </div>
    );
};

export default VendorSupport;