import React from 'react';
import TopBar from '../TopBar/TopBar';
import Navbar from '../Navbar/Navbar/Navbar'
import {FAQs} from './Data'
import './FAQ.css'
import Footer from '../Footer/Footer'
import FooterCatagory from '../Footer/FooterCatagory';

const FAQS = () => {
    return (
        <div >
            <TopBar />
            <Navbar /><div className="FAQ">
            <h1 className="text-center font-extrabold text-5xl pt-7 pb-7">Frequantly Ask Question</h1>
            {
                FAQs.map ((item, index) =><div className="Box p-6" key={index} item={item}>
                    <h1 className="w-1/3 mx-auto "> {item.Title}</h1>
                    <h3 className="w-1/3 mx-auto "> {item.H1}</h3>
                    <p className="w-1/3 mx-auto "> {item.Pteg}</p>

                </div>)
            }
            </div>
            <FooterCatagory />
            <Footer />
        </div>
    );
};

export default FAQS;