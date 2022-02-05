import React, { useContext } from 'react';

//STYLES
import "./Navbar.scss";

import { Link, NavLink } from 'react-router-dom';
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlineLogout,
  MdOutlineMenu,
  MdClear,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import NavbarContext from '../../context/NavbarContext.jsx';

const Navbar = () => {

  const { nav, setNav } = useContext(NavbarContext);

  const NavUrl = ({url, icon, description}) => {
    const checkWindowSize = () => {
      if(window.innerWidth < 1024){
        setNav(!nav);
      }
    }
    return (
      <li className='li_navlink'>
        <NavLink to={`${url}`}
        onClick={() => checkWindowSize()}
          className={({isActive}) => (isActive ? 'active' : undefined)}
        >
          {icon}
          <span className={`description ${!nav ? 'display-none' : ''}`}>{description}</span>
        </NavLink>
      </li> 
    )   
  };  

  return <div className={`navbar_container ${nav ? 'navbar_mobile_active' : undefined}`}>
    <nav className={`${nav ? undefined : 'nav_small'}`}>
      <div 
        className={`logo`}
        onClick={() => setNav(!nav)}
      >
        { !nav && <MdOutlineMenu className='logo_icon'/> }
        { nav && <MdClear className='mobile_cancel_icon'/> }        
      </div>

      {/* Submenu */}
      {/* Get data from the API */}
      
      <ul className='menu_container'>
        {/* First category */}
        <span 
          className="categories"
          onClick={() => setNav(!nav)}
          >
          {nav ? "Pages" : <BsThreeDots />}
        </span>
        
        <NavUrl 
          url="/" 
          icon={<MdOutlineDashboard />}
          description="Dashboard"
          />
        <NavUrl 
          url="/product" 
          icon={<MdOutlineAnalytics />}
          description="Product"
          />
        <NavUrl 
          url="/report" 
          icon={<MdOutlineAnalytics />}
          description="Report"
          />

        {/* Second Category */}
        <span 
          className='categories second_category'
          onClick={() => setNav(!nav)}
        >
          {nav ? "More" : <BsThreeDots />}                          
        </span>
        <NavUrl 
            url="/setting" 
            icon={<MdOutlineAnalytics />}
            description="Settings"
          />
        <NavUrl 
            url="/help" 
            icon={<MdOutlineAnalytics />}
            description="Help and Support"
          />
      </ul>
      {/* Logout */}
      <div className="btn_logout"
            onClick={() => setNav(!nav)}
          >
            <MdOutlineLogout />
          </div>
    </nav>
    <div className={`${nav ? 'mobile_nav_background_active' : undefined}`}
      onClick={() => setNav(!nav)}
    >
    </div>
  </div>
}

export default Navbar;