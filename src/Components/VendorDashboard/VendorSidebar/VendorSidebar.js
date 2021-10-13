import React from 'react';
import SubMenu from './SubMenu';
import { SidebarData } from './VendorSidebarData';

const VendorSidebar = () => {
    return (
      <div style={{height:'100vh', backgroundColor: 'rgb(31, 41, 55)'}} >
      <div className="w-64 absolute sm:relative bg-gray-800 shadow flex-col justify-between sm:flex">
          <div className="h-16 w-full flex items-center">
              <h3 className="text-white text-2xl cursor-pointer">Vendor Dashboard</h3>
          </div>
          {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
      </div>
      </div>
    );
};

export default VendorSidebar;