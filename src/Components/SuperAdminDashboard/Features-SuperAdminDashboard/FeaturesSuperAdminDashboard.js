import React, { useEffect, useState } from 'react';
import '../Style/style-superadmindashboard.css'
const FeaturesSuperAdminDashboard = () => {
    const [categories, setCategories] = useState([]);
    //Fetching Product.............................................
    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setCategories(data.products))
    }, [])
    console.log(categories);

    return (
        <div className='w-full font-medium grid grid-cols-1 md:grid-cols-3 mx-4 mt-20 tracking-tight '>
            <div className="p-5">
                
               <p className="font-bold border-l-4 tracking-tight border-red-600 p-2 text-white" style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
               Top Categories
                </p>
                <div className="h-96 scrollBar">
                {
                    categories.map((item, index) => (
                        <div key={index} item={item} className='py-2 px-5 shadow-lg'  >
                            {item.category}
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="p-5">
            <p className=" font-bold border-l-4 tracking-tight border-red-600 p-2 text-white" style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
            Best Products
                </p>
                {
                    categories.map((items, index) => {
                        <div key={index} items={items} className='py-2 px-5 shadow-lg'  >
                            {items.name}
                        </div>
                    })
                }
                <div className='py-2 px-5 shadow-lg'  >
                     Best Products
                  </div>
            </div>
            <div className="p-5">
            <p className=" font-bold border-l-4 tracking-tight border-red-600 p-2 text-white" style={{background: `linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788)` }}>
            Top Sellers
                </p>
                <div className='py-2 px-5 shadow-lg'>
                   Top Sellers
                  </div>
            </div>
        </div>
    );
};

export default FeaturesSuperAdminDashboard;