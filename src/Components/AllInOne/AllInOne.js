import React,{useState} from 'react'
import useProducts from '../../hooks/useProducts';
import {Accessories} from '../Navbar/Menu/MenuItems';


export default function AllInOne() {
    
    const [products, setProducts] = useProducts(); 
     const [pd, setPd] = useState() 
    console.log('useProducts', products)
    console.log('pd', pd)
    
    // const shuffle = async a => {
    //     let test;
    //     for (let i = a.products.length; i; i--) {
    //         let j = Math.floor(Math.random() * i);
    //         let k= [a[i - 1], a[j]] = [a[j], a[i - 1]];
            
    //         console.log('j', j)
    //         console.log('k', k)
    //         // setPd(k)
    //         let test
    //     }
        
    // console.log('a', a.products.length)
    // // setPd(k)
    // }
    
    // function shuffleArray(array) {
    // const shuffleArray = async array => {
    //     let i ;
    //     i = await array.length - 1;
    //         console.log('i', i)
    //     for (; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       const temp = array[i];
    //       array[i] = array[j];
    //       array[j] = temp;
    //     }
    //     return array.slice(0,5);
    //   }

    // const first10 = shuffleArray(products.products);
    
    // console.log('first10', first10)
    
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 
                <div className="lg:text-center">
                    <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">A better way to buy </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    All in one platform
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0  md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
                        {Accessories.map((feature, index) => (
                        <div key={index} className="relative  md:border hover:border-red-600 shadow rounded p-2">
                            <dt>
                                <div className="absolute overflow-hidden flex items-center justify-center h-24 w-20 rounded-md bg-blue-500 text-white">
                                    <img className='w-full h-full transform  hover:scale-150 ' src= {feature.Img} alt=''/>
                                </div>
                                <p className="ml-16 text-lg pl-10 leading-6 font-medium text-gray-900 hover:text-blue-800">{feature.title}</p>
                            </dt>
                            <dd className="mt-2 ml-16 pl-10 text-base text-gray-500 ">{feature.description}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
