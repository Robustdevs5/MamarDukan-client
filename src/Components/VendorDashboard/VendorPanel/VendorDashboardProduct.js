import React, { useEffect, useState } from 'react';
import { BsStarHalf } from 'react-icons/bs';
import star from '../../../images/5star.png';




const VendorDashboardProduct = () => {
    const [categories, setCategories] = useState([]);
    //Fetching Product.............................................
    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setCategories(data.products))
    }, [])
    console.log(categories);

    return (
        <div className='w-full font-medium grid grid-cols-1 md:grid-cols-3 mx-4 mt-30 tracking-tight '>
            <div className="md:pr-5 py-5">
                
                <p className="font-bold border-l-4 tracking-tight border-red-600 p-2 text-white" style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
                Top Products
                 </p>
                 <div className="h-96 scrollBar">
                 {
                     categories.map((item, index) => (
                         <div key={index} item={item} className='py-2 px-5 shadow-lg flex justify-between hover:bg-gray-400'  >
                             <div className='h-10'>
                                  <img  className="rounded cursor-pointer h-full w-full"
                                     src={item.img} alt="Best Products" />
                             </div>
                             <div>
                                 <p>{item.name}</p>
                                 <img src={star} style={{ width: '60px', height: '15px' }} alt="" />
                             </div>
                             <div>
                                 <small>520 sales</small>
                             </div>
                         </div>
                     ))
                 }
                 </div>
             </div>

             <div className="md:px-5 py-5">
                
                <p className="font-bold border-l-4 tracking-tight border-red-600 p-2 text-white" style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
                Top User
                 </p>
                 <div className="h-96 scrollBar">
                 {
                     categories.map((item, index) => (
                         <div key={index} item={item} className='py-2 px-5 shadow-lg flex justify-between hover:bg-gray-400'  >
                             <div className='h-10'>
                                  <img  className="rounded cursor-pointer h-full w-full"
                                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXP2GSt89YvrkgbiSgJyzjue-GlHtCot2jg&usqp=CAU' alt="Best Products" />
                             </div>
                             <div>
                                 <p>{item.multiVendorSeller.sellerName}</p>
                                 <small>Seller ID #94256</small>
                             </div>
                             <div className='flex items-center text-yellow-600'>
                                 <p>4.5</p>
                                 <small><BsStarHalf/></small>
                             </div>
                         </div>
                     ))
                 }
                 </div>
             </div>
            
            <div className="md:px-5 py-5">
                
               <p className="font-bold border-l-4 tracking-tight border-red-600 p-2 text-white" style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
               Recent Products
                </p>
                <div className="h-96 scrollBar">
                {
                    categories.map((item, index) => (
                        <div key={index} item={item} className='py-2 px-5 shadow-lg flex justify-between hover:bg-gray-400'  >
                            <div className='h-10'>
                                 <img  className="rounded cursor-pointer h-full w-full"
                                    src={item.img} alt="Best Products" />
                            </div>
                            <div>
                                <p>{item.name}</p>
                                <img src={star} style={{ width: '60px', height: '15px' }} alt="" />
                            </div>
                            <div>
                                <small>520 sales</small>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            
            

        </div>
    );
};

export default VendorDashboardProduct;