import React, { useContext, useState } from 'react';

import { MdOutlineMenu } from "react-icons/md";
import UserProfile from './UserProfile.jsx';
import './TopNavbar.scss';
import NavbarContext from '../../context/NavbarContext.jsx';
import Notifications from './Notification.jsx';

const TopNavbar = () => {
  const { nav, setNav } = useContext(NavbarContext);
  
  return(
    <React.Fragment>
      <div className='container'>
        <div className="burger_container"
        onClick={() => setNav(!nav)}
        >
          <MdOutlineMenu />
        </div>

        <div className="top_container">
          <div className="system_name">
            System name
          </div>
          <div className='actions'>
            <Notifications />
          </div>
        </div>
        <UserProfile />
      </div>
      <div className="top_menu_container">
        
      </div>
    </React.Fragment>
  )
}

export default TopNavbar;