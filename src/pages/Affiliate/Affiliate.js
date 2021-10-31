import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';
import affiliate1 from '../../images/affiliate-1.jpg';
import affiliate2 from '../../images/affiliate-2.jpg';
import affiliate from '../../images/affiliate.jpg';

const Affiliate = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
        <div className="bg-white pb-16">
          <div className="w-full text-center justify-center item-center ">
              <h1 className="font-bold text-5xl text-gray-700 py-16">
                Our Affiliate Program
              </h1>
          </div>
          <div className="container mx-auto px-8 py-4 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start pb-8">
                <h1 className="text-center lg:text-left text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">Earn up to $200 from each sale with Mamar Dukan referral program </h1>
                <p className="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae corporis distinctio hic accusamus voluptas.</p>
                <div className="mt-8 lg:mt-24 flex">
                    <span className="w-12 h-1 mx-1 bg-red-400"></span>
                    <span className="w-12 h-1 mx-1 bg-red-300"></span>
                    <span className="w-12 h-1 mx-1 bg-red-200"></span>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <img src={affiliate}  alt="Affiliate Program banner"/>
            </div>
          </div>
          <div className="container mx-auto px-8 py-4 flex flex-col lg:flex-row items-center">           
          <div className="w-full lg:w-1/2">
                <img src={affiliate1}  alt="Affiliate Program banner"/>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start pt-8">
                <h1 className="text-center lg:text-left text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">Why Would You Choose Mamar Dukan? </h1>
                <p className="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae corporis distinctio hic accusamus voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae corporis distinctio hic accusamus voluptas.</p>
                <div className="mt-8 lg:mt-24 flex">
                    <span className="w-12 h-1 mx-1 bg-red-400"></span>
                    <span className="w-12 h-1 mx-1 bg-red-300"></span>
                    <span className="w-12 h-1 mx-1 bg-red-200"></span>
                </div>
            </div>
          </div>
          <div className="container mx-auto px-8 py-4 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start pb-8">
                <h1 className="text-center lg:text-left text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">Earn Money While Doing Things You Love </h1>
                <p className="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae corporis distinctio hic accusamus voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae corporis distinctio hic accusamus voluptas.</p>
                <div className="mt-8 lg:mt-24 flex">
                    <span className="w-12 h-1 mx-1 bg-red-400"></span>
                    <span className="w-12 h-1 mx-1 bg-red-300"></span>
                    <span className="w-12 h-1 mx-1 bg-red-200"></span>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <img src={affiliate2}  alt="Affiliate Program banner"/>
            </div>
          </div>
          <div className="container mx-auto px-8 py-4 flex flex-col lg:flex-row items-center">           
          <div className="w-full lg:w-1/2">
                <img src={affiliate}  alt="Affiliate Program banner"/>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start pt-8">
                <h1 className="text-center lg:text-left text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">Simplest Process To Get Involved </h1>
                <p className="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae corporis distinctio hic accusamus voluptas.</p>
                <div className="mt-8 lg:mt-24 flex">
                    <span className="w-12 h-1 mx-1 bg-red-400"></span>
                    <span className="w-12 h-1 mx-1 bg-red-300"></span>
                    <span className="w-12 h-1 mx-1 bg-red-200"></span>
                </div>
            </div>
          </div>
        </div>	

      <Footer />
    </>
  );
};

export default Affiliate;