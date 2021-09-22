import React from 'react';
import BrandsSubMenu from './Brands';
import ClothSubMenu from './Cloth';
import NewArrivalsSubMenu from './NewArrivals';

const menDropDownMenu = () => {
    return (
        <div className='inset-36 absolute z-50'>
            <div className="bg-blue-50  pt-5 pb-8 px-20 space-y-10 flex mt-0">
                
            <NewArrivalsSubMenu/> 
                <ClothSubMenu/>
                <BrandsSubMenu/>          
            </div>
        </div>
    );
};

export default menDropDownMenu;