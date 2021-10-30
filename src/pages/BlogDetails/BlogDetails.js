import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar/Navbar';
import TopBar from '../../Components/TopBar/TopBar';
import aboutImg from '../../images/about-img.jpg';

const BlogDetails = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

        <main className="relative container mx-auto bg-white">
        <div className="w-full mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
            <img className="w-full h-full inset-0 object-cover" src={aboutImg} alt="Blog Title" />
            </div>
        </div>
        <div class="px-6 py-8">
        <div class="container flex justify-between mx-auto">
            <div class="w-full lg:w-8/12">    
            <article className="">
                <h1 className="text-2xl font-bold">Music Event Party, Awards 2021. Exclusive after party only for special guests.</h1>
                <h2 className="mt-2 text-sm text-gray-500">Admin, 28 November 2021</h2>

                <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare justo felis, nec lobortis augue luctus et. Sed nibh metus, posuere non elit nec, rutrum imperdiet justo. Cras ut nunc felis. Nunc rhoncus faucibus ultrices. Suspendisse ut consectetur nulla. Pellentesque mattis, ligula at pellentesque tempor, nisl elit porta lectus, eu bibendum arcu purus eget urna. Phasellus euismod at elit vel convallis. Nullam porttitor mauris risus, eget hendrerit nisl tincidunt vel. Phasellus at dolor dui. Aliquam commodo tellus dolor. Sed purus nunc, laoreet quis elementum at, elementum at nisl. Praesent ut rhoncus orci. Curabitur sit amet est non dolor porttitor facilisis. Nullam velit tortor, iaculis eget vehicula quis, sollicitudin id magna.</p>
                <p className="mt-4">Praesent ornare interdum gravida. Donec efficitur leo suscipit aliquet pellentesque. In quis purus et dui mollis vulputate. Aenean non faucibus felis. Phasellus non aliquet est, non dictum sem. In hac habitasse platea dictumst. Integer vehicula elit ac libero egestas ornare non sed dolor. Integer vulputate id est nec pulvinar. Cras nec sollicitudin lacus, quis sagittis diam. Donec porta libero ac lorem semper, eget porttitor quam fermentum. Ut tincidunt feugiat sem, nec aliquam mi tincidunt non.</p>
                <p className="mt-4">Etiam accumsan leo sem, sit amet faucibus ex convallis fermentum. Nunc tristique, eros eget rutrum accumsan, dolor quam varius nisl, ut euismod arcu urna a lectus. Mauris at dapibus metus. Vestibulum ipsum lorem, dictum vitae sapien eget, rutrum rhoncus sapien. Vivamus a nisi ut risus porta ultricies. Etiam mollis massa odio, non eleifend leo ullamcorper in. Sed ultricies, magna id fermentum volutpat, lorem orci placerat mauris, et molestie ipsum mauris sed sapien. Aliquam nulla lorem, pretium ut interdum dapibus, suscipit at metus. Proin consequat euismod consequat. Aenean placerat turpis et pretium condimentum. Nunc hendrerit tellus semper suscipit dignissim. Nullam fringilla, sem nec volutpat tincidunt, ex eros congue diam, quis venenatis mauris urna et dolor. Vivamus aliquam euismod eros vel pulvinar. Cras arcu augue, rutrum nec velit sit amet, aliquet lobortis leo. Donec placerat, libero in blandit mattis, turpis nisl varius urna, ac pellentesque dui nisi sit amet dui.</p>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel sapien nisi. Sed molestie quis odio ut facilisis. Duis porttitor turpis at sollicitudin ornare. Aenean vitae nulla justo. In egestas consequat sem, dapibus gravida velit. Nullam dictum, ligula vel porttitor vestibulum, est enim lobortis erat, eget rutrum nunc ex at mauris. Nunc nec laoreet ipsum. Sed vel est a eros sagittis vulputate. Proin cursus ut mauris vel commodo. Sed non sapien metus.</p>
                <p className="mt-4">Nunc aliquet maximus ante, quis malesuada orci sagittis vel. Nunc non porta purus, ultricies rhoncus nulla. Aenean laoreet tortor nec risus fringilla posuere. Quisque eu lacinia dolor, in luctus leo. Aenean non turpis ac ipsum fermentum faucibus. Pellentesque fringilla ante a ex mollis, non scelerisque orci tempor. Sed non dapibus dolor, ac euismod turpis. Integer eu quam nibh. Ut suscipit lacinia sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas rutrum vestibulum mauris, sed mattis tellus maximus in. Nullam imperdiet enim nec nisi euismod, ut accumsan odio gravida. Nunc eu augue a dui porta fringilla sed at ex. Cras pellentesque suscipit porttitor. Nunc non ullamcorper nibh. Praesent purus libero, congue non laoreet sed, dapibus vel turpis.</p>
            </article>
        </div>
        <div class="hidden w-4/12 -mx-8 lg:block">
                <div class="px-8">
                <h1 class="mb-4 text-xl font-bold text-gray-700">Authors</h1>
                    <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                        <ul class="-mx-4">
                            <li class="flex items-center"><img
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full" />
                                <p><a href="#" class="mx-1 font-bold text-gray-700 hover:underline">Alex John</a><span
                                        class="text-sm font-light text-gray-700">Created 23 Posts</span></p>
                            </li>
                            <li class="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full" />
                                <p><a href="#" class="mx-1 font-bold text-gray-700 hover:underline">Jane Doe</a><span
                                        class="text-sm font-light text-gray-700">Created 52 Posts</span></p>
                            </li>
                            <li class="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full" />
                                <p><a href="#" class="mx-1 font-bold text-gray-700 hover:underline">Lisa Way</a><span
                                        class="text-sm font-light text-gray-700">Created 73 Posts</span></p>
                            </li>
                            <li class="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full" />
                                <p><a href="#" class="mx-1 font-bold text-gray-700 hover:underline">Steve Matt</a><span
                                        class="text-sm font-light text-gray-700">Created 245 Posts</span></p>
                            </li>
                            <li class="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full" />
                                <p><a href="#" class="mx-1 font-bold text-gray-700 hover:underline">Khatab
                                        Wedaa</a><span class="text-sm font-light text-gray-700">Created 332 Posts</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="px-8 mt-10">
                    <h1 class="mb-4 text-xl font-bold text-gray-700">Categories</h1>
                    <div class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <ul>
                            <li><a href="#" class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    How To</a></li>
                            <li class="mt-2"><a href="#"
                                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Dashboard</a></li>
                            <li class="mt-2"><a href="#"
                                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Vendor</a>
                            </li>
                            <li class="mt-2"><a href="#"
                                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Design</a></li>
                            <li class="flex items-center mt-2"><a href="#"
                                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Product</a></li>
                            <li class="flex items-center mt-2"><a href="#"
                                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Discount</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="px-8 mt-10">
                    <h1 class="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
                    <div class="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div class="mt-4"><a href="#" class="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                                <div class="mt-4"><a href="#" class="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                                <div class="mt-4"><a href="#" class="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                                <div class="mt-4"><a href="#" class="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                                <div class="mt-4"><a href="#" class="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                    </div>
                </div>
                </div>
        </div>
        </div>
        
        </main>
      <Footer />
    </>
  );
};

export default BlogDetails;