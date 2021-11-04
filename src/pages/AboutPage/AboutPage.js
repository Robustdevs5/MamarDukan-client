import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';
import aboutImg from '../../images/about-img.jpg';
import Tamal from './asset/Tamal.jpg'

const About = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

        <main className="relative mx-auto bg-white">
            <div className="w-full mx-auto">
                <div className="relative overflow-hidden">
                    <img className="w-full h-full inset-0 object-cover" src={aboutImg} alt="Blog full Title" />
                    <div className="text-center justify-center item-center mx-16 lg:mx-96 left-0 right-0 py-8 px-8 bg-white absolute bottom-0">
                        <p className="text-xl text-gray-300 font-bold">KNOW US BETTER</p>
                        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading ">About Us</h2>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="w-2/3 mx-auto py-8 text-lg">
                        <p className="mt-6">Mamar Dukan started its operations in October, 2021 as the first e-commerce portal in Bangladesh. Mamar Dukan is an online marketplace where anyone can sell or buy almost anything. The site has a strong and growing community of users who trade in a wide range of item categories including Electronics, Cameras, Phones, Computers, CDs, Mobiles, Fashion Accessories, Music, and Travel. Through a world-class technology infrastructure Mamar Dukan enables & simplifies e-commerce for Bangladesh's ever expanding online community. People spend more time on Mamar Dukan than any other Bangladeshi site, making it the most popular site of the country. Mamar Dukan encouraged young generation to earn money from selling goods using the power of the Internet. Mamar Dukan is proud to help many people established successful online businesses who make a living out of it.</p>
                        <p className="mt-4">Mamar Dukan is creating a place where people can offer goods for sale and anyone in the world can buy at a fair price. It will be a market of people, where your next-door neighbor can compete with a large corporation and have an equal chance of success. It will be a place that constantly adapts and improves to meet the needs of buyers and sellers. Trust, honesty and efficiency will be rewarded. In the end, our market will be so large and open that you will be able to find almost anything you can imagine. And every other way to buy and sell things will seem inferior.</p>
                        <p className="mt-4">People from all over Bangladesh buy and sell on Mamar Dukan. Currently, over 90% of all listed items gets sold on Mamar Dukan giving buyer and seller the convenience of online trading. People come to Mamar Dukan to buy and sell items in an array of categories from antiques, art, collectibles to practical items like used cars, mobiles, laptops, clothing, books, CDs, and electronics. Buyers have the option to purchase items in an auction-style format or items can be purchased at a set price through a feature called FixedPrice. Mamar Dukan is the place to buy what you want, sell what you have, and make new friends while you are at it. Our online community of thousands of users that let you connect with people who share your interest.</p>
                  </div>                
              </div>
              <div className="w-full bg-gray-800">
                      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                          <div className="text-center pb-12">
                              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                                  Check our awesome team member           
                              </h1>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                              <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                  <div>
                                      <img className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="Author" />
                                  </div>
                                  <div className="text-center py-8 sm:py-6">
                                      <p className="text-xl text-white font-bold mb-2">Juned Ahmed</p>
                                      <p className="text-base text-gray-400 font-normal">Full Stack Developere</p>
                                  </div>
                              </div>
                              <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                  <div>
                                      <img className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="Author" />
                                  </div>
                                  <div className="text-center py-8 sm:py-6">
                                      <p className="text-xl text-white font-bold mb-2">Shahadat Hossain</p>
                                      <p className="text-base text-gray-400 font-normal">MERN Stack</p>
                                  </div>
                              </div>
                              <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                  <div>
                                      <img className="object-center object-cover h-auto w-full p-4" src={Tamal} alt="Author" />
                                  </div>
                                  <div className="text-center py-8 sm:py-6">
                                      <p className="text-xl text-white font-bold mb-2">Tamal Datta</p>
                                      <p className="text-base text-gray-400 font-normal">React Developer</p>
                                  </div>
                              </div>
                              <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                  <div>
                                      <img className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="Author" />
                                  </div>
                                  <div className="text-center py-8 sm:py-6">
                                      <p className="text-xl text-white font-bold mb-2">Jahid Hasan Onik</p>
                                      <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </div>
          </div>
      </main>
      <Footer />
    </>
  );
};

export default About;