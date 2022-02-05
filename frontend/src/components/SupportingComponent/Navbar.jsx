import React, { useState } from 'react';

//STYLES
import "./Navbar.scss";

import { NavLink } from 'react-router-dom';
import { VscDashboard } from 'react-icons/vsc';
const Navbar = () => {

  const [nav, setNav] = useState(false);

  return <div className="navbar_container">
    <nav>
      <div className='logo'>
        <VscDashboard className='logo_icon'/>
      </div>
    </nav>
  </div>
}

export default Navbar;