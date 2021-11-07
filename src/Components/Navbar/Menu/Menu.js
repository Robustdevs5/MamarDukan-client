import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopDropDownMenu from "../Shop-DropDownMenu/ShopDropDownMenu";
import { Menu } from "./MenuItems";
import Logo from "../Logo/Logo";
import SocialMedia from "../SocialMedia/SocialMedia";
import WomenDropDownMenu from "../women-DropDownMenu/womenDropDownMenu";
import MenDropDownMenu from "../Men-DropDownMenu/MenDropDownMenu";
import { FaBars, FaCaretDown, FaShoppingBag, FaTimes } from "react-icons/fa";
import { userContext } from "../../../App";

const NavbarSection = ({ toggle, closeMobileMenu, isOpen }) => {
  const [dropDown, setDropDown] = useState(false);
  const [womenDropDown, setWomenDropDown] = useState(false);
  const [menDropDown, setMenDropDown] = useState(false);

  const { user, setUser } = useContext(userContext);
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser)
      }
    }, []);

  return (
    <Fragment>
      <nav
        className="capitalize  flex justify-between items-center h-16  shadow-sm font-sans"
        role="navigation"
      >
        <Logo closeMobileMenu={closeMobileMenu} />

        {/*============== Toogle menu ===========*/}
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}

        </div>

                <ul className='text-white text-center md:flex hidden'>
                    {
                        Menu.map((item, index) => {
                            
                            if (item.title === "Shop"){
                                return (
                                <li key={index} 
                                    className=' flex item-center'
                                    onMouseEnter={() => setDropDown(true)}
                                    onMouseLeave={() => setDropDown(false)}>
                                        
                                    <div className='py-5'>
                                    <Link to={item.path} className={item.class}>
                                        {item.title}
                                        <FaCaretDown
                                          className="ml-3 text-white"
                                        />                                    
                                    </Link>
                                    </div>
                                    {dropDown && <ShopDropDownMenu/>}
                                </li>
                                );
                            }

            if (item.title === "women") {
              return (
                <li
                  key={index}
                  className=" flex item-center"
                  onMouseEnter={() => setWomenDropDown(true)}
                  onMouseLeave={() => setWomenDropDown(false)}
                >
                  <div className="py-5">
                    <Link to={item.path} className={item.class}>
                      {item.title}
                      <FaCaretDown
                        className="ml-3 text-white"
                      />
                    </Link>
                  </div>
                  {womenDropDown && <WomenDropDownMenu />}
                </li>
              );
            }

            if (item.title === "men") {
              return (
                <li
                  key={index}
                  className=" flex item-center"
                  onMouseEnter={() => setMenDropDown(true)}
                  onMouseLeave={() => setMenDropDown(false)}
                >
                  <div className="py-5">
                    <Link to={item.path} className={item.class}>
                      {item.title}
                      <FaCaretDown
                        className="ml-3 text-white"
                      />
                    </Link>
                  </div>
                  {menDropDown && <MenDropDownMenu />}
                </li>
              );
            }

            return (
              <li key={index} className="flex items-center ">
                <Link to={item.path} className={item.class}>
                  {item.title} 
                </Link>
              </li>
              
            );
          })}
          <li className="flex items-center ">
            {
              user.role === "user" &&  <Link to='/user/dashboard' className="py-2  px-3 font-medium hover:bg-red-700 duration-500 hover:text-white rounded-lg">
                    Dashboard
                </Link>
            }
            {
              user.role === "vendor" &&  <Link to='/vendor/dashboard/overview' className="py-2  px-3 font-medium hover:bg-red-700 duration-500 hover:text-white rounded-lg">
                    Dashboard
                </Link>
            }
            {
              user.role === "admin" &&  <Link to='/super-admin/dashboard/overview' className="py-2  px-3 font-medium hover:bg-red-700 duration-500 hover:text-white rounded-lg">
                    Dashboard
                </Link>
            }
            {
              user.role === "superadmin" &&  <Link to='/super-admin/dashboard/overview' className="py-2  px-3 font-medium hover:bg-red-700 duration-500 hover:text-white rounded-lg">
                    Dashboard
                </Link>
            }
          </li>
        </ul>

        <SocialMedia />
      </nav>
    </Fragment>
  );
};

export default NavbarSection;
