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
                        <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare justo felis, nec lobortis augue luctus et. Sed nibh metus, posuere non elit nec, rutrum imperdiet justo. Cras ut nunc felis. Nunc rhoncus faucibus ultrices. Suspendisse ut consectetur nulla. Pellentesque mattis, ligula at pellentesque tempor, nisl elit porta lectus, eu bibendum arcu purus eget urna. Phasellus euismod at elit vel convallis. Nullam porttitor mauris risus, eget hendrerit nisl tincidunt vel. Phasellus at dolor dui. Aliquam commodo tellus dolor. Sed purus nunc, laoreet quis elementum at, elementum at nisl. Praesent ut rhoncus orci. Curabitur sit amet est non dolor porttitor facilisis. Nullam velit tortor, iaculis eget vehicula quis, sollicitudin id magna. Praesent ut rhoncus orci. Curabitur sit amet est non dolor porttitor facilisis. Nullam velit tortor, iaculis eget vehicula quis, sollicitudin id magna.</p>
                        <p className="mt-4">Praesent ornare interdum gravida. Donec efficitur leo suscipit aliquet pellentesque. In quis purus et dui mollis vulputate. Aenean non faucibus felis. Phasellus non aliquet est, non dictum sem. In hac habitasse platea dictumst. Integer vehicula elit ac libero egestas ornare non sed dolor. Integer vulputate id est nec pulvinar. Cras nec sollicitudin lacus, quis sagittis diam. Donec porta libero ac lorem semper, eget porttitor quam fermentum. Ut tincidunt feugiat sem, nec aliquam mi tincidunt non.</p>
                        <p className="mt-4">Etiam accumsan leo sem, sit amet faucibus ex convallis fermentum. Nunc tristique, eros eget rutrum accumsan, dolor quam varius nisl, ut euismod arcu urna a lectus. Mauris at dapibus metus. Vestibulum ipsum lorem, dictum vitae sapien eget, rutrum rhoncus sapien. Vivamus a nisi ut risus porta ultricies. Etiam mollis massa odio, non eleifend leo ullamcorper in. Sed ultricies, magna id fermentum volutpat, lorem orci placerat mauris, et molestie ipsum mauris sed sapien. Aliquam nulla lorem, pretium ut interdum dapibus, suscipit at metus. Proin consequat euismod consequat. Aenean placerat turpis et pretium condimentum. Nunc hendrerit tellus semper suscipit dignissim. Nullam fringilla, sem nec volutpat tincidunt, ex eros congue diam, quis venenatis mauris urna et dolor. Vivamus aliquam euismod eros vel pulvinar. Cras arcu augue, rutrum nec velit sit amet, aliquet lobortis leo. Donec placerat, libero in blandit mattis, turpis nisl varius urna, ac pellentesque dui nisi sit amet dui.Vivamus aliquam euismod eros vel pulvinar. Cras arcu augue, rutrum nec velit sit amet, aliquet lobortis leo. Donec placerat, libero in blandit mattis, turpis nisl varius urna, ac pellentesque dui nisi sit amet dui.</p>
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