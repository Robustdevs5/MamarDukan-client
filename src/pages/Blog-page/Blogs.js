import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';

const Blogs = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div class="rounded overflow-hidden shadow-lg">
            <a href="#">
              <div class="relative">
                <img class="w-full" src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
                <a href="#!">
                  <div class="absolute bottom-0 left-0 bg-custom px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                    Photos
                  </div>
                </a>
                <a href="!#">
                  <div class="text-sm absolute top-0 right-0 bg-custom px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                    <span class="font-bold">27</span>
                    <small>March</small>
                  </div>
                </a>
              </div></a>
            <div class="px-6 py-4">
              <a href="#" class="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out">Best View in Newyork City</a>
              <p class="text-gray-500 text-sm">
                The city that never sleeps. The city that never sleeps
              </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
              <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                <FontAwesomeIcon className="iconbutton" icon={faClock} />
                <span class="ml-1">6 mins ago</span></span>
            </div>
          </div>
          <div class="rounded overflow-hidden shadow-lg">
            <a href="#"><div class="relative">
              <img class="w-full" src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
              <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <a href="#!"><div class="absolute bottom-0 left-0 bg-custom px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                Photos
              </div>
              </a>

              <a href="!#">
                <div class="text-sm absolute top-0 right-0 bg-custom px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                  <span class="font-bold">20</span>
                  <small>March</small>
                </div>
              </a>

            </div></a>
            <div class="px-6 py-4">
              <a href="#" class="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out">Best Pizza in Town</a>
              <p class="text-gray-500 text-sm">
                The collection of best pizza images in Network city
              </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
              <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                <FontAwesomeIcon className="iconbutton" icon={faClock} />
                <span class="ml-1">3 mins read</span></span>
            </div>
          </div>
          <div class="rounded overflow-hidden shadow-lg">
            <a href="#"><div class="relative">
              <img class="w-full" src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
              <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <a href="#!"><div class="absolute bottom-0 left-0 bg-custom px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                Photos
              </div></a>
              <a href="!#"><div class="text-sm absolute top-0 right-0 bg-custom px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                <span class="font-bold">15</span>
                <small>April</small>
              </div></a>
            </div></a>
            <div class="px-6 py-4">
              <a href="#" class="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out">Best Salad Images ever</a>
              <p class="text-gray-500 text-sm">
                The collection of best salads of town in pictures
              </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
              <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                <FontAwesomeIcon className="iconbutton" icon={faClock} />
                <span class="ml-1">6 mins read</span></span>
            </div>
          </div>
          <div class="rounded overflow-hidden shadow-lg">
            <a href="#"><div class="relative">
              <img class="w-full" src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
              <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <a href="#!"><div class="absolute bottom-0 left-0 bg-custom px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                Photos
              </div></a>
              <a href="!#"><div class="text-sm absolute top-0 right-0 bg-custom px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                <span class="font-bold">15</span>
                <small>April</small>
              </div></a>
            </div></a>
            <div class="px-6 py-4">
              <a href="#" class="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out">Best Salad Images ever</a>
              <p class="text-gray-500 text-sm">
                The collection of best salads of town in pictures
              </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
              <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                <FontAwesomeIcon className="iconbutton" icon={faClock} />
                <span class="ml-1">6 mins read</span></span>
            </div>
          </div>
          <div class="rounded overflow-hidden shadow-lg">
            <a href="#"><div class="relative">
              <img class="w-full" src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
              <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <a href="#!"><div class="absolute bottom-0 left-0 bg-custom px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                Photos
              </div></a>
              <a href="!#"><div class="text-sm absolute top-0 right-0 bg-custom px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                <span class="font-bold">15</span>
                <small>April</small>
              </div></a>
            </div></a>
            <div class="px-6 py-4">
              <a href="#" class="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out">Best Salad Images ever</a>
              <p class="text-gray-500 text-sm">
                The collection of best salads of town in pictures
              </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
              <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                <FontAwesomeIcon className="iconbutton" icon={faClock} />
                <span class="ml-1">6 mins read</span></span>
            </div>
          </div>
          <div class="rounded overflow-hidden shadow-lg">
            <a href="#"><div class="relative">
              <img class="w-full" src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
              <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <a href="#!"><div class="absolute bottom-0 left-0 bg-custom px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                Photos
              </div></a>
              <a href="!#"><div class="text-sm absolute top-0 right-0 bg-custom px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                <span class="font-bold">15</span>
                <small>April</small>
              </div></a>
            </div></a>
            <div class="px-6 py-4">
              <a href="#" class="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out">Best Salad Images ever</a>
              <p class="text-gray-500 text-sm">
                The collection of best salads of town in pictures
              </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
              <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                <FontAwesomeIcon className="iconbutton" icon={faClock} />
                <span class="ml-1">6 mins read</span></span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;