import React from 'react';
import TopBar from '../TopBar/TopBar';
import Navbar from '../Navbar/Navbar/Navbar'
import { FAQs } from './Data'
import './FAQ.css'
import Footer from '../Footer/Footer'
import FooterCatagory from '../Footer/FooterCatagory';
import Newsletter from '../Newsletter/Newsletter';



const FAQS = () => {
    return (
        <div >
            <TopBar />
            <Navbar /><div className="FAQ">
<<<<<<< HEAD
            <h1 className="text-center font-extrabold text-5xl pt-7 pb-7">Frequantly Ask Question</h1>
            {
                FAQs.map ((item, index) =><div className="Box p-6 grid grid-cols-3 md:grid-cols-1" key={index} item={item}>
                    <h1 className="w-1/3 mx-auto text-2xl font-bold text-yellow-500"> {item.Title}</h1>
                    <h3 className="w-1/3 mx-auto font-bold"> {item.H1}</h3>
                    <p className="w-1/3 mx-auto "> {item.Pteg}</p>
=======
                <h1 className="text-center font-extrabold text-5xl pt-7 pb-7">Frequantly Ask Question</h1>
                {
                    FAQs.map((item, index) => <div className="Box p-6" key={index} item={item}>
                        <h1 className="w-1/3 mx-auto "> {item.Title}</h1>
                        <h3 className="w-1/3 mx-auto "> {item.H1}</h3>
                        <p className="w-1/3 mx-auto "> {item.Pteg}</p>
>>>>>>> 3adb3ceac38e60c51fc1a9b097d907c7f26a87a2

                    </div>)
                }
            </div>
            <FooterCatagory />
            <Newsletter />
            <Footer />
        </div>
    );
};
export default FAQS;