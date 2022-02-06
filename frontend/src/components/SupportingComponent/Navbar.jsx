import React, { useContext } from 'react';

//STYLES
import "./Navbar.scss";

import { Link, NavLink, useLocation } from 'react-router-dom';
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

  const DASHBOARD = process.env.REACT_APP_DASHBOARD;
  const DOMAIN = process.env.REACT_APP_DOMAIN;
  const { nav, setNav } = useContext(NavbarContext);
  let location = window.location.href;
  console.log(`location == DOMAIN ${location} == ${DOMAIN}`)
  if(location == DOMAIN){
    location += 'dashboard/';    
  }

  const NavUrl = ({url, icon, description}) => {
    const checkWindowSize = () => {
      if(window.innerWidth < 1024){
        setNav(!nav);
      }
    }
    console.log(`url: ${url}. location: ${location}`);
    return (
      <li className='li_navlink'>
        { location.includes(url) && 
          <a
          onClick={() => checkWindowSize()}
            className={location.includes(url) ? 'active' : ''}
          >
            {icon}
            <span className={`description ${!nav ? 'display-none' : ''}`}>{description}</span>
          </a>
        }
        {
          !location.includes(url) && 
          <a href={`${url}`}
          onClick={() => checkWindowSize()}
            className={location.includes(url) ? 'active' : ''}
          >
            {icon}
            <span className={`description ${!nav ? 'display-none' : ''}`}>{description}</span>
          </a>
        }
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
          url={`http://localhost:3001/dashboard`} 
          icon={<MdOutlineDashboard />}
          description="Dashboard"
          />
        <NavUrl 
          url={`http://localhost:3003/product`} 
          icon={<MdOutlineAnalytics />}
          description="Product"
          />
        <NavUrl 
          url={`http://localhost:3002/report`} 
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