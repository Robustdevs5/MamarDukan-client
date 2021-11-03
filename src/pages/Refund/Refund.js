import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar/Navbar";
import TopBar from "../../Components/TopBar/TopBar";

const Refund = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      <div className="w-full text-center justify-center item-center ">
        <h1 className="font-bold text-5xl text-gray-700 py-16">
          Return & Refund Policy
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="w-full md:w-10/12 mx-auto pt-8 pb-16 text-lg">
          <h1 className="font-semibold text-2xl md:text-3xl font-heading text-grey-500">
            1 : A user may return any product during the time of delivery, or
            within 7 days if{" "}
          </h1>
          <p className="mt-4 text-xl">
            1.1 : Product does not meet user’s expectation.{" "}
          </p>
          <p className="mt-4 text-xl">1.2 : Found damaged during delivery </p>
          <p className="mt-4 text-xl">
            1.3 : Have doubt about the product quality and quantity{" "}
          </p>
          <p className="mt-4 text-xl">
            1.4 : Received in an unhealthy/ unexpected condition{" "}
          </p>
          <p className="mt-4 text-xl">
            1.5 : Is not satisfied with the packaging{" "}
          </p>
          <p className="mt-4 text-xl">1.6 : Finds product unusable </p>
          <p className="mt-4 text-xl">
            {" "}
            [Note : We are continuously monitoring accounts of customers with
            excessive requests of returns and refunds. We take necessary steps
            to prevent this. ]{" "}
          </p>

          <h1 className="mt-5 font-semibold text-2xl md:text-3xl font-heading text-grey-500">
            2 : A user may return any unopened or defective up to 20% and less,
            item within 7 days of receiving the item. But following products may
            not be eligible for return or replacement{" "}
          </h1>
          <p className="mt-4 text-xl">
            2.1 : Damages due to misuse of product{" "}
          </p>
          <p className="mt-4 text-xl">
            2.2 : Incidental damage due to malfunctioning of product{" "}
          </p>
          <p className="mt-4 text-xl">
            2.3 : Any consumable item which has been used/installed{" "}
          </p>
          <p className="mt-4 text-xl">
            2.4 : Products with tampered or missing serial/UPC numbers{" "}
          </p>
          <p className="mt-4 text-xl">
            2.5 : Any damage/defect which are not covered under the
            manufacturer's warranty{" "}
          </p>
          <p className="mt-4 text-xl">
            2.6 : Any product that is returned without all original packaging
            and accessories, including the box, manufacturer's packaging<br></br> if any,
            and all other items originally included with the product/s
            delivered.{" "}
          </p>
          <p className="mt-4 text-xl">
            2.7 : Incidental damage due to malfunctioning of product{" "}
          </p>

          <h1 className="mt-5 font-semibold text-2xl md:text-3xl font-heading text-grey-500">
            3 : Refund Policy
          </h1>
          <p className="mt-4 text-xl">
            3.1 : Mamar Dukan tries its best to serve the users. But if under any
            circumstances, we fail to fulfill our commitment or to provide the
            service, we will notify you within 24 hours via phone/ text/ email.
            If the service, that Mamar Dukan fails to complete, requires any
            refund, it be done maximum within 7 Days after our acknowledgement.{" "}
          </p>
          <p className="mt-4 text-xl">3.2 : Found damaged during delivery </p>
          <p className="mt-4 text-xl">
            Refund requests will be processed under mentioned situation{" "}
          </p>
          <p className="mt-4 text-xl">
            1 : Received in an unhealthy/ unexpected condition{" "}
          </p>
          <p className="mt-4 text-xl">
            2 : Customer returns any product from a paid order{" "}
          </p>
          <p className="mt-4 text-xl">
            3 : Customer cancels a paid order before it has been dispatched{" "}
          </p>
        </div>
        </div>
      <Footer />
    </>
  );
};

export default Refund;
