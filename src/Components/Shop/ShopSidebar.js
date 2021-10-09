import React, { useEffect, useState } from 'react';

const ShopSidebar = () => {


    const [product, setProduct] = useState([]);

    //Fetching Product.............................................
    useEffect(() => {
        fetch(`https://mamardukan.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    console.log(product);


    //Department unique Names
    let uniqDeptName = [];
    for (let i = 0; i < product.length; i++) {
        let element = product[i].department;
        let index = uniqDeptName.indexOf(element);
        if (index === -1) {
            uniqDeptName.push(element);
        }
    }
    console.log(uniqDeptName)


    //Department unique Names
    let uniqBrandName = [];
    for (let i = 0; i < product.length; i++) {
        let element = product[i].brand;
        let index = uniqBrandName.indexOf(element);
        if (index === -1) {
            uniqBrandName.push(element);
        }
    }
    console.log(uniqBrandName)


    const handleDepartmentClick =(dept)=>{
         console.log(dept);
    }



    return (
        <div>
            <div className="px-5 py-5 bg-blue-100 text-gray-800 rounded mb-8">
                <h1 className="text-lg mb-5">PRODUCT DEPARTMENT</h1>
                {
                    uniqDeptName.map(uniqDeptName =>
                        <p
                            className="cursor-pointer my-2"
                            onClick={() => handleDepartmentClick(uniqDeptName)}
                        >
                            {uniqDeptName}
                        </p>
                    )}
            </div>


            <div className="px-5 py-5 bg-blue-100 text-gray-800 rounded">
                <h1 className="text-lg mb-5">PRODUCT BRAND</h1>
                {uniqBrandName.map(uniqBrandName =>
                    <div className="flex items-center">
                        <input type="checkbox"
                            className="cursor-pointer w-4 h-4"
                            id={uniqBrandName}
                            name={uniqBrandName}
                            value={uniqBrandName}
                        />

                        <label for={uniqBrandName} className="px-2 cursor-pointer">
                            {uniqBrandName}
                        </label>
                        <br />
                    </div>
                )}
            </div>


            <div className="px-5 mt-8 py-5 bg-blue-100 text-gray-800 rounded">
                <h1 className="text-lg mb-5">BY PRICE</h1>
                <input type="range" name="" id="" min="0" Max="100000" />
            </div>


            <div className="px-5 mt-8 py-5 bg-blue-100 text-gray-800 rounded">
                <h1 className="text-lg mb-5">BY COLOR</h1>

                <input type="color"
                    className="cursor-pointer w-8 h-8 p-1 rounded-full mr-1 hover:bg-black"
                    id="red"
                    name="red"
                    value="#000000"
                    disabled
                />
                <input type="color"
                    className="cursor-pointer w-8 h-8 p-1 rounded-full hover:bg-red-600"
                    id="red"
                    name="red"
                    value="#FF0000"
                    disabled
                />
                <input type="color"
                    className="cursor-pointer w-8 h-8 p-1 rounded-full hover:bg-blue-700"
                    id="red"
                    name="red"
                    value="#0000FF"
                    disabled
                />
                <input type="color"
                    className="cursor-pointer w-8 h-8 p-1 rounded-full hover:bg-yellow-400"
                    id="red"
                    name="red"
                    value="#FFFF00"
                    disabled
                />
                <input type="color"
                    className="cursor-pointer w-8 h-8 p-1 rounded-full hover:bg-green-500"
                    id="red"
                    name="red"
                    value="#00FF00"
                    disabled
                />
            </div>


            <div className="px-5 mt-8 py-5 bg-blue-100 text-gray-800 rounded">
                <h1 className="text-lg mb-8">BY SIZE</h1>

                <div className="flex items-center">
                    <label
                        class="block text-gray-700 text-sm font-bold"
                        for="size"
                    >
                        Size:
                    </label>

                    <select className="mx-2 rounded w-full py-2 px-3 text-gray-700  focus:ring-2 focus:ring-blue-600"
                        name="size"
                        id="cars"
                    >
                        <option value="All">All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="XXL">XXXL</option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default ShopSidebar;
