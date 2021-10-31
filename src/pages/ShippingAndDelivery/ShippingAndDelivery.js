import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';

const ShippingAndDelivery = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
        <div className="bg-white">	
          <div className="w-full text-center justify-center item-center ">
              <h1 className="font-bold text-5xl text-gray-700 py-16">
              Shipping & Delivery
              </h1>
          </div>
        <div className="container mx-auto px-4">
          <div className="w-full md:w-10/12 mx-auto pt-8 pb-16 text-lg">
            <h1 className="font-semibold text-2xl md:text-3xl font-heading text-grey-500"> Shipping Costs</h1>
              <p className="mt-4 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare justo felis, nec lobortis augue luctus et. Sed nibh metus, posuere non elit nec, rutrum imperdiet justo. Cras ut nunc felis. Nunc rhoncus faucibus ultrices.</p>
              <div className="w-full my-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">Shipping Method	</th>
                        <th className="px-4 py-3">Estimated Delivery Time	</th>
                        <th className="px-4 py-3">Price</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 text-ms font-semibold border">Standard Shipping on orders under $100 USD	</td>
                        <td className="px-4 py-3 text-ms font-semibold border">5-8 business days	</td>
                        <td className="px-4 py-3 text-ms font-semibold border">$7.95 USD</td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 text-ms font-semibold border">Standard Shipping on orders $100+ USD		</td>
                        <td className="px-4 py-3 text-ms font-semibold border">5-8 business days	</td>
                        <td className="px-4 py-3 text-ms font-semibold border">FREE!</td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 text-ms font-semibold border">Express Shipping*	</td>
                        <td className="px-4 py-3 text-ms font-semibold border">2-3 business days	</td>
                        <td className="px-4 py-3 text-ms font-semibold border">$10 USD</td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 text-ms font-semibold border">Express Shipping on app orders $150+ USD*</td>
                        <td className="px-4 py-3 text-ms font-semibold border">2-3 business days	</td>
                        <td className="px-4 py-3 text-ms font-semibold border">FREE!</td>
                    </tr>
                    <tr className="text-gray-700">
                        <td className="px-4 py-3 text-ms font-semibold border">Overnight Shipping*</td>
                        <td className="px-4 py-3 text-ms font-semibold border">1-2 business days	</td>
                        <td className="px-4 py-3 text-ms font-semibold border">$20
                         USD</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
              <h1 className="mt-6 font-semibold text-2xl md:text-3xl font-heading text-grey-500"> Free Shipping Information</h1>
              <p className="mt-4 text-xl">Praesent ornare interdum gravida. Donec efficitur leo suscipit aliquet pellentesque. In quis purus et dui mollis vulputate. Aenean non faucibus felis. Phasellus non aliquet est, non dictum sem. In hac habitasse platea dictumst. Integer vehicula elit ac libero egestas ornare non sed dolor. Integer vulputate id est nec pulvinar. Cras nec sollicitudin lacus, quis sagittis diam. Donec porta libero ac lorem semper, eget porttitor quam fermentum. Ut tincidunt feugiat sem, nec aliquam mi tincidunt non.</p>
              <h1 className="mt-6 font-semibold text-2xl md:text-3xl font-heading text-grey-500">International Shipping</h1>
              <p className="mt-4 text-xl">Etiam accumsan leo sem, sit amet faucibus ex convallis fermentum. Nunc tristique, eros eget rutrum accumsan, dolor quam varius nisl, ut euismod arcu urna a lectus. Mauris at dapibus metus. Vestibulum ipsum lorem, dictum vitae sapien eget, rutrum rhoncus sapien. Vivamus a nisi ut risus porta ultricies. Etiam mollis massa odio, non eleifend leo ullamcorper in. Sed ultricies, magna id fermentum volutpat, lorem orci placerat mauris, et molestie ipsum mauris sed sapien. Aliquam nulla lorem, pretium ut interdum dapibus, suscipit at metus. Proin consequat euismod consequat. Aenean placerat turpis et pretium condimentum. Nunc hendrerit tellus semper suscipit dignissim. Nullam fringilla, sem nec volutpat tincidunt, ex eros congue diam, quis venenatis mauris urna et dolor. Vivamus aliquam euismod eros vel pulvinar. Cras arcu augue, rutrum nec velit sit amet, aliquet lobortis leo. Donec placerat, libero in blandit mattis, turpis nisl varius urna, ac pellentesque dui nisi sit amet dui.</p>
              <h1 className="mt-6 font-semibold text-2xl md:text-3xl font-heading text-grey-500">Shipping Status</h1>
              <p className="mt-4 text-xl">Etiam accumsan leo sem, sit amet faucibus ex convallis fermentum. Nunc tristique, eros eget rutrum accumsan, dolor quam varius nisl, ut euismod arcu urna a lectus. Mauris at dapibus metus.</p>
              <h1 className="mt-6 font-semibold text-2xl md:text-3xl font-heading text-grey-500"> Furniture and Oversized Items</h1>
              <p className="mt-4 text-xl">Etiam accumsan leo sem, sit amet faucibus ex convallis fermentum. Nunc tristique, eros eget rutrum accumsan, dolor quam varius nisl, ut euismod arcu urna a lectus. Mauris at dapibus metus.</p>
          </div>                
        </div>
        </div>
      <Footer />
    </>
  );
};

export default ShippingAndDelivery;