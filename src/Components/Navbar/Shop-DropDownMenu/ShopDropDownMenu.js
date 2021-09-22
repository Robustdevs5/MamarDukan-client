import React from 'react';
import AccessoriesSubMenu from './Accessories';
import BrandsSubMenu from './Brands';
import ClothSubMenu from './Cloth';
import NewArrivalsSubMenu from './NewArrivals';

const ShopDropDownMenu = () => {
    return (
        <div className='inset-36 absolute z-50'>
            <div className="bg-blue-100  pt-5 pb-8 px-20 space-y-10 grid grid-cols-4 mt-0">
                <ClothSubMenu/>
                <AccessoriesSubMenu/>
                <BrandsSubMenu/>
                <NewArrivalsSubMenu/>           
            </div>
        </div>
    );
};

export default ShopDropDownMenu;