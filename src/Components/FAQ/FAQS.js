import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar/Navbar";
import TopBar from "../TopBar/TopBar";
import { FAQs } from "./Data";

const FAQS = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      <div className="w-full text-center justify-center item-center ">
        <h1 className="font-bold text-5xl text-gray-700 py-16">
        FAQS        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="w-full md:w-10/12 mx-auto pt-8 pb-16 text-lg">
          {
              FAQs.map((item) => {
                  return(
                  <div  item={item} >
                <h1 className="my-10 font-semibold text-2xl md:text-3xl font-heading text-grey-500">
                {item.Title ? item.Title : ""}
                </h1>
                <p className="font-bold mt-4 text-xl">
                {item.H1}
             </p>
                <p className="mt-4 text-xl">{item.Pteg}
              </p>
              </div>)
              })
          }
                
         </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQS;
